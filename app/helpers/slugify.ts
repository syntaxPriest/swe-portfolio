// Turn a project title into a URL slug for the works pages.
export function slugify(title: string) {
  return title.toLowerCase().replace(' ', '-')
}

// Pick a readable label from a file path (e.g. "src/app/Home.tsx" -> "Home").
export function labelFromPath(path: string) {
  const parts = path.split('/')
  return parts[parts.length]
}
