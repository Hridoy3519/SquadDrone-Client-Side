import initializeFirebaseAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getIdToken,
} from "firebase/auth";
import { useEffect, useState } from "react";
initializeFirebaseAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  //Firebase
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //Register user using email & password
  const handleRegisterUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName: name };
        setUser(newUser);

        //update user information in firebase
        updateUserInfo(name);
        //save user on Database
        // saveUser(email, name, password, "POST");

        setErrorMessage("");
        history.push("/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //Function to update user info in firebase
  const updateUserInfo = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  //Login using email and password
  const logIn = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setErrorMessage("");

        const destination = location?.state?.from || "/";
        history.push(destination);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => setIsLoading(false));
  };

//Sign in with google
const googleSignIn = (history, location) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
        .then((result) => {
        const user = result.user;
        setUser(user);
        setErrorMessage("");

        // saveUser(user.email, user.displayName, "", "PUT");
        const destination = location?.state?.from || "/";
        history.push(destination);
        })
        .catch((error) => {
        setErrorMessage(error.message);
        })
        .finally(() => setIsLoading(false));
    };

    ///Logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
      if (user) {
        setUser(user);
        // getIdToken(user).then((idToken) => setToken(idToken));
      } else {
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unSubscribe;
  }, [auth]);

  return {
    user,
    isLoading,
    errorMessage,
    handleRegisterUser,
    logOut,
    logIn,
    googleSignIn,
    setErrorMessage
  };
};

export default useFirebase;
