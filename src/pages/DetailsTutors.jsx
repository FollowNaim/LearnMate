import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { GiDrippingStar, GiGraduateCap } from "react-icons/gi";
import { IoLanguage } from "react-icons/io5";
import { useParams } from "react-router-dom";
function DetailsTutors() {
  const { details: id } = useParams();
  const { data } = useQuery({
    queryKey: ["tutor"],
    queryFn: () => axios.get(`/tutors/${id}`),
  });
  const { _id, name, image, price, category, description, review } =
    data?.data || {};
  return (
    <div className="my-10 font-figtree">
      <div className="container px-4 grid grid-cols-12">
        <div className="col-span-9">
          <Card className="rounded-r-none">
            <CardHeader>
              <CardTitle className="text-2xl">{name}</CardTitle>
              <CardDescription>
                Certified TEFL English tutor with 8 years experience in online
                and classroom teaching
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3 mt-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <IoLanguage size={20} />{" "}
                    <span className="font-semibold">Languages</span>
                  </div>
                  <span className="text-muted-foreground">
                    Speaks English (Native), German (Native)
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <GiGraduateCap size={20} />{" "}
                    <span className="font-semibold">Teaches</span>
                  </div>
                  <span className="text-muted-foreground">{category}</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <FaCircleCheck size={20} color="green" />{" "}
                    <span className="font-semibold">
                      Trials are 100% refundable
                    </span>
                  </div>
                  <span className="text-muted-foreground">
                    Try another tutor for free or get a refund
                  </span>
                </div>
              </div>
            </CardContent>
            <CardContent className="mt-6">
              <div className="flex flex-col gap-3">
                <h2 className="font-bold text-xl">About Me:</h2>
                <p>
                  Sophia is an experienced Spanish tutor with over 5 years of
                  teaching experience. She specializes in conversational Spanish
                  and grammar for beginners and intermediate learners.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-3 sticky top-4 h-fit">
          <Card className="rounded-l-none">
            <CardHeader>
              <img className="h-64 object-cover" src={image} alt="" />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <FaGraduationCap size={18} />
                  <p>Instructor:</p>
                  <h2 className="text-xl font-semibold">{name}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <BiSolidBadgeDollar size={18} />
                  <p>Price:</p>
                  <h2 className="">{price}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <GiDrippingStar size={18} />
                  <p>Review:</p>
                  <h2 className="">{review}</h2>
                </div>
              </div>
              <div className="mt-4">
                <Button className="w-full">Book Now</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DetailsTutors;
