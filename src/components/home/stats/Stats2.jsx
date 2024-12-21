import { Card, CardContent, CardHeader } from "@/components/ui/card";
import img1 from "@/assets/stats/01.png";
import shape2 from "@/assets/stats/shape-02.png";
function Stats2() {
  return (
    <div className="bg-[#F7F8FC] relative my-10 py-10 font-figtree">
      <div
        className="absolute w-1/2 h-full bg-cover bg-no-repeat top-0 right-0"
        style={{ backgroundImage: `url('${shape2}')` }}
      ></div>
      <div className="container px-6">
        <div className="my-6">
          <h2 className="text-3xl font-bold">
            Stats that explain everything <br /> about{" "}
            <span className="text-blue-600">#Our success</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 z-50 relative">
          {[...Array(4).keys()].map((item) => {
            return (
              <Card className="" key={item}>
                <CardHeader className="flex flex-row gap-6 items-center">
                  <div className="bg-destructive/20 p-3 w-fit rounded-full">
                    <img className="size-10" src={img1} alt="" />
                  </div>
                  <div className="flex flex-col">
                    <h5 className="text-lg font-semibold">560,616</h5>
                    <p className="text-muted-foreground">
                      Courses available for verified and top tutors
                    </p>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Stats2;
