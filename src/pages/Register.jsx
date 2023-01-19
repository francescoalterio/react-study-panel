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
        className=" w-80 lg:w-96 lg:h-96 rounded-2xl flex flex-col justify-start lg:justify-evenly items-center dark:bg-[#1A1C22]  mb-5 lg:mb-10 py-2"
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
        <button className="btn-secondary">Register</button>
        <Link to="/login" className="text-[#1FCB4F]">
          you have an account?
        </Link>
      </form>
    </div>
  );
};

export default Register;
