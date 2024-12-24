import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CategoryCard from "./CategoryCard";
import MotionTitle from "@/components/animation/MotionTitle";

function Category() {
  const { data } = useQuery({
    queryKey: ["category"],
    queryFn: () => axios.get("/categories"),
  });
  return (
    <div className="my-10">
      <div className="container px-4">
        <div className=" mb-10">
          <MotionTitle>
            <h2 className="text-center text-3xl font-semibold">
              Explore Our{" "}
              <span className="text-red-600">Expert Categories</span>
            </h2>
          </MotionTitle>
          <p className="text-center mx-auto max-w-lg mt-4 text-muted-foreground">
            Find the perfect category for your learning goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5">
          <CategoryCard
            icon={
              "https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
            }
            count={data?.data.english || 0}
            title={"english"}
          />
          <CategoryCard
            icon={
              "https://purecatamphetamine.github.io/country-flag-icons/3x2/BD.svg"
            }
            count={data?.data.bangla || 0}
            title={"bangla"}
          />
          <CategoryCard
            icon={
              "https://purecatamphetamine.github.io/country-flag-icons/3x2/SA.svg"
            }
            count={data?.data.arabic || 0}
            title={"arabic"}
          />
          <CategoryCard
            icon={
              "https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg"
            }
            count={data?.data.spanish || 0}
            title={"spanish"}
          />
          <CategoryCard
            icon={
              "https://purecatamphetamine.github.io/country-flag-icons/3x2/CN.svg"
            }
            count={data?.data.chinese || 0}
            title={"chinese"}
          />
          <CategoryCard
            icon={
              "https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg"
            }
            count={data?.data.germen || 0}
            title={"germen"}
          />
          <CategoryCard
            icon={
              "https://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg"
            }
            count={data?.data.italian || 0}
            title={"italian"}
          />
          <CategoryCard
            icon={
              "https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"
            }
            count={data?.data.french || 0}
            title={"french"}
          />
          <CategoryCard
            icon={
              "https://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg"
            }
            count={data?.data.japanese || 0}
            title={"japanese"}
          />
        </div>
      </div>
    </div>
  );
}

export default Category;
