import logo from "./logo.svg";
import "./App.css";
import Car from "../src/Components/Car";
import Events from "../src/Components/Events";
import Phone from "../src/Components/Phone";
import FavColor from "./Components/FavColor";
function App() {
  const carinfo = { name: "Ford", model: "Mustang" };
  return (
    // <Car carInfo={carinfo}/>
    <FavColor />
  );
}

export default App;
