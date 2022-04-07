import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginFirebase = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      return {
        user: res.user,
        error: false,
        message: "Successfully logged in",
      };
    })
    .catch((error) => {
      return {
        error: true,
        message: error.message,
      };
    });
};
