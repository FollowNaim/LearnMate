import Spinner from "@/components/loader/Spinner";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import axios from "axios";
import { MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function MyTutorials() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();
  const { data, isLoading } = useQuery({
    queryKey: ["my-bookings"],
    queryFn: () => axiosSecure.get(`/my-tutorials/${user?.email}`),
  });
  const mutation = useMutation({
    mutationFn: (id) =>
      axiosSecure.delete(`/tutors/${id}`, { email: user?.email }),
    onSuccess: () => queryClient.invalidateQueries(["my-bookings", "tutors"]),
  });
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutateAsync(id).then(() =>
          Swal.fire({
            title: "Deleted!",
            text: "Your tutorial has been deleted.",
            icon: "success",
          })
        );
      }
    });
  };
  if (isLoading) return <Spinner />;
  return (
    <div className="mb-10 mt-16">
      <div className="container px-4">
        <Table>
          <TableCaption>A list of your tutorials.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="">Language</TableHead>
              <TableHead className="">Description</TableHead>
              <TableHead className="">Review</TableHead>
              <TableHead className="">Price</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data.map(
              (
                { _id, name, image, description, category, price, review },
                i
              ) => (
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
                    {category?.charAt(0).toUpperCase() + category?.slice(1)}
                  </TableCell>
                  <TableCell>{description?.substring(0, 27)}...</TableCell>
                  <TableCell>{review}</TableCell>
                  <TableCell>${price}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Link to={`/tutor/${_id}`}>
                          <DropdownMenuItem>View Tutorial</DropdownMenuItem>
                        </Link>
                        <Link to={`/tutor/update/${_id}`}>
                          <DropdownMenuItem>Update Tutorial</DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem onClick={() => handleDelete(_id)}>
                          Delete Tutorial
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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

export default MyTutorials;
