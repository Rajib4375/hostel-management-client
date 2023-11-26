/* eslint-disable react/prop-types */
import FoodCard from "../../../../components/Foodcard/FoodCard";


const FoodTab = ({items}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-7 mb-10'>
        {
            items.map(item =><FoodCard 
             key={item._id} item={item}></FoodCard>) 
         }
        </div>
    );
};

export default FoodTab;