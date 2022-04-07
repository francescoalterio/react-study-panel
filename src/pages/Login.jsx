import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getDocument } from "../utils/getDocument";
import { loginFirebase } from "../utils/loginFirebase";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [user, handleUser] = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginFirebase(email, password).then((userData) => {
      if (!userData.err) {
        getDocument("users", userData.user.email).then((data) => {
          handleUser({
            email: userData.user.email,
            learning: data.learning,
            dominated: data.dominated,
            created: data.created,
          });
          navigate("/");
        });
      }
    });
  };

  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className=" w-80 lg:w-96 lg:h-96 rounded-2xl flex flex-col justify-start lg:justify-evenly items-center shadow-2xl border-solid border-4 border-zinc-800 bg-white dark:bg-zinc-800 mb-5 lg:mb-10 py-2"
      >
        <h2 className=" text-2xl font-bold dark:text-white">Login</h2>
        <input
          type="email"
          className="inputAdd"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="inputAdd"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className=" w-32 h-12 rounded-full text-white font-bold bg-gradient-to-r from-violet-600 to-violet-700 shadow-md shadow-purple-700 hover:from-violet-700 hover:to-violet-800 transition-all">
          Login
        </button>
        <Link to="/register" className="text-violet-700">
          You do not have an account?
        </Link>
      </form>
    </div>
  );
};

export default Login;
