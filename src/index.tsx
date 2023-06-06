import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@/store/index';
import App from './App';
import 'antd/dist/reset.css';
import '@/i18n/index'
import './index.less';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)