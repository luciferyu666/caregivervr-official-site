import { brandConfig } from './brand';

export const siteConfig = {
  siteName: brandConfig.brandLockup,
  siteTitleDefault: brandConfig.brandLockup,
  siteDescriptionDefault:
    'CareMirror 照護之鏡，讓每一次照護，都被看見。將照護 SOP 轉化為可量化、可重複演練的 VR 訓練系統。',
  siteUrl: 'https://caregivervr.example.com',
  brandName: brandConfig.brandName,
  brandNameEn: brandConfig.brandNameEn,
  brandNameZh: brandConfig.brandNameZh,
  brandLockup: brandConfig.brandLockup,
  brandTagline: brandConfig.brandTagline,
  productDescriptor: brandConfig.productDescriptor,
  contactEmail: 'hello@caregivervr.example.com',
  contactPhone: '+886-2-0000-0000',
  faviconPath: brandConfig.faviconPath,
  defaultOgImage: brandConfig.ogSpecs.default[0].url,
  socialImageHome: brandConfig.ogSpecs.home[0].url,
  socialImageProduct: brandConfig.ogSpecs.product[0].url,
  defaultSocialImages: brandConfig.ogSpecs.default,
  socialImages: {
    default: brandConfig.ogSpecs.default,
    home: brandConfig.ogSpecs.home,
    product: brandConfig.ogSpecs.product,
  },
  demoVideos: [
    {
      videoId: 'X5lobzNSwSM',
      title: '女性照護員 VR 訓練系統總覽展示',
      description:
        '從整體場景、教學節奏到畫面呈現，快速理解 CareMirror 照護之鏡的展示內容與產品氛圍。',
      watchUrl: 'https://www.youtube.com/watch?v=X5lobzNSwSM',
    },
    {
      videoId: 'fIvZzXJHNUY',
      title: '女性照護員 VR 訓練流程操作展示',
      description:
        '聚焦實際操作步驟、流程推進與互動節點，方便教學合作夥伴進一步檢視系統內容。',
      watchUrl: 'https://www.youtube.com/watch?v=fIvZzXJHNUY',
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
