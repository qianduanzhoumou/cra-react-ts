import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
// import router from '@/routers';
import App from './App';
import 'antd/dist/reset.css';
import '@/i18n/index'
import './index.less';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)