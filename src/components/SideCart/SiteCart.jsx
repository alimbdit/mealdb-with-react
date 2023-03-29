import React from 'react';
import './SiteCart.css';

const SiteCart = ({mealName, removeAll}) => {
    return (
        <div className='bg-secondary p-10 sticky top-0 text-center'>
            <h1 className='text-2xl font-bold mb-2'>Name</h1>
            {
                mealName && mealName.map((meal, index)=> <h3 className='text-lg font-semibold' key={index}>{meal}</h3>)
            }
            {
                mealName.length?<button onClick={removeAll} className='btn btn-primary'>Remove all</button>: ''

              
            }
            
        </div>
    );
};

export default SiteCart;