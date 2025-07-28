import React from 'react';
import { useBuiltinLibraries } from '../hooks/useBuiltinLibraries';

function AppInitializer({ children }) {
  // 初始化内置词库
  useBuiltinLibraries();

  return children;
}

export default AppInitializer;
