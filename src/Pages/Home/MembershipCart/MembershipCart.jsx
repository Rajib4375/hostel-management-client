
import { useEffect, useState } from "react";
import MembershipItem from "./MembershipItem";


const MembershipCart = () => {
    const [membarships, setMembarship] = useState([]);

    useEffect(() =>{
        fetch('membership.json')
        .then(res => res.json())
        .then(data =>setMembarship(data))
    },[])
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center">Membership</h2>
            <p className="text-center">Upgrade to Silver, Gold, Platinum and enjoy premium meals</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-10">
            {
                membarships.map(membarship =><MembershipItem 
                    key={membarship._id}
                    membarship={membarship}
                    ></MembershipItem> )
            }
          </div>
        </div>
    );
};

export default MembershipCart;