import Header from "./Components/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Components/Homepage";
import MealInfo from "./Components/MealInfo";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/meal/:id" element={<MealInfo />}/>
        <Route path="*" element = {<NotFound />}/>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
