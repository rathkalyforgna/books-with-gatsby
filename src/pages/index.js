import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Layout } from "../components/layout";

import { imageWrapper } from "../styles/index.module.css";

export default function IndexPage() {
  return (
    <Layout>
      <div className={imageWrapper}>
        <StaticImage
          src="../images/ivana-la-61jg6zviI7I-unsplash.jpeg"
          alt="a corgi sitting on a bed with red paper hearts all over it. it looks unamused."
          placeholder="dominantColor"
          width={300}
          height={300}
        />
      </div>
    </Layout>
  );
}
