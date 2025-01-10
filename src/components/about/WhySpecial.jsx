import img2 from "@/assets/about/badge.png";
import img6 from "@/assets/about/business.png";
import img3 from "@/assets/about/calendar.png";
import img1 from "@/assets/about/classroom.png";
import img5 from "@/assets/about/computer.png";
import img4 from "@/assets/about/planet-earth.png";
import MotionTitle from "../animation/MotionTitle";
function WhySpecial() {
  const data = [
    {
      icon: img1,
      title: (
        <h4 className="text-xl font-semibold mt-3">
          <span className="text-red-600">Personalized</span> Learning
        </h4>
      ),
      subtitle:
        "Experience a truly personalized approach to education, where your learning journey is customized to align with your goals, strengths, and interests.",
    },
    {
      icon: img2,
      title: (
        <h4 className="text-xl font-semibold mt-3">
          Access to <span className="text-red-600">Expert </span>
          Tutors
        </h4>
      ),
      subtitle:
        "Gain exclusive access to a network of highly qualified, passionate tutors who bring years of expertise to help guide you toward academic and professional success.",
    },
    {
      icon: img3,
      title: (
        <h4 className="text-xl font-semibold mt-3">
          <span className="text-red-600">Flexible</span> Learning Schedule
        </h4>
      ),
      subtitle:
        "Take control of your learning schedule with flexible study options that allow you to learn at your own pace, whenever and wherever fits into your busy life.",
    },
    {
      icon: img4,
      title: (
        <h4 className="text-xl font-semibold mt-3">
          <span className="text-red-600">Global</span> Learning Community
        </h4>
      ),
      subtitle:
        "Become part of a vibrant, global community of learners and educators, where diverse perspectives and ideas come together to enrich your educational experience.",
    },
    {
      icon: img5,
      title: (
        <h4 className="text-xl font-semibold mt-3">
          <span className="text-red-600">Innovative</span> Learning Learning
          Tools
        </h4>
      ),
      subtitle:
        "Utilize cutting-edge learning tools and resources designed to enhance your experience, from interactive modules to engaging multimedia content that makes learning more enjoyable.",
    },
    {
      icon: img6,
      title: (
        <h4 className="text-xl font-semibold mt-3">
          Learning Continuous Progress{" "}
          <span className="text-red-600">Tracking</span>
        </h4>
      ),
      subtitle:
        "Stay on top of your learning progress with continuous tracking and feedback, ensuring that you are always moving forward toward your academic and professional goals.",
    },
  ];
  return (
    <div>
      <div className="container mx-auto px-4 my-10">
        <div className="text-center">
          <MotionTitle>
            <h2 className="text-3xl font-bold">
              Why Learn Mate Is <span className="text-red-600">Unique ?</span>
            </h2>
          </MotionTitle>
          <p className="text-muted-foreground mt-4">
            Let’s Discover What Makes Us Stand Out!
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8">
          {data.map((item) => (
            <div
              key={item}
              className="border  hover:border-red-600 duration-200
               transition-all ease-in-out border-border p-4"
            >
              <img className="size-12" src={item.icon} alt="" />
              {item.title}
              <p className="mt-4 text-muted-foreground">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhySpecial;
