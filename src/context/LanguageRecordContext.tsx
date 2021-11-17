import * as React from 'react';
import { Language, LanguageCode, LanguageList, LanguageRecord } from '../types';
import createLanguageRecord from '../util/createLanguageRecord';

const DEFAULT_VALUE: LanguageRecord = createLanguageRecord();

const LanguageRecordContext = React.createContext<Readonly<LanguageRecord>>(
  DEFAULT_VALUE,
);

export type WithLanguageRecordOptions = {
  codes?: LanguageCode[];
};

export function withLanguageRecord<P>(
  Component: React.ComponentType<P>,
  options: WithLanguageRecordOptions = {},
): React.FC<P> {
  const { codes } = options;
  const value = codes ? createLanguageRecord(codes) : DEFAULT_VALUE;

  return (props: P) => (
    <LanguageRecordContext.Provider value={value}>
      <Component {...props} />
    </LanguageRecordContext.Provider>
  );
}

export const useLanguageRecordContext = () =>
  React.useContext(LanguageRecordContext);

export function useLanguage<C extends LanguageCode>(code: C): Language<C> {
  const languages = useLanguageRecordContext();
  return React.useMemo(() => languages[code], [languages, code]) as any;
}

export function useLanguageList(): LanguageList {
  const languages = useLanguageRecordContext();
  return languages.list;
}

export default LanguageRecordContext;
