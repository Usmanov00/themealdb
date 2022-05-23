import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";

const MealInfo = () => {
  const {id} = useParams()
  const [meal, setMeal] = useState({})
  const [ingredients, setIngredients] = useState([])
  const getIngredients = (meal) => {
    let result = []
    for (let i = 0; i < 20; i++) {
      if (meal[`strIngredient${i + 1}`]) {
        result = [...result, meal[`strIngredient${i + 1}`]]
      }
    }
    setIngredients(result)
  }
  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v2/1/lookup.php?i=${id}`)
      .then(res => {
        setMeal(res.data.meals[0])
        getIngredients(res.data.meals[0])
      })
  }, [id])
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h3 className="title">{meal.strMeal}</h3>
            <img src={meal.strMealThumb} alt="" width={300}/>
          </div>
          <div className="col-8">
            <div>
              <h3 className="title">Ingredients</h3>
            </div>
            <div className="row">
                {
                  ingredients.map((ingredient, idx ) =>  (
                    <div className="col-4" key={idx}>
                        <div className="center">
                          <Link to={`/ingredients/${ingredient}`}>
                          <img src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`} alt="" width={100}/>
                          <div className="description">
                            {ingredient}
                          </div>
                          </Link>
                        </div>
                    </div>
                  ))
                }
            </div>
          </div>
          <div className="instructions">
            <div className="instructions-box">
            {

              meal.strInstructions
            }
              {meal.strMeasure1}
            </div>
            <div className="video">
              <ReactPlayer url={meal.strYoutube}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealInfo;