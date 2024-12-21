import Category from "@/components/home/category/Category";
import CTA from "@/components/home/cta/CTA";
import Hero from "@/components/home/hero/Hero";
import { MarqueeDemo } from "@/components/home/scroller/Scroll";
import Stats from "@/components/home/stats/Stats";
import Stats2 from "@/components/home/stats/Stats2";

function Home() {
  return (
    <div className="mb-10">
      <Hero />
      {/* <Stats /> */}
      <Stats2 />
      <Category />
      <MarqueeDemo />
      <CTA />
    </div>
  );
}

export default Home;
