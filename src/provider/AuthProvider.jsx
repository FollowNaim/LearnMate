import { auth } from "@/firebase/firebase.config";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const handleLogin = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const handleGoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const handleSignup = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const handleSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    console.log(user);
  }, [user]);
  useEffect(() => {
    const unsubscribe = () => {
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser?.email) {
          const user = {
            uid: currentUser.uid,
            name: currentUser.displayName,
            email: currentUser.email,
          };

          axios.post("/user", user);
        }
        setUser(currentUser);
        setLoading(false);
      });
    };
    return () => unsubscribe();
  }, []);
  const authInfo = {
    user,
    loading,
    handleGoogleLogin,
    handleLogin,
    handleSignup,
    handleSignOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
