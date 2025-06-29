import React from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";

const Card = ({text}) => {
    return (
        <div className='mx-2 md:mx-6 px-4 md:px-2 flex items-start w-full max-w-sm md:max-w-none'>
            <FaRegCircleCheck className='w-8 h-8 md:w-10 md:h-10 text-green-600 dark:text-green-400 mt-1 flex-shrink-0 transition-colors duration-300'/>
            <h1 className='text-base md:text-lg text-gray-500 dark:text-gray-400 font-semibold ml-3 md:ml-4 md:w-60 transition-colors duration-300'>
                {text}
            </h1>
        </div>
    );
};

export default Card;