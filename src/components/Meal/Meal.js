import React from 'react';
import './Meal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Meal = () => {
    return (
        <div>
            <div className="search-field">
               <input className='meal-searchField' type="text" placeholder='Write food....'/>
               <button type='search' className='search-btn'>Search <FontAwesomeIcon icon={faSearch}/></button>
            </div>
        </div>
    );
};

export default Meal;