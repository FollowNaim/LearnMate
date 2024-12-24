import cta from "@/assets/cta/cta.png";
import { Button } from "@/components/ui/button";
function CTA() {
  return (
    <div
      className="bg-cover bg-no-repeat flex flex-col justify-center items-center py-10 my-10"
      style={{ backgroundImage: `url('${cta}')` }}
    >
      <div>
        <h2 className="text-2xl font-semibold dark:text-black">
          Looking to tutor with LearnMate?
        </h2>
        <p className="mt-2 text-black/80">
          Were always looking for talented tutors. Set your own rate, get paid
          and make a difference
        </p>
        <Button className="mt-6" size="lg">
          Join Our Tutor Team Today!
        </Button>
      </div>
    </div>
  );
}

export default CTA;
