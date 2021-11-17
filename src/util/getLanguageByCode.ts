import { LanguageCode, Language } from '../types';
import getLanguageNameByCode from './getLanguageNameByCode';

/**
 * Get the `Language` that corresponds to the provided code.
 *
 * @template C ISO 639-1 language code
 * @param code ISO 639-1 language code
 */
function getLanguageByCode<C extends LanguageCode>(
  code: C,
): Language<C> | null {
  const name = getLanguageNameByCode(code);

  return name ? { name, code } : null;
}

export default getLanguageByCode;
