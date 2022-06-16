import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Layout } from "../components/layout";

export const query = graphql`
  query CocktailQuery {
    file(name: { eq: "cocktail" }) {
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

export default function About({ data }) {
  const image = getImage(data.file);

  return (
    <Layout>
      <GatsbyImage
        image={image}
        alt="a cocktail set inside an elaborate floral arrangement with dry ice mist curling out and around it"
      />
      <h1>About</h1>
      <Link to="/">Back to Home</Link>
    </Layout>
  );
}
