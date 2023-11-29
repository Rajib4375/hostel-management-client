/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiousSecure from "./useAxiousSecure";
import useCart from "../../../hooks/useCart";



const MembershipItem = ({membarship}) => {
    const {name,image, price, _id} = membarship;
    const {user} = useContext(AuthContext);
    
    const navigate = useNavigate();
    const axiosSecure = useAxiousSecure();
    const [, refetch] = useCart();
    const handleAddToCart = card =>{
        
       if(user && user.email){
        console.log(user.email, card);
        const cartItem = {
            membarshipId : _id,
            email : user.email,
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
                    title: `${name} added to your cart`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                //   reaftch cart
                refetch();
            }
        })
       }
       else{
        Swal.fire({
            title: "You are Not Logged In",
            text: "Please Login to add to the Cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Please Login"
          }).then((result) => {
            if (result.isConfirmed) {
             navigate('/login')
            }
          })
       }
    }

    return (
        <div
        onClick={()=> handleAddToCart(membarship)} 
         className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <p className="text-2xl font-bold text-[#BB8506]">{price}৳</p>
  </div>
</div>
    );
};

export default MembershipItem;