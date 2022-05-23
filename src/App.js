import Header from "./Components/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Components/Homepage";
import MealInfo from "./Components/MealInfo";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";
import Browse from "./Components/Browse";
import Ingredients from "./Components/Ingredients";
import LatestMealInfo from "./Components/LatestMealsInfo";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/latest/:id" element={<LatestMealInfo />}/>
        <Route path="/meal/:id" element={<MealInfo />}/>
        <Route path="/ingredients/:id" element={<Ingredients />}/>
        <Route path="/browse/:name" element={<Browse />}/>
        <Route path="*" element = {<NotFound />}/>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
