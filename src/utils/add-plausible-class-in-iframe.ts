var edited = false;
function setClass() {
  // Get a reference to the iframe by its ID
  const iframe = document.getElementById("myIframe") as HTMLIFrameElement;
  // Check if the iframe exists and is loaded
  // Check if the iframe exists
  if (iframe && iframe.contentWindow) {
    // Access the content of the iframe
    const iframeWindow = iframe.contentWindow;
    const iframeDocument = iframeWindow.document;

    // Find the form element within the iframe content
    const form = iframeDocument.getElementsByTagName("form")[0]; // Replace "myForm" with the actual ID of your form

    // Add a class to the form element
    if (form) {
      form.classList.add("plausible-event-name=Form+Signup");
    }
    edited = true;
  } else {
    setTimeout(() => setClass(), 200);
  }
}

setClass();