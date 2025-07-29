const reactWords = {
  name: 'React',
  description: '常用的React关键词和术语',
  level: 'beginner',
  type: 'words',
  isBuiltin: true,
  words: [
    {
      key: 'react',
      name: 'React',
      desc: 'React 是一个用于构建用户界面的 JavaScript 库',
    },
    {
      key: 'component',
      name: '组件',
      desc: 'React 中的独立可重用的 UI 单元',
    },
    {
      key: 'props',
      name: '属性',
      desc: '组件的输入参数',
    },
    {
      key: 'state',
      name: '状态',
      desc: '组件内部的数据存储',
    },
    {
      key: 'lifecycle',
      name: '生命周期',
      desc: '组件的生命周期方法',
    },
    {
      key: 'hook',
      name: '钩子',
      desc: '函数组件中的特殊函数',
    },
    {
      key: 'useState',
      name: 'useState',
      desc: 'React Hook，用于添加状态到函数组件',
    },
    {
      key: 'useEffect',
      name: 'useEffect',
      desc: 'React Hook，用于处理副作用',
    },
    {
      key: 'context',
      name: '上下文',
      desc: '用于在组件树中传递数据而不需要逐层传递 props',
    },
    {
      key: 'redux',
      name: 'Redux',
      desc: '一个用于管理应用状态的库，常与 React 一起使用',
    },
    {
      key: 'react-router',
      name: 'React Router',
      desc: '用于在 React 应用中实现路由功能的库',
    },
    {
      key: 'useRef',
      name: 'useRef',
      desc: 'React Hook，用于访问组件中的 DOM 元素',
    },
    {
      key: 'memo',
      name: 'React.memo',
      desc: '高阶组件，用于优化函数组件的渲染性能',
    },
    {
      key: 'forwardRef',
      name: 'forwardRef',
      desc: '用于将 ref 转发到子组件的特殊函数',
    },
    {
      key: 'useCallback',
      name: 'useCallback',
      desc: 'React Hook，用于缓存函数实例以优化性能',
    },
    {
      key: 'useMemo',
      name: 'useMemo',
      desc: 'React Hook，用于缓存计算结果以优化性能',
    },
    {
      key: 'useContext',
      name: 'useContext',
      desc: 'React Hook，用于访问上下文数据',
    },
    {
      key: 'useLayoutEffect',
      name: 'useLayoutEffect',
      desc: 'React Hook，类似于 useEffect，但在 DOM 更新后立即执行',
    },
    {
      key: 'useImperativeHandle',
      name: 'useImperativeHandle',
      desc: 'React Hook，用于自定义 ref 的暴露内容',
    },
    {
      key: 'useDebugValue',
      name: 'useDebugValue',
      desc: 'React Hook，用于在 React DevTools 中显示自定义 Hook 的调试信息',
    },
    {
      key: 'useTransition',
      name: 'useTransition',
      desc: 'React Hook，用于处理异步状态更新',
    },
    {
      key: 'useDeferredValue',
      name: 'useDeferredValue',
      desc: 'React Hook，用于延迟更新某些状态以提高性能',
    },
    {
      key: 'useId',
      name: 'useId',
      desc: 'React Hook，用于生成唯一的 ID，适用于服务端渲染',
    },
    {
      key: 'useSyncExternalStore',
      name: 'useSyncExternalStore',
      desc: 'React Hook，用于订阅外部数据源并同步状态',
    },
    {
      key: 'useInsertionEffect',
      name: 'useInsertionEffect',
      desc: 'React Hook，用于在 DOM 插入前执行副作用',
    },
    {
      key: 'useCacheRefresh',
      name: 'useCacheRefresh',
      desc: 'React Hook，用于刷新缓存数据',
    },
    {
      key: 'useSyncExternalStoreWithSelector',
      name: 'useSyncExternalStoreWithSelector',
      desc: 'React Hook，用于订阅外部数据源并选择特定数据',
    },
    {
      key: 'useMutableSource',
      name: 'useMutableSource',
      desc: 'React Hook，用于在组件中使用可变数据源',
    },
    {
      key: 'useOpaqueIdentifier',
      name: 'useOpaqueIdentifier',
      desc: 'React Hook，用于生成不透明的标识符，适用于服务端渲染',
    },

    {
      key: 'useServerInsertedHTML',
      name: 'useServerInsertedHTML',
      desc: 'React Hook，用于在服务端渲染时插入 HTML',
    },
    {
      key: 'React.Component',
      name: 'React.Component',
      desc: 'React 中的一个基类，用于创建类组件',
    },
    {
      key: 'React.PureComponent',
      name: 'React.PureComponent',
      desc: 'React 中的一个基类，用于创建性能优化的类组件',
    },
    {
      key: 'React.Fragment',
      name: 'React.Fragment',
      desc: '用于分组子元素而不添加额外的 DOM 元素',
    },
    {
      key: 'React.StrictMode',
      name: 'React.StrictMode',
      desc: '用于在开发模式下启用额外的检查和警告',
    },
    {
      key: 'React.createContext',
      name: 'React.createContext',
      desc: '用于创建上下文对象以在组件树中共享数据',
    },
    {
      key: 'React.createElement',
      name: 'React.createElement',
      desc: '用于创建 React 元素的函数',
    },
    {
      key: 'React.cloneElement',
      name: 'React.cloneElement',
      desc: '用于克隆并修改现有的 React 元素',
    },
    {
      key: 'React.isValidElement',
      name: 'React.isValidElement',
      desc: '用于检查一个对象是否是有效的 React 元素',
    },
    {
      key: 'React.Children',
      name: 'React.Children',
      desc: '用于处理 React 子元素的工具类',
    },
    {
      key: 'React.lazy',
      name: 'React.lazy',
      desc: `用于懒加载组件的函数React.lazy(() => import('Component'))`,
    },
    {
      key: 'React.Suspense',
      name: 'React.Suspense',
      desc: `用于处理异步加载组件的占位符React.Suspense fallback={<div>Loading...</div>}`,
    },
    {
      key: 'React.forwardRef',
      name: 'React.forwardRef',
      desc: '用于将 ref 转发到子组件的函数',
    },
    {
      key: 'React.memo',
      name: 'React.memo',
      desc: '用于优化函数组件的渲染性能的高阶组件',
    },
    {
      key: 'React.useCallback',
      name: 'React.useCallback',
      desc: '用于缓存函数实例以优化性能的 Hook',
    },
    {
      key: 'React.useMemo',
      name: 'React.useMemo',
      desc: '用于缓存计算结果以优化性能的 Hook',
    },
    {
      key: 'React.useContext',
      name: 'React.useContext',
      desc: '用于访问上下文数据的 Hook',
    },
    {
      key: 'componentDidMount',
      name: 'componentDidMount',
      desc: '组件生命周期方法，在组件挂载后立即调用',
    },
    {
      key: 'componentDidUpdate',
      name: 'componentDidUpdate',
      desc: '组件生命周期方法，在组件更新后立即调用',
    },
    {
      key: 'componentWillUnmount',
      name: 'componentWillUnmount',
      desc: '组件生命周期方法，在组件卸载前立即调用',
    },
    {
      key: 'shouldComponentUpdate',
      name: 'shouldComponentUpdate',
      desc: '组件生命周期方法，用于控制组件是否需要更新',
    },
    {
      key: 'getDerivedStateFromProps',
      name: 'getDerivedStateFromProps',
      desc: '静态方法，用于在 props 更新时更新状态',
    },
    {
      key: 'getSnapshotBeforeUpdate',
      name: 'getSnapshotBeforeUpdate',
      desc: '组件生命周期方法，在 DOM 更新前获取快照',
    },
    {
      key: 'errorBoundary',
      name: '错误边界',
      desc: '用于捕获子组件中的错误并进行处理的组件',
    },
    {
      key: 'useReducer',
      name: 'useReducer',
      desc: 'React Hook，用于在函数组件中管理复杂状态',
    },
    {
      key: 'ReactDOM.render',
      name: 'ReactDOM.render',
      desc: `用于将 React 组件渲染到 DOM 中的函数ReactDOM.render(<App />, document.getElementById('root'))`,
    },
    {
      key: 'ReactDOM.createRoot',
      name: 'ReactDOM.createRoot',
      desc: `用于创建 React 组件的根节点的函数ReactDOM.createRoot(document.getElementById('root'))`,
    },
    {
      key: 'ReactDOM.hydrate',
      name: 'ReactDOM.hydrate',
      desc: `用于在服务端渲染时将 React 组件挂载到已存在的 DOM 元素上ReactDOM.hydrate(<App />, document.getElementById('root'))`,
    },
    {
      key: 'ReactDOM.hydrateRoot',
      name: 'ReactDOM.hydrateRoot',
      desc: `用于在服务端渲染时将 React 组件挂载到已存在的 DOM 元素上ReactDOM.hydrateRoot(<App />, document.getElementById('root'))`,
    },
    {
      key: 'e.preventDefault()',
      name: 'e.preventDefault()',
      desc: '用于阻止默认事件的发生',
    },
    {
      key: 'e.stopPropagation()',
      name: 'e.stopPropagation()',
      desc: '用于阻止事件冒泡到父元素',
    },
    {
      key: 'e.target',
      name: 'e.target',
      desc: '获取触发事件的 DOM 元素',
    },
    {
      key: 'e.currentTarget',
      name: 'e.currentTarget',
      desc: '获取当前事件处理函数绑定的 DOM 元素',
    },
    {
      key: 'e.nativeEvent',
      name: 'e.nativeEvent',
      desc: '获取原生事件对象',
    },
    {
      key: 'React.isValidElement(object)',
      name: 'React.isValidElement(object)',
      desc: '用于检查一个对象是否是有效的 React 元素',
    },
    {
      key: 'Redux.createStore',
      name: 'Redux.createStore',
      desc: '用于创建 Redux 存储的函数',
    },
    {
      key: 'Redux.combineReducers',
      name: 'Redux.combineReducers',
      desc: '用于将多个 reducer 函数组合成一个函数',
    },
    {
      key: 'Redux.applyMiddleware',
      name: 'Redux.applyMiddleware',
      desc: '用于应用中间件到 Redux 存储的函数',
    },
    {
      key: 'Redux.Provider',
      name: 'Redux.Provider',
      desc: '用于将 Redux 存储提供给 React 组件树的组件',
    },
    {
      key: 'Redux.connect',
      name: 'Redux.connect',
      desc: '用于将 React 组件连接到 Redux 存储的高阶组件',
    },
    {
      key: 'Redux.useSelector',
      name: 'Redux.useSelector',
      desc: 'React Hook，用于从 Redux 存储中选择状态',
    },
    {
      key: 'Redux.useDispatch',
      name: 'Redux.useDispatch',
      desc: 'React Hook，用于获取 Redux 存储的 dispatch 函数',
    },
    {
      key: 'Redux.useStore',
      name: 'Redux.useStore',
      desc: 'React Hook，用于获取 Redux 存储实例',
    },
    {
      key: 'Redux.createSlice',
      name: 'Redux.createSlice',
      desc: '用于创建 Redux 切片的函数，简化 reducer 和 action 的定义',
    },
    {
      key: 'Redux.createAsyncThunk',
      name: 'Redux.createAsyncThunk',
      desc: '用于创建异步 action 的函数，简化异步操作的处理',
    },
    {
      key: 'Redux.createEntityAdapter',
      name: 'Redux.createEntityAdapter',
      desc: '用于创建实体适配器的函数，简化对集合数据的管理',
    },
    {
      key: 'Redux.createSelector',
      name: 'Redux.createSelector',
      desc: '用于创建选择器的函数，优化状态选择的性能',
    },
    {
      key: 'Redux.createAction',
      name: 'Redux.createAction',
      desc: '用于创建 Redux action 的函数，简化 action 的定义',
    },
    {
      key: 'Redux.createReducer',
      name: 'Redux.createReducer',
      desc: '用于创建 Redux reducer 的函数，简化 reducer 的定义',
    },
    {
      key: 'Redux.createMiddleware',
      name: 'Redux.createMiddleware',
      desc: '用于创建 Redux 中间件的函数，简化中间件的定义',
    },
    {
      key: 'Redux.createStoreEnhancer',
      name: 'Redux.createStoreEnhancer',
      desc: '用于创建 Redux 存储增强器的函数，简化存储增强的定义',
    },
    {
      key: 'Redux.createThunkMiddleware',
      name: 'Redux.createThunkMiddleware',
      desc: '用于创建 Redux thunk 中间件的函数，简化异步 action 的处理',
    },
    {
      key: 'Redux.createSagaMiddleware',
      name: 'Redux.createSagaMiddleware',
      desc: '用于创建 Redux saga 中间件的函数，简化复杂异步逻辑的处理',
    },
    {
      key: 'Redux.createObservableMiddleware',
      name: 'Redux.createObservableMiddleware',
      desc: '用于创建 Redux observable 中间件的函数，简化响应式编程的处理',
    },
    {
      key: 'Router',
      name: 'Router',
      desc: '用于定义应用的路由',
    },
    {
      key: 'Router.push',
      name: 'Router.push',
      desc: '用于导航到新的路由',
    },
    {
      key: 'Router.replace',
      name: 'Router.replace',
      desc: '用于替换当前路由',
    },
    {
      key: 'Router.back',
      name: 'Router.back',
      desc: '用于返回到上一个路由',
    },
    {
      key: 'Router.beforeEach',
      name: 'Router.beforeEach',
      desc: '用于注册全局前置守卫',
    },
    {
      key: 'Router.afterEach',
      name: 'Router.afterEach',
      desc: '用于注册全局后置钩子',
    },
    {
      key: 'Router.onReady',
      name: 'Router.onReady',
      desc: '用于在路由准备就绪后执行回调',
    },
    {
      key: 'Router.getCurrentRoute',
      name: 'Router.getCurrentRoute',
      desc: '用于获取当前激活的路由信息',
    },
    {
      key: 'Router.resolve',
      name: 'Router.resolve',
      desc: '用于解析路由信息',
    },
    {
      key: 'Router.addRoute',
      name: 'Router.addRoute',
      desc: '用于动态添加新的路由',
    },
    {
      key: 'Router.removeRoute',
      name: 'Router.removeRoute',
      desc: '用于移除已存在的路由',
    },
    {
      key: 'Router.hasRoute',
      name: 'Router.hasRoute',
      desc: '用于检查路由是否存在',
    },
    {
      key: 'Router.getRoutes',
      name: 'Router.getRoutes',
      desc: '用于获取所有已注册的路由信息',
    },
    {
      key: 'Router.getMatchedComponents',
      name: 'Router.getMatchedComponents',
      desc: '用于获取当前路由匹配的组件列表',
    },
    {
      key: 'Router.getNavigationGuard',
      name: 'Router.getNavigationGuard',
      desc: '用于获取当前路由的导航守卫',
    },
    {
      key: 'Router.getRouteMeta',
      name: 'Router.getRouteMeta',
      desc: '用于获取当前路由的元信息',
    },
    {
      key: 'Router.getRouteParams',
      name: 'Router.getRouteParams',
      desc: '用于获取当前路由的参数',
    },
    {
      key: 'Router.getRouteQuery',
      name: 'Router.getRouteQuery',
      desc: '用于获取当前路由的查询参数',
    },
    {
      key: 'Router.getRouteHash',
      name: 'Router.getRouteHash',
      desc: '用于获取当前路由的哈希值',
    },
    {
      key: 'Router.getRouteFullPath',
      name: 'Router.getRouteFullPath',
      desc: '用于获取当前路由的完整路径',
    },
    {
      key: 'Router.getRouteName',
      name: 'Router.getRouteName',
      desc: '用于获取当前路由的名称',
    },
    {
      key: 'Router.getRoutePath',
      name: 'Router.getRoutePath',
      desc: '用于获取当前路由的路径',
    },
    {
      key: 'Router.getRouteComponent',
      name: 'Router.getRouteComponent',
      desc: '用于获取当前路由的组件实例',
    },
    {
      key: 'location',
      name: 'location',
      desc: '浏览器的 location 对象，用于获取和设置当前 URL',
    },
    {
      key: 'location.href',
      name: 'location.href',
      desc: '获取或设置当前页面的完整 URL',
    },
    {
      key: 'location.pathname',
      name: 'location.pathname',
      desc: '获取当前页面的路径名',
    },
    {
      key: 'location.search',
      name: 'location.search',
      desc: '获取当前页面的查询字符串',
    },
    {
      key: 'location.hash',
      name: 'location.hash',
      desc: '获取当前页面的哈希值',
    },
    {
      key: 'location.origin',
      name: 'location.origin',
      desc: '获取当前页面的源（协议、域名和端口）',
    },
    {
      key: 'history',
      name: 'history',
      desc: '浏览器的 history 对象，用于管理浏览器会话历史',
    },
    {
      key: 'history.pushState',
      name: 'history.pushState',
      desc: '用于添加新的历史记录条目',
    },
    {
      key: 'history.replaceState',
      name: 'history.replaceState',
      desc: '用于替换当前的历史记录条目',
    },
    {
      key: 'history.back',
      name: 'history.back',
      desc: '用于返回到上一个历史记录条目',
    },
    {
      key: 'history.forward',
      name: 'history.forward',
      desc: '用于前进到下一个历史记录条目',
    },
    {
      key: 'history.go',
      name: 'history.go',
      desc: '用于在历史记录中前进或后退指定的步数',
    },
    {
      key: 'history.length',
      name: 'history.length',
      desc: '获取当前会话历史中的条目数量',
    },
  ],
};

export default reactWords;
