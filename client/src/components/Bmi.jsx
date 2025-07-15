import axios from 'axios';
import React, { useContext, useState } from 'react';
import { MacroContext } from '../context/MacroContext';
const Bmi = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [gms,setGms] = useState(0);
    const { setMacros } = useContext(MacroContext);
    const { macros } = useContext(MacroContext);
    const [macroData, setMacroData] = useState(null);
    const calculateBmi = async() => {
        const res = await axios.post("http://localhost:8005/bmiapi/calculate", { weight, height })
        console.log(res.data);
    }
    const [fooditem, setFoodItem] = useState('');
    const getMacros = async() => {
        const res = await axios.post("http://localhost:8005/macrosapi/macros", { food: fooditem })
        console.log(res.data)
        setMacroData(res.data);
    }

    const addMacros = async() => {
        
        let prevProtein = macros.protein;
        let prevCarbs = macros.carbs;   
        let prevFats = macros.fats;
        const {protein, carbs, fat} = macroData;
        setMacros({ protein: ((protein*((gms/100).toFixed(2)))+prevProtein), carbs: ((carbs*((gms/100).toFixed(2)))+prevCarbs), fats: ((fat*((gms/100).toFixed(2)))+prevFats) });
    }

    return (
        <div>
            <input
                type="number"
                name="weight"
                id="weight"
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
            />
            <input
                type="number"
                name="height"
                id="height"
                placeholder="Height (cm)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
            />
            <input required
                type="text"
                name="fooditem"
                id="fooditem"
                placeholder="Enter food item"
                value={fooditem}
                onChange={(e) => setFoodItem(e.target.value)}
            />
            <input
            required
            type="number"
            placeholder="in Gms"
            onChange={(e) => setGms(Number(e.target.value))}
            />

            <button onClick={calculateBmi}>Calculate BMI</button>
            <button onClick={getMacros}>Calculate Macros</button>
            <button onClick={addMacros}>Add Macros</button>
        </div>
    );
};

export default Bmi;