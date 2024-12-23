import img1 from "@/assets/stats/01.png";
import img2 from "@/assets/stats/02.png";
import img3 from "@/assets/stats/03.png";
import img4 from "@/assets/stats/04.png";
import shape2 from "@/assets/stats/shape-02.png";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SingleStats from "./SingleStats";
function Stats2() {
  const { data } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const count = await axios.get("/tutors?count=true");
      const reviews = await axios.get("/tutors?reviews=true");
      const users = await axios.get("/users");
      return {
        count: count.data,
        reviews: reviews.data[0].review,
        users: users.data,
      };
    },
  });
  console.log(data);
  const stats = [
    {
      title: "Total tutors available for booking and guidance",
      image: img2,
      count: data?.count,
    },
    {
      title: "Total reviews submitted by students on the platform",
      image: img3,
      count: data?.reviews,
    },
    {
      title: "Languages available for learning and exchange on the platform",
      image: img4,
      count: 9,
    },
    {
      title: "Active users including students and tutors",
      image: img1,
      count: data?.users,
    },
  ];
  return (
    <div className="bg-[#F7F8FC] relative my-10 py-10 font-figtree">
      <div
        className="absolute w-1/2 h-full bg-cover bg-no-repeat top-0 right-0"
        style={{ backgroundImage: `url('${shape2}')` }}
      ></div>
      <div className="container px-6">
        <div className="my-6">
          <h2 className="text-3xl font-bold">
            Stats that explain everything <br /> about{" "}
            <span className="text-blue-600">#Our success</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 z-50 relative">
          {stats.map((item, i) => {
            return <SingleStats item={item} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Stats2;
