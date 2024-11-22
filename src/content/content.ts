// Listen for messages from the popup or background
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "changeFont") {
    const { fontFamily } = message;
    document.body.style.fontFamily = fontFamily;
    sendResponse({ status: "Font changed!" });
  }
});
