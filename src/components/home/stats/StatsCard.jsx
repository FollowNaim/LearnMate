function StatsCard({ count, subtitle }) {
  return (
    <div>
      <p className="text-2xl font-extrabold">{count}</p>
      <p className="text-muted-foreground mt-2">{subtitle}</p>
    </div>
  );
}

export default StatsCard;
