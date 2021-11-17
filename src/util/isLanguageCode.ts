import ISO6391 from 'iso-639-1';
import { LanguageCode } from '../types';

const LANGUAGE_CODES = Object.values(LanguageCode);

/**
 * Verify that the code is a valid `LanguageCode`.
 *
 * @param code ISO 639-1 language code
 */
function getLanguageNameByCode(
  code: LanguageCode | string,
): code is LanguageCode {
  return LANGUAGE_CODES.includes(code as any) && ISO6391.validate(code);
}

export default getLanguageNameByCode;
