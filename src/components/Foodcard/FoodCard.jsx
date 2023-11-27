/* eslint-disable react/prop-types */

const FoodCard = ({item}) => {
  const {name, details, image,  price} = item;
  return (
      <div className="card w-[424px] h-[541px] bg-[#F3F3F3] shadow-xl">
<figure><img className="w-[424px] h-[300px]" src={image} alt="" /></figure>
<div className="card-body text-black">
  <h2 className="card-title">{name}</h2>
  <p>{details}</p>
  <p>{price}৳</p>
  <div className="card-actions justify-end">
    <button className="btn bg-[#D99904] text-white">Details</button>
  </div>
</div>
</div>
  );
};

export default FoodCard;