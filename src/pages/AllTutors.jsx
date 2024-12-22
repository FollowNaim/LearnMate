import Tutor from "@/components/all-tutors/Tutor";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

function AllTutors() {
  const { category } = useParams();
  const { data } = useQuery({
    queryKey: ["tutors"],
    queryFn: () => axios.get(`/tutors?category=${category || ""}`),
  });
  console.log(data?.data);
  return (
    <div className="my-10">
      <div className="container px-4">
        <div className="grid grid-cols-2 gap-4">
          {data?.data.map((tutor) => (
            <Tutor tutor={tutor} key={tutor._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllTutors;
