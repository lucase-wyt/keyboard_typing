import { useEffect } from 'react';
import { useDatabase } from '../contexts/database';
import {
  builtinLibraries,
  builtinSentences,
  builtinArticles,
} from '../constants/database-init';
export function useBuiltinLibraries() {
  const { db, isInitialized } = useDatabase();
  const initBuiltinLibraries = async () => {
    if (!isInitialized || !db) return;

    try {
      // 检查是否已经初始化过内置词库
      const existingLibraries = await db.getLibraries();
      const hasBuiltin = existingLibraries.some((lib) => lib.isBuiltin);
      if (hasBuiltin) {
        console.log('内置词库已存在，跳过初始化');
        return;
      }

      console.log('开始初始化内置词库...');

      // 添加内置单词库
      for (const library of builtinLibraries) {
        await db.addLibrary({
          ...library,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      }

      // 添加内置句子库
      for (const sentence of builtinSentences) {
        await db.addLibrary({
          ...sentence,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      }
      // 添加内置文章库
      for (const article of builtinArticles) {
        await db.addLibrary({
          ...article,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      }

      console.log('内置词库初始化完成');
    } catch (error) {
      console.error('初始化内置词库失败:', error);
    }
  };
  useEffect(() => {
    initBuiltinLibraries();
  }, [isInitialized, db]);

  return {
    builtinLibraries: [
      ...builtinLibraries,
      ...builtinSentences,
      ...builtinArticles,
    ],
  };
}

// 导出内置词库数据供其他组件使用
export { builtinLibraries, builtinSentences, builtinArticles };
