import { useEffect, useState } from "react";

const UseFoods = () => {
   const [foods, setFoods] = useState([]);
   const [loading, setLoading] = useState(true);
   useEffect(()=>{
     fetch('http://localhost:5000/foods')
     .then(res => res.json())
     .then(data =>{
        setFoods(data);
        setLoading(false);
     });
   },[])
   return [foods, loading]
};

export default UseFoods;