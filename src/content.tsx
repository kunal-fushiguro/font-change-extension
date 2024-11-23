import type { PlasmoContentScript } from "plasmo"

import { Storage } from "@plasmohq/storage"

export const config: PlasmoContentScript = {
  matches: ["<all_urls>"],
  all_frames: true
}

const storage = new Storage()

// Apply saved font when page loads
storage.get("selectedFont").then((font) => {
  if (font) {
    document.body.style.fontFamily = font
  }
})
