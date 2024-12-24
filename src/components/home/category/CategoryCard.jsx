import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
function CategoryCard({ title, count, icon }) {
  return (
    <div>
      <Link to={`/find-tutors/${title}`}>
        <div className="flex justify-between items-center gap-4 border rounded-md px-5 py-3 dark:hover:bg-muted hover:bg-destructive/10 cursor-pointer">
          <div className="flex flex-col gap-1">
            <p className="flex items-center gap-2">
              {icon && <img className="w-6" src={icon} />}
              <span className="text-lg font-semibold">
                {title.charAt(0).toUpperCase() + title.slice(1)} Tutor
              </span>
            </p>
            <p className="text-secondary-foreground/80 text-sm">
              {count}+ Teachers
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
