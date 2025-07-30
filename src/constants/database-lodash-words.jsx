//lodash 词库
const lodashWords = {
  name: 'Lodash',
  description: '常用的Lodash关键词和术语',
  level: 'beginner',
  type: 'words',
  isBuiltin: true,
  words: [
    {
      key: 'chunk',
      name: 'chunk',
      desc: 'Array将数组拆分为多个指定大小的块',
    },
    {
      key: 'compact',
      name: 'compact',
      desc: 'Array移除数组中的所有假值（false、null、0、""、undefined、NaN）',
    },
    {
      key: 'concat',
      name: 'concat',
      desc: 'Array合并多个数组或值',
    },
    {
      key: 'difference',
      name: 'difference',
      desc: 'Array返回第一个数组中不存在于其他数组中的值',
    },
    {
      key: 'differenceBy',
      name: 'differenceBy',
      desc: 'Array通过迭代函数处理后返回差异值',
    },
    {
      key: 'drop',
      name: 'drop',
      desc: 'Array从数组开头移除 n 个元素',
    },
    {
      key: 'dropRight',
      name: 'dropRight',
      desc: 'Array从数组末尾移除 n 个元素',
    },
    {
      key: 'fill',
      name: 'fill',
      desc: 'Array用固定值填充数组的指定区间',
    },
    {
      key: 'findIndex',
      name: 'findIndex',
      desc: 'Array返回第一个满足条件的元素的索引',
    },
    {
      key: 'flatten',
      name: 'flatten',
      desc: 'Array将嵌套数组扁平化一层',
    },
    {
      key: 'flattenDeep',
      name: 'flattenDeep',
      desc: 'Array递归扁平化嵌套数组',
    },
    {
      key: 'head',
      name: 'head',
      desc: 'Array获取数组的第一个元素',
    },
    {
      key: 'indexOf',
      name: 'indexOf',
      desc: 'Array返回值的首次出现索引',
    },
    {
      key: 'intersection',
      name: 'intersection',
      desc: 'Array返回多个数组的交集',
    },
    {
      key: 'join',
      name: 'join',
      desc: 'Array将数组元素连接成字符串',
    },
    {
      key: 'last',
      name: 'last',
      desc: 'Array获取数组的最后一个元素',
    },
    {
      key: 'pull',
      name: 'pull',
      desc: 'Array移除数组中指定的值',
    },
    {
      key: 'reverse',
      name: 'reverse',
      desc: 'Array反转数组',
    },
    {
      key: 'sortedUniq',
      name: 'sortedUniq',
      desc: 'Array对已排序数组去重',
    },
    {
      key: 'tail',
      name: 'tail',
      desc: 'Array获取除第一个元素外的剩余数组',
    },
    {
      key: 'take',
      name: 'take',
      desc: 'Array从数组开头获取 n 个元素',
    },
    {
      key: 'uniq',
      name: 'uniq',
      desc: 'Array数组去重',
    },
    {
      key: 'zip',
      name: 'zip',
      desc: 'Array将多个数组按索引分组',
    },
    {
      key: 'countBy',
      name: 'countBy',
      desc: '集合-根据条件统计集合中元素的出现次数',
    },
    {
      key: 'every',
      name: 'every',
      desc: '检查所有元素是否满足条件',
    },
    {
      key: 'filter',
      name: 'filter',
      desc: '集合-筛选满足条件的元素',
    },
    {
      key: 'find',
      name: 'find',
      desc: '集合-查找第一个满足条件的元素',
    },
    {
      key: 'findLast',
      name: 'findLast',
      desc: '集合-从右向左查找第一个满足条件的元素',
    },
    {
      key: 'groupBy',
      name: 'groupBy',
      desc: '集合-根据条件对集合分组',
    },
    {
      key: 'includes',
      name: 'includes',
      desc: '集合-检查集合是否包含某个值',
    },
    {
      key: 'keyBy',
      name: 'keyBy',
      desc: '集合-根据键名转换集合为对象',
    },
    {
      key: 'map',
      name: 'map',
      desc: '集合-对集合中的每个元素执行映射函数',
    },
    {
      key: 'orderBy',
      name: 'orderBy',
      desc: '集合-根据条件排序集合',
    },
    {
      key: 'partition',
      name: 'partition',
      desc: '集合-将集合拆分为满足条件和不满足条件的两组',
    },
    {
      key: 'reduce',
      name: 'reduce',
      desc: '集合-对集合进行累积计算',
    },
    {
      key: 'sample',
      name: 'sample',
      desc: '集合-随机返回一个元素',
    },
    {
      key: 'shuffle',
      name: 'shuffle',
      desc: '集合-打乱集合顺序',
    },
    {
      key: 'size',
      name: 'size',
      desc: '集合-返回集合的长度或对象的属性数量',
    },
    {
      key: 'some',
      name: 'some',
      desc: '集合-检查集合中是否有元素满足条件',
    },
    {
      key: 'assign',
      name: 'assign',
      desc: 'Object-合并源对象的可枚举属性到目标对象（浅拷贝）',
    },
    {
      key: 'clone',
      name: 'clone',
      desc: 'Object-浅拷贝对象或数组',
    },
    {
      key: 'cloneDeep',
      name: 'cloneDeep',
      desc: 'Object-深拷贝对象或数组',
    },
    {
      key: 'defaults',
      name: 'defaults',
      desc: 'Object-为对象设置默认值（忽略已有属性）',
    },
    {
      key: 'findKey',
      name: 'findKey',
      desc: 'Object-查找满足条件的第一个对象的键',
    },
    {
      key: 'get',
      name: 'get',
      desc: 'Object-根据路径获取对象的值（支持深层嵌套）',
    },
    {
      key: 'has',
      name: 'has',
      desc: 'Object-检查对象是否包含某个路径的属性',
    },
    {
      key: 'invert',
      name: 'invert',
      desc: 'Object-反转对象的键和值',
    },
    {
      key: 'keys',
      name: 'keys',
      desc: 'Object-返回对象的可枚举属性名数组',
    },
    {
      key: 'merge',
      name: 'merge',
      desc: 'Object-递归合并对象的属性（深拷贝）',
    },
    {
      key: 'omit',
      name: 'omit',
      desc: 'Object-排除对象中指定的属性',
    },
    {
      key: 'pick',
      name: 'pick',
      desc: 'Object-选择对象中指定的属性',
    },
    {
      key: 'set',
      name: 'set',
      desc: 'Object-根据路径设置对象的值（支持深层嵌套）',
    },
    {
      key: 'toPairs',
      name: 'toPairs',
      desc: 'Object-将对象转换为键值对数组',
    },
    {
      key: 'values',
      name: 'values',
      desc: 'Object-返回对象的可枚举属性值数组',
    },
    {
      key: 'debounce',
      name: 'debounce',
      desc: 'Function-防抖函数：延迟执行直到等待时间结束',
    },
    {
      key: 'throttle',
      name: 'throttle',
      desc: 'Function-节流函数：限制函数的执行频率',
    },
    {
      key: 'once',
      name: 'once',
      desc: 'Function-创建一个只能调用一次的函数',
    },
    {
      key: 'memoize',
      name: 'memoize',
      desc: 'Function-缓存函数计算结果',
    },
    {
      key: 'curry',
      name: 'curry',
      desc: 'Function-柯里化函数：分步接收参数',
    },
    {
      key: 'partial',
      name: 'partial',
      desc: 'Function-部分应用函数参数',
    },
    {
      key: 'after',
      name: 'after',
      desc: 'Function-此方法创建一个函数，当他被调用n或更多次之后将马上触发func ',
    },
    {
      key: 'isArray',
      name: 'isArray',
      desc: '检查是否为数组',
    },
    {
      key: 'isEmpty',
      name: 'isEmpty',
      desc: '检查值是否为空（对象、数组、字符串等）',
    },
    {
      key: 'isEqual',
      name: 'isEqual',
      desc: '深度比较两个值是否相等',
    },
    {
      key: 'isFunction',
      name: 'isFunction',
      desc: '检查是否为函数',
    },
    {
      key: 'isNil',
      name: 'isNil',
      desc: '检查是否为 null 或 undefined',
    },
    {
      key: 'isObject',
      name: 'isObject',
      desc: '检查是否为对象（包括数组和函数）',
    },
    {
      key: 'isString',
      name: 'isString',
      desc: '检查是否为字符串',
    },
    {
      key: 'toNumber',
      name: 'toNumber',
      desc: '将值转换为数字',
    },
    {
      key: 'times',
      name: 'times',
      desc: '调用函数 n 次并返回结果数组',
    },
    {
      key: 'uniqueId',
      name: 'uniqueId',
      desc: '生成唯一的ID字符串',
    },
    {
      key: 'random',
      name: 'random',
      desc: '生成指定范围内的随机数',
    },
    {
      key: 'escape',
      name: 'escape',
      desc: '转义字符串中的 HTML 特殊字符',
    },
    {
      key: 'camelCase',
      name: 'camelCase',
      desc: '转换为驼峰式命名（如：fooBar）',
    },
    {
      key: 'kebabCase',
      name: 'kebabCase',
      desc: '转换为短横线命名（如：foo-bar）',
    },
    {
      key: 'snakeCase',
      name: 'snakeCase',
      desc: '转换为下划线命名（如：foo_bar）',
    },
    {
      key: 'startCase',
      name: 'startCase',
      desc: '转换为单词首字母大写（如：Foo Bar）',
    },
  ],
};
export default lodashWords;
