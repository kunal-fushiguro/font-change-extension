import { useEffect, useState } from "react"

import { Storage } from "@plasmohq/storage"

const storage = new Storage()

const fonts = [
  "Arial",
  "Times New Roman",
  "Courier New",
  "Georgia",
  "Verdana",
  "Helvetica"
]

export default function Popup() {
  const [selectedFont, setSelectedFont] = useState("")

  useEffect(() => {
    storage.get("selectedFont").then((font) => {
      if (font) setSelectedFont(font)
    })
  }, [])

  const changeFont = async (font: string) => {
    setSelectedFont(font)
    await storage.set("selectedFont", font)

    // Inject script to change font
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    if (tab.id) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (font) => {
          document.body.style.fontFamily = font
        },
        args: [font]
      })
    }
  }

  return (
    <div className="w-64 p-4 bg-white">
      <h1 className="text-xl font-bold mb-4">Font Changer</h1>
      <div className="space-y-2">
        {fonts.map((font) => (
          <button
            key={font}
            onClick={() => changeFont(font)}
            className={`w-full p-2 rounded ${
              selectedFont === font
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            style={{ fontFamily: font }}>
            {font}
          </button>
        ))}
      </div>
    </div>
  )
}
