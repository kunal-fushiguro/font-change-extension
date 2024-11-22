chrome.runtime.onInstalled.addListener(() => {
  console.log("Font Changer installed!");
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tabId && tab.url) {
    const { fontFamily } = await chrome.storage.sync.get("fontFamily");
    if (fontFamily) {
      chrome.scripting.executeScript({
        target: { tabId },
        files: ["content/content.js"],
      });

      chrome.tabs.sendMessage(tabId, { type: "changeFont", fontFamily });
    }
  }
});
