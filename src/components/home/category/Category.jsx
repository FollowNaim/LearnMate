import CategoryCard from "./CategoryCard";

function Category() {
  return (
    <div className="my-10">
      <div className="container px-4">
        <div>
          <h2 className="text-center text-3xl font-semibold mb-10">
            Our Categories
          </h2>
        </div>
        <div className="grid grid-cols-3 mx-auto gap-5">
          <CategoryCard title={"english"} />
          <CategoryCard title={"bangla"} />
          <CategoryCard title={"arabic"} />
          <CategoryCard title={"spanish"} />
          <CategoryCard title={"chinese"} />
          <CategoryCard title={"germen"} />
          <CategoryCard title={"italian"} />
          <CategoryCard title={"french"} />
          <CategoryCard title={"japanese"} />
        </div>
      </div>
    </div>
  );
}

export default Category;
