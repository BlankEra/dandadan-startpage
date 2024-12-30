import { injectBookmarks } from "./bookmarks.js"
import { updateVariant } from "./variants.js"

const bookmarks = [
  {
    label: "piracy",
    items: {
      "fitgirl": "https://fitgirl-repacks.site/",
      "dodi": "https://dodi-repacks.site/",
      "cs.rin": "https://cs.rin.ru/forum/",
      "megathread": "https://www.reddit.com/r/Piracy/wiki/megathread/",
    },
  },
  {
    label: "tools",
    items: {
      "vid > compress": "https://8mb.video",
      "img > upscale": "https://bigjpg.com/",
      "css > shadows": "https://www.joshwcomeau.com/shadow-palette/",
      "js > bundlephobia": "https://bundlephobia.com/",
    },
  },
  {
    label: "social",
    items: {
      youtube: "https://youtube.com",
      reddit: "https://old.reddit.com",
    },
  },
  {
    label: "ai",
    items: {
      "civitai": "https://civitai.com/models",
      "llm": "https://llm.extractum.io/",
    },
  },
]

injectBookmarks(bookmarks)

// Select a random variant
updateVariant()
// Or set a static variant
// updateVariant("momo-1")

// For debugging
/*
function iterateVariants() {
  updateVariant()
  setTimeout(iterateVariants, 5000)
}
iterateVariants()
*/
