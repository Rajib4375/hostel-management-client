import axios from "axios";

 const axiousSecure = axios.create({
    baseURL: 'https://hostel-management-server-alpha.vercel.app'
})
const useAxiousSecure = () => {
    return axiousSecure;
};

export default useAxiousSecure;