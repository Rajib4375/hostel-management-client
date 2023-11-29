/* eslint-disable react/prop-types */

import { Rating } from "@smastrom/react-rating";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { AiFillLike } from "react-icons/ai";


const FoodDetailsCard = ({food}) => {
    const {user} = useContext(AuthContext);
    const {name, details, image,  rating} = food || {};
    return (
        <div className="card card-side bg-base-100 shadow-xl">
  <figure><img className="w-[370px] h-[247px]" src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    <p>{user?.displayName}</p>
    <Rating
      style={{ maxWidth: 180 }}
      value={rating}
      readOnly
    />
     <form>
     <span className="text-3xl">Review:  <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" /></span>
    <input className="ml-3 btn btn-secondary" type="submit" value="Submit" />
     </form>
    
    <div className="card-actions justify-end">
    
   <span className="text-4xl font-bold "><AiFillLike /></span>
   <button className="btn btn-success">Cofirm Meal</button>
    </div>
    
  </div>
</div>
    );
};

export default FoodDetailsCard;