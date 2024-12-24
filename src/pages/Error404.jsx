import error404 from "@/assets/animation/404.json";
import Seo from "@/components/seo/Seo";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="container mx-auto flex flex-col min-h-screen justify-center items-center text-center">
      <Seo title={"Page Not Found | Learn Mate"} />
      <div className="w-72 h-72">
        <Lottie
          width={300}
          height={300}
          animationData={error404}
          autoplay={true}
          loop={true}
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold">Oh No!... We Lost This Page</h2>
        <p className="text-muted-foreground/80 mt-3">
          We suggest you go to homepage while we fixing the problem.
        </p>
        <Link to={"/"}>
          {" "}
          <Button size="lg" className="mt-6">
            Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Error404;
