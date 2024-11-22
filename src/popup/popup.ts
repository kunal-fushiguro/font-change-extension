document.getElementById("apply-font")?.addEventListener("click", async () => {
  const fontInput = document.getElementById("font-input") as HTMLInputElement;
  const fontFamily = fontInput.value;

  // Send a message to the content script
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab.id) {
    chrome.tabs.sendMessage(tab.id, { type: "changeFont", fontFamily });
  }

  // Save the font globally for all websites
  chrome.storage.sync.set({ fontFamily });
});
