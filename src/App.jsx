import "./App.css";
import LineChart from "./components/LineChart/LineChart";

import Navbar from "./components/Navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";


function App() {
  return (
    <>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  );
}

export default App;
