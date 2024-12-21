import { GiLightningSpanner } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
function CategoryCard() {
  return (
    <div>
      <div className="flex justify-between items-center gap-4 border rounded-md px-5 py-3 hover:bg-muted cursor-pointer">
        <div className="flex flex-col gap-1">
          <p className="flex items-center gap-2">
            <GiLightningSpanner size={22} />{" "}
            <span className="text-xl font-semibold">English Tutor</span>
          </p>
          <p className="text-secondary-foreground/80">120+ Teachers</p>
        </div>
        <p>
          <IoIosArrowForward size={22} />
        </p>
      </div>
    </div>
  );
}

export default CategoryCard;
