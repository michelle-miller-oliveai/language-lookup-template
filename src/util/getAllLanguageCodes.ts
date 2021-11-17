import ISO6391 from 'iso-639-1';
import { LanguageCode } from '../types';
import isLanguageCode from './isLanguageCode';

/**
 * Get all valid `LanguageCode` values.
 */
function getAllLanguageCodes(): LanguageCode[] {
  return ISO6391.getAllCodes()
    .map((code) => (isLanguageCode(code) ? code : null))
    .filter((code) => !!code) as LanguageCode[];
}

export default getAllLanguageCodes;
