import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "./UseAxiousSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const useLike = () => {
    const axiosSecure = useAxiousSecure();
    const {user} = useContext(AuthContext);
   const {refetch, data: likes =[]} = useQuery({
   queryKey: ['likes', user?.email],
   queryFn: async() =>{
    const res = await axiosSecure.get(`/like?email=${user.email}`);
    return res.data;
   }
   })
   return [likes, refetch]
};

export default useLike;