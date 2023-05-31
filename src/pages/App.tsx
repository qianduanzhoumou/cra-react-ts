import { Suspense } from 'react';
import { Spin, ConfigProvider, } from 'antd';
import Lyout from '@/components/layout';

const App: React.FC = () => {

  return (
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
  )
}

export default App;
