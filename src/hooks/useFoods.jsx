import { useEffect, useState } from "react";

const UseFoods = () => {
   const [foods, setFoods] = useState([]);
   const [loading, setLoading] = useState(true);
   useEffect(()=>{
     fetch('https://hostel-management-server-alpha.vercel.app/foods')
     .then(res => res.json())
     .then(data =>{
        setFoods(data);
        setLoading(false);
     });
   },[])
   return [foods, loading]
};

export default UseFoods;