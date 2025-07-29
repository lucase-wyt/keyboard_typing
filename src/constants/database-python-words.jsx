const pythonWords = {
  name: 'Python',
  description: '常用的Python关键词和术语',
  level: 'beginner',
  type: 'words',
  isBuiltin: true,
  words: [
    {
      key: 'int',
      name: '整数类型',
      desc: 'Python中的整数类型，表示没有小数部分的数字',
    },
    {
      key: 'float',
      name: '浮点类型',
      desc: 'Python中的浮点类型，表示带有小数部分的数字',
    },
    {
      key: 'str',
      name: '字符串类型',
      desc: 'Python中的字符串类型，表示文本数据',
    },
    {
      key: 'list',
      name: '列表类型',
      desc: 'Python中的列表类型，表示有序的可变集合',
    },
    {
      key: 'tuple',
      name: '元组类型',
      desc: 'Python中的元组类型，表示有序的不可变集合',
    },
    {
      key: 'dict',
      name: '字典类型',
      desc: 'Python中的字典类型，表示键值对的集合',
    },
    {
      key: 'set',
      name: '集合类型',
      desc: 'Python中的集合类型，表示无序的唯一元素集合',
    },
    {
      key: 'bool',
      name: '布尔类型',
      desc: 'Python中的布尔类型，表示真或假',
    },
    {
      key: 'if',
      name: '条件语句',
      desc: '用于执行条件判断的语句',
    },
    {
      key: 'for',
      name: '循环语句',
      desc: '用于遍历序列（如列表、元组等）的循环语句',
    },
    {
      key: 'while',
      name: '循环语句',
      desc: '用于在条件为真时重复执行代码块的循环语句',
    },
    {
      key: 'break',
      name: '跳出循环',
      desc: '用于跳出当前循环的语句',
    },
    {
      key: 'continue',
      name: '跳过当前循环',
      desc: '用于跳过当前循环的剩余部分并进入下一次循环',
    },
    {
      key: 'pass',
      name: '占位符',
      desc: '用于占位的语句，表示什么都不做',
    },
    {
      key: 'def',
      name: '函数定义',
      desc: '用于定义函数的关键字',
    },
    {
      key: 'import',
      name: '导入模块',
      desc: '用于导入其他模块或库的关键字',
    },
    {
      key: 'class',
      name: '类定义',
      desc: '用于定义类的关键字',
    },
    {
      key: 'try',
      name: '异常处理',
      desc: '用于捕获和处理异常的关键字',
    },
    {
      key: 'except',
      name: '异常处理',
      desc: '用于指定异常处理代码块的关键字',
    },
    {
      key: 'finally',
      name: '异常处理',
      desc: '用于指定无论是否发生异常都要执行的代码块',
    },
    {
      key: 'return',
      name: '函数返回值',
      desc: '用于从函数中返回值的关键字',
    },
    {
      key: 'lambda',
      name: '匿名函数',
      desc: '用于创建匿名函数的关键字:lambda x: x**2',
    },
    {
      key: 'with',
      name: '上下文管理器',
      desc: '用于简化资源管理的关键字',
    },
    {
      key: 'yield',
      name: '生成器',
      desc: '用于定义生成器函数的关键字',
    },
    {
      key: 'global',
      name: '全局变量',
      desc: '用于声明全局变量的关键字',
    },
    {
      key: 'nonlocal',
      name: '非局部变量',
      desc: '用于声明非局部变量的关键字',
    },
    {
      key: 'if-elif-else',
      name: '条件分支',
      desc: '用于多条件判断的语句结构',
    },
    {
      key: '__init__',
      name: '构造函数',
      desc: '用于初始化类实例的特殊方法',
    },
    {
      key: 'self',
      name: '实例变量',
      desc: '用于表示类实例自身的变量',
    },
    {
      key: 'super',
      name: '父类调用',
      desc: '用于调用父类方法的关键字',
    },
    {
      key: 'assert',
      name: '断言',
      desc: '用于调试时检查条件的语句',
    },
    {
      key: 'del',
      name: '删除变量',
      desc: '用于删除变量或对象的关键字',
    },
    {
      key: 'is',
      name: '身份运算符',
      desc: '用于判断两个对象是否是同一对象的运算符',
    },
    {
      key: 'in',
      name: '成员运算符',
      desc: '用于判断元素是否在序列中的运算符',
    },
    {
      key: 'not',
      name: '逻辑非运算符',
      desc: '用于取反布尔值的运算符',
    },
    {
      key: 'and',
      name: '逻辑与运算符',
      desc: '用于判断两个布尔值是否都为真的运算符',
    },
    {
      key: 'or',
      name: '逻辑或运算符',
      desc: '用于判断两个布尔值是否至少有一个为真的运算符',
    },
    {
      key: 'with-as',
      name: '上下文管理器别名',
      desc: '用于给上下文管理器指定别名的语法结构',
    },
    {
      key: 'from-import',
      name: '从模块导入',
      desc: '用于从模块中导入特定对象的语法结构',
    },
    {
      key: 'as',
      name: '别名',
      desc: '用于给导入的模块或对象指定别名的关键字',
    },
    {
      key: 'async',
      name: '异步编程',
      desc: '用于定义异步函数或方法的关键字',
    },
    {
      key: 'await',
      name: '等待异步操作',
      desc: '用于等待异步操作完成的关键字',
    },
    {
      key: 'enumerate',
      name: '枚举函数',
      desc: '用于遍历序列时获取索引和值的函数',
    },
    {
      key: 'zip',
      name: '打包函数',
      desc: '用于将多个可迭代对象打包成元组的函数',
    },
    {
      key: 'map',
      name: '映射函数',
      desc: '用于对可迭代对象中的每个元素应用函数的函数',
    },
    {
      key: 'filter',
      name: '过滤函数',
      desc: '用于过滤可迭代对象中的元素的函数',
    },
    {
      key: 'reduce',
      name: '归约函数',
      desc: '用于对可迭代对象中的元素进行累积计算的函数',
    },
    {
      key: 'list-comprehension',
      name: '列表推导式',
      desc: '用于创建列表的简洁语法',
    },
    {
      key: 'dict-comprehension',
      name: '字典推导式',
      desc: '用于创建字典的简洁语法',
    },
    {
      key: 'set-comprehension',
      name: '集合推导式',
      desc: '用于创建集合的简洁语法',
    },
    {
      key: 'f-string',
      name: '格式化字符串',
      desc: '用于格式化字符串的语法，支持变量插值',
    },
    {
      key: 'type-hinting',
      name: '类型提示',
      desc: '用于为函数参数和返回值添加类型提示的语法',
    },
    {
      key: 'docstring',
      name: '文档字符串',
      desc: '用于为函数、类或模块添加文档的字符串',
    },
    {
      key: 'property',
      name: '属性装饰器',
      desc: '用于将方法转换为属性的装饰器',
    },
    {
      key: 'staticmethod',
      name: '静态方法装饰器',
      desc: '用于定义静态方法的装饰器',
    },
    {
      key: 'classmethod',
      name: '类方法装饰器',
      desc: '用于定义类方法的装饰器',
    },
    {
      key: '__str__',
      name: '字符串表示',
      desc: '用于定义对象的字符串表示的特殊方法',
    },
    {
      key: '__repr__',
      name: '官方字符串表示',
      desc: '用于定义对象的官方字符串表示的特殊方法',
    },
    {
      key: '__len__',
      name: '长度方法',
      desc: '用于定义对象的长度的特殊方法',
    },
    {
      key: '__getitem__',
      name: '索引方法',
      desc: '用于定义对象的索引访问的特殊方法',
    },
    {
      key: '__setitem__',
      name: '设置索引方法',
      desc: '用于定义对象的索引设置的特殊方法',
    },
    {
      key: '__delitem__',
      name: '删除索引方法',
      desc: '用于定义对象的索引删除的特殊方法',
    },
    {
      key: '__iter__',
      name: '迭代器方法',
      desc: '用于定义对象的迭代器的特殊方法',
    },
    {
      key: '__next__',
      name: '下一个方法',
      desc: '用于定义迭代器的下一个元素的特殊方法',
    },
    {
      key: '__contains__',
      name: '包含方法',
      desc: '用于定义对象是否包含某个元素的特殊方法',
    },
    {
      key: '__call__',
      name: '可调用方法',
      desc: '用于定义对象可以像函数一样调用的特殊方法',
    },
    {
      key: '__eq__',
      name: '等于方法',
      desc: '用于定义对象的等于比较的特殊方法',
    },
    {
      key: '__ne__',
      name: '不等于方法',
      desc: '用于定义对象的不等于比较的特殊方法',
    },
    {
      key: '__lt__',
      name: '小于方法',
      desc: '用于定义对象的小于比较的特殊方法',
    },
    {
      key: '__le__',
      name: '小于等于方法',
      desc: '用于定义对象的小于等于比较的特殊方法',
    },
    {
      key: '__gt__',
      name: '大于方法',
      desc: '用于定义对象的大于比较的特殊方法',
    },
    {
      key: '__ge__',
      name: '大于等于方法',
      desc: '用于定义对象的大于等于比较的特殊方法',
    },
    {
      key: '__hash__',
      name: '哈希方法',
      desc: '用于定义对象的哈希值的特殊方法',
    },
    {
      key: '__bool__',
      name: '布尔方法',
      desc: '用于定义对象的布尔值的特殊方法',
    },
    {
      key: '__enter__',
      name: '上下文管理器进入方法',
      desc: '用于定义上下文管理器进入时的行为的特殊方法',
    },
    {
      key: '__exit__',
      name: '上下文管理器退出方法',
      desc: '用于定义上下文管理器退出时的行为的特殊方法',
    },
    {
      key: '__slots__',
      name: '内存优化',
      desc: '用于限制类实例的属性，节省内存的特殊属性',
    },
    {
      key: '__dict__',
      name: '实例字典',
      desc: '用于访问类实例的属性字典的特殊属性',
    },
    {
      key: '__module__',
      name: '模块名',
      desc: '用于访问类或函数所在模块名的特殊属性',
    },
    {
      key: '__name__',
      name: '名称属性',
      desc: '用于访问类或函数的名称的特殊属性',
    },
    {
      key: '__qualname__',
      name: '限定名称',
      desc: '用于访问类或函数的限定名称的特殊属性',
    },
    {
      key: '__annotations__',
      name: '类型注解',
      desc: '用于访问函数参数和返回值的类型注解的特殊属性',
    },
    {
      key: '__doc__',
      name: '文档字符串属性',
      desc: '用于访问类或函数的文档字符串的特殊属性',
    },
    {
      key: '__bases__',
      name: '基类元组',
      desc: '用于访问类的基类元组的特殊属性',
    },
    {
      key: '__mro__',
      name: '方法解析顺序',
      desc: '用于访问类的继承顺序的特殊属性',
    },
    {
      key: '__class__',
      name: '类属性',
      desc: '用于访问对象所属类的特殊属性',
    },
    {
      key: '__callable__',
      name: '可调用检查',
      desc: '用于检查对象是否可调用的特殊方法',
    },
    {
      key: '__sizeof__',
      name: '对象大小',
      desc: '用于获取对象在内存中占用的字节数的特殊方法',
    },
    {
      key: '__format__',
      name: '格式化方法',
      desc: '用于定义对象的格式化行为的特殊方法',
    },
    {
      key: '__getattr__',
      name: '属性访问方法',
      desc: '用于定义当访问不存在的属性时的行为的特殊方法',
    },
    {
      key: '__setattr__',
      name: '设置属性方法',
      desc: '用于定义当设置属性时的行为的特殊方法',
    },
    {
      key: '__delattr__',
      name: '删除属性方法',
      desc: '用于定义当删除属性时的行为的特殊方法',
    },
    {
      key: '__dir__',
      name: '目录方法',
      desc: '用于定义当调用dir()函数时返回的属性列表的特殊方法',
    },
    {
      key: '__getattribute__',
      name: '属性获取方法',
      desc: '用于定义当访问任何属性时的行为的特殊方法',
    },
    {
      key: '__setattr__',
      name: '设置属性方法',
      desc: '用于定义当设置任何属性时的行为的特殊方法',
    },
    {
      key: '__delattr__',
      name: '删除属性方法',
      desc: '用于定义当删除任何属性时的行为的特殊方法',
    },
    {
      key: '__reduce__',
      name: '序列化方法',
      desc: '用于定义对象的序列化行为的特殊方法',
    },
    {
      key: '__reduce_ex__',
      name: '扩展序列化方法',
      desc: '用于定义对象的扩展序列化行为的特殊方法',
    },
    {
      key: '__getstate__',
      name: '获取状态方法',
      desc: '用于定义对象的状态获取行为的特殊方法',
    },
    {
      key: '__setstate__',
      name: '设置状态方法',
      desc: '用于定义对象的状态设置行为的特殊方法',
    },
    {
      key: '__copy__',
      name: '浅拷贝方法',
      desc: '用于定义对象的浅拷贝行为的特殊方法',
    },
    {
      key: '__deepcopy__',
      name: '深拷贝方法',
      desc: '用于定义对象的深拷贝行为的特殊方法',
    },
    {
      key: '__sizeof__',
      name: '对象大小方法',
      desc: '用于获取对象在内存中占用的字节数的特殊方法',
    },
    {
      key: '__getnewargs__',
      name: '新参数获取方法',
      desc: '用于定义对象的新参数获取行为的特殊方法',
    },
    {
      key: '__getinitargs__',
      name: '初始化参数获取方法',
      desc: '用于定义对象的初始化参数获取行为的特殊方法',
    },
    {
      key: '__getstate__',
      name: '状态获取方法',
      desc: '用于定义对象的状态获取行为的特殊方法',
    },
    {
      key: '__setstate__',
      name: '状态设置方法',
      desc: '用于定义对象的状态设置行为的特殊方法',
    },
    {
      key: '__reduce_ex__',
      name: '扩展序列化方法',
      desc: '用于定义对象的扩展序列化行为的特殊方法',
    },
    {
      key: '__format__',
      name: '格式化方法',
      desc: '用于定义对象的格式化行为的特殊方法',
    },
    {
      key: '__getnewargs_ex__',
      name: '新参数获取扩展方法',
      desc: '用于定义对象的新参数获取扩展行为的特殊方法',
    },
    {
      key: '__getinitargs_ex__',
      name: '初始化参数获取扩展方法',
      desc: '用于定义对象的初始化参数获取扩展行为的特殊方法',
    },
    {
      key: '__getstate_ex__',
      name: '状态获取扩展方法',
      desc: '用于定义对象的状态获取扩展行为的特殊方法',
    },
    {
      key: '__setstate_ex__',
      name: '状态设置扩展方法',
      desc: '用于定义对象的状态设置扩展行为的特殊方法',
    },
    {
      key: '__reduce_ex__',
      name: '扩展序列化方法',
      desc: '用于定义对象的扩展序列化行为的特殊方法',
    },
    {
      key: '__getnewargs_ex__',
      name: '新参数获取扩展方法',
      desc: '用于定义对象的新参数获取扩展行为的特殊方法',
    },
    {
      key: '__getinitargs_ex__',
      name: '初始化参数获取扩展方法',
      desc: '用于定义对象的初始化参数获取扩展行为的特殊方法',
    },
    {
      key: '__getstate_ex__',
      name: '状态获取扩展方法',
      desc: '用于定义对象的状态获取扩展行为的特殊方法',
    },
    {
      key: '__setstate_ex__',
      name: '状态设置扩展方法',
      desc: '用于定义对象的状态设置扩展行为的特殊方法',
    },
    {
      key: '__del__',
      name: '析构方法',
      desc: '用于定义对象被销毁时的行为的特殊方法',
    },
    {
      key: '__enter__',
      name: '上下文管理器进入方法',
      desc: '用于定义上下文管理器进入时的行为的特殊方法',
    },
    {
      key: '__exit__',
      name: '上下文管理器退出方法',
      desc: '用于定义上下文管理器退出时的行为的特殊方法',
    },
    {
      key: '__await__',
      name: '异步等待方法',
      desc: '用于定义异步操作的等待行为的特殊方法',
    },
    {
      key: '__aiter__',
      name: '异步迭代器方法',
      desc: '用于定义异步迭代器的行为的特殊方法',
    },
    {
      key: '__anext__',
      name: '异步下一个方法',
      desc: '用于定义异步迭代器的下一个元素的行为的特殊方法',
    },
    {
      key: 'list.append(x)',
      name: '列表追加',
      desc: '在列表末尾添加一个元素 x。',
    },
    {
      key: 'list.extend(iterable)',
      name: '列表扩展',
      desc: '在列表末尾添加一个可迭代对象中的所有元素。',
    },
    {
      key: 'list.insert(i, x)',
      name: '列表插入',
      desc: '在列表的指定位置 i 插入元素 x。',
    },
    {
      key: 'list.remove(x)',
      name: '列表移除',
      desc: '从列表中移除第一个值为 x 的元素。',
    },
    {
      key: 'list.pop([i])',
      name: '列表弹出',
      desc: '移除并返回列表中指定位置 i 的元素，默认为最后一个元素。',
    },
    {
      key: 'list.clear()',
      name: '列表清空',
      desc: '移除列表中的所有元素。',
    },
    {
      key: 'list.index(x[, start[, end]])',
      name: '列表索引',
      desc: '返回列表中第一个值为 x 的元素的索引。',
    },
    {
      key: 'list.count(x)',
      name: '列表计数',
      desc: '返回列表中值为 x 的元素的数量。',
    },
    {
      key: 'list.sort(key=None, reverse=False)',
      name: '列表排序',
      desc: '对列表进行就地排序，可选地指定排序键和是否反向排序。',
    },
    {
      key: 'list.reverse()',
      name: '列表反转',
      desc: '就地反转列表中的元素顺序。',
    },
    {
      key: 'if x in list',
      name: '列表包含',
      desc: '检查元素 x 是否在列表中。',
    },
    {
      key: 'numpy',
      name: 'NumPy',
      desc: 'NumPy 是一个用于科学计算的库，提供了支持多维数组和矩阵运算的功能。',
    },
    {
      key: 'numpy.shape()',
      name: '获取数组形状',
      desc: '返回数组的形状（维度）信息。',
    },
    {
      key: 'numpy.reshape()',
      name: '数组重塑',
      desc: '改变数组的形状而不改变其数据。',
    },
    {
      key: 'numpy.transpose()',
      name: '数组转置',
      desc: '返回数组的转置版本。',
    },
    {
      key: 'numpy.dot()',
      name: '点积',
      desc: '计算两个数组的点积。',
    },
    {
      key: 'numpy.mean()',
      name: '平均值',
      desc: '计算数组元素的平均值。',
    },
    {
      key: 'numpy.median()',
      name: '中位数',
      desc: '计算数组元素的中位数。',
    },
    {
      key: 'numpy.std()',
      name: '标准差',
      desc: '计算数组元素的标准差。',
    },
    {
      key: 'numpy.sum()',
      name: '求和',
      desc: '计算数组元素的总和。',
    },
    {
      key: 'numpy.var()',
      name: '方差',
      desc: '计算数组元素的方差。',
    },
    {
      key: 'numpy.min()',
      name: '最小值',
      desc: '返回数组中的最小值。',
    },
    {
      key: 'numpy.max()',
      name: '最大值',
      desc: '返回数组中的最大值。',
    },
    {
      key: 'numpy.unique()',
      name: '唯一元素',
      desc: '返回数组中的唯一元素。',
    },
    {
      key: 'numpy.concatenate()',
      name: '数组连接',
      desc: '沿指定轴连接两个或多个数组。',
    },
    {
      key: 'numpy.split()',
      name: '数组分割',
      desc: '将数组分割为多个子数组。',
    },
  ],
};

export default pythonWords;
