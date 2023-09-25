import React from "react";
const RecipeCard = ({ recipe }) => {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipe;
    
    return (
      
        <div className="card">
            <img
                src={strMealThumb}
                alt={strMeal}
                className="rounded-[200px] w-full hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)]"
            />
            <div className="card-body">
                <span className="category">{strCategory}</span>
                <h3>{strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank" className="py-1 bg-orange-400 rounded-2xl text-white p-4 "> Ingredients</a>
            </div>
        </div>
    )
};

export default RecipeCard;
