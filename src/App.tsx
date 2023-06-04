import { Suspense } from 'react';
import { Provider } from 'react-redux'
import { Spin, ConfigProvider, } from 'antd';
import Lyout from '@/components/layout';
import store from '@/store/index'

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <Suspense fallback={<Spin size="large" className="globa_spin" />}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#00b96b',
            },
          }}
        >
          <Lyout />
        </ConfigProvider>
      </Suspense>
    </Provider >
  )
}

export default App;
