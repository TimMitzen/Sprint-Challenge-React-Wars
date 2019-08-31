import './App.css';
import React, {useState, useEffect} from "react";
import axios from "axios"
import StarWarsCard from "./components/StarWarsCard";

const App = (props) => {
  const [data, setData] = useState([{}]);// set this up correctly 
  useEffect(()=>{
   axios.get("https://swapi.co/api/people")
   
    .then(res => {
      console.log(res.data.results)
      setData(res.data.results)
      
    });
  },[]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
     <div className="App">
      <h2 className="Header">React Wars</h2>
      
      
    {data.map((item,index) =>(<StarWarsCard key={index}
      name={item.name}
      birthday={item.birth_year}
      homeworld={item.homeworld}/>))} 
      
      </div>
  
  );
}

export default App;
