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
        <div className="grid grid-cols-3 w-11/12 mx-auto gap-5">
          {[...Array(6).keys()].map((item) => (
            <CategoryCard key={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
