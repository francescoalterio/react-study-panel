import { getDocument } from "../utils/getDocument";
import { loginFirebase } from "../utils/loginFirebase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export function useLogin() {
  const navigate = useNavigate();
  const [user, handleUser] = useContext(UserContext);
  const loginHandler = async (e, email, password) => {
    e.preventDefault();
    const userData = await loginFirebase(email, password);
    if (!userData.err) {
      const data = await getDocument("users", userData.user.email);
      handleUser({
        email: userData.user.email,
        learning: data.learning,
        dominated: data.dominated,
        created: data.created,
      });
      navigate("/");
    }
  };

  return { loginHandler };
}
