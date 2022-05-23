import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const LatestMeal = () => {
  const [latest, setLatest] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    axios('https://themealdb.com/api/json/v2/1/latest.php')
      .then((res) => {
        setLatest(res.data.meals)
        setIsLoading(false)
      })
  }, [])

  if (isLoading)
    return 'loading...................'

  return (
    <div>
      <div className="container latest-container">
        <h3 className="title">Latest Meals</h3>
        <div className="row">
          {
            latest.map((item) => (
                <div className="col" key={item.idMeal}>
                  <div className="box">
                    <Link to={`/latest/${item.idMeal}`}>
                      <img src={item.strMealThumb} alt=""/>
                    </Link>
                    <div className="description">
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
export default LatestMeal;