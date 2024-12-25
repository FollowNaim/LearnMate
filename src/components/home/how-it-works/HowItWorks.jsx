import img1 from "@/assets/how-works/01.svg";
import img2 from "@/assets/how-works/02.svg";
import img3 from "@/assets/how-works/03.svg";
import img4 from "@/assets/how-works/04.svg";
import MotionTitle from "@/components/animation/MotionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SingleCard from "./SingleCard";
function HowItWorks() {
  return (
    <div className="my-10 px-4 ">
      <div
        className="container overflow-x-hidden p-4 lg:p-8
       border rounded-md relative before:absolute before:-right-20 before:top-0 before:w-1/3 before:-skew-x-12 before:h-full before:bg-red-100/40 before:blur-xl before:z-10 dark:before:bg-red-500/10 "
      >
        <div className="mb-6">
          <MotionTitle>
            <h2 className="text-3xl font-bold">
              How Learn Mate <span className="text-red-600">Works ?</span>
            </h2>
          </MotionTitle>
          <p className="text-muted-foreground mt-3">
            Seamlessly connect with the perfect tutor in just a few simple
            steps.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SingleCard
            count={1}
            img={img1}
            subtitle={
              "Sign up in just a few clicks to become part of a thriving educational platform. Whether you're a tutor or a learner, creating an account is the first step to accessing a world of opportunities."
            }
            title={
              <h2 className="text-2xl font-semibold py-4">
                <span className="text-red-600">Create</span> Your Account
              </h2>
            }
          />
          <SingleCard
            count={2}
            img={img2}
            subtitle={
              "Easily upload your tutorials with engaging content and detailed descriptions. Showcase your expertise, whether in languages, academics, or hobbies, and attract the right learners."
            }
            title={
              <h2 className="text-2xl font-semibold py-4">
                <span className="text-red-600">Post</span> Your Tutorial
              </h2>
            }
          />
          <SingleCard
            count={3}
            img={img3}
            subtitle={
              "Customize your pricing to reflect your experience and the value of your lessons. Empower yourself with flexible options to suit your preferences and meet learners' budgets."
            }
            title={
              <h2 className="text-2xl font-semibold py-4">
                Set a <span className="text-red-600">Price</span>
              </h2>
            }
          />
          <SingleCard
            count={4}
            img={img4}
            subtitle={
              "Receive direct bookings from learners interested in your tutorials. Secure payments, build your profile, and create a consistent income stream by sharing your knowledge."
            }
            title={
              <h2 className="text-2xl font-semibold py-4">
                Get Bookings and{" "}
                <span className="text-red-600">Earn Money</span>
              </h2>
            }
          />
        </div>
        <div className="flex justify-center items-center mt-6 relative z-50">
          <Link to={"/add-tutorials"}>
            <Button size="lg">Join LearnMate now!</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
