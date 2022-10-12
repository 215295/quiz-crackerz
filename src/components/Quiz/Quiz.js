import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/solid'

const Quiz = ({ item }) => {

    // console.log(item)//

    const { name, logo, total, id } = item


    return (
        <div >
            <div className="mb-5 mt-10 card card-compact  bg-lime-700 shadow-xl">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">


                    <div className="card-actions  justify-end ">
                     <div className='flex'>
                     <h2 className="card-title flex-1 text-2xl text-white">{name}</h2>
                        <p className='text-white flex-1 text-2xl'> Quiz:{total} </p>
                     </div>
                       <div className='flex justify-center pt-5 pb-3 bg-orange-700 rounded mt-5'>
                       <Link to={`/quiz/${id}`}> <button className="btn flex   text-white">Details<ChevronRightIcon className="h-6 w-6  text-white" /></button> </Link>
                       </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Quiz;