import notFound from "@/assets/animation/not-found.json";
import Lottie from "lottie-react";

function NotFound() {
  return (
    <div className="w-full h-full flex justify-center items-center mt-10">
      <div className="w-72 h-72 mx-auto">
        <Lottie
          width={300}
          height={300}
          animationData={notFound}
          autoplay={true}
          loop={true}
        />
      </div>
    </div>
  );
}

export default NotFound;
