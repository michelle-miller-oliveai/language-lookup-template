import { LanguageCode } from './LanguageCode';

/**
 * Defines the type for the name of a language.
 */
export type LanguageName = {
  /**
   * Name of the language as it's displayed to the user.
   */
  display: string;

  /**
   * Name of the language as it's written natively.
   */
  native: string;
};

/**
 * Defines a world language.
 *
 * @template CODE ISO 639-1 code for the language.
 */
export type Language<CODE extends LanguageCode = LanguageCode> = {
  /**
   * ISO 639-1 code for the language.
   */
  code: CODE;

  /**
   * Name of the language.
   */
  name: LanguageName;
};
