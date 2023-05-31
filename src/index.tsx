import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom"
import router from '@/routers/router';
import 'antd/dist/reset.css';
import './index.less';
import '@/i18n/index'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RouterProvider router={router} />
)