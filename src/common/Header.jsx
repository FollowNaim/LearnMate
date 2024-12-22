import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const { user, handleSignOut } = useAuth();
  const handleLogout = () => {
    toast.promise(handleSignOut(), {
      loading: "Logging out...",
      success: <b>Logout Successfull!</b>,
      error: <b>Could not save.</b>,
    });
  };
  return (
    <div>
      <div className="container px-4 border-b border-border flex justify-between items-center py-2">
        <div>
          <h1 className="text-2xl font-bold">LearnMate </h1>
        </div>
        <div>
          <ul id="navlinks" className="flex items-center gap-4">
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/find-tutors"}>
              <li>Find tutors</li>
            </NavLink>
            <NavLink to={"/add-tutorials"}>
              <li>Add Tutorials</li>
            </NavLink>
            <NavLink to={"/my-tutorials"}>
              <li>My Tutorials</li>
            </NavLink>
            <Link to={"/my-tutors"}>
              <li>My booked tutors</li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          {!user && (
            <>
              <Link to={"/auth/signin"}>
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to={"/auth/signup"}>
                <Button className="">Register</Button>
              </Link>
            </>
          )}
          {user && (
            <Button onClick={handleLogout} className="">
              Sign Out
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
