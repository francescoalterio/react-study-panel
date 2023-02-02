import { useContext, useEffect } from "react";

import {
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import { initialState, UserContext } from "../context/UserContext";

export function useLogin() {
  const [user, handleUser] = useContext(UserContext);
  const loginWithGithub = () => {
    const provider = new GithubAuthProvider();
    const auth = getAuth();
    signInWithRedirect(auth, provider);
  };

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        handleUser(initialState);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const auth = getAuth();
    getRedirectResult(auth)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        if (credential) {
          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          const token = credential.accessToken;
          // ...
          console.log({ token });
        }

        // The signed-in user info.
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  }, []);

  return { loginWithGithub, logout };
}
