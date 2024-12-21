import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="container px-4 border-b border-border flex justify-between items-center py-2">
        <div>
          <h1 className="text-2xl font-bold">TutorHub </h1>
        </div>
        <div>
          <ul id="navlinks" className="flex items-center gap-4">
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/find-tutors"}>
              <li>Find tutors</li>
            </NavLink>
            <li>Add Tutorials</li>
            <li>My Tutorials</li>
            <li>My booked tutors</li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost">Login</Button>
          <Button className="">Register</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
