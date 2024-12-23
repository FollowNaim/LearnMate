import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CategoryCard from "./CategoryCard";

function Category() {
  const { data } = useQuery({
    queryKey: ["category"],
    queryFn: () => axios.get("/categories"),
  });
  console.log(data?.data.english);
  return (
    <div className="my-10">
      <div className="container px-4">
        <div className=" mb-10">
          <h2 className="text-center text-3xl font-semibold">
            Explore Our <span className="text-red-600">Expert Categories</span>
          </h2>
          <p className="text-center mx-auto max-w-lg mt-4 text-muted-foreground">
            Find the perfect category for your learning goals.
          </p>
        </div>
        <div className="grid grid-cols-3 mx-auto gap-5">
          <CategoryCard count={data?.data.english || 0} title={"english"} />
          <CategoryCard count={data?.data.bangla || 0} title={"bangla"} />
          <CategoryCard count={data?.data.arabic || 0} title={"arabic"} />
          <CategoryCard count={data?.data.spanish || 0} title={"spanish"} />
          <CategoryCard count={data?.data.chinese || 0} title={"chinese"} />
          <CategoryCard count={data?.data.germen || 0} title={"germen"} />
          <CategoryCard count={data?.data.italian || 0} title={"italian"} />
          <CategoryCard count={data?.data.french || 0} title={"french"} />
          <CategoryCard count={data?.data.japanese || 0} title={"japanese"} />
        </div>
      </div>
    </div>
  );
}

export default Category;
