import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { ModalState } from './context/ModalContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ModalState>
    <App/>
  </ModalState>
);

