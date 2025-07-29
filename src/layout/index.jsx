import React, { useState, useEffect, useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';
import { Layout, Menu, Avatar, Typography } from 'antd';
const { Content, Sider } = Layout;
const { Title, Text } = Typography;
import { routes } from '../router'; // 导入路由配置
function LayoutRender() {
  const context = useContext('SettingsContext');
  console.log('LayoutRender context:', context);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    // 初始化应用程序
    const initApp = async () => {
      try {
        console.log('正在初始化 React 应用程序...');

        // 等待一小段时间模拟初始化过程
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsLoading(false);
        console.log('React 应用程序初始化完成');
      } catch (err) {
        console.error('应用程序初始化失败:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    initApp();
  }, []);

  if (error) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          fontSize: '18px',
        }}
      >
        应用程序初始化失败: {error}
      </div>
    );
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Layout style={{ minHeight: '100vh' }} hasSider>
      <Sider
        collapsed={collapsed}
        onCollapse={(collapsed, type) => setCollapsed(collapsed)}
      >
        <div
          style={{
            height: 64,
            margin: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: collapsed ? 'center' : 'flex-start',
            color: '#fff',
          }}
        >
          <Avatar
            size={32}
            icon={<span>⌨️ </span>}
            style={{ backgroundColor: '#fff', color: '#667eea' }}
          />
          {!collapsed && (
            <Title level={4} style={{ color: '#fff', margin: '0 0 0 12px' }}>
              打字练习
            </Title>
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['practice']}
          items={routes
            .filter((route) => !route.menuHidden)
            .map((route) => ({
              key: route.path,
              label: (
                <NavLink isActive={route.path === 'practice'} to={route.path}>
                  {route.name}
                </NavLink>
              ),
              icon: route.icon,
              ...route,
            }))}
        />
      </Sider>
      <Layout>
        <Content
          theme="dark"
          style={{ margin: '16px', height: '100vh', overflow: 'scroll' }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default LayoutRender;
