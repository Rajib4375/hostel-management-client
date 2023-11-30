/* eslint-disable react/prop-types */

import { Rating } from "@smastrom/react-rating";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { AiFillLike } from "react-icons/ai";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiousSecure from "../../hooks/UseAxiousSecure";
import useCart from "../../hooks/useCart";
import useLike from "../../hooks/UseLike";



const FoodDetailsCard = ({food}) => {
    const {user} = useContext(AuthContext);
    const {name, details, image,price , rating, _id} = food || {};
    const navigate = useNavigate();
    const axiosSecure = useAxiousSecure();
    const [, refetch] = useCart();

    const [isLike, setIsLike] = useState(false);
    const [likes] = useLike();
    
    
    const handleAddToCart = item =>{
      if(user && user.email){
        console.log(user.email, item);
        const cartItem ={
          foodsItemId: _id,
          email: user.email,
          name,
          image,
          price

        }
        axiosSecure.post('/carts', cartItem)
        .then(res =>{
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your Cart`,
              showConfirmButton: false,
              timer: 1500
            });
            refetch();
          }
        })
      }
      else{
        Swal.fire({
          title: "You are not Login",
          text: "Please login to add to the cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Please Login"
        }).then((result) => {
          if (result.isConfirmed) {
          navigate('/login')
          }
        });
      }
    }

    const handleLike = () =>{
      if(user && user.email){
        const likeItem ={
          likeId : _id,
          email: user.email
        }
        axiosSecure.post(`/like/${_id}`, likeItem)
        .then(res =>{
          console.log(res.data)
        })

        if(isLike){
          setIsLike(false)
        }
        else{
           setIsLike(true)
           Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Like successful",
            showConfirmButton: false,
            timer: 1500
          });
          refetch();
        }
      }
      else{
        Swal.fire({
          title: "You are not logged in",
          text: "Please log in to like this item",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Please Login",
        })
        .then((result)=>{
          if (result.isConfirmed){
            navigate("/login");
          }
        })
      }
    }

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
    
   <span onClick={handleLike} className="text-4xl font-bold "><AiFillLike />{likes.length}</span>
   <button onClick={()=>handleAddToCart(food)} className="btn btn-success">Cofirm Meal</button>
    </div>
    
  </div>
</div>
    );
};

export default FoodDetailsCard;