import photo1 from "@/assets/login/photo1.jpg";
import Seo from "@/components/seo/Seo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function SignIn() {
  const {
    handleLogin,
    handleGoogleLogin,
    user,
    setLoading,
    loading,
    isTokenLoading,
    handleGithubLogin,
  } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate("/");
  }, [user]);
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const { email, password } = Object.fromEntries(new FormData(e.target));
    toast
      .promise(handleLogin(email, password), {
        loading: "Signin...",
        success: <b>Signed in successfull !</b>,
        error: (err) => {
          return <b>{err.message}</b>;
        },
      })
      .then((res) => {
        axios
          .post(
            "/jwt",
            { name: res.user.displayName, email: res.user.email },
            { withCredentials: true }
          )
          .then(() => {
            navigate(state || "/");
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const handleGoogle = () => {
    setLoading(true);
    toast
      .promise(handleGoogleLogin(), {
        loading: "Signin...",
        success: <b>Signed in successfull !</b>,
        error: (err) => {
          return <b>{err.message}</b>;
        },
      })
      .then((res) => {
        axios
          .post(
            "/jwt",
            { name: res.user.displayName, email: res.user.email },
            { withCredentials: true }
          )
          .then(() => {
            navigate(state || "/");
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const handleGithub = () => {
    setLoading(true);
    toast
      .promise(handleGithubLogin(), {
        loading: "Signin...",
        success: <b>Signed in successfull !</b>,
        error: (err) => {
          return <b>{err.message}</b>;
        },
      })
      .then((res) => {
        axios
          .post(
            "/jwt",
            { name: res.user.displayName, email: res.user.email },
            { withCredentials: true }
          )
          .then(() => {
            navigate(state || "/");
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center max-w-7xl mx-auto px-4 lg:pl-0 lg:pr-4 items-center">
      <Seo title={"Login to Your Account | Learn Mate"} />
      <div
        className="w-full h-full mx-auto col-span-1 hidden lg:block bg-cover bg-no-repeat bg-top"
        style={{ backgroundImage: `url('${photo1}')` }}
      ></div>
      <Card
        className="lg:max-w-sm w-full
       mx-auto my-10 col-span-1"
      >
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your info below to login to your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input name="password" id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <div className="flex items-center gap-4">
                {" "}
                <Button
                  onClick={handleGoogle}
                  variant="outline"
                  className="w-full"
                >
                  <FaGoogle /> Google
                </Button>
                <Button
                  onClick={handleGithub}
                  variant="outline"
                  className="w-full"
                >
                  <FaGithub /> Github
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/auth/signup" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  );
}
