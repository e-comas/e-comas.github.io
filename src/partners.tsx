import { h } from "@aduh95/async-jsx";

import yaml from "./utils/yaml.ts";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
// import Breadcrumbs from "./views/Breadcrumbs.tsx";
import Footer from "./views/Footer.tsx";
// import { ECommerce } from "./views/eWords.tsx";

// import webinars_playlists from "./utils/webinars.toml";

import "./views/VideoEmbedLink.scss";
import "runtime:./utils/youtube_feed.ts";
import "./webinar.scss";
import "./partners.scss";

import Hero from "./views/hero.tsx";
import Picture from "./utils/Picture.tsx";

// TODO?: get SVGs for all
const partners = [
  {
    image: "/images/partners/salsify.svg",
    id: "salsify",
    name: "Salsify",
    text: "Salsify helps thousands of brand manufacturers, distributors and retailers in over 140 countries collaborate to win on the digital shelf. The company’s Product Experience Management (PXM) platform enables organisations to centralise all their product content, connect to the commerce ecosystem and automate business processes to deliver the best possible product experiences across every selling destination.",
    link: "salsify.html",
  },
  {
    image: "/images/partners/pacvue.svg",
    id: "pacvue",
    name: "Pacvue",
    text: "Pacvue is a commerce acceleration platform that empowers businesses to discover the most impactful opportunities, activate sales growth and streamline daily operations. The platform turns insights into actionable recommendations by integrating retail media, commerce management and measurement. With Pacvue as your guide, you can see further, think bigger and move faster through your commerce journey.",
    link: "https://www.pacvue.com/",
  },
  {
    image: "/images/partners/ChannelEngine.svg",
    id: "channelEngine",
    name: "ChannelEngine",
    text: "ChannelEngine connects brands and retailers to over 700 marketplaces and digital sales channels worldwide. Sellers can automate and streamline eCommerce management, making it easy to manage listings, content, and pricing and synchronise stock levels (across all locations) from one central platform.",
    link: "https://eu1.hubs.ly/H04_VHP0",
  },
  {
    image: "/images/partners/getida.png",
    id: "getida",
    name: "Getida",
    text: "Getida is an award-winning Amazon FBA data auditing analytics and reimbursement service. Founded in 2015, our mission is to empower Amazon FBA sellers to maximise their FBA reimbursements for optimal growth. We are an Amazon-authorised solution provider with industry-leading technology and an expert claims management team. We leverage data to power your reimbursements and give full visibility into the recovery process through ours award-winning dashboard.",
    link: "https://getida.com/",
  },
  {
    image: "/images/partners/zonguru.svg",
    id: "zonGuru",
    name: "ZonGuru",
    text: "ZonGuru is an innovative eCommerce software toolset to grow Amazon brands and agencies. Established in 2016, its core team consists of seasoned, expert-level Amazon sellers who know from experience what information is key to making important decisions. Used globally by thousands of sellers, enterprise-level brands and specialist agencies — and home to the world’s-first AI-powered Product Listing Optimizer — ZonGuru supports 10 major Amazon marketplaces, is an Amazon-approved partner and features the #1 ranked support team in the business.\
(Source: Trustpilot)",
    link: "https://www.zonguru.com",
  },
  {
    // TODO: get text
    image: "/images/partners/shopify.svg",
    id: "shopify",
    name: "Shopify",
    text: "Est commodo nostrud sunt nisi consectetur duis voluptate. Nostrud eiusmod ut aute tempor eu magna exercitation deserunt minim officia eu nisi. Ullamco velit tempor do exercitation ipsum cillum ad deserunt culpa sint ut irure. Ad veniam esse nisi exercitation cillum. Ea dolor dolore incididunt excepteur et amet.",
    link: "https://www.shopify.com/",
  },
  {
    // TODO: get text
    image: "/images/partners/Amazon ADS.svg",
    id: "amazonAds",
    name: "amazon ads",
    text: "Incididunt proident do eu cillum id officia culpa. Eu et veniam sunt ad elit cupidatat. Proident veniam duis aliquip dolor duis tempor irure culpa. Dolor velit non cupidatat incididunt. Cillum et commodo pariatur aliqua laborum nulla laboris commodo. Enim in proident velit ullamco fugiat. Laborum commodo consequat velit ea aute sint laboris nulla.",
    link: "https://advertising.amazon.com/",
  },
  {
    image: "/images/partners/complizon.png",
    id: "complizon",
    name: "Complizon",
    text: "Don’t let non-compliance costs threaten your expansion efforts. Complizon expertly manages your company's product and regulatory compliance issues, carefully crafting strategies to considerably enhance worldwide success.\
It's a lucrative world out there, and having your affairs in order means you can enter the UK and EU markets with confidence, unlocking potentially millions in revenue.\
\
From wellness and dietary enhancements to children's toys, eCommerce businesses seeking success in the UK and EU can gain from our know-how. Complizon serves as your beacon in the realm of global regulatory adherence.",
    link: "https://www.complizon.com/",
  },
  {
    image: "/images/partners/datahawk.svg",
    id: "datahawk",
    name: "Datahawk",
    text: "Datahawk is the next-generation eCommerce Analytics Platform helping you unify eCommerce data and turn it into actionable insights and business recommendations. ",
    link: "https://datahawk.co/",
  },
  {
    // TODO: get text
    image: "/images/partners/helium10.svg",
    id: "helium10",
    name: "Helium 10",
    text: "Labore duis dolore cupidatat culpa ut nulla esse duis aute aliquip velit ullamco. Lorem eu fugiat ad proident cillum laborum. Fugiat occaecat duis laborum aliqua ex ipsum ullamco aute officia laborum. Deserunt fugiat eiusmod exercitation qui magna adipisicing cillum deserunt amet magna. Cupidatat cillum consequat dolore Lorem dolore irure ex sunt mollit tempor anim esse est.",
    link: "https://www.helium10.com",
  },
  {
    image: "/images/partners/KhooCommerce.svg",
    id: "khooCommerce",
    name: "KhooCommerce",
    text: "Helping you process Amazon Vendor POs and ASNs with ease. KhooCommerce is a leading solution to help Vendor Central (1P) users streamline PO management, simplify ASN creation, ARN and routing, and automatic invoicing. KhooCommerce saves you tens of hours each week in admin and paperwork, allowing you to grow sales without the need to hire more staff.",
    link: "https://www.khoocommerce.com/",
  },
  {
    image: "/images/partners/ylt-translations.png",
    id: "yltTranslations",
    name: "YLT Translations",
    text: "YLT Translations is a high-level translation service for Amazon sellers working not only with Amazon sellers, but also with multinational brands/marketplaces across the globe. We can help those listings and brands explode with proper colloquial and dialectical language interpretation in foreign marketplaces. Our team of 80 native translators who know Amazon, perform keyword research and do absolutely everything to make your listings translate into sales.",
    link: "https://ylt-translations.com/",
  },
  {
    image: "/images/partners/DimeTyd.svg",
    id: "dimeTyd",
    name: "DimeTyd",
    text: "DimeTyd's 100% automated accounting and reconciliation solution is designed to empower Amazon 1P Vendors with streamlined finance operations, seamless dispute resolution and optimised cash applications. Leverage AI, ML and RPA insights to tackle overbilling, shortages and chargeback fees.",
    link: "https://dimetyd.com/#calculation",
  },
  {
    image: "/images/partners/syndigo.svg",
    id: "syndigo",
    name: "Syndigo",
    text: "Syndigo powers modern commerce by enabling the continual flow of data and content throughout the entire commerce ecosystem. With industry-leading data management, syndication, and analytics, combined with the largest two-sided network for content distribution, we deliver accurate information that improves decision-making and accelerates sales on every shelf.",
    link: "https://syndigo.com/",
  },
];

export default (
  <Body title="Webinar">
    <Header />
    <Hero>
      <h1>Our Partners</h1>
      <p>
        We’re proud to work with leading technology and service providers across
        the eCommerce space to support our clients’ global expansion goals.
        These services include tech solutions, data insights platforms,
        regulatory and finance, media advertising, fulfillment and logistics and
        more!
      </p>
      <a href="https://calendly.com/pete-ecomas" class="cta">
        Learn More
      </a>
    </Hero>
    {/* <Breadcrumbs /> */}
    <main id="main-content">
      {partners.map((partner) => (
        <article id={partner.id}>
          <a href={partner.link}>
            {partner.image.endsWith("svg") ? (
              <div class="picture-wrapper">
                <img src={partner.image} alt={partner.name} />
              </div>
            ) : (
              <Picture src={partner.image} alt={partner.name} />
            )}
          </a>
          <h3>
            <a href={partner.link}>{partner.name}</a>
          </h3>
          <p>{partner.text}</p>
        </article>
      ))}
    </main>
    <Footer text="If you’d like to discuss joining our incredible community of trusted partners, please get in touch!" />
  </Body>
).then(
  (e) => (
    document.body.append(e),
    yaml`
layout: none
`
  )
);
