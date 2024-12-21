import StatsCard from "./StatsCard";

function Stats() {
  return (
    <div className="my-10 px-4">
      <div className="container border border-dashed rounded-md grid grid-cols-4 justify-between items-center px-4">
        <StatsCard
          className="border-r p-4"
          count={"3200+"}
          subtitle={"Experienced Tutor"}
        />
        <StatsCard
          className="border-r p-4"
          count={"30,000+"}
          subtitle={"5-star tutor review"}
        />
        <StatsCard
          className="border-r p-4"
          count={"6+"}
          subtitle={"Languages"}
        />
        <StatsCard className="p-4" count={"120+"} subtitle={"Total Users"} />
      </div>
    </div>
  );
}

export default Stats;
