import StatsCard from "./StatsCard";

function Stats() {
  return (
    <div className=" my-10">
      <div className="container border border-dashed rounded-md py-4 max-w-3xl flex justify-between items-center px-4">
        <StatsCard count={"3200+"} subtitle={"Experienced Tutor"} />
        <StatsCard count={"30,000+"} subtitle={"5-star tutor review"} />

        <StatsCard count={"6+"} subtitle={"Languages"} />
        <StatsCard count={"120+"} subtitle={"Total Users"} />
      </div>
    </div>
  );
}

export default Stats;
