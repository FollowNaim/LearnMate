import { auth } from "@/firebase/firebase.config";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isTokenLoading, setIsTokenLoading] = useState(true);
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
  const updateInfo = (data) => {
    return updateProfile(auth.currentUser, data);
  };
  const handleSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    console.log("user", user);
  }, [user]);
  useEffect(() => {
    // today is 12-24-24 01:10:AM
    // i was create onAuthStateChanged inside a callback funciton on unsubscribe and it was on development working fine. but on production user reg login etc nothing working and there was no error on console. it was make me mad. spend 1hr+ to find the bug . literally i was thinking something ghost 😂😂 bcz there was no error on console and on development was working fine. and finally i fount thing diamond . ahhh!
    // literally ঘুম হারাম হয়ে গেছিলো 😅
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("currentUser", currentUser);
      if (currentUser?.email) {
        setLoading(true);
        const user = {
          uid: currentUser.uid,
          name: currentUser.displayName,
          email: currentUser.email,
        };
        axios.post("/user", user);
        setIsTokenLoading(true);
        const { data } = axios
          .post(
            "/jwt",
            { name: currentUser.displayName, email: currentUser.email },
            { withCredentials: true }
          )
          .then(() => {
            setUser(currentUser);
            setLoading(false);
            setIsTokenLoading(false);
          });
        console.log(data);
      } else {
        setUser(currentUser);
        setLoading(false);
        setIsTokenLoading(false);
        axios
          .get("/clearjwt", { withCredentials: true })
          .then((res) => console.log(res));
      }
    });

    return () => unsubscribe();
  }, []);
  const authInfo = {
    user,
    loading,
    setLoading,
    isTokenLoading,
    handleGoogleLogin,
    handleLogin,
    handleSignup,
    updateInfo,
    handleSignOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
