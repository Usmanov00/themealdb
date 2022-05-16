import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const RandomMeals = () => {

  const [meal, setMeals] = useState([])
  useEffect(() => {
    axios('https://themealdb.com/api/json/v2/1/randomselection.php')
      .then((res) => {setMeals(res.data.meals)})
  }, [])

  return (
    <div>
      <div className="container latest-container">
        <h3 className="title">Random Meals</h3>
        <div className="row">
          {
            meal.map((meal) => (
                <div className="col" key={meal.idMeal}>
                  <div className="box">
                    <Link to={`/meal/${meal.idMeal}`}>
                      <img src={meal.strMealThumb} alt=""/>
                    </Link>
                    <div className="description">
                      {meal.strMeal}
                    </div>
                  </div>
                </div>
              )
            )
          }
        </div>
      </div>
    </div>
  );
};
export default RandomMeals;