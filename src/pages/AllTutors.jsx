import Tutor from "@/components/all-tutors/Tutor";

function AllTutors() {
  return (
    <div className="my-10">
      <div className="container px-4">
        <div className="grid grid-cols-2 gap-4">
          {[...Array(8).keys()].map((item) => (
            <Tutor key={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllTutors;
