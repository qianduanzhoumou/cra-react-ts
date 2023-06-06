// import { Suspense } from 'react';
import { Provider } from 'react-redux'
// import { Spin, ConfigProvider, } from 'antd';
import store from '@/store/index'
import HandleRouter from './routers/handle-router';
import { Route, Routes } from 'react-router-dom';
import Lyout from './components/layout';
import Login from './components/login';
import { asyncRoutes } from './routers/routers';

const App: React.FC = () => {
  // <Suspense fallback={<Spin size="large" className="globa_spin" />}>
  //   <ConfigProvider
  //     theme={{
  //       token: {
  //         colorPrimary: '#00b96b',
  //       },
  //     }}
  //   >
  //     123
  //   </ConfigProvider>
  // </Suspense>

  // 递归路由，默认二级，后续有需要在改
  const createRoutes = (rule: any[]) => {
    const resultArr: JSX.Element[] = []  // 存储路由规则
    rule.forEach((route, index) => {
      if (route.path && route.element) {
        resultArr.push(
          <Route key={index} path={route.path} element={route.element}></Route>
        )
      }
      if (route.children) {
        route.children.forEach((route: any, index: number) => {
          resultArr.push(
            <Route key={index} path={route.path} element={route.element}></Route>
          )
        })
      }
    })
    return resultArr
  }

  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Lyout />}>
          {createRoutes(asyncRoutes)}
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </Provider >
  )
}

export default App;
