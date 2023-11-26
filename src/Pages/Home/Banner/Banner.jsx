
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/Js0jHpN/student-hostel-banner.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">WELCOME TO <span className="text-[#D3A256]">STUDENT HOSTE</span></h1>
      <p className="mb-5">LOWEST PRICE GUARANTEE IF YOU BOOK DIRECTLY</p>
      <div>
      <input type="text" placeholder="Type here" className="input input-bordered bg-white max-w-xs mr-2" />
      <button className="btn btn-active bg-[#D3A256] text-white">Search</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Banner;