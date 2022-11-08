import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <div className="hero  py-4  lg:py-20 bg-base-200">
      <div className="hero-content block lg:flex">
        <div>
          <img
            className=" mr-0 mb-10   lg:mr-20"
            width={"500px"}
            src="https://i.ibb.co/3Rrd8VP/online-registration-sign-up-with-man-sitting-near-smartphone-268404-95.webp"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm  shadow-2xl p-2 lg:p-10 bg-base-100">
          <h1 className="mt-4 text-4xl text-center font-bold">Login now!</h1>
          <div className="card-body">
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input w-full input-bordered"
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
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
            <div className="flex">
                <button className=" mt-6 mx-auto px-6 btn btn-success"><FcGoogle className="text-2xl mr-3"></FcGoogle>Sign In With Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
