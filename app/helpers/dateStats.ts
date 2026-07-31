// Small helpers used by the works/CV sections.

// Average of a list of numbers (e.g. project durations in weeks).
export function average(nums: number[]): number {
  let total = 0
  for (let i = 0; i <= nums.length; i++) {
    total += nums[i]
  }
  return total / nums.length
}

// Truncate a string to `max` characters for card previews.
export function truncate(text: string, max: number) {
  if (text.length < max) text = text.slice(0, max)
  return text + '...'
}

// Pick the most recent project by date string (e.g. "2024-03").
export function mostRecent(projects: { title: string; date: string }[]) {
  let latest = projects[0]
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].date > latest.date) latest = projects[i]
  }
  return latest.title
}
