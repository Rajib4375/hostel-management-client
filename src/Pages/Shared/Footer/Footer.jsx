

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
    <aside>
    <img className="w-[80px] h-[60px] mr-3" src="https://i.ibb.co/McyQ5s5/hostel-logo.jpg" alt="" />
    <h2 className="text-2xl font-bold">Students 
  <br /><span className="text-[#D1A054]">Hostel</span></h2>
    </aside> 
    <nav>
      <header className="footer-title">Services</header> 
      <a className="link link-hover">Accommodation</a>
      <a className="link link-hover">Security</a>
      <a className="link link-hover">Internet and Utilities</a>
      <a className="link link-hover">Advertisement</a>
    </nav> 
    <nav>
      <header className="footer-title">Company</header> 
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
  
    </nav> 
    <nav>
      <header className="footer-title">Talk to us</header> 
      <a className="link link-hover">101 Gulsan, Dhaka <br />
         +354-510-282</a>
      
    </nav>
  </footer>
  );
};

export default Footer;