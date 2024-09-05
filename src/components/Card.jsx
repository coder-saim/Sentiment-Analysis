import React from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";

const Card = ({text}) => {
    return (
        <div className='mx-6 px-2 flex'>
            <FaRegCircleCheck className='w-10 h-10 text-green-600'/>
            <h1 className='text-lg text-gray-500 font-semibold ml-4 w-60'>
                {text}
            </h1>
        </div>
    );
};

export default Card;