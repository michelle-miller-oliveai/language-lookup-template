/* eslint-disable no-redeclare */
import {
  Language,
  LanguageList,
  LanguageSearch,
  LanguageSearchFilter,
} from '../types';
import getLanguageList from './getLanguageList';
import createLanguageSearchResults from './createLanguageSearchResults';

const DEFAULT_SEARCH_FILTER: LanguageSearchFilter = {
  keywords: '',
};

function createLanguageSearch<L extends Language>(
  filter: LanguageSearchFilter,
  languages: L[],
): LanguageSearch<L>;
function createLanguageSearch(filter: LanguageSearchFilter): LanguageSearch;
function createLanguageSearch(): LanguageSearch;

/**
 * Create a `LanguageSearch` object that includes the results and filtering for languages.
 *
 * @param L Languages to filter, defaults to all languages.
 *
 * @param filter Options for filtering the languages.
 *
 * @param languages Languages to add to filter.
 *                  If `undefined`, all languages are filtered.
 */
function createLanguageSearch(
  filter: LanguageSearchFilter = DEFAULT_SEARCH_FILTER,
  languages: LanguageList = getLanguageList(),
): LanguageSearch {
  const results = createLanguageSearchResults(filter, languages);
  return { filter, results };
}

export default createLanguageSearch;
