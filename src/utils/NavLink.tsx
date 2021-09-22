import { h } from "@aduh95/async-jsx";

interface NavLinkProps {
  href: string;
  children?: any;
}
export default function NavLink({ href }: NavLinkProps) {
  const url = new URL(href, location.origin);
  const isCurrentPage =
    url.hash === "" &&
    location.origin === url.origin &&
    location.pathname === url.pathname;
  return isCurrentPage ? <a class="active" /> : <a href={href} />;
}
