import React,{useState} from 'react'
import { useContext } from 'react';
import { MacroContext } from '../context/MacroContext';
const Dashboard = () => {
  const { macros } = useContext(MacroContext);
  const { protein, carbs, fats } = macros;
  return (
    <>
    <div>Macros</div>
    <p>Carbs:{carbs}</p>
    <p>Protein:{protein}</p>
    <p>Fats:{fats}</p>
    </>
  )
}

export default Dashboard