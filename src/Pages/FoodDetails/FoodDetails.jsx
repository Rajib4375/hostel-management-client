/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import FoodDetailsCard from "./FoodDetailsCard";



const FoodDetails = () => {
    const [food, setFood] = useState();
    const {id} = useParams()
    console.log(id);
   const foods = useLoaderData();
    console.log(foods);

    useEffect(()=>{
        const findFood = foods?.find(food=>food._id === id)
        setFood(findFood)
    },[id, foods])

   return (
    <div className="mt-10 mb-10">
       <FoodDetailsCard food={food}></FoodDetailsCard>
    </div>
    );
};

export default FoodDetails;