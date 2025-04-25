import { CurrencyCode, currencySymbols } from "../types";

export function getCurrencySymbol(code: string): string {
  return currencySymbols[code as CurrencyCode] ?? code;
}
