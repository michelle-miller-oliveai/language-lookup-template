import * as React from 'react';

type LanguageSearchFieldProps = {
  value: string;
  onChange: (event: React.SyntheticEvent, value: string) => void;
};

const LanguageSearchField: React.FC<LanguageSearchFieldProps> = (props) => {
  const { value, onChange: providedOnChange } = props;

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      providedOnChange(event, event.target.value);
    },
    [providedOnChange],
  );

  return (
    <div className="language-search-field">
      <label htmlFor="language-search-field-input">Search Languages</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};

export default LanguageSearchField;
