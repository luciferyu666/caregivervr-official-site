# Project Rules For Codex

## Brand system

- `src/data/brand.ts` 是品牌資料的單一來源，不要平行新增第二套 brand config。
- 顏色不要硬寫死在元件裡；優先透過 `src/styles/brand-tokens.css` 的 token 使用。
- 字體角色統一定義在 `src/styles/brand-fonts.css`，不要把字體名稱散落到各元件。
- 若沒有正式字體檔，不要加入會壞掉的 `@font-face`。

## Assets

- 品牌與產品視覺優先放 `src/assets/`。
- 字體資產優先放 `public/fonts/`。
- OG 圖與 favicon 放 `public/`，保持固定公開路徑。
- OG 檔命名遵循：`{group}-{width}x{height}.svg`，例如 `home-1200x630.svg`。

## Page and metadata

- 新增頁面時，要使用既有的 `BaseLayout.astro`、`SocialMeta.astro` 與品牌 token。
- 頁面若需要社群圖，優先使用 `site.ts` 內既有 `socialImages` 設定。
- 不要破壞 Astro + 靜態站結構，除非明確需要，否則不要加 React / Vue / Svelte。

## Maintenance

- 新增品牌色或語義 token 時，先更新 `src/data/brand.ts`，再更新 `src/styles/brand-tokens.css`。
- 新增品牌字體或修改字體角色時，同步更新：
  - `src/styles/brand-fonts.css`
  - `public/fonts/README.md`
  - `docs/brand-guidelines.md`
- 每次改動品牌系統後，都要至少執行一次 `npm run build` 驗證。
