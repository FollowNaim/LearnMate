import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
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
          handleSignOut().then(() => {
            axios.get("/clearjwt", { withCredentials: true }).then(() => {
              if (err.status === 401) {
                toast.error("Unauthorized access! signout successfull!");
              } else if (err.status === 403) {
                toast.error("Forbidden access! signout successfull!");
              }
            });
            navigate("/auth/signin");
          });
        }
      }
    );
  }, [navigate, handleSignOut]);

  return axiosSecure;
}

export default useAxiosSecure;
