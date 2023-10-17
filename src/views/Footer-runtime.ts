export default function onSubmit(_token: any) {
  if((document.getElementById("Requests") as HTMLFormElement)?.reportValidity()){
    const pt0 = "go.e-com";
    const pt1 = "as.com&l&88573";
    const pt2 = "3&2023-10-10&m95z7";
    const formAction = ("https:&&" + pt0 + pt1 + pt2).replaceAll("&", "/");
    (document.getElementById("Requests") as HTMLFormElement).action = formAction;
    (document.getElementById("Requests") as HTMLFormElement)?.submit();
  }else{
    console.log("invalid form content,skip submission");
  }
}

document.getElementById("submitRequest")?.addEventListener("click", onSubmit);