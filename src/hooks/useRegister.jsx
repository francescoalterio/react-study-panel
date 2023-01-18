import { registerFirebase } from "../utils/registerFirebase";
import { setDataUser } from "../utils/setDataUser";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const navigate = useNavigate();

  const registerHandler = (e, email, password, repeatPassword) => {
    e.preventDefault();
    registerFirebase(email, password, repeatPassword).then((data) => {
      !data.err ? setDataUser(email) : console.log(data.err);
    });
    navigate("/login");
  };

  return { registerHandler };
}
