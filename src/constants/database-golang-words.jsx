const golangWords = {
  name: 'Golang',
  description: '常用的Golang关键词和术语',
  level: 'beginner',
  type: 'words',
  isBuiltin: true,
  words: [
    {
      key: 'len()',
      name: 'len()',
      desc: '返回字符串、数组、切片或映射的长度',
    },
    {
      key: 'make()',
      name: 'make()',
      desc: '用于创建切片、映射和通道',
    },
    {
      key: 'append()',
      name: 'append()',
      desc: '向切片添加元素',
    },
    {
      key: 'cap()',
      name: 'cap()',
      desc: '返回切片、数组或通道的容量',
    },
    {
      key: 'new()',
      name: 'new()',
      desc: '分配内存并返回指向类型的指针',
    },
    {
      key: 'copy()',
      name: 'copy()',
      desc: '将源切片的元素复制到目标切片',
    },
    {
      key: 'map',
      name: '映射',
      desc: '键值对集合，类似于字典或哈希表',
    },
    {
      key: 'struct',
      name: '结构体',
      desc: '用户定义的数据类型，可以包含多个字段',
    },
    {
      key: 'interface',
      name: '接口',
      desc: '定义方法集的类型，可以被任何实现了这些方法的类型赋值给它',
    },
    {
      key: 'goroutine',
      name: '协程',
      desc: '轻量级线程，用于并发执行代码',
    },
    {
      key: 'channel',
      name: '通道',
      desc: '用于在 goroutine 之间传递数据的管道',
    },
    {
      key: 'select',
      name: '选择语句',
      desc: '用于处理多个通道操作的控制结构',
    },
    {
      key: 'defer',
      name: '延迟执行',
      desc: '在函数返回之前执行的语句',
    },
    {
      key: 'panic',
      name: '恐慌',
      desc: '用于触发运行时错误，通常会导致程序崩溃',
    },
    {
      key: 'recover',
      name: '恢复',
      desc: '用于从 panic 中恢复，防止程序崩溃',
    },
    {
      key: 'import',
      name: '导入包',
      desc: '用于引入其他包的功能',
    },
    {
      key: 'func',
      name: '函数',
      desc: '定义可重用的代码块',
    },
    {
      key: 'package',
      name: '包',
      desc: 'Go 代码的组织单位，类似于模块或库',
    },
    {
      key: 'var',
      name: '变量声明',
      desc: '用于声明变量，可以是局部或全局变量',
    },
    {
      key: 'const',
      name: '常量声明',
      desc: '用于声明不可变的值',
    },
    {
      key: 'strings.Contains()',
      name: '字符串包含',
      desc: '检查字符串是否包含子字符串',
    },
    {
      key: 'strings.Split()',
      name: '字符串分割',
      desc: '将字符串分割为子字符串切片',
    },
    {
      key: 'strings.Join()',
      name: '字符串连接',
      desc: '将字符串切片连接为一个字符串',
    },
    {
      key: 'strings.Replace()',
      name: '字符串替换',
      desc: '替换字符串中的指定子字符串',
    },
    {
      key: 'strings.ToUpper()',
      name: '字符串转大写',
      desc: '将字符串转换为大写',
    },
    {
      key: 'strings.ToLower()',
      name: '字符串转小写',
      desc: '将字符串转换为小写',
    },
    {
      key: 'strings.Trim()',
      name: '字符串修剪',

      desc: '去除字符串两端的空白字符',
    },
    {
      key: 'sort',
      name: '排序',
      desc: '用于对切片进行排序的包',
    },
    {
      key: 'sort.Slice()',
      name: '排序切片',
      desc: '对切片进行排序的函数',
    },
    {
      key: 'sort.Ints()',
      name: '排序整数切片',
      desc: '对整数切片进行排序的函数',
    },
    {
      key: 'sort.Strings()',
      name: '排序字符串切片',
      desc: '对字符串切片进行排序的函数',
    },
    {
      key: 'sort.Float64s()',
      name: '排序浮点数切片',
      desc: '对浮点数切片进行排序的函数',
    },
    {
      key: 'errors.New()',
      name: '创建新错误',
      desc: '用于创建一个新的错误实例',
    },
    {
      key: 'fmt',
      name: 'fmt包',
      desc: '用于格式化字符串的包',
    },
    {
      key: 'fmt.Println()',
      name: '打印输出',
      desc: '将内容输出到标准输出',
    },
    {
      key: 'fmt.Sprintf()',
      name: '格式化字符串',
      desc: '返回格式化后的字符串，而不是直接打印',
    },
    {
      key: 'fmt.Errorf()',
      name: '格式化错误',
      desc: '创建一个格式化的错误实例',
    },
    {
      key: 'fmt.Scan()',
      name: '输入扫描',
      desc: '从标准输入读取数据并解析',
    },
    {
      key: 'fmt.Scanf()',
      name: '格式化输入',
      desc: '从标准输入读取格式化数据',
    },
    {
      key: 'fmt.Fprint()',
      name: '格式化打印',
      desc: '将格式化的内容写入指定的 io.Writer',
    },
    {
      key: 'fmt.Fprintln()',
      name: '格式化打印行',
      desc: '将格式化的内容写入指定的 io.Writer，并添加换行符',
    },
    {
      key: 'fmt.Fscanf()',
      name: '格式化扫描',
      desc: '从指定的 io.Reader 读取格式化数据',
    },
    {
      key: 'io/ioutil',
      name: 'io/ioutil包',
      desc: '用于处理 I/O 操作的包，提供了读取和写入文件的简便方法',
    },
    {
      key: 'ioutil.ReadFile()',
      name: '读取文件',
      desc: '从文件中读取内容并返回字节切片',
    },
    {
      key: 'ioutil.WriteFile()',
      name: '写入文件',
      desc: '将字节切片写入文件，创建或覆盖文件',
    },
    {
      key: 'ioutil.ReadDir()',
      name: '读取目录',
      desc: '读取目录内容并返回文件信息切片',
    },
    {
      key: 'ioutil.TempFile()',
      name: '创建临时文件',
      desc: '创建一个临时文件并返回文件句柄',
    },
    {
      key: 'ioutil.TempDir()',
      name: '创建临时目录',
      desc: '创建一个临时目录并返回目录路径',
    },
    {
      key: 'ioutil.ReadAll()',
      name: '读取全部内容',
      desc: '从 io.Reader 中读取全部内容并返回字节切片',
    },

    {
      key: 'ioutl.Discard',
      name: '丢弃内容',
      desc: '一个特殊的 io.Writer，写入的数据会被丢弃',
    },
    {
      key: 'os',
      name: 'os包',
      desc: '提供与操作系统交互的功能，如文件操作、环境变量等',
    },
    {
      key: 'os.Open()',
      name: '打开文件',
      desc: '打开指定路径的文件并返回文件句柄',
    },
    {
      key: 'os.Create()',
      name: '创建文件',
      desc: '创建一个新文件并返回文件句柄',
    },
    {
      key: 'os.Remove()',
      name: '删除文件或目录',
      desc: '删除指定的文件或目录',
    },
    {
      key: 'os.Rename()',
      name: '重命名文件或目录',
      desc: '将指定的文件或目录重命名为新名称',
    },
    {
      key: 'os.Getenv()',
      name: '获取环境变量',
      desc: '获取指定环境变量的值',
    },
    {
      key: 'os.Setenv()',
      name: '设置环境变量',
      desc: '设置指定环境变量的值',
    },
    {
      key: 'os.Exit()',
      name: '退出程序',
      desc: '以指定状态码退出程序，通常用于错误处理或正常退出',
    },
    {
      key: 'net/http',
      name: 'net/http包',
      desc: '用于处理 HTTP 请求和响应的包',
    },
    {
      key: 'http.Get()',
      name: 'HTTP GET请求',
      desc: '发送一个 HTTP GET 请求并返回响应',
    },
    {
      key: 'http.Post()',
      name: 'HTTP POST请求',
      desc: '发送一个 HTTP POST 请求并返回响应',
    },
    {
      key: 'http.ListenAndServe()',
      name: '启动HTTP服务器',
      desc: '在指定地址上启动一个 HTTP 服务器',
    },
    {
      key: 'http.HandleFunc()',
      name: '处理HTTP请求',
      desc: '注册一个处理函数来处理特定的 HTTP 路径请求',
    },
    {
      key: 'time',
      name: '时间包',
      desc: '用于处理时间和日期的包',
    },
    {
      key: 'time.Now()',
      name: '获取当前时间',
      desc: '返回当前的本地时间',
    },
    {
      key: 'time.Sleep()',
      name: '延迟执行',
      desc: '暂停当前 goroutine 指定的时间段',
    },
    {
      key: 'time.Parse()',
      name: '解析时间字符串',
      desc: '将字符串解析为时间对象',
    },
    {
      key: 'time.Format()',
      name: '格式化时间对象',
      desc: '将时间对象格式化为字符串',
    },
    {
      key: 'time.Duration',
      name: '时间持续时间',
      desc: '表示时间段的类型，可以进行加减运算',
    },
    {
      key: 'time.Ticker',
      name: '定时器',
      desc: '用于定期执行任务的类型',
    },
    {
      key: 'time.After()',
      name: '延迟执行函数',
      desc: '在指定时间后执行一个函数',
    },
    {
      key: 'time.Tick()',
      name: '定时器通道',
      desc: '返回一个通道，每隔指定时间发送一次当前时间',
    },
    {
      key: 'time.Sleep()',
      name: '暂停执行',
      desc: '暂停当前 goroutine 指定的时间段',
    },
    {
      key: 'time.Unix()',
      name: 'Unix时间戳转换',
      desc: '将 Unix 时间戳转换为时间对象',
    },
    {
      key: 'time.UnixNano()',
      name: '纳秒级Unix时间戳转换',
      desc: '将纳秒级 Unix 时间戳转换为时间对象',
    },
    {
      key: 'time.UTC()',
      name: '获取UTC时间',
      desc: '返回当前的 UTC 时间',
    },
    {
      key: 'time.Local()',
      name: '获取本地时间',
      desc: '返回当前的本地时间',
    },
    {
      key: 'time.ParseDuration()',
      name: '解析持续时间字符串',
      desc: '将持续时间字符串解析为 time.Duration 类型',
    },
    {
      key: 'time.Since()',
      name: '计算时间差',
      desc: '返回从指定时间到现在的持续时间',
    },
    {
      key: 'time.Until()',
      name: '计算未来时间差',
      desc: '返回从现在到指定时间的持续时间',
    },
    {
      key: 'time.Date()',
      name: '创建时间对象',
      desc: '根据指定的年、月、日、时、分、秒创建一个时间对象',
    },
    {
      key: 'time.Now().Add()',
      name: '添加时间段',
      desc: '在当前时间上添加指定的时间段',
    },
    {
      key: 'time.Now().Sub()',
      name: '计算时间差',
      desc: '计算当前时间与指定时间的差值',
    },
    {
      key: 'time.Now().Weekday()',
      name: '获取星期几',
      desc: '返回当前时间是星期几',
    },
    {
      key: 'time.Now().Year()',
      name: '获取年份',
      desc: '返回当前时间的年份',
    },
    {
      key: 'time.Now().Month()',
      name: '获取月份',
      desc: '返回当前时间的月份',
    },
    {
      key: 'time.Now().Day()',
      name: '获取日期',
      desc: '返回当前时间的日期',
    },
    {
      key: 'time.Now().Hour()',
      name: '获取小时',
      desc: '返回当前时间的小时',
    },
    {
      key: 'time.Now().Minute()',
      name: '获取分钟',
      desc: '返回当前时间的分钟',
    },
    {
      key: 'time.Now().Second()',
      name: '获取秒钟',
      desc: '返回当前时间的秒钟',
    },
    {
      key: 'time.Now().Nanosecond()',
      name: '获取纳秒',
      desc: '返回当前时间的纳秒',
    },

    {
      key: 'time.Now().Zone()',
      name: '获取时区信息',
      desc: '返回当前时间的时区名称和偏移量',
    },
    {
      key: 'time.Now().Unix()',
      name: '获取Unix时间戳',
      desc: '返回当前时间的 Unix 时间戳（秒）',
    },
    {
      key: 'time.Now().UnixNano()',
      name: '获取纳秒级Unix时间戳',
      desc: '返回当前时间的 Unix 时间戳（纳秒）',
    },
    {
      key: 'time.Now().ISOWeek()',
      name: '获取ISO周',
      desc: '返回当前时间的 ISO 周数和年份',
    },
    {
      key: 'time.Now().Truncate()',
      name: '截断时间',
      desc: '将当前时间截断到指定的时间单位',
    },
    {
      key: 'time.Now().Round()',
      name: '四舍五入时间',
      desc: '将当前时间四舍五入到指定的时间单位',
    },
    {
      key: 'time.Now().AddDate()',
      name: '添加日期',
      desc: '在当前时间上添加指定的年、月、日',
    },
    {
      key: 'time.Now().Format()',
      name: '格式化时间',
      desc: '将当前时间格式化为指定的字符串格式',
    },
    {
      key: 'time.Now().String()',
      name: '时间字符串表示',
      desc: '将当前时间转换为字符串表示',
    },
    {
      key: 'time.Now().UnixMilli()',
      name: '获取毫秒级Unix时间戳',
      desc: '返回当前时间的 Unix 时间戳（毫秒）',
    },
    {
      key: 'time.Now().UnixMicro()',
      name: '获取微秒级Unix时间戳',
      desc: '返回当前时间的 Unix 时间戳（微秒）',
    },
    {
      key: 'time.Now().UnixNano()',
      name: '获取纳秒级Unix时间戳',
      desc: '返回当前时间的 Unix 时间戳（纳秒）',
    },
    {
      key: 'time.Now().IsZero()',
      name: '检查时间是否为零值',
      desc: '检查当前时间是否为零值（即未设置的时间）',
    },
    {
      key: 'time.Now().Equal()',
      name: '比较时间',
      desc: '比较当前时间与指定时间是否相等',
    },
    {
      key: 'time.Now().Before()',
      name: '检查时间顺序',
      desc: '检查当前时间是否在指定时间之前',
    },
    {
      key: 'time.Now().After()',
      name: '检查时间顺序',
      desc: '检查当前时间是否在指定时间之后',
    },
    {
      key: 'time.Now().AddDate()',
      name: '添加日期',
      desc: '在当前时间上添加指定的年、月、日',
    },
    {
      key: 'time.Now().Sub()',
      name: '计算时间差',
      desc: '计算当前时间与指定时间的差值',
    },
    {
      key: 'time.Now().Location()',
      name: '获取时区',
      desc: '返回当前时间所在的时区',
    },
  ],
};
export default golangWords;
