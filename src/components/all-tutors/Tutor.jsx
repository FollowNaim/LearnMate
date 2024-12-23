import { GiGraduateCap } from "react-icons/gi";
import { MdOutlineTranslate } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
function Tutor(props) {
  const { _id, name, bookings, image, price, category, description, review } =
    props.tutor;
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
    <Card className="flex flex-col md:flex-row md:items-center">
      <CardHeader className="w-full h-full">
        <div className="w-full h-full">
          <img
            className="w-full object-top md:w-32 h-40 md:h-full object-cover rounded-md"
            src={image}
            alt=""
          />
        </div>
      </CardHeader>
      <CardContent className="md:p-6 md:pl-2">
        <CardDescription>
          <div>
            <h2 className="text-xl font-semibold text-black">{name}</h2>{" "}
            <div className="mt-2">
              {/* <p className="bg-destructive/20 px-1 rounded-md w-fit text-black/70">
                Super Tutor
              </p> */}

              <div className=" mt-4 flex flex-col gap-2">
                <p className="flex items-center gap-3">
                  <GiGraduateCap color="#000" size={18} />{" "}
                  <span>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <PiStudent color="#000" size={18} />
                  <span>{bookings} active students</span>
                </p>

                <p className="flex items-center gap-3">
                  <MdOutlineTranslate color="#000" size={18} />
                  <span className="">
                    Speaks English (Native), German (Native)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </CardDescription>
      </CardContent>
      <CardContent className="flex flex-col justify-between h-full md:p-6 md:ml-auto">
        <div className="flex items-center gap-4 ">
          <p className="flex flex-col gap-1 ">
            <p className="flex items-center gap-2">
              <span className="text-muted-foreground">Review </span>
              {review}
            </p>
          </p>
          -
          <p className="">
            <p className="flex items-center gap-2">
              <span className="text-muted-foreground">$</span>
              <span className="font-medium">{price}</span>
            </p>
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-3">
          {/* <Button className="">Book Lesson</Button> */}
          <Link to={`/tutor/${_id}`}>
            <Button className="w-full h-fit">See Details</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default Tutor;
