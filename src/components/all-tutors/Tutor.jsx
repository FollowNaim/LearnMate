import useTheme from "@/hooks/useTheme";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { GiDrippingStar } from "react-icons/gi";
import { MdOutlineTranslate } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
function Tutor(props) {
  const { _id, name, bookings, image, price, category, description, review } =
    props.tutor;
  const { isDark } = useTheme();
  return (
    // <div>
    //   <div className="border rounded-md flex gap-4 items-center p-4">
    //     <div>
    //       <img className="w-40" src={tutor} alt="" />
    //     </div>
    //     <div>
    //       <h2>Phillip N.</h2>
    //       <div className="mt-2">
    //         <p className="bg-accent/20 px-1 rounded-md w-fit">Super Tutor</p>
    //         <div className="">
    //           <p className="flex items-center gap-3">
    //             <GiGraduateCap /> <span>English</span>
    //           </p>
    //           <p className="flex items-center gap-3">
    //             <PiStudent /> <span>17 active students</span>
    //           </p>

    //           <p className="flex items-center gap-3">
    //             <MdOutlineReviews /> <span>Total 0 reviews</span>
    //           </p>
    //           <p className="flex items-center gap-3">
    //             <MdOutlineTranslate />{" "}
    //             <span>
    //               {"Speaks English (Native), German (Native)".substring(0, 16)}
    //               ...
    //             </span>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex flex-col justify-between ml-auto">
    //       <div className="flex items-start">
    //         <p className="flex flex-col gap-3">
    //           <p className="flex items-center gap-2">
    //             <FaStar /> 4.9
    //           </p>
    //           <p>30 Review</p>
    //         </p>
    //         <p className="">
    //           <p className="flex items-center gap-2">
    //             <AiTwotoneDollarCircle /> 30
    //           </p>
    //         </p>
    //       </div>
    //       <div>
    //         <Button className="mt-auto" size="lg">
    //           Book Lesson
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Card className="flex flex-col justify-between ">
      <CardHeader className="w-full h-full">
        <div className="w-full relative h-full">
          <img
            className="w-full object-top h-48 md:h-40 object-cover rounded-md"
            src={image}
            alt=""
          />
          <div className="absolute top-4 left-4">
            <img
              className="w-8"
              src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${
                category === "bangla"
                  ? "BD"
                  : category === "english"
                  ? "US"
                  : category === "arabic"
                  ? "SA"
                  : category === "italian"
                  ? "IT"
                  : category === "french"
                  ? "FR"
                  : category === "spanish"
                  ? "ES"
                  : category === "chinese"
                  ? "CN"
                  : category === "germen"
                  ? "DE"
                  : category === "japanese"
                  ? "JP"
                  : "US"
              }.svg`}
              alt=""
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="">
        <CardDescription>
          <div>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              {name}
            </h2>{" "}
            <p className="line-clamp-2 text-muted-foreground mt-4">
              {description}
            </p>
            <div className="mt-2">
              <div className="mt-4 flex items-center gap-8">
                <div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <MdOutlineTranslate
                        className="text-black dark:text-white"
                        size={18}
                      />
                      <span>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <PiStudent
                        className="text-black dark:text-white"
                        size={18}
                      />
                      <span>{bookings} active students</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <GiDrippingStar
                      className="text-black dark:text-white"
                      size={18}
                    />
                    {/* <p>Review:</p> */}
                    <h2 className="">{review}</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <BiSolidBadgeDollar
                      className="text-black dark:text-white"
                      size={18}
                    />
                    {/* <p>Price:</p> */}
                    <h2 className="">$ {price}</h2>
                  </div>
                </div>
              </div>
              <div className="mt-6 w-full">
                <Link to={`/tutor/${_id}`}>
                  <Button className="w-full">See Details</Button>
                </Link>
              </div>
            </div>
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default Tutor;
