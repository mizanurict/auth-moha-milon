/** @format */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext);
console.log(createUser);
  const handleRegister = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
      console.log(name, email, password);
      
      //create user firebase
      createUser(email, password)
          .then(result => {
          console.log(result.user);
          })
          .catch(error => {
          console.error(error)
      })
  };
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center">
            Have Already?
            <Link to="/login" className="btn btn-link">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
