import Spinner from "@/components/loader/Spinner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { GiDrippingStar, GiGraduateCap } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { useParams } from "react-router-dom";
function DetailsTutors() {
  const { user } = useAuth();
  const { details: id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["tutor"],
    queryFn: () => axios.get(`/tutors/${id}`),
  });
  const { _id, name, image, bookings, price, category, description, review } =
    data?.data || {};
  const rnYear = Math.floor(Math.random() * 10 + 1);
  const handleBooking = () => {
    const bookingDetails = {
      tutorId: _id,
      email: user?.email,
      name,
      image,
      category,
      price,
    };
    toast.promise(axios.post("/bookings", bookingDetails), {
      loading: "Adding...",
      success: <b>Booking added!</b>,
      error: (err) => {
        console.log(err);
        return <b>{err.response.data}</b>;
      },
    });
  };
  if (isLoading) return <Spinner />;
  return (
    <div className="my-10 font-figtree">
      <div className="container px-4 grid grid-cols-12">
        <div className="col-span-9">
          <Card className="rounded-r-none">
            <CardHeader>
              <CardTitle className="text-2xl">{name}</CardTitle>
              <CardDescription>
                Certified TEFL{" "}
                {category?.charAt(0).toUpperCase() + category?.slice(1)} tutor
                with {rnYear} years experience in online and classroom teaching
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3 mt-4">
                {/* <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <IoLanguage size={20} />{" "}
                    <span className="font-semibold">Languages</span>
                  </div>
                  <span className="text-muted-foreground">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </span>
                </div> */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <GiGraduateCap size={20} />{" "}
                    <span className="font-semibold">Teaches</span>
                  </div>
                  <span className="text-muted-foreground">
                    {category?.charAt(0).toUpperCase() + category?.slice(1)}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <PiStudent size={20} />{" "}
                    <span className="font-semibold">Students</span>
                  </div>
                  <span className="text-muted-foreground">
                    {bookings}+ active students
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <FaCircleCheck size={20} color="green" />{" "}
                    <span className="font-semibold">
                      Trials are 100% refundable
                    </span>
                  </div>
                  <span className="text-muted-foreground">
                    Not satisfied? Get your money back.
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <FaCircleCheck size={20} color="green" />{" "}
                    <span className="font-semibold">Flexible Options</span>
                  </div>
                  <span className="text-muted-foreground">
                    Switch tutors or claim a refund with ease.
                  </span>
                </div>
              </div>
            </CardContent>
            <CardContent className="mt-6">
              <div className="flex flex-col gap-3">
                <h2 className="font-bold text-xl">About Me:</h2>
                <p className="text-muted-foreground">
                  {name} is an experienced{" "}
                  {category?.charAt(0).toUpperCase() + category?.slice(1)} tutor
                  with over {rnYear} years of teaching experience. She
                  specializes in conversational{" "}
                  {category?.charAt(0).toUpperCase() + category?.slice(1)} and
                  grammar for beginners and intermediate learners.
                </p>
              </div>
              <div className="flex flex-col gap-3 mt-6">
                <h2 className="font-bold text-xl">Description:</h2>
                <p className="text-muted-foreground">{description}</p>
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
                  <h2 className="">$ {price}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <GiDrippingStar size={18} />
                  <p>Review:</p>
                  <h2 className="">{review}</h2>
                </div>
              </div>
              <div className="mt-4">
                <Button onClick={handleBooking} className="w-full">
                  Book Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DetailsTutors;
