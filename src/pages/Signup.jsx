import photo1 from "@/assets/login/photo2.jpg";
import Validation from "@/components/signup/PassValidation";
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
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [isDisable, setIsDisable] = useState(true);
  const { handleSignup, updateInfo, user, setLoading } = useAuth();
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate("/");
  }, [user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, photo } = Object.fromEntries(new FormData(e.target));
    console.log(name);
    toast
      .promise(handleSignup(email, pass), {
        loading: "Signin up...",
        success: <b>Signed up successfull !</b>,
        error: (err) => {
          setLoading(false);
          return <b>{err.message}</b>;
        },
      })
      .then((res) => {
        updateInfo({ displayName: name, photoURL: photo }).then(() => {
          axios.patch("/user", {
            name: res.user.displayName,
            email: res.user.email,
          });
        });
        navigate("/");
      });
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center w-full max-w-7xl mx-auto px-4 lg:pl-0 lg:pr-4">
      <div
        className="col-span-1 bg-cover bg-right bg-no-repeat w-full h-full hidden lg:block"
        style={{ backgroundImage: `url('${photo1}')` }}
      ></div>
      <form className="col-span-1 py-10" onSubmit={handleSubmit}>
        <Card className="lg:max-w-sm w-full  mx-auto ">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl">Sign up your account</CardTitle>
            <CardDescription>
              Provide your user info to create a account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                required
                name="name"
                id="name"
                placeholder="Enter the user's name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                required
                name="email"
                id="email"
                type="email"
                placeholder="Enter the user's email"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="photo">Photo URL</Label>
              <Input
                name="photo"
                id="photo"
                type="url"
                placeholder="Enter a photo url"
              />
            </div>
            <div className="grid gap-2">
              {/* <Label htmlFor="password">Password</Label>
              <Input
                name="password"
                id="password"
                type="password"
                placeholder="Enter a password"
              /> */}
              <Validation setPass={setPass} setIsDisable={setIsDisable} />
            </div>
            <Button disabled={isDisable} className="w-full pt-2">
              Sign Up
            </Button>
            <div className="mt-4 text-center text-sm">
              Alreadt have an account?{" "}
              <Link to="/auth/signin" className="underline">
                Sign In
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
