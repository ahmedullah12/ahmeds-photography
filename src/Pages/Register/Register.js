import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    const [registerError, setRegisterError] = useState('')
    const {signUpWithEmailAndPassword, updateUserProfile, loginWithGoogle, saveUser} =  useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleCreateUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        signUpWithEmailAndPassword(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            handleUpdateUserProfile(name, photoURL);
            saveUser(name, user.email);
            toast.success('User created successfully');
            form.reset();
            navigate('/');
        })
        .catch(err => {
          const errorMessage = err.message
          const errorCode = errorMessage.startsWith('Firebase: Error (auth/') ? errorMessage.slice(22, -2) : errorMessage;
          setRegisterError(errorCode);
        }
    )};

    const handleGoogleLogin = () => {
      loginWithGoogle()
      .then(result => {
          const user = result.user;
          saveUser(user.displayName, user.email);
          navigate(from, {replace: true});
      })
      .catch(err => {
        setRegisterError(err.message)
      })
  }

    const handleUpdateUserProfile = (name, photoURL) => {
      const profile = {
        displayName: name,
        photoURL: photoURL
      };
      updateUserProfile(profile)
      .then(() => {})
      .catch(err => console.error(err))
    };

    
  return (
    <div className="hero bg-base-200">
      <Helmet>
        <title>Register -Ahmed's Photography</title>
      </Helmet>
      <div className="hero-content flex flex-col md:flex-row">
        <div>
          <img
            className="w-[250px] md:w-[400px] lg:w-[500px] mr-0 mb-10   lg:mr-20"
            src="https://i.ibb.co/3Rrd8VP/online-registration-sign-up-with-man-sitting-near-smartphone-268404-95.webp"
            alt=""
          />
        </div>

        <div className="card w-[280px] lg:w-[400px]  shadow-2xl p-2 lg:p-10 bg-base-100">
          <h1 className="mt-4 text-4xl text-center font-bold">Register now!</h1>
          <form onSubmit={handleCreateUser} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input w-full input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image Url</span>
              </label>
              <input
                type="url"
                name="photoURL"
                placeholder="Your PhotoURL"
                className="input w-full input-bordered"
                required
              />
            </div>
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
            {
              registerError && <p className="text-red-500">Error: {registerError}</p>
            }
            <p className="text-sm  mt-2 ">
              Already have an account? Please{" "}
              <Link className="link text-blue-700" to="/login">
                Login.
              </Link>
            </p>
            <div className="form-control mt-4">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
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

export default Register;
