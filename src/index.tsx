import { render } from 'react-dom';
import App from './App';

// Styles
import './styles.scss';
import 'milligram';

const rootElement = document.getElementById('root');
render(<App />, rootElement);
