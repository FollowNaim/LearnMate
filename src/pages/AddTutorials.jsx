import fillAnimation from "@/assets/animation/addtutorials.json";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/hooks/useAuth";
import axios from "axios";
import Lottie from "lottie-react";

export default function AddTutorials() {
  const { user } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    data.name = user?.displayName;
    data.email = user?.email;
    data.review = 0;
    const res = axios.post("/tutors", data);
    console.log(res);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto items-center justify-center mt-10 mb-14 px-4 md:px-6">
      <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit}>
        <Card className="w-full max-w-lg mx-auto">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl">Add Tutorial</CardTitle>
            <CardDescription>
              Expand your collection with the latest gear additions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="grid gap-2 w-full">
                <Label>User Name</Label>
                <Input name="name" disabled value={user?.displayName} />
              </div>
              <div className="grid gap-2 w-full">
                <Label>User Email</Label>
                <Input name="email" disabled value={user?.email} />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="grid gap-2 w-full">
                <Label htmlFor="image">Image</Label>
                <Input
                  name="image"
                  id="image"
                  type="url"
                  placeholder="Enter the tutorial photo"
                />
              </div>
              <div className="grid gap-2 w-full">
                <div className="grid gap-2 w-full">
                  <Label htmlFor="price">Price (in dollar)</Label>
                  <Input
                    required
                    name="price"
                    step="0.01"
                    id="price"
                    type="number"
                    placeholder="Enter your price"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="grid gap-2 w-full">
                <Label htmlFor="role">Language</Label>
                <Select id="category" name="category" defaultValue="english">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="bangla">Bangla</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="italian">Italian</SelectItem>
                    <SelectItem value="germen">Germen</SelectItem>
                    <SelectItem value="arabic">Arabic</SelectItem>
                    <SelectItem value="japanese">Japanese</SelectItem>
                    <SelectItem value="chinese">Chinese</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="grid gap-2 w-full">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  required
                  name="description"
                  id="description"
                  type="text"
                  className="h-32"
                  placeholder="Enter the description."
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Add Tutorial</Button>
          </CardFooter>
        </Card>
      </form>
      <div className="w-[300px] h-[300px] mx-auto col-span-1 hidden md:block">
        <Lottie
          width={300}
          height={300}
          animationData={fillAnimation}
          autoplay={true}
          loop={true}
        />
      </div>
    </div>
  );
}
