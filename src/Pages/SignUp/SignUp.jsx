import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import Divider from "../../Components/Divider/Divider";
import SocialLogin from "../../Components/GoogleLogin/GoogleLogin";
import { AuthContext } from "../../Context/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, setUser, setLoading } = useContext(AuthContext);
  const handleCreateUser = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const isLong = password.length >= 6;

    if (!hasUpper) {
      toast.error("Password must include at least one uppercase letter.");
      return;
    } else if (!hasLower) {
      toast.error("Password must include at least one lowercase letter.");
      return;
    } else if (!isLong) {
      toast.error("Password must be at least 6 char long.");
      return;
    } else {
      toast.success("sign up successfull");
    }

    createUser(email, password)
      .then((credencial) => {
        const user = credencial.user;
        setUser(user);
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <Helmet>
        <title>Login | Event management</title>
      </Helmet>
      <form onSubmit={handleCreateUser}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Sign Up</legend>

          <label className="label">Name</label>
          <input
            name="name"
            type="text"
            className="input"
            placeholder="Full Name"
          />
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
          <label className="label">Photo Url</label>
          <input
            name="photo"
            type="text"
            className="input"
            placeholder="paste photo url"
          />
          <div>
            <p>
              Already have an account?{" "}
              <Link to="/signin" className="link link-hover">
                {" "}
                please Sign in
              </Link>
            </p>
          </div>
          <button type="submit" className="btn btn-neutral mt-4">
            Sign Up
          </button>
          <Divider />
          <SocialLogin />
        </fieldset>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
