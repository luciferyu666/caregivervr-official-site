export interface BrandFontRole {
  key: 'display' | 'body' | 'ui' | 'mono';
  label: string;
  cssVar: '--font-display' | '--font-body' | '--font-ui' | '--font-mono';
  stack: string;
  usage: string;
}

export interface BrandSwatch {
  token: string;
  hex: string;
  usage: string;
}

export interface OgImageSpec {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export interface OgVariantSpec {
  key: 'landscape' | 'square';
  width: number;
  height: number;
  label: string;
}

const ogVariants: Record<OgVariantSpec['key'], OgVariantSpec> = {
  landscape: {
    key: 'landscape',
    width: 1200,
    height: 630,
    label: 'Landscape 1200×630',
  },
  square: {
    key: 'square',
    width: 1200,
    height: 1200,
    label: 'Square 1200×1200',
  },
};

const createOgImageSet = (
  group: 'default' | 'home' | 'product',
  alt: string,
): OgImageSpec[] =>
  Object.values(ogVariants).map((variant) => ({
    url: `/og/${group}-${variant.width}x${variant.height}.svg`,
    width: variant.width,
    height: variant.height,
    alt: `${alt}｜${variant.label}`,
  }));

export const brandConfig = {
  brandName: 'CareMirror',
  brandNameEn: 'CareMirror',
  brandNameZh: '照護之鏡',
  brandLockup: 'CareMirror 照護之鏡',
  brandTagline: '讓每一次照護，都被看見',
  productDescriptor: '女性照護員 VR 訓練系統',
  faviconPath: '/favicon.svg',
  fonts: {
    display: {
      key: 'display',
      label: 'Display',
      cssVar: '--font-display',
      stack:
        '"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", "Segoe UI", sans-serif',
      usage: '首頁 Hero、頁面主標、章節標題與需要清楚氣勢的主視覺文字。',
    },
    body: {
      key: 'body',
      label: 'Body',
      cssVar: '--font-body',
      stack:
        '"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", "Segoe UI", sans-serif',
      usage: '內文段落、長文說明、流程介紹與一般敘述文字。',
    },
    ui: {
      key: 'ui',
      label: 'UI',
      cssVar: '--font-ui',
      stack:
        '"Inter", "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", "Segoe UI", sans-serif',
      usage: '導覽、按鈕、資訊 chip、卡片標題與需要較高辨識度的 UI 元件。',
    },
    mono: {
      key: 'mono',
      label: 'Mono',
      cssVar: '--font-mono',
      stack:
        '"JetBrains Mono", "SFMono-Regular", "Cascadia Code", "Consolas", monospace',
      usage: '規格欄位、尺寸標示、代碼片段與需要等寬對齊的資訊。',
    },
  } satisfies Record<'display' | 'body' | 'ui' | 'mono', BrandFontRole>,
  palette: {
    primary: [
      { token: '--brand-blue-950', hex: '#06111f', usage: '網站主背景與深色底層。' },
      { token: '--brand-blue-800', hex: '#0c2948', usage: '主要卡片邊緣與深色漸層層次。' },
      { token: '--brand-blue-600', hex: '#145791', usage: '按鈕 hover 與強調描邊。' },
      { token: '--brand-blue-500', hex: '#1c77c8', usage: '主品牌藍、關鍵按鈕與強調區塊。' },
      { token: '--brand-blue-400', hex: '#56a8ff', usage: '亮面主色與 Hero 光暈。' },
      { token: '--brand-blue-200', hex: '#cfe4ff', usage: '高亮文字與冷色描邊。' },
    ] satisfies BrandSwatch[],
    secondary: [
      { token: '--brand-cyan-500', hex: '#0fa6ba', usage: '次品牌色、技術導向模組重點。' },
      { token: '--brand-cyan-400', hex: '#45c7d6', usage: '醫療科技感 accent 與輔助光暈。' },
      { token: '--brand-cyan-300', hex: '#93eff5', usage: '次強調文字與 icon 微亮點。' },
    ] satisfies BrandSwatch[],
    accent: [
      { token: '--accent-aurora', hex: '#91e7ff', usage: '高對比高亮區、OG 裡的亮面標題。' },
      { token: '--accent-lilac', hex: '#8ca7ff', usage: '柔和的次色漸層過渡。' },
    ] satisfies BrandSwatch[],
    neutral: [
      { token: '--neutral-950', hex: '#030916', usage: '最深背景與陰影基底。' },
      { token: '--neutral-900', hex: '#07101d', usage: '主要背景塊。' },
      { token: '--neutral-700', hex: '#203246', usage: '深色邊框與次層卡片。' },
      { token: '--neutral-300', hex: '#b5c7db', usage: '次要文字。' },
      { token: '--neutral-100', hex: '#f5f9ff', usage: '主要白字與高亮。' },
    ] satisfies BrandSwatch[],
  },
  semanticColors: [
    { token: '--color-success', hex: '#2ed3a7', usage: '完成、成功、正向回饋。' },
    { token: '--color-warning', hex: '#f3c869', usage: '提醒、待確認、需注意訊息。' },
    { token: '--color-danger', hex: '#f27586', usage: '錯誤、警示、風險提示。' },
    { token: '--color-info', hex: '#7cb9ff', usage: '資訊型提示與說明狀態。' },
  ] satisfies BrandSwatch[],
  surfaceTokens: [
    { token: '--color-background', hex: '#06111f', usage: '整體網站背景。' },
    { token: '--color-surface', hex: '#0b1727', usage: '卡片與主要 panel 背景。' },
    { token: '--color-surface-alt', hex: '#102036', usage: '替代性內容區塊與漸層底。' },
    { token: '--color-text-primary', hex: '#f5f9ff', usage: '主要文字。' },
    { token: '--color-text-secondary', hex: '#d7e4f3', usage: '次要說明。' },
    { token: '--color-text-muted', hex: '#9db1c7', usage: '輔助說明與弱文字。' },
    { token: '--color-border', hex: '#284967', usage: '品牌邊框與分隔線。' },
    { token: '--color-primary', hex: '#56a8ff', usage: '主要 CTA 與品牌高亮。' },
    { token: '--color-primary-hover', hex: '#8cc8ff', usage: '主要 CTA hover。' },
    { token: '--color-accent', hex: '#45c7d6', usage: '次級強調。' },
  ] satisfies BrandSwatch[],
  componentPrinciples: [
    '深色底為主，搭配冷色主品牌光暈，維持醫療科技感而非遊戲視覺。',
    '所有主要區塊保持清楚層級，避免過度透明造成文字可讀性下降。',
    '品牌色應優先經由 design token 使用，不直接把 HEX 寫死在元件。',
  ],
  logoUsageRules: [
    '深色背景優先使用 full 或 wordmark 版本，保留足夠留白。',
    'favicon 與小尺寸情境使用 logo-mark，不縮成不可辨識的完整字樣。',
    '避免在高噪音影像上直接疊 logo，必要時先放置低透明度深色底板。',
  ],
  ogSpecs: {
    variants: Object.values(ogVariants),
    default: createOgImageSet('default', 'CareMirror／照護之鏡 預設社群分享圖'),
    home: createOgImageSet('home', 'CareMirror／照護之鏡 首頁社群分享圖'),
    product: createOgImageSet('product', 'CareMirror／照護之鏡 產品頁社群分享圖'),
  },
} as const;

export type BrandConfig = typeof brandConfig;
