import Tutor from "@/components/all-tutors/Tutor";
import Spinner from "@/components/loader/Spinner";
import NotFound from "@/components/no-data-found/NotFound";
import Seo from "@/components/seo/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

function AllTutors() {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState("");
  const { category } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["tutors", { categories, category, search }],
    queryFn: async () => {
      const res = await axios.get(
        `/tutors?category=${categories || category || ""}&search=${search}`
      );
      return res;
    },
  });
  // useEffect(() => {
  //   axios.get(`/tutors?search=${search}`).then((res) => setMyData(res.data));
  // }, [search]);
  // console.log(myData);
  // if (isLoading) return <Spinner />;
  // if (!data.data.length) return <p>No data found!</p>;
  // useEffect(() => {
  //   axios
  //     .get(`/tutors?category=${categories || category || ""}&search=${search}`)
  //     .then((res) => {
  //       setData(res.data);
  //       setLoading(false);
  //     })
  //     .catch(() => setLoading(false));
  // }, [search, categories, category]);
  // useEffect(() => {
  //   setLoading(true);
  //   axios.get(`/tutors?category=${category || ""}`).then((res) => {
  //     setData(res.data);
  //     setLoading(false);
  //   });
  // }, [category]);
  // if (isLoading && !search) return <Spinner />;
  return (
    <div className="mb-10 mt-20">
      <Seo title={"Find Top-Rated Tutors | Learn Mate Tutors Directory"} />
      <div className="container px-4">
        <div className="grid max-w-xl mx-auto grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6 mb-6">
          <div className="relative">
            {/* <Label htmlFor="role">Language</Label> */}
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              name="search"
              type="text"
              placeholder="Search Language..."
            />
            <IoIosSearch color="#737373" className="absolute top-3 right-2" />
          </div>
          <div className="w-full">
            <div className="flex w-full items-center gap-3">
              <div className="grid gap-2 w-full">
                {/* <Label htmlFor="role">Language</Label> */}
                <Select
                  modal={false}
                  id="category"
                  name="category"
                  value={categories}
                  onValueChange={(val) => {
                    setCategories(val);
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="bangla">Bangla</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="italian">Italian</SelectItem>
                    <SelectItem value="germen">Germen</SelectItem>
                    <SelectItem value="arabic">Arabic</SelectItem>
                    <SelectItem value="japanese">Japanese</SelectItem>
                    <SelectItem value="chinese">Chinese</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="block lg:hidden">
            {/* <Button
              className=""
              onClick={() => {
                setCategories("");
                setSearch("");
                navigate("/find-tutors");
              }}
            >
              Reset
            </Button> */}
          </div>
          <div className="ml-auto lg:ml-0">
            <Button
              className=""
              onClick={() => {
                setCategories("");
                setSearch("");
                navigate("/find-tutors");
              }}
            >
              Reset
            </Button>
          </div>
        </div>
        <div>
          {isLoading ? <Spinner /> : ""}
          {!data?.data.length ? (
            <NotFound />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10">
              {data?.data?.map((tutor) => (
                <Tutor tutor={tutor} key={tutor._id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllTutors;
