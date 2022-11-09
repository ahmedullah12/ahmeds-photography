import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
    const {signUpWithEmailAndPassword} =  useContext(AuthContext)
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
            form.reset();
        })
        .catch(err => console.error(err))
    }
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
            <p className="text-sm  mt-2 ">
              Already have an account? Please{" "}
              <Link className="link text-blue-700" to="/login">
                Login.
              </Link>
            </p>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
