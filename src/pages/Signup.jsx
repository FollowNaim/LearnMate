import Validation from "@/components/signup/PassValidation";
import photo1 from "@/assets/login/photo2.jpg";
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
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [isDisable, setIsDisable] = useState(true);
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full max-w-7xl mx-auto pr-4">
      <div
        className="col-span-1 bg-cover bg-right bg-no-repeat w-full h-full hidden md:block"
        style={{ backgroundImage: `url('${photo1}')` }}
      ></div>
      <form className="col-span-1 py-10">
        <Card className="md:max-w-sm w-full  mx-auto ">
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
