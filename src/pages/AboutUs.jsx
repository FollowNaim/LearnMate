import banner from "@/assets/about/banner.jpg";
import about1 from "@/assets/about/about1.png";
function AboutUs() {
  return (
    <div className="">
      <div
        className="w-full h-full bg-no-repeat py-10 px-10 bg-cover object-cover"
        style={{ backgroundImage: `url('${banner}')` }}
      >
        <div className="container px-4">
          <h3 className="text-white text-4xl font-bold">About Learn Mate</h3>
          <p className="text-white/60 mt-6 max-w-md">
            Empowering learners and educators through innovation, passion, and a
            commitment to excellence.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row gap-12 my-20">
          <div className="flex-1">
            <div>
              <h2 className="text-2xl font-semibold">Who We Are</h2>
              <p className="text-muted-foreground mt-4">
                At Learn Mate, we are passionate about bridging the gap between
                learning and teaching by creating a platform that connects
                students with experts across the globe. We believe that everyone
                has the potential to learn and grow, and our mission is to make
                quality education accessible, personalized, and impactful. With
                a commitment to excellence, we strive to empower learners with
                the tools and guidance they need to achieve their goals.
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold">What We Do</h2>
              <p className="text-muted-foreground mt-4">
                We provide an all-in-one learning solution, offering a wide
                range of courses, one-on-one tutoring sessions, and access to
                top-rated educational resources. Whether youre looking to master
                a new skill, improve your grades, or gain professional
                knowledge, Learn Mate is here to support your journey. By
                combining technology and expertise, we create a seamless
                learning experience that adapts to your individual needs.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <img src={about1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
