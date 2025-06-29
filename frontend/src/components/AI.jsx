import React, { useState } from 'react';
import GaugeChart from '../components/GaugeChart';
import Loader from '../components/Loader';
import light_background from '../assets/light_background.png';
import dark_background from '../assets/dark_background.png';
import { useTheme } from '../contexts/ThemeContext';

export default function AI() {
  const [language, setLanguage] = useState('English');
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState('Neutral');
  const [score, setScore] = useState(0);
  const { theme } = useTheme();

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setText('');
    setSentiment('Neutral');
    setScore(0);
  };

  const baseUrl = 'https://sentiment-backend-latest-r2tn.onrender.com';

  const handleAnalyze = async () => {
    setLoading(true);
    const url =
      language === 'English'
        ? `${baseUrl}/sentiments/en`
        : `${baseUrl}/sentiments/bn`;

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
      id="get-started"
      className='w-full relative flex justify-center pt-8 md:pt-14 pb-8 md:pb-16 px-4'
      style={{
        backgroundImage: `url(${theme === 'dark' ? dark_background : light_background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='flex flex-col items-center w-full max-w-7xl'>
        <h1 className='font-bold text-2xl md:text-4xl text-center text-gray-600 dark:text-gray-300 mb-8 md:mb-12 transition-colors duration-300'>
          Check your sentiment score instantly
        </h1>
        <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start w-full space-y-6 lg:space-y-0 lg:space-x-8'>
          <section className='w-full max-w-2xl lg:w-[640px] bg-white dark:bg-gray-800 bg-opacity-95 dark:bg-opacity-95 rounded-xl shadow-lg transition-colors duration-300'>
            <div className='bg-white dark:bg-gray-800 bg-opacity-95 dark:bg-opacity-95 text-base md:text-lg flex font-semibold rounded-t-lg transition-colors duration-300'>
              <div className='pl-4 md:pl-6 pr-3 py-3 text-gray-700 dark:text-gray-300'>Language :</div>
              <button
                onClick={() => changeLanguage('English')}
                className={`py-3 px-3 border-b-2 transition-colors duration-200 ${
                  language === 'English'
                    ? 'text-teal-600 dark:text-teal-400 border-teal-600 dark:border-teal-400'
                    : 'text-gray-500 dark:text-gray-400 border-white dark:border-gray-800 hover:border-gray-600 dark:hover:border-gray-500'
                }`}
              >
                English
              </button>
              <button
                onClick={() => changeLanguage('Bengali')}
                className={`py-3 px-3 border-b-2 transition-colors duration-200 ${
                  language === 'Bengali'
                    ? 'text-teal-600 dark:text-teal-400 border-teal-600 dark:border-teal-400'
                    : 'text-gray-500 dark:text-gray-400 border-white dark:border-gray-800 hover:border-gray-600 dark:hover:border-gray-500'
                }`}
              >
                Bengali
              </button>
            </div>
            <textarea
              className='w-full py-4 px-4 md:px-6 text-base md:text-lg border-t-2 border-gray-200 dark:border-gray-600 h-48 md:h-60 resize-none align-top bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300'
              placeholder='Enter your text here'
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <div className='flex justify-end border-t-2 border-gray-200 dark:border-gray-600 py-2 pr-2 bg-white dark:bg-gray-800 rounded-b-xl transition-colors duration-300'>
              {!loading ? (
                <button
                  onClick={handleAnalyze}
                  className='bg-teal-600 dark:bg-teal-500 hover:bg-teal-700 dark:hover:bg-teal-600 text-base md:text-lg text-white font-semibold rounded-3xl py-1 w-24 md:w-28 text-center h-10 transition-colors duration-200'
                >
                  Analyze
                </button>
              ) : (
                <Loader />
              )}
            </div>
          </section>
          <div className='w-full max-w-md lg:w-[420px]'>
            <GaugeChart score={score} />
            <h1 className='font-bold text-xl md:text-3xl mt-2 text-center tracking-wide text-gray-700 dark:text-gray-300 transition-colors duration-300'>
              Sentiment : {sentiment}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}