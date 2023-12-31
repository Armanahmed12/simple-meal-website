import React from 'react';
import './Meal.css';

const Meal = (props) => {
  
    const {strMealThumb,strMeal,strArea,strCategory,strYoutube} = props.meal;
//    this function for passing data to cart cart component
  const passingDataToMeals = props.userDesiredMealName;
    return (
        <div className='each-meal-card'>
            <img className='meal-img' src={strMealThumb} alt="" />
             <div className="meal-body">
                 <h4>{strMeal}</h4>
                 <h5>mealArea : {strArea}</h5>
                 <h6>MealCategory : {strCategory}</h6>
                  <p>Video: <a href={strYoutube}>Click to watch...</a></p>
                  <button onClick={()=>{passingDataToMeals(strMeal)}} className='meal-btn' type='button'>Add to cart</button>
             </div>
        </div>
    );
};

export default Meal;