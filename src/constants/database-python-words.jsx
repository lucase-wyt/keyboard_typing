const pythonWords = {
  name: 'Python',
  description: '常用的Python关键词和术语',
  level: 'beginner',
  type: 'words',
  isBuiltin: true,
  words: [
    {
      key: 'b64encode(content.encode())',

      name: 'Base64编码函数',
      desc: 'python 标准库base64 中的方法：用于将二进制数据编码为Base64字符串的内置函数: b64encoded = base64.b64encode(content.encode())',
    },
    {
      key: 'b64decode(content).decode()',
      name: 'Base64解码函数',
      desc: 'python 标准库base64 中的方法：用于将Base64字符串解码为二进制数据的内置函数: content = base64.b64decode(b64encoded).decode()',
    },
    {
      key: 'namedtuple',
      name: '命名元组',
      desc: 'python中 标准库 collections 中的方法：用于创建命名元组的内置函数: Point = namedtuple("Point", ["x", "y"]) 创建一个名为 Point 的命名元组类型，具有 x 和 y 两个字段',
    },
    {
      key: 'deque',
      name: '双端队列',
      desc: 'python中 标准库 collections 中的方法：用于创建双端队列的内置函数: d = deque([1, 2, 3]) 创建一个包含元素 1、2、3 的双端队列',
    },
    {
      key: 'defaultdict',
      name: '默认字典',
      desc: 'python中 标准库 collections 中的方法：用于创建带有默认值的字典的内置函数: d = defaultdict(int) 创建一个默认值为整数的字典',
    },
    {
      key: 'Counter',
      name: '计数器',
      desc: 'python中 标准库 collections 中的方法：用于计数可哈希对象的内置函数: c = Counter(["a", "b", "c", "a", "b", "a"]) 创建一个计数器，统计列表中每个元素出现的次数',
    },
    {
      key: 'OrderedDict',
      name: '有序字典',
      desc: 'python中 标准库 collections 中的方法：用于创建有序字典的内置函数: od = OrderedDict() 创建一个有序字典，保持插入顺序',
    },
    {
      key: 'hashlib',
      name: '哈希库',
      desc: 'python中 标准库 hashlib 中的方法：用于生成哈希值的内置库: import hashlib 导入 hashlib 库以使用各种哈希算法，如 MD5、SHA1、SHA256 等',
    },
    {
      key: 'heapq',
      name: '堆队列算法库',
      desc: 'python中 标准库 heapq 中的方法：用于实现堆队列算法的内置库: import heapq 导入 heapq 库以使用堆排序和优先队列功能',
    },
    {
      key: 'itertools',
      name: '迭代器函数库',
      desc: 'python中 标准库 itertools 中的方法：用于创建高效迭代器的内置库: import itertools 导入 itertools 库以使用无限迭代器、排列组合等功能',
    },
    {
      key: 'itertools.permutations(`ABCD`)',
      name: '排列函数',
      desc: '用于生成输入序列所有可能排列的内置函数: itertools.permutations(iterable, r=None) 返回输入序列的所有长度为 r 的排列，如果 r 未指定则默认为输入序列的长度',
    },
    {
      key: 'itertools.combinations(`ABCD`, 2)',
      name: '组合函数',
      desc: '用于生成输入序列所有可能组合的内置函数: itertools.combinations(iterable, r) 返回输入序列的所有长度为 r 的组合',
    },
    {
      key: 'itertools.product(`AB`, `12`)',
      name: '笛卡尔积函数',
      desc: '用于生成输入序列的笛卡尔积的内置函数: itertools.product(*iterables, repeat=1) 返回输入序列的笛卡尔积，可以通过 repeat 参数指定重复次数',
    },
    {
      key: 'itertools.cycle(`ABC`)',
      name: '循环迭代函数',
      desc: '用于无限循环迭代输入序列的内置函数: itertools.cycle(iterable) 返回一个无限循环的迭代器，依次返回输入序列中的元素',
    },
    {
      key: 'os.path',
      name: '路径操作模块',
      desc: 'python中 标准库 os.path 中的方法：用于进行路径操作的内置模块: import os.path 导入 os.path 模块以使用路径拼接、分割、获取文件名等功能',
    },
    {
      key: 'dirname(path)',
      name: '获取目录名函数',
      desc: '用于获取指定路径的目录名的内置函数: os.path.dirname(path) 返回路径 path 的目录部分',
    },
    {
      key: 'exists(path)',
      name: '路径是否存在函数',
      desc: '用于检查指定路径是否存在的内置函数: os.path.exists(path) 如果路径存在则返回 True，否则返回 False',
    },
    {
      key: 'getsize(path)',
      name: '获取文件大小函数',
      desc: '用于获取指定路径的文件大小的内置函数: os.path.getsize(path) 返回文件的字节大小',
    },
    {
      key: 'getatime(path)',
      name: '获取最后访问时间函数',
      desc: '用于获取指定路径的最后访问时间的内置函数: os.path.getatime(path) 返回文件的最后访问时间（以秒为单位的时间戳）',
    },
    {
      key: 'isfile(path)',

      name: '是否为文件函数',
      desc: '用于检查指定路径是否为文件的内置函数: os.path.isfile(path) 如果路径是文件则返回 True，否则返回 False',
    },
    {
      key: 'isdir(path)',
      name: '是否为目录函数',
      desc: '用于检查指定路径是否为目录的内置函数: os.path.isdir(path) 如果路径是目录则返回 True，否则返回 False',
    },
    {
      key: 'join(path1, path2, ...)',
      name: '路径拼接函数',
      desc: '用于将多个路径拼接成一个路径的内置函数: os.path.join(path1, path2, ...) 返回拼接后的路径',
    },
    {
      key: 'splitext(path)',
      name: '分离文件扩展名函数',
      desc: '用于分离指定路径的文件扩展名的内置函数: os.path.splitext(path) 返回一个元组 (root, ext)，其中 root 是文件名，ext 是扩展名',
    },
    {
      key: 'uuid',
      name: 'UUID生成库',
      desc: 'python中 标准库 uuid 中的方法：用于生成唯一标识符的内置库: import uuid 导入 uuid 库以使用 UUID 生成函数',
    },
    {
      key: 'private',
      name: '私有属性',
      desc: '在类中使用双下划线前缀（如 __attribute）定义的属性，表示该属性是私有的，不能在类外部直接访问',
    },
    {
      key: 'public',
      name: '公有属性',
      desc: '在类中定义的属性，表示该属性是公有的，可以在类的外部访问',
    },
    {
      key: 'protected',
      name: '受保护属性',
      desc: '在类中使用单下划线前缀（如 _attribute）定义的属性，表示该属性是受保护的，建议仅在类及其子类中访问',
    },

    {
      key: 'intersection',
      name: '交集函数',
      desc: '用于计算两个集合的交集的内置函数: set1.intersection(set2) 返回两个集合中都包含的元素',
    },
    {
      key: 'union',
      name: '并集函数',
      desc: '用于计算两个集合的并集的内置函数: set1.union(set2) 返回两个集合中的所有元素',
    },
    {
      key: 'difference',
      name: '差集函数',
      desc: '用于计算两个集合的差集的内置函数: set1.difference(set2) 返回在第一个集合中但不在第二个集合中的元素',
    },
    {
      key: 'symmetric_difference',
      name: '对称差集函数',
      desc: '用于计算两个集合的对称差集的内置函数: set1.symmetric_difference(set2) 返回在两个集合中但不在交集中的元素',
    },
    {
      key: 'add',
      name: '添加元素函数',
      desc: '用于向集合中添加元素的内置函数: set.add(element) 将 element 添加到集合中',
    },
    {
      key: 'update',
      name: '更新集合函数',
      desc: '用于向集合中添加多个元素的内置函数: set.update(iterable) 将 iterable 中的所有元素添加到集合中',
    },
    {
      key: 'discard',
      name: '移除元素函数',
      desc: '用于从集合中移除元素的内置函数: set.discard(element) 如果 element 在集合中则将其移除，否则不做任何操作',
    },
    {
      key: 'pop',
      name: '弹出元素函数',
      desc: '用于从集合中随机弹出一个元素的内置函数: set.pop() 返回并移除集合中的一个随机元素，如果集合为空则抛出 KeyError 异常',
    },
    {
      key: 'clear',
      name: '清空集合函数',
      desc: '用于清空集合中所有元素的内置函数: set.clear() 移除集合中的所有元素，使其变为空集合',
    },
    {
      key: 'isdisjoint',
      name: '不相交检查函数',
      desc: '用于检查两个集合是否不相交的内置函数: set1.isdisjoint(set2) 返回 True 如果两个集合没有共同元素',
    },
    {
      key: 'frozenset',
      name: '不可变集合类型',
      desc: '用于创建不可变集合的内置类型: frozenset(iterable) 返回一个不可变的集合对象，不能修改其元素',
    },
    {
      key: 'remove',
      name: '删除元素函数',
      desc: '用于从集合中删除元素的内置函数: set.remove(element) 如果 element 在集合中则将其删除，否则抛出 KeyError 异常',
    },
    {
      key: 'issubset',
      name: '子集检查函数',
      desc: '用于检查一个集合是否是另一个集合的子集的内置函数: set1.issubset(set2) 返回 True 如果 set1 是 set2 的子集',
    },
    {
      key: 'issuperset',
      name: '超集检查函数',
      desc: '用于检查一个集合是否是另一个集合的超集的内置函数: set1.issuperset(set2) 返回 True 如果 set1 是 set2 的超集',
    },
    {
      key: 'capitalize',
      name: '首字母大写函数',
      desc: '用于将字符串的首字母转换为大写的内置函数: "hello".capitalize() 返回 "Hello"',
    },
    {
      key: 'title',
      name: '标题化函数',
      desc: '用于将字符串的每个单词的首字母转换为大写的内置函数: "hello world".title() 返回 "Hello World"',
    },
    {
      key: 'lower',
      name: '小写函数',
      desc: '用于将字符串转换为小写的内置函数: "HELLO".lower() 返回 "hello"',
    },
    {
      key: 'upper',
      name: '大写函数',
      desc: '用于将字符串转换为大写的内置函数: "hello".upper() 返回 "HELLO"',
    },
    {
      key: 'find',
      name: '查找函数',
      desc: '用于在字符串中查找子字符串并返回其最低索引的内置函数: "hello".find("e") 返回 1',
    },
    {
      key: 'index',
      name: '索引函数',
      desc: '用于在字符串中查找子字符串并返回其最低索引的内置函数（找不到时抛出异常）: "hello".index("e") 返回 1',
    },
    {
      key: 'rfind',
      name: '反向查找函数',
      desc: '用于在字符串中反向查找子字符串并返回其最高索引的内置函数: "hello".rfind("l") 返回 3',
    },
    {
      key: 'startswith',
      name: '开始函数',
      desc: '用于检查字符串是否以指定子字符串开头的内置函数: "hello".startswith("he") 返回 True',
    },
    {
      key: 'endswith',
      name: '结束函数',
      desc: '用于检查字符串是否以指定子字符串结尾的内置函数: "hello".endswith("lo") 返回 True',
    },
    {
      key: 'isdigit',
      name: '数字检查函数',
      desc: '用于检查字符串是否只包含数字字符的内置函数: "123".isdigit() 返回 True',
    },
    {
      key: 'isalpha',
      name: '字母检查函数',
      desc: '用于检查字符串是否只包含字母字符的内置函数: "abc".isalpha() 返回 True',
    },
    {
      key: 'isalnum',
      name: '字母数字检查函数',
      desc: '用于检查字符串是否只包含字母和数字字符的内置函数: "abc123".isalnum() 返回 True',
    },
    {
      key: 'center',
      name: '居中函数',
      desc: '用于将字符串居中并使用指定字符填充的内置函数: "hello".center(11, "*") 返回 "***hello***"',
    },
    {
      key: 'rjust',
      name: '右对齐函数',
      desc: '用于将字符串右对齐并使用指定字符填充的内置函数: "hello".rjust(10, "-") 返回 "-----hello"',
    },
    {
      key: 'ljust',
      name: ' 左对齐函数',
      desc: '用于将字符串左对齐并使用指定字符填充的内置函数: "hello".ljust(10, "-") 返回 "hello-----"',
    },
    {
      key: 'zfill',
      name: '填充函数',
      desc: '用于在字符串左侧填充零以达到指定长度的内置函数: "42".zfill(5) 返回 "00042"',
    },
    {
      key: 'strip',
      name: '去除空白函数',
      desc: '用于去除字符串两端的空白字符的内置函数: "  hello  ".strip() 返回 "hello"',
    },
    {
      key: 'replace',
      name: '替换函数',
      desc: '用于将字符串中的指定子字符串替换为另一个子字符串的内置函数: "hello world".replace("world", "Python") 返回 "hello Python"',
    },
    {
      key: 'split',
      name: '分割函数',
      desc: '用于将字符串分割为子字符串列表的内置函数: "a,b,c".split(",") 返回 ["a", "b", "c"]',
    },
    {
      key: 'encode',
      name: '编码函数',
      desc: '用于将字符串编码为字节序列的内置函数: "hello".encode("utf-8") 返回 b"hello"',
    },
    {
      key: 'decode',
      name: '解码函数',
      desc: '用于将字节序列解码为字符串的内置函数: b"hello".decode("utf-8") 返回 "hello"',
    },
    {
      key: 'join',
      name: '连接函数',
      desc: '用于将字符串列表连接为单个字符串的内置函数: ",".join(["a", "b", "c"]) 返回 "a,b,c"',
    },
    {
      key: 'ord',
      name: '字符编码函数',
      desc: '用于返回字符的Unicode码点的内置函数:ord("A") 返回65',
    },
    {
      key: 'range',
      name: '范围函数',
      desc: '用于生成一个整数序列的内置函数:range(1, 101),range(1, 101, 2)',
    },
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
      key: 'get',
      name: '获取字典值函数',
      desc: '可以通过Python内置函数get获取字典中的值 value = my_dict.get(key, default_value) 如果key存在则返回对应的值，否则返回default_value',
    },
    {
      key: 'keys()',
      name: '获取字典键函数',
      desc: '可以通过Python内置函数keys获取字典中的所有键 keys = my_dict.keys() 返回一个包含字典所有键的视图对象',
    },
    {
      key: 'values()',
      name: '获取字典值函数',
      desc: '可以通过Python内置函数values获取字典中的所有值 values = my_dict.values() 返回一个包含字典所有值的视图对象',
    },
    {
      key: 'items()',
      name: '获取字典项函数',
      desc: '可以通过Python内置函数items获取字典中的所有键值对 items = my_dict.items() 返回一个包含字典所有键值对的视图对象',
    },
    {
      key: 'pop()',
      name: '弹出字典项函数',
      desc: '可以通过Python内置函数pop从字典中移除并返回指定键的值 value = my_dict.pop(key, default_value) 如果key存在则移除并返回对应的值，否则返回default_value',
    },
    {
      key: 'popitem()',
      name: '弹出字典最后一项函数',
      desc: '可以通过Python内置函数popitem从字典中移除并返回最后一个键值对 item = my_dict.popitem() 返回一个包含被移除的键值对的元组',
    },
    {
      key: 'setdefault()',
      name: '设置默认字典项函数',
      desc: '可以通过Python内置函数setdefault设置字典中的默认值 value = my_dict.setdefault(key, default_value) 如果key存在则返回对应的值，否则将key设置为default_value并返回default_value',
    },
    {
      key: 'update()',
      name: '更新字典函数',
      desc: '可以通过Python内置函数update更新字典中的键值对 my_dict.update(other_dict) 将other_dict中的键值对添加到my_dict中，如果键已存在则更新对应的值',
    },
    {
      key: 'zip',
      name: '打包函数',
      desc: "可以通过Python内置函数zip压缩两个序列并创建字典 items1 = dict(zip('ABCDE', '12345')) print(items1)    # {'A': '1', 'B': '2', 'C': '3', 'D': '4', 'E': '5'}",
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
