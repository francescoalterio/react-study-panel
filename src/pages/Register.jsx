import { Link } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { useTextInput } from "../hooks/useTextInput";

const Register = () => {
  const [email, onChangeEmail] = useTextInput();
  const [password, onChangePassword] = useTextInput();
  const [repeatPassword, onChangeRepeatPassword] = useTextInput();

  const { registerHandler } = useRegister();

  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <form
        onSubmit={(e) => registerHandler(e, email, password, repeatPassword)}
        className=" w-80 lg:w-96 lg:h-96 rounded-2xl flex flex-col justify-start lg:justify-evenly items-center shadow-2xl border-solid border-4 border-zinc-800 bg-white dark:bg-zinc-800 mb-5 lg:mb-10 py-2"
      >
        <h2 className=" text-2xl font-bold dark:text-white">Register</h2>
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
        <input
          type="password"
          className="inputAdd"
          placeholder="Repeat Password"
          value={repeatPassword}
          onChange={onChangeRepeatPassword}
        />
        <button className=" w-32 h-12 rounded-full text-white font-bold bg-gradient-to-r from-violet-600 to-violet-700 shadow-md shadow-purple-700 hover:from-violet-700 hover:to-violet-800 transition-all">
          Register
        </button>
        <Link to="/login" className="text-violet-700">
          you have an account?
        </Link>
      </form>
    </div>
  );
};

export default Register;
