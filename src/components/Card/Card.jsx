import React, {useState, useEffect} from 'react';
import InvalidSearch from '../InvalidSearch/InvalidSearch';
import SingleCard from '../SingleCard/SingleCard';
import './Card.css';


const Card = ({search, addMeal}) => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    }, [search])
    // console.log(meals)
    return (
        <div>
            {
                !meals?<InvalidSearch></InvalidSearch>:<div className='grid grid-cols-3 gap-5 p-5'>
                {
                    meals?.map(meal=><SingleCard addMeal={addMeal} meal={meal} key={meal.idMeal}></SingleCard>)
                }
                </div>
            }
            
            
        </div>
    );
};

export default Card;