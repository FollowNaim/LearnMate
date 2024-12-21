import hero from "@/assets/hero/hero.png";
import { FaCommentAlt } from "react-icons/fa";
import { Button } from "../../ui/button";
function Hero() {
  return (
    <div className="">
      <div className="flex justify-between items-center px-4 container">
        <div className="flex-1">
          <h4 className="text-4xl font-bold">Become fluent in any language</h4>
          <p className="py-4 max-w-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
            magni quisquam soluta sint, nemo nisi at. Amet sed voluptate animi!
          </p>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-3">
              <FaCommentAlt fill="orange" color="orange" />{" "}
              <span>Take customizable 1-on-1</span>
            </p>
            <p className="flex items-center gap-3">
              <FaCommentAlt fill="orange" color="orange" />{" "}
              <span>lessons trusted by millions of users</span>
            </p>
            <p className="flex items-center gap-3">
              <FaCommentAlt fill="orange" color="orange" />{" "}
              <span>Take lessons trusted by millions of users</span>
            </p>
          </div>
          <Button size="lg" className="mt-8">
            Start Now
          </Button>
        </div>
        <div className="flex-1">
          <img className="w-11/12 mx-auto" src={hero} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
