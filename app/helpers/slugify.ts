// Turn a project title into a URL slug for the works pages.
export function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-') // collapse any run of non-alphanumerics to a single dash
    .replace(/^-+|-+$/g, '') // trim leading/trailing dashes
}

// Pick a readable label from a file path (e.g. "src/app/Home.tsx" -> "Home").
export function labelFromPath(path: string) {
  const parts = path.split('/')
  const file = parts[parts.length - 1] ?? ''
  // Drop the extension, but only when there is a base name before the dot, so
  // dotfiles like ".gitignore" keep their full name instead of becoming empty.
  const dot = file.lastIndexOf('.')
  return dot > 0 ? file.slice(0, dot) : file
}
