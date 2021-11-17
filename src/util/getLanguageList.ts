/* eslint-disable no-redeclare */
import { Language, LanguageCode } from '../types';
import getLanguageByCode from './getLanguageByCode';
import getAllLanguageCodes from './getAllLanguageCodes';

function getLanguageList<C extends LanguageCode>(codes: C[]): Language<C>[];
function getLanguageList(): Language<LanguageCode>[];

/**
 * Get languages for the specified `codes`.
 * If `codes` is undefined, all languages are returned.
 *
 * Filters out any null values.
 *
 * @param C ISO 639-1 codes for the languages.
 *          Defaults to all `LanguageCode` values.
 *
 * @param codes ISO 639-1 codes for the languages.
 *              If `undefined`, all languages are returned.
 */
function getLanguageList(codes?: LanguageCode[]): Language[] {
  if (!codes) return getLanguageList(getAllLanguageCodes());
  return codes
    .map(getLanguageByCode)
    .filter((language) => !!language) as Language[];
}

export default getLanguageList;
