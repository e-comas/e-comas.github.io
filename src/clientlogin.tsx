import { h } from "@aduh95/async-jsx";
import Body from "./views/Body";
import Header from "./views/Header";
import yaml from "./utils/yaml";


export default(
    <Body title="Login page">
        <Header />
        <main id="main-content">
            <a href="https://reports.e-comas.com/seller">Seller</a>
            <a href="https://reports.e-comas.com/vendor">Vendor</a>
        </main>
    </Body>
).then(
  (e) => (
    document.body.append(e),
    yaml`
layout: none
`
  )
);