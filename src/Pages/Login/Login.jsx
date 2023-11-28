import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import { app } from '../../firebase/firebase.config';

const Login = () => {
  
  const [disabled, setDisabled] = useState(true);
  const {signIn} = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.form?.pathname || "/";

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
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User login successful",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from, {replace: true});
        })
    }

    const handleValidateCaptcha = (e) =>{
      const User_captcha_value = e.target.value;
      if(validateCaptcha(User_captcha_value)){
           setDisabled(false)
      }
      else{
        setDisabled(true)
      }
      
    }

    const Auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = ()=>{
      signInWithPopup(Auth, provider)
      .then(result =>{
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, {replace: true});
      })
      .catch(error =>{
        console.log('error', error.message)
      })
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
          <input onBlur={handleValidateCaptcha} type="text"  name="captcha" placeholder="type the captcha" className="input input-bordered" required />
          
       
        </div>
        <div className="form-control mt-6">
        
          <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
        </div>
        <button onClick={handleGoogleSignIn}  className="btn btn-outline btn-primary"> <FcGoogle></FcGoogle> Continue With Google</button>
      </form>
      <p className="text-center mb-5"><small>New Here ? <Link to="/signup">Create an Account</Link></small></p>
    </div>
  </div>
</div>
       </div>
    );
};

export default Login;