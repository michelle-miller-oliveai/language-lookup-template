import ISO6391 from 'iso-639-1';
import { LanguageCode, LanguageName } from '../types';
import isLanguageCode from './isLanguageCode';

/**
 * Get the `LanguageCode` that corresponds to the provided name.
 *
 * @param name The `LanguageName` object, native name, or English name
 */
function getLanguageCodeByName(
  name: string | LanguageName,
): LanguageCode | null {
  if (typeof name !== 'string') return getLanguageCodeByName(name.native);

  const code = ISO6391.getCode(name);

  return isLanguageCode(code) ? code : null;
}

export default getLanguageCodeByName;
