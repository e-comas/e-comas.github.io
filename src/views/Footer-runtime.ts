export default function onSubmit(_token: any) {
  const pt0 = "go.e-com";
  const pt1 = "as.com&l&88573";
  const pt2 = "3&2023-10-10&m95z7";
  console.log('clicked');
  const formAction = ("https:&&" + pt0 + pt1 + pt2).replaceAll("&", "/");
  (document.getElementById("Requests") as HTMLFormElement).action = formAction;
  (document.getElementById("Requests") as HTMLFormElement)?.submit();
}

document.getElementById("submitRequest")?.addEventListener("click", onSubmit);