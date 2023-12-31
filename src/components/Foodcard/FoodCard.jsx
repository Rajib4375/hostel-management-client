/* eslint-disable react/prop-types */

import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { Link } from "react-router-dom";


const FoodCard = ({item}) => {
  const {name, details, image,  price,rating, _id} = item;
  
  

  return (
      <div className="card w-[424px] h-[541px] bg-[#F3F3F3] shadow-xl">
<figure><img className="w-[424px] h-[300px]" src={image} alt="" /></figure>
<div className="card-body text-black">
  <h2 className="card-title">{name}</h2>
  <p>{details}</p>
  <p>{price}৳</p>
  <Rating
      style={{ maxWidth: 180 }}
      value={rating}
      readOnly
    />
  <div className="card-actions justify-end">
   <Link to={`/details/${_id}`}><button  className="btn bg-[#D99904] text-white">Details</button></Link>
  </div>
</div>
</div>
  );
};

export default FoodCard;