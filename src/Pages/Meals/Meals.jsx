import { Helmet } from "react-helmet-async";
import FoodCard from "../../components/Foodcard/FoodCard";
import UseFoods from "../../hooks/UseFoods";


const Meals = () => {
    const [foods] = UseFoods();
    return (
       <div>
        <Helmet>
                <title>Students Hostel | e Meals</title>
            </Helmet>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-7 mb-10'>
        {
            foods.map(item =><FoodCard 
             key={item._id} item={item}></FoodCard>) 
         }
        </div>
       </div>
    );
};

export default Meals;