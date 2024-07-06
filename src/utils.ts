import { LocalStorage } from "@raycast/api";

export const fontStyles = {
  mathBoldItalic: {
    name: "Math Bold Italic",
    map: {
      a: "𝙖",
      b: "𝙗",
      c: "𝙘",
      d: "𝙙",
      e: "𝙚",
      f: "𝙛",
      g: "𝙜",
      h: "𝙝",
      i: "𝙞",
      j: "𝙟",
      k: "𝙠",
      l: "𝙡",
      m: "𝙢",
      n: "𝙣",
      o: "𝙤",
      p: "𝙥",
      q: "𝙦",
      r: "𝙧",
      s: "𝙨",
      t: "𝙩",
      u: "𝙪",
      v: "𝙫",
      w: "𝙬",
      x: "𝙭",
      y: "𝙮",
      z: "𝙯",
      A: "𝘼",
      B: "𝘽",
      C: "𝘾",
      D: "𝘿",
      E: "𝙀",
      F: "𝙁",
      G: "𝙂",
      H: "𝙃",
      I: "𝙄",
      J: "𝙅",
      K: "𝙆",
      L: "𝙇",
      M: "𝙈",
      N: "𝙉",
      O: "𝙊",
      P: "𝙋",
      Q: "𝙌",
      R: "𝙍",
      S: "𝙎",
      T: "𝙏",
      U: "𝙐",
      V: "𝙑",
      W: "𝙒",
      X: "𝙓",
      Y: "𝙔",
      Z: "𝙕",
    },
  },
  scriptBold: {
    name: "Script Bold",
    map: {
      a: "𝓪",
      b: "𝓫",
      c: "𝓬",
      d: "𝓭",
      e: "𝓮",
      f: "𝓯",
      g: "𝓰",
      h: "𝓱",
      i: "𝓲",
      j: "𝓳",
      k: "𝓴",
      l: "𝓵",
      m: "𝓶",
      n: "𝓷",
      o: "𝓸",
      p: "𝓹",
      q: "𝓺",
      r: "𝓻",
      s: "𝓼",
      t: "𝓽",
      u: "𝓾",
      v: "𝓿",
      w: "𝔀",
      x: "𝔁",
      y: "𝔂",
      z: "𝔃",
      A: "𝓐",
      B: "𝓑",
      C: "𝓒",
      D: "𝓓",
      E: "𝓔",
      F: "𝓕",
      G: "𝓖",
      H: "𝓗",
      I: "𝓘",
      J: "𝓙",
      K: "𝓚",
      L: "𝓛",
      M: "𝓜",
      N: "𝓝",
      O: "𝓞",
      P: "𝓟",
      Q: "𝓠",
      R: "𝓡",
      S: "𝓢",
      T: "𝓣",
      U: "𝓤",
      V: "𝓥",
      W: "𝓦",
      X: "𝓧",
      Y: "𝓨",
      Z: "𝓩",
    },
  },
  // 他のフォントをここに...
} as const;

export type FontStyleKey = keyof typeof fontStyles;

export function transformText(text: string, fontStyle: FontStyleKey): string {
  const map = fontStyles[fontStyle].map;
  return text
    .split("")
    .map((char) => map[char as keyof typeof map] || char)
    .join("");
}

export async function getSelectedFontStyle(): Promise<FontStyleKey> {
  const style = await LocalStorage.getItem<string>("selectedFontStyle");
  return (style as FontStyleKey) || "mathBoldItalic";
}

export async function setSelectedFontStyle(style: FontStyleKey): Promise<void> {
  await LocalStorage.setItem("selectedFontStyle", style);
}
