/* eslint-disable no-redeclare */
import { Language, LanguageSearchFilter } from '../types';
import getLanguageList from './getLanguageList';

function includesKeywords(language: Language, keywords: string): boolean {
  return (
    language.name.native.includes(keywords) ||
    language.name.display.includes(keywords) ||
    language.code.includes(keywords)
  );
}

function createLanguageSearchResults<L extends Language>(
  filter: LanguageSearchFilter,
  languages: L[],
): L[];
function createLanguageSearchResults(options: LanguageSearchFilter): Language[];

/**
 * Filter the provided languages given the filter options.
 *
 * @param L Languages to filter, defaults to all languages.
 *
 * @param filter Options for filtering the languages.
 *
 * @param languages Languages to filter.
 *                  If `undefined`, all languages are filtered.
 */
function createLanguageSearchResults(
  filter: LanguageSearchFilter,
  languages: Language[] = getLanguageList(),
): Language[] {
  const { keywords } = filter;

  return languages.filter((language) => includesKeywords(language, keywords));
}

export default createLanguageSearchResults;
