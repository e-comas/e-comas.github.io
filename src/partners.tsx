import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import ElementWithIcon from "./utils/ElementWithIcon.js";
import Footer from "./views/Footer.js";

export default (
  <Body title="Partners">
    <Header />
    <Breadcrumbs />
    <main id="main-content">
      <ElementWithIcon src="/images/chess.svg" tagName="section">
        <h2>Our partners</h2>
      </ElementWithIcon>

      <section id="Reveals">
        <h3>Reveals</h3>
        <p>
          With our partner Reveals, we can build your reporting infrastructure
          through automation to give you full control on your complex eCommerce
          data. This technological-based solution will enhance your business to
          the next level.
        </p>
        <a href="reveals.html" class="cta">
          Read further
        </a>
      </section>

      <section id="Salsify">
        <h3>Salsify</h3>
        <p>
          Salsify allows brands to manage product data, content and other rich
          media assets to craft and deliver the consumer experience you want for
          any channel you sell through. This empowers brands to deliver product
          information that drives discovery, conversion and brand loyalty across
          the digital shelf.
        </p>
        <a href="salsify.html" class="cta">
          Read further
        </a>
      </section>

      <section id="Shopify">
        <h3>Shopify</h3>
        <p>
          We proudly partner with Shopify, the leading ecommerce platform
          allowing brands to build and manage their own standalone online retail
          stores.
        </p>
        <a href="website-creation.html#shopify" class="cta">
          Read further
        </a>
      </section>

      <section id="Profitero">
        <h3>Profitero</h3>
        <p>
          Profitero provides over 4000 global brands with cutting edge
          technology designed to accelerate e-commerce sales and save time.
        </p>
        <a href="profitero.html" class="cta">
          Read further
        </a>
      </section>

      <section id="Storfund">
        <h3>Storfund</h3>

        <p>
          We partner with Storfund to offer our customers reliable daily cash
          flow – with no delay between your products being bought, and you
          getting paid.
        </p>
        <p>
          Sell today, get paid today: There's no data submission, no payment
          requests, just reliable daily cash flow.
        </p>

        <p>How it works:</p>
        <ol>
          <li>You sell as usual on your marketplace.</li>
          <li>
            Each day Storfund advances 80% of your net balance. (Your net
            balance = gross sales minus marketplace fees and refunds)
          </li>
          <li>
            When your marketplace pays out, you receive the remaining 20%.
          </li>
        </ol>

        <p>Storfund charges between 1-2% flat fee, with no hidden fees.</p>
        <p>
          The fee is applied on the total net Amazon balance and not on gross
          sales.
        </p>
        <p>
          The service is currently available on 17 Amazon marketplaces and
          CDiscount.
        </p>

        <a class="cta" href="https://www.storfund.com/r/Oq7fG1-SD">
          Get on board
        </a>
      </section>

      <section id="GETIDA">
        <h3>GETIDA</h3>
        <p>
          We proudly partner with GETIDA, a world-class industry leader in
          online marketplace auditing.
          <br />
          If you are an Amazon FBA seller, you are losing money in unclaimed
          refunds. Luckily, GETIDA can help you to maximize your available
          Amazon FBA refunds. GETIDA provides sellers with the following
          services to get the best possible value from their Amazon account:
        </p>
        <ul>
          <li>Maximising available FBA reimbursements.</li>
          <li>Award-winning dashboard with free FBA data and analytics.</li>
          <li>
            A free tool to track and monitor your FBA product weights and
            dimensions.
          </li>
        </ul>
        <p>
          GETIDA has a special offer for e-Comas customers - $400 in free FBA
          reimbursements.
        </p>
        <a class="cta" href="https://online.getida.com/e-comas400">
          Find out more!
        </a>
        <p>
          We are delighted to work with GETIDA to help our customers boost their
          profits by reconciling their inventory and filing claims for
          reimbursement as easily as possible.
        </p>
      </section>

      <section id="Payoneer">
        <h3>Payoneer</h3>
        <p>
          We proudly partner with Payoneer to help our customers with their
          customer payment processes, outgoing payments and cash flow.
        </p>
        <p>With a Payoneer account, you can:</p>
        <ul>
          <li>
            Simplify your payment process and receive international payments
            securely and easily.
          </li>
          <li>
            Get paid locally, so you don't take the hit on currency conversions.
          </li>
          <li>
            Pay your suppliers and VAT from one platform – in most cases for
            free.
          </li>
          <li>
            You can also get a Commercial Card to earn cashback on your
            business's expenditure.
          </li>
        </ul>
        <p>
          And that's not all: for our dynamic customers who may need a cash
          injection, for example to invest in new stock in the busy
          pre-Christmas months, Payoneer offers a Working Capital solution.
        </p>
        <p>
          Payoneer can lend you up to 140% of your monthly store turnover,
          charged at industry-low rates. And you can repay it as a percentage of
          sales over a 1-, 3- or 6-month period.
        </p>
        <p>
          We can help you streamline and simplify your outgoing and incoming
          payments systems through Payoneer, and get help with cash flow when
          you need it.
        </p>
        <a class="cta" href="https://register.payoneer.com/en/solution/ecomas/">
          Sign up and receive $25
        </a>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
