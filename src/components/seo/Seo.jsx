import { Helmet } from "react-helmet-async";

function Seo({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href="https://learnmates.vercel.app/" />
    </Helmet>
  );
}

export default Seo;
