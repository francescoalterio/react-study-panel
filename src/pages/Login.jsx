import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useTextInput } from "../hooks/useTextInput";

const Login = () => {
  const [email, onChangeEmail] = useTextInput();
  const [password, onChangePassword] = useTextInput();
  const { loginHandler } = useLogin();

  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <form
        onSubmit={(e) => loginHandler(e, email, password)}
        className=" w-80 lg:w-96 lg:h-96 rounded-2xl flex flex-col justify-start lg:justify-evenly items-center dark:bg-[#1A1C22] mb-5 lg:mb-10 py-2"
      >
        <h2 className=" text-2xl font-bold dark:text-white">Login</h2>
        <input
          type="email"
          className="inputAdd"
          placeholder="Email"
          value={email}
          onChange={onChangeEmail}
        />
        <input
          type="password"
          className="inputAdd"
          placeholder="Password"
          value={password}
          onChange={onChangePassword}
        />
        <button className=" btn-secondary">Login</button>
        <Link to="/register" className="text-[#1FCB4F]">
          You do not have an account?
        </Link>
      </form>
    </div>
  );
};

export default Login;
