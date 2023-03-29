import React from "react";
import "./SingleCard.css";

const SingleCard = ({ meal, addMeal }) => {
  const { strMeal, strInstructions, strMealThumb } = meal;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={strMealThumb}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strMeal}</h2>
          <p>{strInstructions.slice(0,100)}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>addMeal(strMeal)}  className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
