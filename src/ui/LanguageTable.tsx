import * as React from 'react';
import { Language } from '../types';

type LanguageTableProps = {
  data: Language[];
};

const LanguageTable: React.FC<LanguageTableProps> = (props) => (
  <table className="language-table">
    <thead>
      <tr>
        <th>ISO 639-1 Code</th>
        <th>Name</th>
        <th>Native Name</th>
      </tr>
    </thead>
    <tbody>
      {props.data.map((language) => (
        <tr key={language.code}>
          <td>{language.code}</td>
          <td>{language.name.display}</td>
          <td>{language.name.native}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default LanguageTable;
