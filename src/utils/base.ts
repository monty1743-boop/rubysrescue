const base = import.meta.env.BASE_URL;

/** Prefix a public asset or internal route with the site base path. */
export function withBase(path: string): string {
  if (/^(https?:|mailto:|tel:)/.test(path)) {
    return path;
  }

  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${normalized}`;
}

/** Check whether a nav href matches the current page. */
export function isActiveRoute(href: string, pathname: string): boolean {
  const target = withBase(href);
  const normalizedTarget = target.endsWith('/') ? target.slice(0, -1) : target;
  const normalizedPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  if (href === '/') {
    return normalizedPath === normalizedTarget || normalizedPath === base.slice(0, -1);
  }

  return normalizedPath.startsWith(normalizedTarget);
}
