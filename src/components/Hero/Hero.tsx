import React from "react";
import {
  Actions,
  Beta,
  Container,
  CTA,
  Secondary,
  TagLine,
  Title,
} from "./Hero.style";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export type HeroProps = {};

export function Hero(_props: HeroProps) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Container className="Hero-container" data-testid="Hero-container">
      <Title>
        {siteConfig.title} <Beta>Beta</Beta>
      </Title>
      <TagLine>
        An Open-source & extendable Content Management System (CMS) written in
        <span>ReactJS</span>, hosted on <span>Firebase</span> //
      </TagLine>
      <Actions>
        <CTA href="/docs/docs/getting-started/installation">
          Getting started
        </CTA>
        <Secondary href="https://github.com/dht/gdi" target="_blank">
          Github
        </Secondary>
      </Actions>
    </Container>
  );
}

export default Hero;
