export interface StarPackage {
  id: string;
  name: string;
  stars: number;
  starsDisplay: string;
  price: number;
  priceDisplay: string;
  popular?: boolean;
  bestValue?: boolean;
  badge?: string;
  image: string;
  whatsappMessage: string;
}

export interface SiteConfig {
  name: string;
  domain: string;
  logoUrl: string;
  ownerName: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  email: string;
  facebookPageUrl: string;
  generalInquiryMessage: string;
}
