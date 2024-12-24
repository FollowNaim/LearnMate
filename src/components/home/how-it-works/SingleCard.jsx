function SingleCard({ title, subtitle, img, count }) {
  return (
    <div className="bg-muted hover:border hover:duration-300 hover:ease-in-out hover:-translate-y-1 hover:border-red-600 dark:bg-muted/60 p-4 rounded-md relative z-50">
      {title}
      <p className="text-muted-foreground">{subtitle}</p>
      <img className="w-40 h-40 mt-4" src={img} alt="" />
      <div className="absolute left-0 top-1/2 -translate-x-1/2">
        <p className="w-10 h-10 flex justify-center items-center text-white font-bold text-xl rounded-full bg-red-600">
          {count}
        </p>
      </div>
    </div>
  );
}

export default SingleCard;
