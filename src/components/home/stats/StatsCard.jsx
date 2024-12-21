function StatsCard(props) {
  const { count, subtitle } = props;
  return (
    <div {...props}>
      <p className="text-2xl font-extrabold">{count}</p>
      <p className="text-muted-foreground mt-2">{subtitle}</p>
    </div>
  );
}

export default StatsCard;
