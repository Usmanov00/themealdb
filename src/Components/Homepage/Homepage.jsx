import soup from '../../assets/images/meal-icon.png'
import RandomMeals from "../RandomMeals";
import LatestMeal from "../LatestMeal";

const HomePage = () => {

  return (
    <div>
      <section className="welcome">
        <div className="container">
          <h1 className="welcome-title">
            Welcome to TheMealDB
          </h1>
          <div className="welcome-box">
            <div className="welcome-box-img">
              <img src={soup} alt=""/>
            </div>
            <p className="subtitle">
              Welcome to TheMealDB: An open, crowd-sourced database of
              <br/>
              Recipes from around the world.
              <br/>
              We also offer a free JSON API for anyone wanting to use it, with
              <br/>
              additional features for subscribers.
            </p>
            <div className="welcome-box-img">
              <img src={soup} alt=""/>
            </div>
          </div>
          <hr />
        </div>
      </section>
      <div className="container">
        <LatestMeal />
        <RandomMeals />
      </div>
    </div>
  );
};

export default HomePage;