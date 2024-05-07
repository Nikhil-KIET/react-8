import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Cards";
import {data} from "./movie.js";




function App() {
  const[color,setColor]=useState([]);

  
  
  useEffect(() => {
    console.log(data);
    setColor(data);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col text-center   " >
      <h1 className=" font-extrabold text-3xl  "  >Movie Collection</h1>
      
      <Cards className=" flex"  data={color}></Cards>

    </div>
  );
}

export default App;
