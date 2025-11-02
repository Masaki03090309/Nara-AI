# Shore Guesthouse ウェブサイト

Figmaデザインを基に作成したShore Guesthouseの完全なウェブサイトです。

## プロジェクト構成

```
website/
├── index.html           # ホームページ
├── gallery.html         # ギャラリーページ
├── information.html     # インフォメーションページ
├── css/
│   └── styles.css      # メインスタイルシート
├── js/
│   └── main.js         # JavaScriptファイル
├── images/             # 画像フォルダ
└── README.md           # このファイル
```

## 機能

### ホームページ (index.html)
- レスポンシブナビゲーション
- ヒーローセクション（Santoriniの背景画像）
- ギャラリーグリッド（5つの画像アイテム）
- Aboutセクション
- Summer 2025予約セクション
- フッター（ソーシャルメディアリンク付き）

### ギャラリーページ (gallery.html)
- 3つのセクション：
  - Exterior Views（外観）
  - Interior Views（室内、スライドショー機能付き）
  - The Neighborhood（近隣エリア）
- 横スクロール可能な画像ギャラリー
- レスポンシブレイアウト

### インフォメーションページ (information.html)
- My Storyセクション
- History of the Neighbourhood
- Visitオプション（3つの交通手段）
- 詳細な情報レイアウト

## 必要な画像

以下の画像をFigmaからエクスポートして、`images/`フォルダに配置してください：

### ホームページ用:
- `hero-santorini.jpg` - ヒーローセクションの背景（Santoriniの風景）
- `bedroom.jpg` - キャノピーベッド
- `lounge.jpg` - ラウンジルーム
- `ocean.jpg` - 海の景色
- `blue-door.jpg` - 青いドアの画像
- `pool.jpg` - プールエリア
- `ocean-view.jpg` - Dateセクションの背景画像

### ギャラリーページ用:
- `outdoor-deck.jpg` - 屋外デッキ
- `neighborhood-1.jpg` から `neighborhood-6.jpg` - 近隣エリアの画像（6枚）
- `neighborhood-large.jpg` - 大きな近隣エリアの画像

### インフォメーションページ用:
- `family-photo.jpg` - 家族写真
- `neighborhood-history.jpg` - 近隣の歴史的な写真
- `colorful-street.jpg` - カラフルな通りの写真

## Figmaからの画像エクスポート方法

1. Figmaデザインを開く
2. 各画像要素を選択
3. 右サイドバーの「Export」セクションで形式を選択（JPG推奨）
4. 「Export [name]」ボタンをクリック
5. エクスポートした画像を`website/images/`フォルダに保存

### 推奨エクスポート設定:
- 形式: JPG（写真）または PNG（グラフィック）
- 品質: 80-90%（JPGの場合）
- サイズ: 2x（高解像度ディスプレイ対応）

## スタイルガイド

### カラーパレット:
- プライマリブラック: `#000000`
- ホワイト: `#FFFFFF`
- ライトグレー: `#F5F5F5`
- リンクブルー: `#0066FF`

### タイポグラフィ:
- メインフォント: EB Garamond（見出し、大きなテキスト）
- サブフォント: Roboto（本文、ナビゲーション）

### レスポンシブブレークポイント:
- デスクトップ: 1280px以上
- タブレット: 800px以下
- モバイル: 375px以下

## JavaScriptの機能

- モバイルメニューのトグル
- スライドショー機能（自動再生）
- スムーズスクロール
- スクロール時のフェードインアニメーション
- ギャラリーの横スクロール（ドラッグ機能）
- 画像の遅延読み込み（lazy loading）
- パララックス効果

## ブラウザ対応

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）
- モバイルブラウザ（iOS Safari, Chrome Mobile）

## 開発・カスタマイズ

### ローカルでの実行:
1. `index.html`をブラウザで開く
2. または、ローカルサーバーを使用:
   ```bash
   # Python 3の場合
   python -m http.server 8000

   # Node.jsの場合
   npx http-server
   ```
3. ブラウザで `http://localhost:8000` を開く

### カスタマイズのヒント:
- `css/styles.css`でスタイルを編集
- `js/main.js`でインタラクション機能を追加・編集
- `:root`変数を変更してカラースキームを簡単に変更可能

## 注意事項

- すべてのリンクは現在プレースホルダーです（`#`）
- 実際のBooking機能を実装する場合は、バックエンドシステムとの統合が必要です
- ソーシャルメディアのリンクはFigmaの公式アカウントに設定されています
- メールアドレスと電話番号はサンプルです

## ライセンス

このプロジェクトはFigmaのデザインに基づいて作成されています。

---

## 完成チェックリスト

- [x] HTMLファイル（index.html, gallery.html, information.html）
- [x] CSSファイル（responsive対応）
- [x] JavaScriptファイル（インタラクティブ機能）
- [ ] 画像のエクスポートと配置
- [ ] 実際のコンテンツの更新
- [ ] クロスブラウザテスト
- [ ] パフォーマンス最適化

ウェブサイトの作成が完了しました！画像をFigmaからエクスポートして配置すれば、完全に機能するウェブサイトになります。
