import { Language } from './Language';
import { LanguageCode } from './LanguageCode';

export type LanguageList<C extends LanguageCode = LanguageCode> = Language<C>[];

/**
 * Record of languages keyed by their ISO 639-1 codes.
 */
export type LanguageRecord<C extends LanguageCode = LanguageCode> = {
  [CODE in C]: Language<CODE>;
} & {
  list: Language<C>[];
};
