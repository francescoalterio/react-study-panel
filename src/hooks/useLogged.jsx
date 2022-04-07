import { getAuth } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { getDocument } from "../utils/getDocument";

export const useLogged = () => {
  const [user, handleUser] = useContext(UserContext);
  const auth = getAuth();
  setTimeout(() => {
    if (auth.currentUser && !user.email) {
      getDocument("users", auth.currentUser.email).then((data) => {
        handleUser({
          email: auth.currentUser.email,
          learning: data.learning,
          dominated: data.dominated,
          created: data.created,
        });
      });
    }
  }, 1000);
};
