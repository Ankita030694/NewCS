const getPathnameFromInput = (input: string): string => {
  const value = input.trim();

  if (!value) {
    return '';
  }

  const tryParse = (candidate: string): string | null => {
    try {
      const url = new URL(candidate);
      return url.pathname || '';
    } catch {
      return null;
    }
  };

  const parsed =
    tryParse(value) ??
    (value.includes('.') ? tryParse(`https://${value}`) : null);

  if (parsed !== null) {
    return parsed;
  }

  return value;
};

const normalisePathSegment = (segment: string): string => {
  if (!segment) {
    return '';
  }

  let value = segment
    .trim()
    .replace(/^[\/]+/, '')
    .replace(/[\/]+/g, '/');

  const queryIndex = value.indexOf('?');
  if (queryIndex !== -1) {
    value = value.slice(0, queryIndex);
  }

  const hashIndex = value.indexOf('#');
  if (hashIndex !== -1) {
    value = value.slice(0, hashIndex);
  }

  if (value.toLowerCase().startsWith('resources/')) {
    value = value.slice('resources/'.length);
  }

  return decodeURIComponent(value);
};

const slugify = (value: string): string => {
  if (!value) {
    return '';
  }

  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const canonicaliseSlug = (rawValue: string | null | undefined): string => {
  if (!rawValue) {
    return '';
  }

  const pathname = getPathnameFromInput(rawValue);
  const cleaned = normalisePathSegment(pathname);
  const slug = slugify(cleaned);

  return slug;
};

export const generateSlugFromTitle = (title: string | null | undefined): string => {
  if (!title) {
    return '';
  }

  return canonicaliseSlug(title);
};

export const ensureBlogSlug = (
  slugCandidate: string | null | undefined,
  title: string | null | undefined,
  fallbackId: string
): string => {
  const fromSlug = canonicaliseSlug(slugCandidate);
  if (fromSlug) {
    return fromSlug;
  }

  const fromTitle = generateSlugFromTitle(title);
  if (fromTitle) {
    return fromTitle;
  }

  const fromId = canonicaliseSlug(fallbackId);
  if (fromId) {
    return fromId;
  }

  return fallbackId.trim();
};

