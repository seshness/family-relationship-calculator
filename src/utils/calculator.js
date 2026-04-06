/**
 * Calculate the relationship term for a given path.
 * @param {string[]} path - array of relation keys, e.g. ['mother', 'younger_sister', 'daughter']
 * @param {Object} data  - language-specific lookup table
 * @returns {Object|null}
 */
export function calculate(path, data) {
  if (path.length === 0) return null;
  return data[path.join('.')] ?? null;
}

/**
 * For a relation token at tokenIndex, look up the subpath ending there to find
 * a specialized term (e.g. 姨 for mother→younger_sister). Returns the term if it
 * differs from the button's chain label, otherwise null.
 *
 * @param {Array}  tokens        - full token array
 * @param {number} tokenIndex    - index of the relation token to inspect
 * @param {Object} data          - language-specific lookup table
 * @param {string} language      - 'zh' | 'ta'
 * @param {Object} chainLabelMap - map of key → chain display label for current language
 */
export function getSubpathTerm(tokens, tokenIndex, data, language, chainLabelMap) {
  const subPath = tokens
    .slice(0, tokenIndex + 1)
    .filter(t => t.type === 'relation')
    .map(t => t.key);

  if (subPath.length <= 1) return null;

  const entry = data[subPath.join('.')];
  if (!entry || entry.ageDependent) return null;

  const buttonChainLabel = chainLabelMap[tokens[tokenIndex].key] ?? '';

  if (language === 'zh') {
    const specialTerm = entry.chain || entry.zh;
    if (specialTerm && specialTerm !== buttonChainLabel) return specialTerm;
  }

  return null;
}
