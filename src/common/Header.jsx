import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="container px-4 border-b border-border flex justify-between items-center py-2">
        <div>
          <h1 className="text-2xl font-bold">TutorHub </h1>
        </div>
        <div>
          <ul className="flex items-center gap-4">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/find-tutors"}>
              <li>Find tutors</li>
            </Link>
            <li>Add Tutorials</li>
            <li>My Tutorials</li>
            <li>My booked tutors</li>
          </ul>
        </div>
        <div>
          <Button variant="ghost">Login</Button>
          <Button className="">Register</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
