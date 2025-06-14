import React, { useContext } from "react";
import { Link } from "react-router";
import Divider from "../../Components/Divider/Divider";
import SocialLogin from "../../Components/GoogleLogin/GoogleLogin";
import { AuthContext } from "../../Context/AuthContext";

const Signin = () => {
  const { signInUser } = useContext(AuthContext);
  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-[50vh]">
        <form onSubmit={handleSignin}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Sign In</legend>

            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <p>
                New user?{" "}
                <Link to="/signup" className="link link-hover">
                  {" "}
                  please Sign Up
                </Link>
              </p>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Sign in
            </button>
            <Divider />
            <SocialLogin />
          </fieldset>
          
        </form>
      </div>
    </div>
  );
};

export default Signin;
