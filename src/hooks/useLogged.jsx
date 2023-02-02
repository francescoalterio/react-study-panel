import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { getDocument } from "../utils/getDocument";

export const useLogged = () => {
  const [user, handleUser] = useContext(UserContext);

  useEffect(() => {
    getAuth().onAuthStateChanged((usr) => {
      if (usr) {
        getDocument("users", usr.uid).then((data) => {
          handleUser({
            userData: usr,
            learning: data.learning,
            dominated: data.dominated,
            created: data.created,
          });
        });
      }
    });
  }, []);
};
