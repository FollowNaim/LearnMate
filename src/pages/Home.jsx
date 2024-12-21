import Category from "@/components/home/category/Category";
import Hero from "@/components/home/hero/Hero";
import Stats from "@/components/home/stats/Stats";

function Home() {
  return (
    <div className="my-10">
      <Hero />
      <Stats />
      <Category />
    </div>
  );
}

export default Home;
