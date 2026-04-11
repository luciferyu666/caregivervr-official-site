# CareMirror 官方網站

這是 CareMirror 照護之鏡第一版官方網站專案，定位為靜態網站優先的正式官網基礎，主要用於：

- 對外介紹公司與產品定位
- 展示技術能力與應用場景
- 記錄開發過程
- 提供聯絡與預約 demo 的入口

技術上使用 Astro minimal、TypeScript strict、Tailwind 4 與 Astro content collections，不引入 React / Vue / Svelte。

## 開發環境

- Node.js：`22.12.0` 以上
- npm：建議使用隨 Node 22.12.0 以上版本附帶的版本

如果你使用 `nvm`：

```bash
nvm use
```

## 安裝方式

```bash
npm install
```

## 開發方式

```bash
npm run dev
```

預設會啟動在 `http://localhost:4321`。

## Build 方式

```bash
npm run build
```

若要本機預覽 build 結果：

```bash
npm run preview
```

## 專案結構

```text
caregivervr-official-site/
├─ public/
│  ├─ fonts/
│  ├─ og/
│  ├─ favicon.svg
│  └─ robots.txt
├─ src/
│  ├─ assets/
│  │  ├─ brand/
│  │  └─ product/
│  ├─ components/
│  │  ├─ common/
│  │  └─ home/
│  ├─ content/
│  │  ├─ process/
│  │  ├─ news/
│  │  └─ case-studies/
│  ├─ data/
│  │  ├─ brand.ts
│  │  └─ site.ts
│  ├─ layouts/
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ about.astro
│  │  ├─ brand-guidelines.astro
│  │  ├─ product.astro
│  │  ├─ technology.astro
│  │  ├─ use-cases.astro
│  │  ├─ contact.astro
│  │  └─ process/
│  ├─ styles/
│  │  ├─ brand-fonts.css
│  │  ├─ brand-tokens.css
│  │  └─ global.css
│  └─ content.config.ts
├─ docs/
│  └─ brand-guidelines.md
├─ AGENTS.md
├─ astro.config.mjs
├─ package.json
├─ tsconfig.json
├─ .gitignore
├─ .nvmrc
└─ README.md
```

## Content Collections

目前已定義三個 collection：

- `process`
- `news`
- `caseStudies`

其中 `process` 已放入一篇範例文章，可透過 `/process` 與 `/process/[id]` 路由讀取。

## 品牌素材與產品圖放置規則

- `src/assets/`
  適合放需要在 Astro 元件內 import、並交給 Astro / Vite 一起處理的本地素材。
  目前品牌與產品預覽圖都放在：
  - `src/assets/brand/`
  - `src/assets/product/`

- `src/data/brand.ts`
  是品牌單一來源，集中管理：
  - 品牌名稱與副標
  - 字體角色
  - 色票與 semantic token 對應
  - OG 輸出規格
  - favicon 與預設社群圖設定

- `public/`
  適合放需要固定公開網址的檔案。
  目前以下檔案放在 `public/`：
  - `public/favicon.svg`
  - `public/robots.txt`
  - `public/fonts/`
  - `public/og/default-1200x630.svg`
  - `public/og/default-1200x1200.svg`
  - `public/og/home-1200x630.svg`
  - `public/og/home-1200x1200.svg`
  - `public/og/product-1200x630.svg`
  - `public/og/product-1200x1200.svg`

## 品牌字體架構

目前專案沒有內建字體檔，因此採用正式的 fallback stack 與未來可替換結構。

- 字體角色定義：`src/styles/brand-fonts.css`
- 品牌字體說明：`public/fonts/README.md`

目前使用的 CSS 變數：

- `--font-display`
- `--font-body`
- `--font-ui`
- `--font-mono`

### 如何放入正式字體檔

1. 將字體檔放到 `public/fonts/`
2. 在 `src/styles/brand-fonts.css` 新增 `@font-face`
3. 更新 `--font-display` / `--font-body` / `--font-ui` / `--font-mono`
4. 執行 `npm run build`
5. 打開 `/brand-guidelines` 檢查套用結果

### 如何替換 fallback stack

直接修改 `src/styles/brand-fonts.css` 中的字體變數即可，避免把字體名稱散落到元件裡。

## 品牌色票與 token 維護位置

- 品牌資料來源：`src/data/brand.ts`
- CSS token 實作：`src/styles/brand-tokens.css`
- 全站套用與元件樣式：`src/styles/global.css`

若要新增或調整品牌色，請先更新 `brand.ts`，再更新 `brand-tokens.css`。

## 如何替換 placeholder SVG 為正式素材

- 品牌 logo：
  直接替換 `src/assets/brand/` 內對應檔案，並保持檔名不變：
  - `logo-full.svg`
  - `logo-mark.svg`
  - `logo-wordmark.svg`

- 產品視覺：
  直接替換 `src/assets/product/` 內對應檔案，並保持檔名不變：
  - `hero-main.svg`
  - `module-bed-bath.svg`
  - `module-perineal-care.svg`
  - `dashboard-score.svg`

- 若要改用 `png / jpg / webp`：
  1. 把新檔放到同一目錄
  2. 修改對應頁面或元件 import
  3. 確認 alt 文字仍然正確

## 如何更新 OG 圖

- 預設 OG 圖：
  - `public/og/default-1200x630.svg`
  - `public/og/default-1200x1200.svg`
- 首頁 OG 圖：
  - `public/og/home-1200x630.svg`
  - `public/og/home-1200x1200.svg`
- 產品頁 OG 圖：
  - `public/og/product-1200x630.svg`
  - `public/og/product-1200x1200.svg`

對應設定集中在：
- `src/data/site.ts`
- `src/data/brand.ts`
- `src/components/common/SocialMeta.astro`
- `src/layouts/BaseLayout.astro`

如果要替換 OG 圖：
1. 直接覆蓋 `public/og/` 內對應檔案，或改成新的檔名
2. 同步更新 `src/data/brand.ts` 與 `src/data/site.ts`
3. 重新執行 `npm run build`

### 如何新增新的 OG 尺寸

1. 在 `public/og/` 新增新的尺寸檔案，例如 `home-1600x900.svg`
2. 在 `src/data/brand.ts` 的 `ogSpecs` 補上對應規格與路徑
3. 若頁面需要輸出該尺寸，更新 `site.ts` 或頁面傳入的 `ogImages`
4. 執行 `npm run build`

## 如何更新 favicon

- 目前 favicon 路徑：`public/favicon.svg`
- 若要替換，直接覆蓋此檔案即可
- 建議 favicon 保持以品牌 mark 為核心，而不是使用長文字

## 如何新增首頁 / 產品頁視覺素材

- 首頁 Hero 與首頁預覽區：
  - `src/components/home/Hero.astro`
  - `src/components/home/ProductPreviewGrid.astro`

- 產品頁主視覺與模組展示：
  - `src/pages/product.astro`

新增素材時建議：
1. 先放到 `src/assets/product/`
2. 再由元件或頁面 import 使用
3. 保持命名語義清楚，方便後續替換與維護

## brand-guidelines 頁的用途

- 預覽 logo 系統
- 檢查字體角色與 typography scale
- 確認色票與 semantic token 是否一致
- 檢查按鈕、卡片與 chip 的視覺基礎
- 預覽各組 OG 圖輸出結果
- 檢查 favicon / logo-mark 是否一致

建議每次調整品牌字體、色票或 OG 圖後，都打開 `/brand-guidelines` 做快速人工驗收。

## SEO 與站點設定

- 基本 SEO metadata 由 `src/layouts/BaseLayout.astro` 提供
- `astro.config.mjs` 已加入 sitemap 官方整合
- 目前 `site` 使用 placeholder 網域：`https://caregivervr.example.com`

正式上線前，請記得更新：

- `astro.config.mjs` 的 `site`
- `public/robots.txt` 的 sitemap URL
- `contact` 頁面的 Email / 電話 placeholder

## 後續建議

- 以正式 PNG / JPG / WebP 替換目前的 SVG 展示資產
- 放入授權合法的正式品牌字體檔
- 加入新聞與案例內容
- 規劃表單串接或 CRM / Email 導流
- 補正式部署設定與 CI build 檢查
