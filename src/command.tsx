import { getSelectedText, Clipboard, showHUD } from "@raycast/api";
import { transformText, getSelectedFontStyle } from "./utils";

export default async function Command() {
  try {
    const selectedText = await getSelectedText();
    const selectedStyle = await getSelectedFontStyle();
    const transformedText = transformText(selectedText, selectedStyle);
    await Clipboard.paste(transformedText);
    await showHUD("✅ 変換に成功しました！");
  } catch (error) {
    await showHUD("❌ 変換に失敗しました...");
  }
}
