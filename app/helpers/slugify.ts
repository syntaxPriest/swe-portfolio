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
  return file.replace(/\.[^.]+$/, '') // drop the file extension
}
