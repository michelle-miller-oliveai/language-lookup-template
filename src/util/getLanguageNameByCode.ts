import ISO6391 from 'iso-639-1';
import { LanguageCode, LanguageName } from '../types';

/**
 * Get the `LanguageName` that corresponds to the provided code.
 *
 * @param code ISO 639-1 language code
 */
function getLanguageNameByCode(code: LanguageCode): LanguageName | null {
  const display = ISO6391.getName(code);
  const native = ISO6391.getNativeName(code);

  return display && native ? { display, native } : null;
}

export default getLanguageNameByCode;
