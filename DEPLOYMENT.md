# Shore Guesthouse - デプロイガイド

このウェブサイトをデプロイする方法を説明します。

## 🚀 方法1: GitHub Pages（おすすめ・無料）

### 手順:

1. GitHubリポジトリページにアクセス
   https://github.com/Masaki03090309/Nara-AI

2. **Settings** タブをクリック

3. 左サイドバーの **Pages** をクリック

4. **Source** セクションで:
   - Branch: `main` を選択
   - Folder: `/ (root)` を選択
   - **Save** ボタンをクリック

5. 数分待つと、以下のURLでアクセス可能になります:
   ```
   https://masaki03090309.github.io/Nara-AI/website/
   ```

### 注意点:
- デプロイには1-5分かかる場合があります
- 画像を追加した後は、再度GitHubにプッシュしてください

---

## 🌐 方法2: Netlify（簡単・無料）

### 手順:

1. [Netlify](https://www.netlify.com/)にアクセスしてサインアップ

2. **Add new site** → **Import an existing project** をクリック

3. **GitHub** を選択して認証

4. リポジトリ `Nara-AI` を選択

5. ビルド設定:
   - **Base directory**: `website`
   - **Build command**: (空欄)
   - **Publish directory**: `.` または `website`

6. **Deploy site** をクリック

7. 自動的にURLが発行されます（例: `random-name-123.netlify.app`）

### 利点:
- カスタムドメインが簡単に設定できる
- HTTPSが自動的に有効
- デプロイが超高速
- フォーム機能などが追加できる

---

## ☁️ 方法3: Vercel（高速・無料）

### 手順:

1. [Vercel](https://vercel.com/)にアクセスしてサインアップ

2. **New Project** をクリック

3. **Import Git Repository** → GitHub認証

4. リポジトリ `Nara-AI` を選択

5. プロジェクト設定:
   - **Framework Preset**: Other
   - **Root Directory**: `website`
   - **Build Command**: (空欄)
   - **Output Directory**: (空欄)

6. **Deploy** をクリック

7. URLが自動的に発行されます（例: `nara-ai.vercel.app`）

### 利点:
- 超高速CDN
- 自動HTTPS
- プレビューデプロイ機能
- カスタムドメイン無料

---

## 🖥️ 方法4: 従来のホスティング

### レンタルサーバー（さくら、ロリポップ、XSERVERなど）:

1. FTPクライアント（FileZillaなど）をダウンロード

2. サーバーにFTP接続

3. `website`フォルダの中身をアップロード:
   - index.html
   - gallery.html
   - information.html
   - css/
   - js/
   - images/

4. サーバーのドメインでアクセス可能になります

---

## 📝 画像の追加方法

デプロイ前に、Figmaから画像をエクスポートして追加してください:

1. Figmaから画像をエクスポート（README.md参照）

2. `website/images/`フォルダに画像を配置

3. Gitにコミット:
   ```bash
   git add website/images/
   git commit -m "Add images from Figma"
   git push origin main
   ```

4. 自動的に再デプロイされます（GitHub Pages/Netlify/Vercelの場合）

---

## ✅ おすすめの選択

- **初めての方**: GitHub Pages（完全無料、設定が簡単）
- **カスタムドメインを使いたい**: Netlify または Vercel
- **最速を求める**: Vercel
- **既存のレンタルサーバーがある**: FTPアップロード

---

## 🔧 トラブルシューティング

### GitHub Pagesで404エラーが出る場合:
- URLに `/website/` が含まれているか確認
- 正しいURL: `https://masaki03090309.github.io/Nara-AI/website/`

### 画像が表示されない場合:
- 画像のパスが正しいか確認
- `images/` フォルダに画像が存在するか確認
- ファイル名の大文字小文字が一致しているか確認

### CSSが適用されない場合:
- ブラウザのキャッシュをクリア（Ctrl+Shift+R）
- DevToolsでCSSファイルが正しく読み込まれているか確認
