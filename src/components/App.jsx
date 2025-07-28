import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import styled from 'styled-components';
import { DatabaseProvider } from '../contexts/database';
import { SettingsProvider } from '../contexts/setting';
import { ThemeProvider } from '../contexts/theme';
import GlobalStyles from '../styles/global';
import LoadingScreen from './LoadingScreen';
import Sidebar from './Sidebar';
import AppInitializer from './AppInitializer';
import PracticePage from '../pages/practice';
import LibraryPage from '../pages/library';
import StatisticsPage from '../pages/statistics';
import SettingsPage from '../pages/SettingsPage';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <ThemeProvider>
      <DatabaseProvider>
        <SettingsProvider>
          <AppInitializer>
            <GlobalStyles />
            <Router>
              <AppContainer>
                <Sidebar />
                <MainContent>
                  <Routes>
                    <Route
                      path="/"
                      element={<Navigate to="/practice" replace />}
                    />
                    <Route path="/practice" element={<PracticePage />} />
                    <Route path="/library" element={<LibraryPage />} />
                    <Route path="/statistics" element={<StatisticsPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                  </Routes>
                </MainContent>
              </AppContainer>
            </Router>
          </AppInitializer>
        </SettingsProvider>
      </DatabaseProvider>
    </ThemeProvider>
  );
}

export default App;
