import hero from "@/assets/hero/hero.jpg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Button } from "../../ui/button";
function Hero() {
  return (
    <div className="bg-destructive/20 ">
      <div className="grid grid-cols-2 justify-between items-center pl-4 container">
        <div className="col-span-1 py-20">
          <h4 className="text-4xl font-bold">Become fluent in any language</h4>
          <p className="py-4 max-w-md text-muted-foreground">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
            magni quisquam soluta sint, nemo nisi at. Amet sed voluptate animi!
          </p>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-3">
              <IoIosCheckmarkCircle fill="green" color="orange" />{" "}
              <span>Take customizable 1-on-1</span>
            </p>
            <p className="flex items-center gap-3">
              <IoIosCheckmarkCircle fill="green" color="orange" />{" "}
              <span>lessons trusted by millions of users</span>
            </p>
            <p className="flex items-center gap-3">
              <IoIosCheckmarkCircle fill="green" color="orange" />{" "}
              <span>Take lessons trusted by millions of users</span>
            </p>
          </div>
          <Button size="lg" className="mt-8">
            Start Now
          </Button>
        </div>
        <div className="col-span-1 h-full w-full">
          <div
            className="h-full w-full bg-cover bg-no-repeat"
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
