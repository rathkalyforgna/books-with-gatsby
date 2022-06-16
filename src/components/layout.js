import * as React from "react";
import { Nav } from "./nav";
import { Seo } from "./seo";

import { content, footer } from "../styles/layout.module.css";
import "../styles/global.css";

export function Layout({ children, title, description, image, path }) {
  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <Nav />
      <main className={content}>{children}</main>
      <footer className={footer}>Built with Gatsby ❤️</footer>
    </>
  );
}
