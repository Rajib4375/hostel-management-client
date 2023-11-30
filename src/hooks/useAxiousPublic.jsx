import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://hostel-management-server-alpha.vercel.app'
})
const useAxiousPublic = () => {
    return axiosPublic;
};

export default useAxiousPublic;