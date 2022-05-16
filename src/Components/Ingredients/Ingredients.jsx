import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Ingredients = () => {
  const {id} = useParams()
  const [ingredients, setIngredients] = useState({})
  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v2/1/filter.php?i=${id}`)
      .then((res) => {
        setIngredients(res.data.meals[0])
      })
  }, [id])
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h3 className="title">{ingredients.strMeal}</h3>
            <img src={`https://www.themealdb.com/images/ingredients/${id}.png`} alt="" width={300}/>
          </div>
          <div className="col-8">
            <div>
              <h3 className="title">Ingredients</h3>
            </div>
            <div className="row">
              {
                ingredients.map((ingredient ) =>  (
                  <div className="col-4" key={ingredient.strMeal}>
                    <div className="center">
                      <Link to={`/meals/${ingredient.idMeal}`}>
                        <img src={`${ingredient.strMealThumb}`} width="100%" alt=""/>
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

                ingredients.strInstructions
              }
              {ingredients.strMeasure1}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;