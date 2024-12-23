import defaultUser from "@/assets/header/user.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";

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
          <Link to={"/"}>
            <h1 className="text-2xl font-bold">LearnMate </h1>
          </Link>
        </div>
        <div className="hidden md:block">
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
            <>
              <Tooltip id="name-tooltip" />
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Avatar>
                        <AvatarImage
                          className="object-cover"
                          data-tooltip-id="name-tooltip"
                          data-tooltip-content={user.displayName || "N/A"}
                          referrerPolicy="no-referrer"
                          src={user?.photoURL || defaultUser}
                          alt={user?.displayName}
                        />
                        <AvatarFallback>N</AvatarFallback>
                      </Avatar>
                      {/* <img
                        className="object-cover size-10 rounded-full"
                        data-tooltip-id="name-tooltip"
                        data-tooltip-content={user.displayName || "N/A"}
                        referrerPolicy="no-referrer"
                        alt={user?.displayName}
                        src={user?.photoURL || defaultUser}
                      /> */}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>User Name</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        {user?.displayName || "N/A"}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <Button onClick={handleLogout} className="">
                  Sign Out
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
