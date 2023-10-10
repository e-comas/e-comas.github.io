export default function onSubmit(_token: any) {
  (document.getElementById("Requests") as HTMLFormElement)?.submit();
  console.log("submit");
}
