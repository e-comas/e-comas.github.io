const iframes = document.querySelectorAll("iframe");
if (iframes.length !== 1) {
  console.warn(new Error("There must be exactly 1 iframe element on the page"));
} else {
  const [iframe] = iframes;
  addEventListener("message", (e) => {
    if (typeof e.data === "number") {
      iframe.height = (e.data + 5) as any as string;
    }
  });
}
export {};
