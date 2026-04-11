# CareMirror／照護之鏡 品牌手冊

## 1. 品牌定位簡述

CareMirror 照護之鏡是以女性照護員 VR 訓練系統為核心的品牌。網站與產品視覺都應呈現以下特質：

- 專業、可信、可用於正式介紹
- 醫療科技感，而不是遊戲宣傳感
- 深色底、冷色系主品牌色、清楚對比
- 內容優先，視覺輔助閱讀，不用過度炫技動畫

## 2. 品牌名稱與副標

- 英文主品牌：`CareMirror`
- 中文品牌：`照護之鏡`
- 品牌主用法：`CareMirror 照護之鏡`
- 品牌標語：`讓每一次照護，都被看見`
- 產品描述：`女性照護員 VR 訓練系統`

品牌主名稱在對外頁面中應優先使用 `CareMirror 照護之鏡`。
英文用於對外、國際、技術語境；中文用於醫院、長照與台灣市場語境。
避免使用 `CareMirror（照護之鏡 VR系統）` 這類會把品牌寫成產品名稱的格式。

## 3. 字體系統

目前專案未內建商業字體檔，因此採用正式的 fallback 架構，後續可替換為授權字體。

### 字體角色

| 角色 | CSS 變數 | 用途 |
| --- | --- | --- |
| Display | `--font-display` | Hero、大標、章節標題 |
| Body | `--font-body` | 內文、說明、段落 |
| UI | `--font-ui` | 導覽、按鈕、卡片標題、資訊 chip |
| Mono | `--font-mono` | 規格、尺寸、代碼、技術資訊 |

### 目前 fallback stack

- Display / Body：`"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", "Segoe UI", sans-serif`
- UI：`"Inter", "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", "Segoe UI", sans-serif`
- Mono：`"JetBrains Mono", "SFMono-Regular", "Cascadia Code", "Consolas", monospace`

## 4. 色票表

### Raw palette

| Token | HEX | 用途 |
| --- | --- | --- |
| `--brand-blue-400` | `#56A8FF` | 主品牌亮面、CTA、Hero 光暈 |
| `--brand-blue-500` | `#1C77C8` | 深一階品牌主色 |
| `--brand-blue-800` | `#0C2948` | 深色層次與卡片邊緣 |
| `--brand-cyan-400` | `#45C7D6` | 醫療科技感 accent |
| `--brand-cyan-500` | `#0FA6BA` | 次品牌重點色 |
| `--neutral-100` | `#F5F9FF` | 主白字 |
| `--neutral-300` | `#9DB1C7` | 次文字 |
| `--neutral-950` | `#030916` | 最深背景 |

### Semantic token

| Token | HEX | 用途 |
| --- | --- | --- |
| `--color-background` | `#06111F` | 整體網站背景 |
| `--color-surface` | `#0B1727` | 卡片 / panel 背景 |
| `--color-surface-alt` | `#102036` | 替代內容區塊 |
| `--color-text-primary` | `#F5F9FF` | 主要文字 |
| `--color-text-secondary` | `#D7E4F3` | 次要文字 |
| `--color-text-muted` | `#9DB1C7` | 弱文字 |
| `--color-border` | `#284967` | 邊框 / 分隔線 |
| `--color-primary` | `#56A8FF` | 主按鈕 / CTA |
| `--color-primary-hover` | `#8CC8FF` | 主按鈕 hover |
| `--color-accent` | `#45C7D6` | 補強強調色 |
| `--color-success` | `#2ED3A7` | 成功 / 完成 |
| `--color-warning` | `#F3C869` | 提醒 / 待確認 |
| `--color-danger` | `#F27586` | 錯誤 / 警示 |

## 5. 基本組件視覺原則

- 卡片使用深色透明面搭配清楚邊框，不用純黑大面積壓扁層次。
- 主按鈕使用 `primary`，次按鈕使用 `surface + border`。
- Section kicker、chip、導航等 UI 元件應走 UI font，不直接插入任意字重與字型名稱。
- 若元件需要新顏色，先在 `src/data/brand.ts` 與 `src/styles/brand-tokens.css` 補 token，再使用。

## 6. Logo 使用規則

- 深色背景優先使用 `logo-full` 或 `logo-wordmark`。
- 小尺寸或 favicon 情境使用 `logo-mark`。
- 不要將 logo 直接貼到高噪音圖片上；必要時先給深色底板或留白。
- 不要重新手寫文字版 logo，所有品牌展示優先沿用既有資產。

## 7. OG 圖輸出規格

目前維護三組 OG 類型：

- `default`
- `home`
- `product`

每組至少包含兩種尺寸：

- `1200x630`：Landscape，作為主要社群分享圖與 Twitter 預設圖
- `1200x1200`：Square，用於需要方形裁切的平台

檔案位置：

- `public/og/default-1200x630.svg`
- `public/og/default-1200x1200.svg`
- `public/og/home-1200x630.svg`
- `public/og/home-1200x1200.svg`
- `public/og/product-1200x630.svg`
- `public/og/product-1200x1200.svg`

## 8. favicon 規格

- favicon 路徑：`public/favicon.svg`
- favicon 應以 `logo-mark` 為基礎，不使用長文字
- 如需新增 PNG favicon，可從 mark 延伸，但需保留相同幾何比例與主色語言

## 9. 如何替換品牌字體與品牌色

### 替換字體

1. 把正式字體檔放入 `public/fonts/`
2. 在 `src/styles/brand-fonts.css` 新增對應 `@font-face`
3. 更新 `--font-display`、`--font-body`、`--font-ui`、`--font-mono`
4. 重新執行 `npm run build`

### 替換品牌色

1. 在 `src/data/brand.ts` 更新原始色票與用途
2. 在 `src/styles/brand-tokens.css` 更新 raw palette 與 semantic token
3. 確認 `/brand-guidelines` 頁面視覺仍可讀
4. 重新執行 `npm run build`

## 10. 日後加入正式商業字體時的步驟

1. 確認商業授權允許網站嵌入與再部署
2. 將字體輸出為 `woff2` 優先，必要時再補 `woff`
3. 放入 `public/fonts/`
4. 在 `src/styles/brand-fonts.css` 補 `@font-face`
5. 保留 fallback stack 作為字體載入失敗備援
6. 逐頁檢查 `Hero`、`產品頁`、`/brand-guidelines` 與社群圖視覺是否仍一致
