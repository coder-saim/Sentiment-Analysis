import React, { useState } from 'react';
import GaugeChart from '../components/GaugeChart';
import Loader from '../components/Loader';
import light_background from '../assets/light_background.png';

export default function Home() {
  const [language, setLanguage] = useState('English');
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState('Neutral');
  const [score, setScore] = useState(0);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setText('');
    setSentiment('Neutral');
    setScore(0);
  };

  const handleAnalyze = async () => {
    setLoading(true);
    const url =
      language === 'English'
        ? 'http://127.0.0.1:8000/sentiments/en'
        : 'http://127.0.0.1:8000/sentiments/bn';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        const data = await response.json();
        setSentiment(data.Prediction);
        setScore(data.Score);
      } else {
        console.error('Failed to fetch sentiment');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className='w-full relative flex justify-center pt-14 pb-16'
      style={{
        backgroundImage: `url(${light_background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='flex flex-col items-center w-full max-w-6xl'>
        {/* Headline */}
        <h1 className='font-bold text-4xl text-center text-gray-800 mb-12'>
          Check your sentiment score instantly
        </h1>
        
        {/* Content section with textarea and gauge */}
        <div className='flex justify-center w-full'>
          <section className='w-[640px] bg-white bg-opacity-90 rounded-xl shadow-lg'>
            <div className='bg-white bg-opacity-90 text-lg flex font-semibold rounded-t-lg'>
              <div className='pl-6 pr-3 py-3'>Language :</div>
              <button
                onClick={() => changeLanguage('English')}
                className={`py-3 px-3 border-b-2 ${
                  language === 'English'
                    ? 'text-teal-600 border-teal-600'
                    : 'text-gray-500 border-white hover:border-gray-600'
                }`}
              >
                English
              </button>
              <button
                onClick={() => changeLanguage('Bengali')}
                className={`py-3 px-3 border-b-2 ${
                  language === 'Bengali'
                    ? 'text-teal-600 border-teal-600'
                    : 'text-gray-500 border-white hover:border-gray-600'
                }`}
              >
                Bengali
              </button>
            </div>
            <textarea
              className='w-full py-4 px-6 text-lg border-t-2 h-60 resize-none align-top'
              placeholder='Enter your text here'
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <div className='flex justify-end border-t-2 py-2 pr-2'>
              {!loading ? (
                <button
                  onClick={handleAnalyze}
                  className='bg-teal-600 text-lg text-white font-semibold rounded-3xl py-1 w-28 text-center h-10'
                >
                  Analyze
                </button>
              ) : (
                <Loader />
              )}
            </div>
          </section>

          {/* Gauge Chart */}
          <div className='w-[420px] ml-8'>
            <GaugeChart score={score} />
            <h1 className='font-bold ml-16 text-3xl mt-2 text-center tracking-wide'>
              Sentiment : {sentiment}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}