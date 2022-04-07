import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const registerFirebase = (email, password, repeatPassword) => {
  if (password !== repeatPassword) {
    return {
      error: true,
      message: "Passwords do not match",
    };
  } else {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email.toLowerCase(), password)
      .then((res) => {
        return {
          user: res.user,
          error: false,
          message: "User created",
        };
      })
      .catch((error) => {
        return {
          error: true,
          message: error.message,
        };
      });
  }
};
