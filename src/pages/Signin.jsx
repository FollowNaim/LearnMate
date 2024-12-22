import photo1 from "@/assets/login/photo1.webp";
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
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function SignIn() {
  const { handleGoogleLogin } = useAuth();
  const handleGoogle = async () => {
    const { user } = await handleGoogleLogin();
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center max-w-7xl mx-auto pr-4 items-center">
      <div
        className="w-full h-full mx-auto col-span-1 hidden md:block bg-cover bg-no-repeat bg-top"
        style={{ backgroundImage: `url('${photo1}')` }}
      ></div>
      <Card
        className="md:max-w-sm w-full
       mx-auto my-10 col-span-1"
      >
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your info below to login to your account
          </CardDescription>
        </CardHeader>
        <form>
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
                <Button variant="outline" className="w-full">
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
