# FancyType Raycast Extension

FancyType は、選択したテキストをおしゃれなフォントスタイルに変換する Raycast 拡張機能です。

## 機能

- 選択したテキストを様々なフォントスタイルに変換
- 設定画面でフォントスタイルのプレビューと選択が可能
- クリップボードを介したテキストの変換と貼り付け

## 開発環境のセットアップ

1. 前提条件
   - Node.js (v14以上)
   - npm (v6以上)
   - Raycast (最新版)

2. リポジトリのクローン
   ```
   git clone https://github.com/kinatsugu/fancytype.git
   cd fancytype
   ```

3. 依存関係のインストール
   ```
   npm install
   ```

## 開発

1. 開発モードでの実行
   ```
   npm run dev
   ```
   このコマンドにより、Raycast 内で拡張機能がホットリロードされるため、変更がリアルタイムで反映されます。

2. コードの変更
   `src` ディレクトリ内のファイルを編集してください。主なファイルは以下の通りです：
   - `src/command.tsx`: メインのエントリーポイント
   - `src/preferences.tsx`: 設定画面のコンポーネント
   - `src/utils.ts`: ユーティリティ関数

3. Lintの実行
   ```
   npm run lint
   npm run fix-lint
   ```

## ビルド

1. プロダクションビルド
   ```
   npm run build -o dist
   ```
   このコマンドにより、`dist` ディレクトリに最適化されたビルドが生成されます。

## 配布

1. distの中身をzipにして配布
2. 受け取った側は、raycastのimport extensionsからzipを展開してimportします。

