import { useEffect } from 'react';
import { useDatabase } from '../contexts/database';

// 内置词库数据
const builtinLibraries = [
  {
    name: '基础英语单词',
    description: '常用的英语基础单词，适合初学者',
    level: 'beginner',
    type: 'words',
    isBuiltin: true,
    words: [
      'hello',
      'world',
      'computer',
      'keyboard',
      'mouse',
      'screen',
      'window',
      'program',
      'software',
      'hardware',
      'internet',
      'website',
      'email',
      'password',
      'username',
      'download',
      'upload',
      'file',
      'folder',
      'document',
      'application',
      'system',
      'network',
      'server',
      'database',
      'technology',
      'digital',
      'electronic',
      'device',
      'mobile',
      'tablet',
    ],
  },
  {
    name: '编程术语',
    description: '常见的编程相关术语和关键词',
    level: 'intermediate',
    type: 'programming',
    isBuiltin: true,
    words: [
      'function',
      'variable',
      'array',
      'object',
      'string',
      'number',
      'boolean',
      'undefined',
      'null',
      'return',
      'console',
      'document',
      'element',
      'addEventListener',
      'querySelector',
      'getElementById',
      'className',
      'innerHTML',
      'setTimeout',
      'setInterval',
      'Promise',
      'async',
      'await',
      'import',
      'export',
      'const',
      'let',
      'var',
      'if',
      'else',
      'for',
      'while',
    ],
  },
  {
    name: '商务英语',
    description: '商务场景中常用的英语词汇和短语',
    level: 'intermediate',
    type: 'business',
    isBuiltin: true,
    words: [
      'meeting',
      'presentation',
      'project',
      'deadline',
      'budget',
      'revenue',
      'profit',
      'loss',
      'investment',
      'market',
      'customer',
      'client',
      'service',
      'product',
      'quality',
      'efficiency',
      'productivity',
      'management',
      'leadership',
      'teamwork',
      'collaboration',
      'communication',
      'strategy',
      'planning',
      'analysis',
      'report',
      'proposal',
      'contract',
    ],
  },
  {
    name: '学术英语',
    description: '学术写作和研究中常用的高级词汇',
    level: 'advanced',
    type: 'academic',
    isBuiltin: true,
    words: [
      'analysis',
      'hypothesis',
      'methodology',
      'conclusion',
      'research',
      'investigation',
      'experiment',
      'observation',
      'theory',
      'evidence',
      'significant',
      'substantial',
      'comprehensive',
      'systematic',
      'rigorous',
      'empirical',
      'quantitative',
      'qualitative',
      'correlation',
      'causation',
      'phenomenon',
      'paradigm',
      'framework',
      'perspective',
      'interpretation',
    ],
  },
  {
    name: '技术文档',
    description: '技术文档和说明书中的常见表达',
    level: 'advanced',
    type: 'technical',
    isBuiltin: true,
    words: [
      'configuration',
      'installation',
      'implementation',
      'integration',
      'optimization',
      'performance',
      'scalability',
      'reliability',
      'compatibility',
      'documentation',
      'specification',
      'requirement',
      'architecture',
      'infrastructure',
      'deployment',
      'maintenance',
      'troubleshooting',
      'debugging',
      'monitoring',
      'security',
      'authentication',
      'authorization',
      'encryption',
      'backup',
      'recovery',
      'synchronization',
    ],
  },
];

// 内置句子库
const builtinSentences = [
  {
    name: '日常对话',
    description: '日常生活中的英语对话句子',
    level: 'beginner',
    type: 'sentences',
    isBuiltin: true,
    words: [
      'How are you doing today?',
      'What time is it now?',
      'Where are you going?',
      'Can you help me please?',
      'Thank you very much.',
      'You are welcome.',
      'Have a nice day!',
      'See you later.',
      'Good morning everyone.',
      'How was your weekend?',
    ],
  },
  {
    name: '商务沟通',
    description: '商务环境中的专业交流句式',
    level: 'intermediate',
    type: 'sentences',
    isBuiltin: true,
    words: [
      'Let me schedule a meeting for next week.',
      'Could you please send me the report?',
      'I would like to discuss this project.',
      'We need to meet the deadline.',
      'The budget has been approved.',
      'Our team is working on this issue.',
      'Please review the proposal carefully.',
      'We appreciate your business.',
      'Looking forward to hearing from you.',
      'Let me know if you have any questions.',
    ],
  },
  {
    name: '技术说明',
    description: '技术文档和程序说明的常用句式',
    level: 'advanced',
    type: 'sentences',
    isBuiltin: true,
    words: [
      'This function returns a boolean value.',
      'Please install the required dependencies.',
      'The system configuration has been updated.',
      'Make sure to backup your data before proceeding.',
      'The application requires administrator privileges.',
      'Performance optimization is crucial for scalability.',
      'Error handling should be implemented properly.',
      'The database connection has been established.',
      'Authentication is required for this operation.',
      'Please refer to the documentation for more details.',
    ],
  },
];

export function useBuiltinLibraries() {
  const { db, isInitialized } = useDatabase();

  useEffect(() => {
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
        for (const library of builtinSentences) {
          await db.addLibrary({
            ...library,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          });
        }

        console.log('内置词库初始化完成');
      } catch (error) {
        console.error('初始化内置词库失败:', error);
      }
    };

    initBuiltinLibraries();
  }, [isInitialized, db]);

  return {
    builtinLibraries: [...builtinLibraries, ...builtinSentences],
  };
}

// 导出内置词库数据供其他组件使用
export { builtinLibraries, builtinSentences };
