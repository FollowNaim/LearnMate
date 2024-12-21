import { Button } from "@/components/ui/button";

function Header() {
  return (
    <div>
      <div className="container px-4 border-b border-border flex justify-between items-center py-2">
        <div>
          <h1 className="text-2xl font-bold">TutorHub </h1>
        </div>
        <div>
          <ul className="flex items-center gap-4">
            <li>Home</li>
            <li>Find tutors</li>
            <li>Add Tutorials</li>
            <li>My Tutorials</li>
            <li>My booked tutors</li>
          </ul>
        </div>
        <div>
          <Button variant="ghost">Login</Button>
          <Button>Register</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
