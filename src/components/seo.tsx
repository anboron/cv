import { Helmet } from "react-helmet";

type SEOProps = {
  name: string;
  occupation: string;
  description: string;
};

export default function SEO({ name, occupation, description }: Readonly<SEOProps>) {
  return (
    <Helmet>
      <title>
        {name} - {occupation}
      </title>

      <meta name="description" content={description} />
    </Helmet>
  );
}
