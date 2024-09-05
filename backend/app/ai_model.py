import os
from transformers import MarianMTModel, MarianTokenizer
from textblob import TextBlob


text = "The meeting is scheduled for 3 PM tomorrow."
blob = TextBlob(text)
sentiment = blob.sentiment
model_directory = os.path.abspath('./app/bn-en-translation-model')  


def getting_ai_model():
    model_name = 'Helsinki-NLP/opus-mt-bn-en'
    tokenizer = MarianTokenizer.from_pretrained(model_name)
    model = MarianMTModel.from_pretrained(model_name)

    save_directory = model_directory 
    model.save_pretrained(save_directory)
    tokenizer.save_pretrained(save_directory)  



def translate_bn_to_en(text):
    model = MarianMTModel.from_pretrained(model_directory)
    tokenizer = MarianTokenizer.from_pretrained(model_directory)

    translated = model.generate(**tokenizer(text, return_tensors="pt", padding=True))
    translated_text = [tokenizer.decode(t, skip_special_tokens=True) for t in translated]
    return translated_text[0]


# val = translate_bn_to_en("এই আবহাওয়া ভয়ানক। আমি চাই বৃষ্টি থামবে।")
# print(val)