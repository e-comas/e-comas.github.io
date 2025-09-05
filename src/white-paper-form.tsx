import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Breadcrumbs from "./views/Breadcrumbs.tsx";
import { ECommerce } from "./views/eWords.tsx";
import Footer from "./views/Footer.tsx";

import "./utils/open-form-in-modal.scss";
import "runtime:./utils/open-form-in-modal.ts";
import Hero from "./views/hero.tsx";
import Picture from "./utils/Picture.tsx";
import "./webinar.scss";
import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import { faDownload, faPhone } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const papers: {
  image: string;
  title: string;
  text: string;
  link: string;
}[] = [
  {
    image: "/images/high-angle-designer-holding-smartphone.jpg",
    title: "Managing Content on Amazon",
    text: "Using primary research and best practice examples from our clients, we offer a complete guide to managing the content of a large catalogue on Amazon, for better brand consistency, higher conversion rates, and boosted revenue.",
    link: "https://go.e-comas.com/l/885733/2025-09-04/ptc3q",
  },
  {
    image: "/images/white-paper-5.png",
    title: "AMC Unpacked: Demystifying 18 use cases of Amazon Marketing Cloud",
    text: "Here’s our guide on 18 different ways you can use AMC to improve your \
marketing game, maximise your ad spend and be more competitive.",
    link: "https://go.e-comas.com/l/885733/2024-04-15/mzw27",
  },
  {
    image: "/images/white-paper-4.jpg",
    title: "Owning your brand: why you need brand registry",
    text: "Amazon experts are unanimous on this: all Amazon sellers should enrol \
in Brand Registry. Here's our complete guide to Amazon Brand Registry, \
including all the features you might not already know about.",
    link: "//go.e-comas.com/l/885733/2023-01-17/l8998",
  },
  {
    image: "/images/white-paper-3.jpg",
    title: "When luxury meets the mass market",
    text: "Amazon Luxury Stores is now live in Europe and the US. Read our \
deep-dive into what Amazon Luxury Stores is, how it looks for \
customers, and the pros and cons for luxury brands.",
    link: "//go.e-comas.com/l/885733/2022-06-20/83wgg",
  },
  {
    image: "/images/white-paper-2.png",
    title: "The voice of your customer",
    text: "Customers on Amazon think differently to customers in other retail \
spheres. When specialty paper brand T/D3sixty felt bamboozled by the \
feedback they were getting on Amazon, they turned to our analytics \
tool Compas. Here’s how we helped.",
    link: "//go.e-comas.com/l/885733/2020-11-09/4vbg",
  },
  {
    image: "/images/white-paper-1.png",
    title: "How to manage Amazon",
    text: "Here’s our beginner’s guide to building a solid Amazon strategy, \
managing your operations, creating content and growing traffic.",
    link: "//go.e-comas.com/l/885733/2022-09-02/bwmm8",
  },
];

export default (
  <Body title="White paper">
    <Header />
    {/* <Breadcrumbs /> */}
    <Hero>
      <h1>White paper</h1>
      <p>
        We research hot topics in the <ECommerce /> industry and report our
        findings in our in-depth white papers. Learn more from us here!
      </p>
      <a href="./contact.html" class="cta no-arrow">
        Book a Call
        <FontAwesomeIcon icon={faPhone as IconProp} />
      </a>
    </Hero>
    <main id="main-content" class="blog">
      {papers.map((paper) => (
        <article>
          {paper.image.endsWith("svg") ? (
            <div class="picture-wrapper">
              <img src={paper.image} alt={paper.title} />
            </div>
          ) : (
            <Picture src={paper.image} alt={paper.title} />
          )}
          <h3>{paper.title}</h3>
          <p>{paper.text}</p>
          <a
            href={paper.link}
            target="_blank"
            className="cta open-in-modal no-arrow"
          >
            Download
            <FontAwesomeIcon icon={faDownload as IconProp} />
          </a>
        </article>
      ))}
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
