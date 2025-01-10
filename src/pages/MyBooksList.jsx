import Spinner from "@/components/loader/Spinner";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAuth } from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

function MyBooksList() {
  const { user, loading } = useAuth();
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["my-bookings", { loading }],
    queryFn: async () => {
      const response = await axiosSecure.get(`/bookings?email=${user?.email}`);
      if (response.status === 401) {
        throw new Error("unauthorized");
      }
      return response;
    },
  });
  const mutation = useMutation({
    mutationFn: (id) => axiosSecure.patch(`/update-review/${id}`),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["my-bookings"] }),
  });
  const handleReview = (id) => {
    toast.promise(mutation.mutateAsync(id), {
      loading: "Review Adding...",
      success: <b>Review added successfull !</b>,
      error: <b>Could not added.</b>,
    });
  };
  if (isLoading || loading) return <Spinner />;
  if (isError) {
    queryClient.invalidateQueries({ queryKey: ["my-bookings"] });
    return <p>Something went wrong</p>;
  }
  return (
    <div className="mb-10 mt-16">
      <div className="container px-4">
        <Table>
          <TableCaption>A list of your booked tutors.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="">Language</TableHead>
              <TableHead className="">Review</TableHead>
              <TableHead className="">Price</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data.map(
              ({ _id, tutorId, name, image, category, price, review }, i) => (
                <TableRow key={_id}>
                  <TableCell className="font-medium">{i + 1}</TableCell>
                  <TableCell>
                    <img
                      className="size-8 object-cover rounded-full"
                      src={image}
                      alt=""
                    />
                  </TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </TableCell>
                  <TableCell>{review}</TableCell>
                  <TableCell>${price}</TableCell>
                  <TableCell className="text-right">
                    <Button onClick={() => handleReview(tutorId)}>
                      Review
                    </Button>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default MyBooksList;
