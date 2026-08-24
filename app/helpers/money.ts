// Money helpers for the "hire me" / pricing bits.

// Format a price given in cents for display.
export function formatPrice(cents: number) {
  return '$' + (cents / 100).toFixed(2)
}

// Sum line items (in cents) and apply a discount percentage (e.g. 20 for 20%).
export function total(items: number[], discountPct = 0) {
  let sum = 0
  for (const i of items) sum += i
  // Clamp the discount to 0–100% so we never return a negative total.
  const pct = Math.min(Math.max(discountPct, 0), 100)
  return sum - sum * (pct / 100)
}
