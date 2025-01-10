import defaultUser from "@/assets/header/user.png";
import Moon from "@/assets/theme/Moon";
import Sun from "@/assets/theme/Sun";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconButton } from "@/components/ui/IconButton";
import { useAuth } from "@/hooks/useAuth";
import useTheme from "@/hooks/useTheme";
import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const { user, handleSignOut } = useAuth();
  const { toggleTheme, isDark } = useTheme();
  const { pathname } = useLocation();
  const handleLogout = () => {
    toast.promise(handleSignOut(), {
      loading: "Logging out...",
      success: <b>Logout Successfull!</b>,
      error: <b>Could not save.</b>,
    });
    setOpen(false);
  };
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <div>
      <div className="container px-4 border-b border-border flex justify-between items-center py-2 fixed top-0 backdrop-blur-md z-[20000]">
        <div>
          <Link to={"/"}>
            <h1 className="text-2xl font-bold">LearnMate </h1>
          </Link>
        </div>
        <div className="">
          <ul
            id="navlinks"
            className={`flex flex-col absolute w-full lg:w-fit bg-white dark:bg-black md:bg-transparent md:dark:bg-transparent backdrop-blur-lg lg:bg-transparent top-0 left-0 z-10 ${
              isOpen
                ? "translate-y-[65px] duration-300 ease-in-out py-8"
                : "-translate-y-full lg:translate-y-0"
            } lg:static lg:flex-row items-center gap-4`}
          >
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
            <NavLink to={"/my-tutors"}>
              <li>My booked tutors</li>
            </NavLink>
            {!user && (
              <div className="flex flex-col md:hidden gap-2">
                <Link to={"/auth/signin"}>
                  <Button className="w-full" variant="ghost">
                    Login
                  </Button>
                </Link>
                <Link to={"/auth/signup"}>
                  <Button className="">Register</Button>
                </Link>
              </div>
            )}
            {user && (
              <Button onClick={handleLogout} className="block lg:hidden">
                Sign Out
              </Button>
            )}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <div className="pr-2">
            {!isDark && (
              <IconButton onClick={() => toggleTheme(!isDark)}>
                <Sun />
              </IconButton>
            )}
            {isDark && (
              <IconButton onClick={() => toggleTheme(!isDark)}>
                <Moon />
              </IconButton>
            )}
          </div>
          {!user && (
            <div className="hidden md:block">
              <Link to={"/auth/signin"}>
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to={"/auth/signup"}>
                <Button className="">Register</Button>
              </Link>
            </div>
          )}

          {user && (
            <>
              <Tooltip id="name-tooltip" />
              <div className="flex items-center gap-2 ">
                <div className="flex items-center pr-2">
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
                        {/* <AvatarFallback
                          data-tooltip-id="name-tooltip"
                          data-tooltip-content={user.displayName || "N/A"}
                        >
                          N
                        </AvatarFallback> */}
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
                      <DropdownMenuItem>
                        {user?.displayName || "N/A"}
                      </DropdownMenuItem>
                      <DropdownMenuItem>{user?.email}</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <Button onClick={handleLogout} className="hidden lg:block">
                  Sign Out
                </Button>
              </div>
            </>
          )}

          <div className="block lg:hidden">
            <Hamburger size={22} toggle={setOpen} toggled={isOpen} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
