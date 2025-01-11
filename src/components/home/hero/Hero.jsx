import check from "@/assets/hero/check.png";
import hero from "@/assets/hero/hero.jpg";
import MotionTitle from "@/components/animation/MotionTitle";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
function Hero() {
  return (
    <div className="bg-destructive/20">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center lg:pl-4 container">
        <div className="col-span-1 py-10 lg:py-20 px-4 lg:px-0">
          <MotionTitle>
            <h4 className="text-3xl lg:text-4xl font-bold max-w-lg leading-tight">
              <span className="text-red-600">Top</span> tutors. Tailored
              <span className="text-red-600"> courses. </span>
              Achieve <span className="text-red-600"> success. </span>
            </h4>
          </MotionTitle>
          <p className="py-4 max-w-md text-muted-foreground">
            Unlock your full potential with personalized learning from top-rated
            tutors and expertly crafted courses designed to help you achieve
            your goals and thrive in your academic or professional journey.
          </p>
          <div className="flex flex-col gap-3">
            <p className="flex items-center gap-3">
              <img className="size-5" src={check} />
              <span>Top Tutors, Tailored to You</span>
            </p>
            <p className="flex items-center gap-3">
              <img className="size-5" src={check} />
              <span>1-on-1 Lessons, Fully Customizable</span>
            </p>
            <p className="flex items-center gap-3">
              <img className="size-5" src={check} />
              <span>Trusted by Millions Worldwide</span>
            </p>
          </div>
          <Link to={"/find-tutors"}>
            <Button size="lg" className="mt-8">
              Start Your Journey Today!
            </Button>
          </Link>
        </div>
        <div className="col-span-1 order-first lg:order-none h-full w-full">
          <div
            className="h-72 md:h-96 lg:h-full bg-center w-full bg-cover bg-no-repeat"
            style={{ backgroundImage: `url('${hero}')` }}
          >
            {/* <img className="w-11/12 mx-auto" src={hero} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
