# Fonts 目錄說明

此目錄保留給正式品牌字體資產。

目前專案 **沒有內建字體檔**，因此網站使用 `src/styles/brand-fonts.css` 中定義的 fallback stack，避免出現壞掉的 `@font-face` 連結。

## 未來加入正式字體的方式

1. 將授權合法的字體檔放入此目錄，優先使用 `woff2`
2. 建議命名範例：
   - `brand-display-regular.woff2`
   - `brand-ui-medium.woff2`
   - `brand-body-regular.woff2`
3. 到 `src/styles/brand-fonts.css` 新增 `@font-face`
4. 更新：
   - `--font-display`
   - `--font-body`
   - `--font-ui`
   - `--font-mono`
5. 執行 `npm run build`
6. 進入 `/brand-guidelines` 檢查是否正常套用

## 注意事項

- 不要加入不存在的字體路徑
- 沒有正式字體時，不要硬寫壞掉的 `@font-face`
- 字體替換後，請同步檢查首頁、產品頁、OG 圖與 favicon 的整體一致性
