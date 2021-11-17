import { Language, LanguageName } from '../types';

/**
 * Determine if two `LanguageName` objects are the same.
 *
 * @param a
 * @param b
 */
function isSameLanguageName(a: LanguageName, b: LanguageName): boolean {
  if (a === b) return true;
  return a.display === b.display && a.native === b.native;
}

/**
 * Determine if two `Language` objects are the same language.
 *
 * @param a
 * @param b
 */
function isSameLanguage(a: Language, b: Language): boolean {
  if (a === b) return true;
  if (a.code !== b.code) return false;
  return isSameLanguageName(a.name, b.name);
}

export default isSameLanguage;
