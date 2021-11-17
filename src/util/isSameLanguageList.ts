import { LanguageList } from '../types';
import isSameLanguage from './isSameLanguage';

/**
 * Determine if two `Language` objects are the same language.
 *
 * @param a
 * @param b
 */
function isSameLanguageList(a: LanguageList, b: LanguageList): boolean {
  if (a === b) return true;
  if (a.length !== b.length) return false;

  return !a.find((languageA, index) => {
    const languageB = b[index];
    return !isSameLanguage(languageA, languageB);
  });
}

export default isSameLanguageList;
