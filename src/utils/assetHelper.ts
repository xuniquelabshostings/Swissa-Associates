/**
 * Resolves public asset paths considering base URL / deployment path.
 * Handles root domain, custom domain, and GitHub Pages repo subpaths.
 */
export function getAssetUrl(relativePath: string): string {
  const clean = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  const base = import.meta.env.BASE_URL || '/';

  // If base is set to a specific path like '/Swissa-Associates/'
  if (base && base !== './' && base !== '.') {
    const normalizedBase = base.endsWith('/') ? base : `${base}/`;
    return `${normalizedBase}${clean}`;
  }

  // Dynamic fallback: check window.location for GitHub Pages repo subpath
  if (typeof window !== 'undefined') {
    if (window.location.pathname.startsWith('/Swissa-Associates')) {
      return `/Swissa-Associates/${clean}`;
    }
  }

  return `./${clean}`;
}
