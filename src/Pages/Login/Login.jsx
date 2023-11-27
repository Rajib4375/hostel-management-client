import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const {signIn} = useContext(AuthContext);

     useEffect(()=>{
      loadCaptchaEnginge(6);
     },[])

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
          const user = result.user;
          console.log(user);
        })
    }

    const handleValidateCaptcha = () =>{
      const User_captcha_value = captchaRef.current.value;
      if(validateCaptcha(User_captcha_value)){
           setDisabled(false)
      }
      else{
        setDisabled(true)
      }
      
    }



    return (
       <div>
         <Helmet>
            <title>Hostel Management | login</title>
          </Helmet>
         <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" ref={captchaRef} name="captcha" placeholder="type the captcha" className="input input-bordered" required />
          <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button>
       
        </div>
        <div className="form-control mt-6">
        
          <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <p><small>New Here ? <Link to="/signup">Create an Account</Link></small></p>
    </div>
  </div>
</div>
       </div>
    );
};

export default Login;