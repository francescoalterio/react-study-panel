import { getDocument } from "../utils/getDocument";
import { loginFirebase } from "../utils/loginFirebase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export function useLogin() {
  const navigate = useNavigate();
  const [user, handleUser] = useContext(UserContext);
  const loginHandler = (e, email, password) => {
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

  return { loginHandler };
}
