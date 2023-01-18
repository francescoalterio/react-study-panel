import { registerFirebase } from "../utils/registerFirebase";
import { setDataUser } from "../utils/setDataUser";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const navigate = useNavigate();

  const registerHandler = async (e, email, password, repeatPassword) => {
    e.preventDefault();
    const data = await registerFirebase(email, password, repeatPassword);
    if (!data.err) setDataUser(email);
    navigate("/login");
  };

  return { registerHandler };
}
