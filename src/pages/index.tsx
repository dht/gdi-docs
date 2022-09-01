import React from "react";
import Layout from "@theme/Layout";
import { Hero } from "../components/Hero/Hero";

export function Home(): JSX.Element {
  return (
    <Layout
      wrapperClassName="wrapper-flex"
      title="Documentation"
      description="gDI - An open-source & extendable content management system (CMS) written in ReactJS, hosted on Firebase"
    >
      <Hero />
    </Layout>
  );
}

export default Home;
