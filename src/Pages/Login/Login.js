import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const {loginWithEmailAndPassword, loginWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleLoginWithEmailAndPassword = (event) => {
        event.preventDefault();
        const form  = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginWithEmailAndPassword(email, password)
        .then(result => {
            navigate(from,  {replace: true});
            form.reset();
        })
        .catch(err => console.error(err))
    }
    const handleGoogleLogin = () => {
        loginWithGoogle()
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
        })
        .catch(err => console.error(err))
    }
  return (
    
    <div className="hero  py-4  lg:py-20 bg-base-200">
      <Helmet>
        <title>Login -Ahmed's Photography</title>
      </Helmet>
      <div className="hero-content flex flex-col md:flex-row" >
        <div>
          <img
            className="w-[250px] md:w-[400px] lg:w-[500px] mr-0 mb-10   lg:mr-20"
            
            src="https://i.ibb.co/3Rrd8VP/online-registration-sign-up-with-man-sitting-near-smartphone-268404-95.webp"
            alt=""
          />
        </div>
        <div className="card w-[280px] lg:w-[400px] shadow-2xl p-3 lg:p-10 bg-base-100">
          <h1 className="mt-4 text-xl md:text-2xl lg:text-3xl text-center font-bold">Login now!</h1>
          <form onSubmit={handleLoginWithEmailAndPassword}  className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input  input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                className="input input-bordered"
                required
              />
            </div>
            <p  className="text-sm  mt-2 ">
                Don't have an account? Please <Link className="link text-blue-700" to='/register'>Register.</Link>
            </p>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary px-4">Login</button>
            </div>
          </form>
          <div className="flex flex-col w-full">
            <div className="divider">OR</div>
          </div>
          <div className="flex mb-4">
                <button onClick={handleGoogleLogin} className=" mx-auto  btn btn-success px-6 lg:px-8"><FcGoogle className="text-2xl mr-3"></FcGoogle>Sign In With Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
