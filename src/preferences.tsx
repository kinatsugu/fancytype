import { Action, ActionPanel, Form, showHUD } from "@raycast/api";
import { useState, useEffect } from "react";
import { fontStyles, getSelectedFontStyle, setSelectedFontStyle, transformText, FontStyleKey } from "./utils";

export default function Preferences() {
  const [selectedStyle, setSelectedStyle] = useState<keyof typeof fontStyles>("mathBoldItalic");
  const [currentSavedStyle, setCurrentSavedStyle] = useState<keyof typeof fontStyles>("mathBoldItalic");

  useEffect(() => {
    getSelectedFontStyle().then((style) => {
      setSelectedStyle(style);
      setCurrentSavedStyle(style);
    });
  }, []);

  const handleSubmit = async (values: { fontStyle: keyof typeof fontStyles }) => {
    await setSelectedFontStyle(values.fontStyle);
    setSelectedStyle(values.fontStyle);
    setCurrentSavedStyle(values.fontStyle);
    await showHUD(`✅ フォントスタイル "${fontStyles[values.fontStyle].name}" が保存されたよ！`);
  };

  const exampleText = "My new gear...";
  const transformedExample = transformText(exampleText, selectedStyle);

  const markdown = `
# 現在設定されているスタイル: ${fontStyles[currentSavedStyle].name}

# プレビュー: ${fontStyles[selectedStyle].name}

## 例:
元のテキスト: ${exampleText}
変換後のテキスト: ${transformedExample}

ドロップダウンメニューからフォントスタイルを選択して保存ボタンを押してね！
  `;

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm title="保存" onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.Dropdown
        id="fontStyle"
        title="フォントスタイル"
        value={selectedStyle}
        onChange={(newValue) => setSelectedStyle(newValue as FontStyleKey)}
      >
        {Object.entries(fontStyles).map(([key, value]) => (
          <Form.Dropdown.Item key={key} value={key} title={value.name} />
        ))}
      </Form.Dropdown>
      <Form.Description text={markdown} />
    </Form>
  );
}
