import cta from "@/assets/cta/cta.png";
import MotionTitle from "@/components/animation/MotionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
function CTA() {
  return (
    <div
      className="bg-cover bg-no-repeat flex flex-col justify-center items-center py-10 my-10 px-4"
      style={{ backgroundImage: `url('${cta}')` }}
    >
      <div>
        <MotionTitle>
          <h2 className="text-2xl font-semibold dark:text-black">
            Looking to tutor with LearnMate?
          </h2>
        </MotionTitle>
        <p className="mt-2 text-black/80">
          Were always looking for talented tutors. Set your own rate, get paid
          and make a difference
        </p>
        <Link to={"/add-tutorials"}>
          <Button className="mt-6" size="lg">
            Join Our Tutor Team Today!
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default CTA;
