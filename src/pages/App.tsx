import Lyout from '@/components/layout';
import { Spin } from 'antd';
import { Suspense, } from 'react';

const App: React.FC = () => {
  return (
    <Suspense fallback={<Spin size="large" className="globa_spin" />}>
      <Lyout />
    </Suspense>
  )
}

export default App;
