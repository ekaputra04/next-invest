export type InvestmentItemType = {
  image: string;
  title: string;
  location: string;
  description: string;
  badges: string[];
  raised: number;
  securityType: string;
  investmentMultiple: number;
  maturity: number;
  minInvestment: number;
  href: string;
};

export type FooterItemType = {
  title: string;
  details: {
    name: string;
    link: string;
  }[];
};
