export type CurrencyCode =
  | "RUR"
  | "USD"
  | "EUR"
  | "KZT"
  | "BYR"
  | "UAH"
  | "GBP";

export const currencySymbols: Record<CurrencyCode, string> = {
  RUR: "₽",
  USD: "$",
  EUR: "€",
  KZT: "₸",
  BYR: "Br",
  UAH: "₴",
  GBP: "£",
};
