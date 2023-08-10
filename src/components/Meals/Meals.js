import React, { useEffect, useState } from 'react';
import './Meals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Meal from '../Meal/Meal';
import Cart from '../Cart/Cart';
import { setDataToLocalStorage } from '../../utilites/essential';

const Meals = () => {

  // After getting the value of input field and set by setText(Hook).
  let [text, setText] = useState('Fish');
  useEffect(()=>{
  
     
     const isTrue = document.getElementById('search-btn');
     isTrue.addEventListener('click', function(){
      
        
        const userGivenText = document.getElementById('meal-searchField').value;
        if(userGivenText){
             
              document.getElementById('meal-searchField').value = '';
              setText(userGivenText);
              
        };

     })
      
  },[]);

// these code are written for fetching data and tried to put to meals.
  let [meals, setMeals] = useState([]);
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`;

    useEffect(()=>{ 
 
        fetch(url)
        .then(response => response.json())
        .then(data => setMeals(data.meals))


    },[url]);

//function is created for getting the clicked meal name from the user.
let [names, setNames] = useState('');

const userDesiredMealName = (props) => {

    setDataToLocalStorage(props);
    const selectedNames = JSON.parse(localStorage.getItem('meals-name'));
     setNames(selectedNames);
};

useEffect(()=>{
 
   const selectedNames = JSON.parse(localStorage.getItem('meals-name'));
   if(selectedNames){
      setNames(selectedNames);
   }

},[]);

    return (
        <div>
            <div className="search-field">
               <input id='meal-searchField' type="text" placeholder='Write food....'/>
               <button type='search' id='search-btn'>Search <FontAwesomeIcon icon={faSearch}/></button>
            </div>

            <div className='mealsAndCartContainer'>

              <div className='all-meals'>

                  {
                     meals.map(meal => <Meal key={meal.idMeal} meal={meal} userDesiredMealName={userDesiredMealName}></Meal>)
                  }

              </div>

              <div className='cart'>
                 <Cart mealsName={names}></Cart>
              </div> 

            </div>

        </div>
    );
};

export default Meals;