import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Browse = () => {
  const {name} = useParams()
  const [browse, setBrowse] = useState([])
  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then(({data}) =>setBrowse(data.meals))
  })
  return (
    <div>
      <div className="row">
      {
        browse.map((meal) => (
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
  );
};

export default Browse;