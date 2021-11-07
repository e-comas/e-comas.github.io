export default function createNumberFormatter(
  number: number,
  currency?: string
) {
  return new Intl.NumberFormat("fr", {
    signDisplay: "always",
    maximumFractionDigits: 0,
    minimumIntegerDigits: Math.floor(Math.log10(number)) + 1,
    ...(currency ? { style: "currency", currency } : {}),
  });
}
