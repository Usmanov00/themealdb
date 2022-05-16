import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const LatestMealInfo = () => {
  const [latestMeals,setLatestMeals] = useState({})
  const [isLoading,setIsLoading] = useState(true)
  const [ingredients,setIngredients] = useState([])
  const getIngredients = () => {
    let result = []
    for(let i = 0; i< 20; i++) {
      if(latestMeals[`strIngredient${i + 1}`])
        result = [...result,latestMeals[`strIngredient${i + 1}`]]
    }
    setIngredients(result)
  }
  const {id} = useParams()
  useEffect(()  => {
    axios(`https://www.themealdb.com/api/json/v2/1/lookup.php?i=${id}`)
      .then((res) => {
        setLatestMeals(res.data.meals[0])
        getIngredients(res.data.meals[0])
        setIsLoading(false)
      })
  })
  if(isLoading){
    return 'kkk'
  }
  return (
    <div className="container">
      <Link
        to="/"><button
        className="btn element-btn" >Back</button> </Link>
      <div className="row">
        <div  className="col-3">
          <h2 className="meal-title">{latestMeals.strMeal}</h2>
          <img className="item-img" src={latestMeals.strMealThumb} alt="" width="100%"/>

        </div>
        <div className="col-8">
          <h2 className="meal-title">Ingredients</h2>
          <div className="row">
            {
              ingredients.map((ingredient,index) => (
                <Link style={{paddingLeft: 13, textDecoration: 'none',color:'white'}}  to={`/ingredients/${ingredient}`} key={index} className="item-col ">
                  <img src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`} alt=""/>
                  <h4 className="element-title">{ingredient}</h4>
                </Link>
              ))
            }
          </div>
        </div>
      </div>

    </div>
  );
};

export default LatestMealInfo;