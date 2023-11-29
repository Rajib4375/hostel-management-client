/* eslint-disable react/prop-types */




const MembershipItem = ({membarship}) => {
    const {image, price, } = membarship;
    
  

    return (
        <div
        
         className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <p className="text-2xl font-bold text-[#BB8506]">{price}৳</p>
  </div>
</div>
    );
};

export default MembershipItem;