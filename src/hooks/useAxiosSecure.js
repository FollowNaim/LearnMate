import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

function useAxiosSecure() {
  const navigate = useNavigate();
  const { handleSignOut } = useAuth();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => res,
      (err) => {
        console.log("caught on interceptor", err);
        if (err.status === 401 || err.status === 403) {
          handleSignOut();
          navigate("/auth/signin");
        }
      }
    );
  }, [navigate, handleSignOut]);

  return axiosSecure;
}

export default useAxiosSecure;
