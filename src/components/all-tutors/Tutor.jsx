import tutor from "@/assets/tutors/tutor.jpg";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
import { MdOutlineTranslate } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
function Tutor() {
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
    <Card className="flex items-center">
      <CardHeader>
        <div>
          <img className="w-32 object-cover" src={tutor} alt="" />
        </div>
      </CardHeader>
      <CardContent className="p-6 pl-2">
        <CardDescription>
          <div>
            <h2 className="text-xl font-semibold text-black">Phillip N.</h2>{" "}
            <div className="mt-2">
              <p className="bg-accent/20 px-1 rounded-md w-fit text-black/70">
                Super Tutor
              </p>

              <div className=" mt-2 flex flex-col gap-2">
                <p className="flex items-center gap-3">
                  <GiGraduateCap color="#000" size={18} /> <span>English</span>
                </p>
                <p className="flex items-center gap-3">
                  <PiStudent color="#000" size={18} />
                  <span>17 active students</span>
                </p>

                <p className="flex items-center gap-3">
                  <MdOutlineTranslate color="#000" size={18} />
                  <span>
                    {"Speaks English (Native), German (Native)".substring(
                      0,
                      20
                    )}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </CardDescription>
      </CardContent>
      <CardContent className="flex flex-col p-6 ml-auto">
        <div className="flex items-start">
          <p className="flex flex-col gap-3">
            <p className="flex items-center gap-2">
              <FaStar /> <span className="font-medium">4.9</span>
            </p>
            <p>
              30 <span className="text-muted-foreground">Review</span>
            </p>
          </p>

          <p className="">
            <p className="flex items-center gap-2">
              <AiTwotoneDollarCircle /> <span className="font-medium">30</span>
            </p>
          </p>
        </div>
        <div className=" mt-10">
          <Button className="mt-auto" size="lg">
            Book Lesson
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Tutor;
