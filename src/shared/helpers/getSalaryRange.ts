function formatNumberWithSpaces(num: number): string {
  return new Intl.NumberFormat("ru-RU").format(num);
}

export function getSalaryRange(
  from: number | null | undefined,
  to: number | null | undefined
) {
  if (!from && to) {
    return `До ${formatNumberWithSpaces(to)}`;
  }
  if (!to && from) {
    return `От ${formatNumberWithSpaces(from)}`;
  }
  if (from && to) {
    return `От ${formatNumberWithSpaces(from)} до ${formatNumberWithSpaces(
      to
    )}`;
  }
  return "Зарплата не указана";
}
