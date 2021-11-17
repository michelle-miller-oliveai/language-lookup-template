/* eslint-disable no-redeclare */
import { Language, LanguageCode, LanguageRecord } from '../types';
import getLanguageList from './getLanguageList';

// @ts-ignore Something weird here
function createLanguageRecord<C extends LanguageCode>(
  codes: C[],
): LanguageRecord<C>;
function createLanguageRecord(): LanguageRecord;

/**
 * Generate record of languages keyed by their ISO 639-1 code.
 * If `codes` is undefined, all languages are added.
 *
 * @param C ISO 639-1 codes for the languages to add to the record.
 *          Defaults to all `LanguageCode` values.
 *
 * @param codes ISO 639-1 codes for the languages to add to the record.
 *              If `undefined`, all languages are added.
 */
function createLanguageRecord(codes?: LanguageCode[]): LanguageRecord {
  const list = codes ? getLanguageList(codes) : getLanguageList();

  const record: LanguageRecord = { list } as any;

  list.forEach((language: Language<LanguageCode>) => {
    // @ts-ignore Something weird here
    record[language.code] = language;
  });

  return record;
}

export default createLanguageRecord;
