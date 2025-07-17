import axios from 'axios';
import React from 'react'
import { useState} from 'react';
const Goal = () => {
    let firebaseId = "cewXjTDICAS0Ss0rMBcalxJPvKc2";
    const[caloriesTarget, setCaloriesTarget] = useState(0);
    const[proteinTarget, setProteinTarget] = useState(0);
    const[carbsTarget, setCarbsTarget] = useState(0);
    const[fatsTarget, setFatsTarget] = useState(0);
    const[weightTarget, setWeightTarget] = useState(0);
    const[hydrationTarget, setHydrationTarget] = useState(0);
    const setGoal = async() => {
            await axios.post("http://localhost:8005/goalapi/setgoal", {
                firebaseId: firebaseId,
                calories: caloriesTarget,
                protein: proteinTarget,
                carbs: carbsTarget,
                fats: fatsTarget,
                weight: weightTarget,
                hydration: hydrationTarget
            })
        };
  return (
    <div>
        <input type="text" name="calorieInp" placeholder='Enter Calories' id="calorieInp" onChange={(e)=>setCaloriesTarget(e.target.value)}/>
        <input type="text" name="proteinInp" placeholder='Enter Protein' id="proteinInp" onChange={(e)=>setProteinTarget(e.target.value)}/>
        <input type="text" name="carbsInp" placeholder='Enter Carbs' id="carbsInp" onChange={(e)=>setCarbsTarget(e.target.value)}/>
        <input type="text" name="fatsInp" placeholder='Enter Fats' id="fatsInp" onChange={(e)=>setFatsTarget(e.target.value)}/>
        <input type="text" name="weightInp" placeholder='Enter Weight' id="weightInp" onChange={(e)=>setWeightTarget(e.target.value)}/>
        <input type="text" name="hydrationInp" placeholder='Enter Hydration' id="hydrationInp" onChange={(e)=>setHydrationTarget(e.target.value)}/>

        <button onClick={setGoal}>Fix Goal</button>
    </div>
  )
}

export default Goal;