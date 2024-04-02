/** @format */

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";



const Login = () => {

  const { loginUser, signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
console.log(loginUser);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

      loginUser(email, password)
        .then(result => {
          console.log(result.user);
          e.target.reset();
          navigate('/');
        })
        .catch(error => {
        console.error(error)
      })
  }
  const handleGoogleSignIn = () => {
    signInGoogle()
      .then(result => {
      console.log(result.user);
      })
      .catch(error => {
        console.error(error);
    })
  }

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
                  </form>
          <p className="text-center">New here?<Link to='/register' className="btn btn-link">Register</Link> </p>
          <p className="text-center"><button onClick={handleGoogleSignIn} className="btn btn-ghost underline">Google</button></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
