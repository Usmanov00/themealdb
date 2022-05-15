import Header from "./Components/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
