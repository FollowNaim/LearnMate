import { GiLightningSpanner } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
function CategoryCard({ title }) {
  return (
    <div>
      <Link to={`/find-tutors/${title}`}>
        <div className="flex justify-between items-center gap-4 border rounded-md px-5 py-3 hover:bg-destructive/10 cursor-pointer">
          <div className="flex flex-col gap-1">
            <p className="flex items-center gap-2">
              <GiLightningSpanner size={22} />{" "}
              <span className="text-lg font-semibold">
                {title.charAt(0).toUpperCase() + title.slice(1)} Tutor
              </span>
            </p>
            <p className="text-secondary-foreground/80 text-sm">
              120+ Teachers
            </p>
          </div>
          <p>
            <IoIosArrowForward size={22} />
          </p>
        </div>
      </Link>
    </div>
  );
}

export default CategoryCard;
