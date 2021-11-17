import { LanguageName, Language } from '../types';
import getLanguageCodeByName from './getLanguageCodeByName';
import getLanguageByCode from './getLanguageByCode';

/**
 * Get the `LanguageName` that corresponds to the provided code.
 *
 * @param name The `LanguageName` object, native name, or English name
 */
function getLanguageByName(name: string | LanguageName): Language | null {
  const code = getLanguageCodeByName(name);

  return code ? getLanguageByCode(code) : null;
}

export default getLanguageByName;
