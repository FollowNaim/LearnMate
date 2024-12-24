import { Card, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
function SingleStats(props) {
  const { image, title, count } = props.item;
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "30px" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="dark:bg-transparent shadow-sm hover:border hover:border-red-600 hover:duration-300 hover:ease-in-out hover:-translate-y-1 dark:text-black">
        <CardHeader className="flex flex-col lg:flex-row gap-6 lg:items-center">
          <div className="bg-destructive/20 p-3 w-fit rounded-full">
            <img className="size-10" src={image} alt="" />
          </div>
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold">{count}</h5>
            <p className="text-black mt-4 lg:mt-0">{title}</p>
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  );
}

export default SingleStats;
