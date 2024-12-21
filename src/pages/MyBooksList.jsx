import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import tutor from "@/assets/tutors/tutor.jpg";
import { Button } from "@/components/ui/button";

function MyBooksList() {
  return (
    <div className="mb-10 mt-2">
      <div className="container px-4">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="">Language</TableHead>
              <TableHead className="">Price</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">01</TableCell>
              <TableCell>
                <img
                  className="size-8 object-cover rounded-full"
                  src={tutor}
                  alt=""
                />
              </TableCell>
              <TableCell>Phillip N.</TableCell>
              <TableCell>English</TableCell>
              <TableCell>$30</TableCell>
              <TableCell className="text-right">
                <Button>Review</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default MyBooksList;
