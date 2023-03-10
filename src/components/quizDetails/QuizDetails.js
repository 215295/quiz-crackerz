

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from '../Details/Details';
import './QuizDetails.css'


const QuizDetails = () => {
    const details = useLoaderData().data
    // console.log(details)

    return (
        <div>

            <h1 className='bg-lime-700 d-flex container p-5 mt-16  w-1/2 text-3xl '> Quiz of {details.name} </h1>

            {
                details.questions.map(detail => <Details key={detail.id} detail={detail}  > </Details>)
            }
        </div>
    );
};

export default QuizDetails;