import { Language } from './Language';

export type LanguageSearchFilter = {
  keywords: string;
};

export type LanguageSearch<L extends Language = Language> = {
  filter: LanguageSearchFilter;
  results: L[];
};
