from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.ai_model import translate_bn_to_en
from app.schemas import TextInput
from textblob import TextBlob



router = APIRouter(prefix="/sentiments", tags=["Sentiment Analysis"])

@router.post("/en")
def sentiment_predictions(inputText: TextInput):
    predictions = TextBlob(inputText.text)
    if predictions.polarity>0:
        return {
                'Prediction': 'Positive',
                'Score': predictions.polarity
               }
    elif predictions.polarity<0:
        return {
                'Prediction': 'Negative',
                'Score': predictions.polarity
               }
    elif predictions.polarity==0:
        return {
                'Prediction': 'Neutral',
                'Score': predictions.polarity
               }
    else: return {'Oops! Some went wrong!'}



@router.post("/bn")
def sentiment_predictions(inputText: TextInput):
    text = translate_bn_to_en(inputText.text)
    predictions = TextBlob(text)
    if predictions.polarity>0:
        return {
                'Prediction': 'Positive',
                'Score': predictions.polarity
               }
    elif predictions.polarity<0:
        return {
                'Prediction': 'Negative',
                'Score': predictions.polarity
               }
    elif predictions.polarity==0:
        return {
                'Prediction': 'Neutral',
                'Score': predictions.polarity
               }
    else: return {'Oops! Some went wrong!'} 

 
