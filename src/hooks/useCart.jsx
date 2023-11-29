import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "./UseAxiousSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const useCart = () => {
    const axiosSecure = useAxiousSecure();
    const {user} = useContext(AuthContext);
   const {refetch, data: cart =[]} = useQuery({
   queryKey: ['cart', user?.email],
   queryFn: async() =>{
    const res = await axiosSecure.get(`/carts?email=${user.email}`);
    return res.data;
   }
   })
   return [cart, refetch]
};

export default useCart;