import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PracticePage from '../pages/practice';
import LibraryPage from '../pages/library';
import StatisticsPage from '../pages/statistics';
import SettingsPage from '../pages/SettingsPage';
import Layout from '../layout'; // 引入布局组件
import NotFoundPage from '../pages/NotFoundPage'; // 404 页面

const routes = [
  {
    index: true,
    element: <PracticePage />,
    icon: <span>📝</span>,
    name: '开始练习',
    menuHidden: true, // 首页不在侧边栏显示
  },
  {
    path: 'practice',
    element: <PracticePage />,
    icon: <span>📝</span>,
    name: '开始练习',
    menuHidden: false,
  },
  {
    path: 'library',
    element: <LibraryPage />,
    icon: <span>📚</span>,
    name: '词库管理',
    menuHidden: false,
  },
  {
    path: 'statistics',
    element: <StatisticsPage />,
    icon: <span>📊</span>,
    name: '统计分析',
    menuHidden: false,
  },
  {
    path: 'settings',
    element: <SettingsPage />,
    icon: <span>⚙️</span>,
    name: '设置',
    menuHidden: false,
  },
  {
    path: '*',
    element: <NotFoundPage />,
    icon: <span>❌</span>,
    name: '未找到页面',
    menuHidden: true,
  }, // 404 处理
];
const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // 布局组件
    children: routes,
  },
]);
export { routes }; // 导出路由配置
export default Router;
