import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const RandomMeals = () => {

  const [meal, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    axios('https://themealdb.com/api/json/v2/1/randomselection.php')
      .then((res) => {
        setMeals(res.data.meals)
        setIsLoading(false)
      })
  }, [])

  if (isLoading)
    return 'loading...................'

  return (
    <div>
      <div className="container latest-container">
        <h3 className="title">Random Meals</h3>
        <div className="row">
          {
            meal.map((item) => (

                <div className="col" key={meal.idMeal}>
                  <div className="box">
                    <Link to={`/meal/${meal.idMeal}`}>
                      <img src={item.strMealThumb} alt=""/>
                    </Link>
                    <div className="mealName">
                      {item.strMeal}
                    </div>
                  </div>
                </div>

              )
            )
          }
        </div>
      </div>
      <hr/>
    </div>
  );
};
export default RandomMeals;