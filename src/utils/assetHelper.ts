/**
 * Resolves public asset paths considering base URL / deployment path.
 * Handles root domain, custom domain, and GitHub Pages repo subpaths.
 */
export function getAssetUrl(relativePath: string): string {
  const clean = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  const base = import.meta.env.BASE_URL || './';
  if (base.endsWith('/')) {
    return `${base}${clean}`;
  }
  return `${base}/${clean}`;
}
