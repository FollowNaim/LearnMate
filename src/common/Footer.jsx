import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="border-t border-border">
      <div className="container px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 pt-14 pb-8">
        <div className="lg:col-span-4 lg:pr-20 flex flex-col">
          <h4 className="text-2xl font-bold">
            Learn <span className="text-red-600">Mate</span>
          </h4>
          <p className="text-muted-foreground mt-3">
            Empowering your journey with personalized tutoring and tailored
            learning solutions to achieve greatness.
          </p>
          <div className="mt-4">
            <p className="flex items-center gap-3">
              <MdOutlineDateRange />{" "}
              <span className="text-muted-foreground/90">
                Mon - Fri: 9AM - 10PM
              </span>
            </p>
            <p className="flex items-center gap-3 mt-2">
              <MdOutlineDateRange />{" "}
              <span className="text-muted-foreground/90">
                Sat - Sun: 10AM-8PM
              </span>
            </p>
          </div>
          {/* <img className="mt-4" src={payPhoto} alt="" /> */}
        </div>
        <div className="lg:col-span-2">
          <h4>Quick Links</h4>
          <div className="mt-4 text-muted-foreground/70">
            <ul className="flex flex-col gap-2">
              <Link to={"/"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  Home
                </li>
              </Link>

              <Link to={"/find-tutors"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  Find Tutors
                </li>
              </Link>
              <Link to={"/about"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  About Us
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-2">
          <h4>Essential Links</h4>
          <div className="mt-4 text-muted-foreground/70">
            <ul className="flex flex-col gap-2">
              <Link to={"/auth/signin"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  Sign In
                </li>
              </Link>
              <Link to={"/auth/signup"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  Register
                </li>
              </Link>
              <Link to={"/my-tutors"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  My Tutors
                </li>
              </Link>
              <Link to={"/my-tutorials"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  My Tutorials
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-4">
          <h4>Our Instagram</h4>
          <div className="grid grid-cols-3 gap-3 mt-6">
            <img
              className="rounded-xl h-16 w-full object-cover"
              src={
                "https://a-us.storyblok.com/f/1015657/2250x1500/3dd479b4bb/privatetutorsbacktoschool.webp"
              }
              alt=""
            />
            <img
              className="rounded-xl h-16 w-full object-cover"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7vmmR0_w4XJVRxPnMJ-QiBKZcEi3fU5XRI54KgFXvbCeZbnrBg65zBs4rWQfZjtM_hY&usqp=CAU"
              }
              alt=""
            />
            <img
              className="rounded-xl h-16 w-full object-cover"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwZv1ipnqPoPL2aiGVP3AB4cmUJzCB1w3dUa2toEg6UPG1Wl-t2QS7bI0_hZI-_3Zr3nE&usqp=CAU"
              }
              alt=""
            />
          </div>
          <div className="grid grid-cols-3 gap-3 mt-3">
            <img
              className="rounded-xl h-16 w-full object-cover"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNUCY2dMqDc9iXqfg-FAa8FI3OqSFoIIxe1A&s"
              }
              alt=""
            />
            <img
              className="rounded-xl h-16 w-full object-cover"
              src={
                "https://img.freepik.com/free-photo/indoor-shot-positive-friendly-classmates-work-together-clever-unrecognizable-girl-helps-asian-guy-with-exam-preparation_273609-44828.jpg"
              }
              alt=""
            />
            <img
              className="rounded-xl h-16 w-full object-cover"
              src={
                "https://img.freepik.com/free-photo/teacher-class-explaining-lesson-student_23-2148665951.jpg"
              }
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row gap-5 lg:gap-0 justify-between items-center">
          <p>Learn Mate © 2024 Developed by Naim</p>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com">
              <FaFacebook className="hover:text-black" size={22} color="blue" />
            </a>
            <a href="https://instagram.com">
              <FaInstagram className="hover:text-black" size={22} color="red" />
            </a>
            <a href="https://youtube.com">
              <FaYoutube className="hover:text-black" size={22} color="red" />
            </a>
            <a href="https://linkedin.com">
              <FaLinkedin className="hover:text-black" size={22} color="blue" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
