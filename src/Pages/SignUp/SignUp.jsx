import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";



const SignUp = () => {
  const {register,handleSubmit, formState: { errors }} = useForm()

  const onSubmit = (data) =>{ 
      console.log(data);
  };
  


    return (
        <div>
          <Helmet>
            <title>Hostel Management | Sign up</title>
          </Helmet>
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
     
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered"  />
          {errors.name && <span className="text-red-600">Name is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
          {errors.email && <span className="text-red-600">email is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password",{ required: true, minLength:6, maxLength:10 } )} name="password" placeholder="password" className="input input-bordered"  />
          {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
          {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
          {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less then 10 characters</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;