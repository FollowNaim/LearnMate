import Category from "@/components/home/category/Category";
import CTA from "@/components/home/cta/CTA";
import { FAQ } from "@/components/home/faq/FAQ";
import Hero from "@/components/home/hero/Hero";
import HowItWorks from "@/components/home/how-it-works/HowItWorks";
import { MarqueeDemo } from "@/components/home/scroller/Scroll";
import Stats2 from "@/components/home/stats/Stats2";
import TopTutorials from "@/components/home/top-tutorials/TopTutorials";
import Seo from "@/components/seo/Seo";

function Home() {
  return (
    <div className="mb-10">
      <Seo
        title={
          "Learn Mate | Empowering Personalized Learning with Expert Tutors"
        }
      />
      <Hero />
      {/* <Stats /> */}
      <Stats2 />
      <Category />
      <TopTutorials />
      <HowItWorks />
      <MarqueeDemo />
      <CTA />
      <FAQ />
    </div>
  );
}

export default Home;
