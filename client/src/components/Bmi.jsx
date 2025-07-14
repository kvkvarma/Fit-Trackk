import axios from 'axios';
import React, { useState } from 'react';

const Bmi = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const calculateBmi = async() => {
        const res = await axios.post("http://localhost:8005/bmiapi/calculate", { weight, height })
        console.log(res.data);
    }
    const [fooditem, setFoodItem] = useState('');
    const getMacros = async() => {
        const res = await axios.post("http://localhost:8005/macrosapi/macros", { food: fooditem })
        console.log(res)
        // console.log(res.data);
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
            <input
                type="text"
                name="fooditem"
                id="fooditem"
                placeholder="Enter food item"
                value={fooditem}
                onChange={(e) => setFoodItem(e.target.value)}
            />
            <button onClick={calculateBmi}>Calculate BMI</button>
            <button onClick={getMacros}>Calculate Macros</button>
        </div>
    );
};

export default Bmi;