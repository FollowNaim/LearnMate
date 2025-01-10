import Tutor from "@/components/all-tutors/Tutor";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function TopTutorials() {
  const { data: tutorials = [], isLoading } = useQuery({
    queryKey: ["tutorials"],
    queryFn: () => axios("/top-tutorials"),
  });
  if (isLoading) return;
  console.log(tutorials);
  return (
    <div>
      <div className="container mx-auto px-4 my-20">
        <div>
          <h2 className="text-center text-3xl font-bold">
            Master the Best – <span className="text-red-600">Top-Rated</span>{" "}
            Tutorials
          </h2>
          <p className="text-center text-muted-foreground mt-4">
            Discover the highest-rated tutorials handpicked by learners for
            their exceptional quality and effectiveness.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {tutorials?.data.map((tutor) => (
            <Tutor key={tutor._id} tutor={tutor} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopTutorials;
