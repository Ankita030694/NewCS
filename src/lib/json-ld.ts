/**
 * Serialize a JSON-LD object for `<script type="application/ld+json" dangerouslySetInnerHTML>`.
 *
 * Escapes `<`, `>` and `&` AFTER JSON.stringify, as JSON unicode escapes. Parsers decode
 * them back to the original characters, so the structured data is unchanged, but a value
 * containing `</script>` (e.g. visitor-submitted review text) can no longer break out of
 * the script tag. Use this for every JSON-LD block that includes CMS or user data.
 */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}
