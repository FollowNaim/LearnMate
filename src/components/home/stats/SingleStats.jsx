import { Card, CardHeader } from "@/components/ui/card";
function SingleStats(props) {
  console.log(props);
  const { image, title, count } = props.item;
  return (
    <Card className="">
      <CardHeader className="flex flex-row gap-6 items-center">
        <div className="bg-destructive/20 p-3 w-fit rounded-full">
          <img className="size-10" src={image} alt="" />
        </div>
        <div className="flex flex-col">
          <h5 className="text-lg font-semibold">{count}</h5>
          <p className="text-muted-foreground">{title}</p>
        </div>
      </CardHeader>
    </Card>
  );
}

export default SingleStats;
