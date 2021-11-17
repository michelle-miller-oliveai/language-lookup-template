import * as React from 'react';
import { LanguageList, LanguageSearch, LanguageSearchFilter } from '../types';
import createLanguageSearch from '../util/createLanguageSearch';
import isSameLanguageList from '../util/isSameLanguageList';
import { useLanguageList } from './LanguageRecordContext';

type LanguageSearchDispatch = (filter: LanguageSearchFilter) => void;

type LanguageSearchState = Readonly<LanguageSearch> & {
  readonly search: LanguageSearchDispatch;
};

const DEFAULT_VALUE: LanguageSearchState = {
  ...createLanguageSearch({ keywords: '' }),
  search: () => {},
};

const LanguageSearchStateContext = React.createContext<LanguageSearchState>(
  DEFAULT_VALUE,
);

export type WithLanguageSearchStateOptions = {
  filter?: LanguageSearchFilter;
};

export function withLanguageSearchState<P>(
  Component: React.ComponentType<P>,
  options: WithLanguageSearchStateOptions = {},
): React.FC<P> {
  return (props: P) => {
    const languages = useLanguageList();

    const [{ filter, results }, setState] = React.useState(
      createLanguageSearch(options.filter, languages),
    );

    React.useEffect(() => {
      setState((prev) => {
        const next = createLanguageSearch(prev.filter, languages);
        return isSameLanguageList(prev.results, next.results) ? prev : next;
      });
    }, [languages, setState]);

    const search = React.useCallback(
      (filter) => {
        setState((prev) => {
          const next = createLanguageSearch(filter, languages);
          if (isSameLanguageList(prev.results, next.results)) {
            return { ...prev, filter };
          }
          return next;
        });
      },
      [setState, languages],
    );

    const value = React.useMemo(() => ({ filter, results, search }), [
      filter,
      results,
      search,
    ]);

    return (
      <LanguageSearchStateContext.Provider value={value}>
        <Component {...props} />
      </LanguageSearchStateContext.Provider>
    );
  };
}

export const useLanguageSearchStateContext = () =>
  React.useContext(LanguageSearchStateContext);

export function useLanguageSearchFilter(): LanguageSearchFilter {
  const state = useLanguageSearchStateContext();
  return state.filter;
}

export function useLanguageSearchResults(): LanguageList {
  const state = useLanguageSearchStateContext();
  return state.results;
}

export function useLanguageSearchDispatch(): LanguageSearchDispatch {
  const state = useLanguageSearchStateContext();
  return state.search;
}

export default LanguageSearchStateContext;
