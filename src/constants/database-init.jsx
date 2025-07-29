import jsWords from './database-js-words';
import pythonWords from './database-python-words';
import reactWords from './database-react-words';
import vueWords from './database-vue-words';
import golangWords from './database-golang-words';
import article1 from './database-article-1';
import article2 from './database-article-2';
import article3 from './database-article-3';
import article4 from './database-article-4';
import article5 from './database-article-5';
import article6 from './database-article-6';
import article7 from './database-article-7';
import article8 from './database-article-8';
import article9 from './database-article-9';
import article10 from './database-article-10';

// 内置文章
export const builtinArticles = [
  article1,
  article2,
  article3,
  article4,
  article5,
  article6,
  article7,
  article8,
  article9,
  article10,
];

// 内置词库
export const builtinLibraries = [
  jsWords,
  pythonWords,
  reactWords,
  vueWords,
  golangWords,
];

// 内置句子库
export const builtinSentences = [
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
