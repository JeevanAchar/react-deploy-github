import React from 'react';
import CarDetails from './CarDetails';
import JSON from "./jsonData.json";
import "./index.css"


const App = () => {
  return (
    <>
      <CarDetails details={JSON}/>
    </>
  )
}

export default App