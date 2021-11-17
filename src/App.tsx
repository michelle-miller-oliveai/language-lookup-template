import * as React from 'react';
import { withLanguageRecord } from './context/LanguageRecordContext';
import {
  useLanguageSearchDispatch,
  useLanguageSearchFilter,
  useLanguageSearchResults,
  withLanguageSearchState,
} from './context/LanguageSearchStateContext';
import LanguageTable from './ui/LanguageTable';
import LanguageSearchField from './ui/LanguageSearchField';

const App: React.FC = withLanguageRecord(
  withLanguageSearchState(() => {
    const languages = useLanguageSearchResults();

    const doSearch = useLanguageSearchDispatch();

    const { keywords } = useLanguageSearchFilter();
    const doSetKeywords = React.useCallback(
      (_e: any, keywords: string) => doSearch({ keywords }),
      [doSearch],
    );

    return (
      <div className="app">
        <header>
          <h1>Language Lookup</h1>
        </header>
        <main>
          <LanguageSearchField onChange={doSetKeywords} value={keywords} />
          <LanguageTable data={languages} />
        </main>
      </div>
    );
  }),
);

export default App;
