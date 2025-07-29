const vueWords = {
  name: 'Vue',
  desc: '常用的vue关键词和术语',
  level: 'beginner',
  type: 'words',
  isBuiltin: true,
  words: [
    {
      key: 'vue',
      name: 'vue',
      desc: 'Vue.js 是一个用于构建用户界面的渐进式框架。',
    },
    {
      key: 'component',
      name: '组件',
      desc: 'Vue 组件是 Vue 应用的核心构建块。',
    },
    {
      key: 'directive',
      name: '指令',
      desc: 'Vue 指令是带有前缀 v- 的特殊属性。',
    },
    {
      key: 'reactivity',
      name: '响应性',
      desc: 'Vue 的响应系统使得数据变化时视图自动更新。',
    },
    {
      key: 'template',
      name: '模板',
      desc: 'Vue 模板是 HTML 的扩展，允许使用 Vue 特性。',
    },
    {
      key: 'lifecycle hooks',
      name: '生命周期钩子',
      desc: 'Vue 生命周期钩子允许在组件的不同阶段执行代码。',
    },
    {
      key: 'vuex',
      name: 'Vuex',
      desc: 'Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式和库。',
    },
    {
      key: 'ref()',
      name: 'ref()',
      desc: 'ref 是 Vue 中用于获取 DOM 元素或组件实例的方式。',
    },
    {
      key: 'computed()',
      name: '计算属性',
      desc: '计算属性是基于它们的依赖进行缓存的属性。',
    },
    {
      key: 'watcher()',
      name: '观察者',
      desc: '观察者用于响应数据变化并执行异步或开销较大的操作。',
    },
    {
      key: 'watchEffect()',
      name: '响应式副作用',
      desc: 'watchEffect 是 Vue 3 中用于创建响应式副作用的函数。',
    },

    {
      key: 'props',
      name: '属性',
      desc: 'Props 是父组件向子组件传递数据的方式。',
    },
    {
      key: 'emit',
      name: '事件发射',
      desc: 'emit 用于从子组件向父组件发送事件。',
    },
    {
      key: 'slot',
      name: '插槽',
      desc: '插槽允许在组件中插入内容。',
    },
    {
      key: 'transition',
      name: '过渡',
      desc: 'Vue 提供了内置的过渡效果来处理元素的进入和离开。',
    },
    {
      key: 'v-model',
      name: '双向绑定',
      desc: 'v-model 用于在表单控件和 Vue 实例之间创建双向绑定。',
    },
    {
      key: 'axios',
      name: 'Axios',
      desc: 'Axios 是一个基于 Promise 的 HTTP 客户端，用于浏览器和 node.js。',
    },
    {
      key: 'vue-router',
      name: 'Vue Router',
      desc: 'Vue Router 是 Vue.js 的官方路由管理器。',
    },
    {
      key: 'reactive()',
      name: '响应式',
      desc: 'reactive 是 Vue 3 中用于创建响应式对象的函数。',
    },
    {
      key: 'setup()',
      name: 'Setup 函数',
      desc: 'Setup 函数是 Vue 3 中组合式 API 的入口点。',
    },
    {
      key: 'composition API',
      name: '组合式 API',
      desc: '组合式 API 是 Vue 3 中的一种新的编写组件的方式。',
    },
    {
      key: 'teleport',
      name: 'Teleport',
      desc: 'Teleport 允许将子组件渲染到 DOM 的其他位置。',
    },
    {
      key: 'suspense',
      name: 'Suspense',
      desc: 'Suspense 允许异步组件在加载时显示备用内容。',
    },
    {
      key: 'provide/inject',
      name: '提供/注入',
      desc: 'provide/inject 是 Vue 中用于跨组件传递数据的方式。',
    },
    {
      key: 'v-for',
      name: '循环指令',
      desc: 'v-for 用于在模板中渲染列表。',
    },
    {
      key: 'v-if',
      name: '条件指令',
      desc: 'v-if 用于根据条件渲染元素。',
    },
    {
      key: 'v-else',
      name: '否则指令',
      desc: 'v-else 用于在 v-if 条件不满足时渲染元素。',
    },
    {
      key: 'v-show',
      name: '显示指令',
      desc: 'v-show 用于根据条件切换元素的显示状态。',
    },
    {
      key: 'v-on',
      name: '事件指令',
      desc: 'v-on 用于监听 DOM 事件。',
    },
    {
      key: 'v-bind',
      name: '绑定指令',
      desc: 'v-bind 用于动态绑定 HTML 属性。',
    },
    {
      key: 'v-slot',
      name: '作用域插槽',
      desc: 'v-slot 用于定义作用域插槽。',
    },
    {
      key: 'v-pre',
      name: '预处理指令',
      desc: 'v-pre 用于跳过这个元素和它的子元素的编译过程。',
    },
    {
      key: 'v-cloak',
      name: '遮罩指令',
      desc: 'v-cloak 用于在 Vue 实例编译完成之前隐藏元素。',
    },
    {
      key: 'v-once',
      name: '一次性指令',
      desc: 'v-once 用于渲染一次并缓存结果。',
    },
    {
      key: 'v-html',
      name: 'HTML 指令',
      desc: 'v-html 用于将 HTML 字符串渲染为 HTML。',
    },
    {
      key: 'v-text',
      name: '文本指令',
      desc: 'v-text 用于更新元素的文本内容。',
    },
    {
      key: 'v-is',
      name: '动态组件',
      desc: 'v-is 用于动态渲染组件。',
    },
    {
      key: 'v-memo',
      name: '记忆指令',
      desc: 'v-memo 用于优化组件性能，通过记忆化组件的渲染结果。',
    },
    {
      key: 'v-model.lazy',
      name: '懒惰双向绑定',
      desc: 'v-model.lazy 用于在输入事件后更新数据。',
    },
    {
      key: 'v-model.number',
      name: '数字双向绑定',
      desc: 'v-model.number 用于将输入值转换为数字。',
    },
    {
      key: 'v-model.trim',
      name: '修剪双向绑定',
      desc: 'v-model.trim 用于修剪输入值的前后空格。',
    },
    {
      key: 'toRef()',
      name: 'toRef',
      desc: 'toRef 用于将响应式对象的属性转换为 ref。',
    },
    {
      key: 'toRefs()',
      name: 'toRefs',
      desc: 'toRefs 用于将响应式对象的属性转换为 ref 的集合。',
    },
    {
      key: 'shallowReactive()',
      name: '浅响应式',
      desc: 'shallowReactive 用于创建浅响应式对象。',
    },
    {
      key: 'shallowRef()',
      name: '浅 ref',
      desc: 'shallowRef 用于创建浅 ref 对象。',
    },
    {
      key: 'defineComponent()',
      name: '定义组件',
      desc: 'defineComponent 用于定义 Vue 组件。',
    },
    {
      key: 'defineAsyncComponent()',
      name: '定义异步组件',
      desc: 'defineAsyncComponent 用于定义异步加载的组件。',
    },
    {
      key: 'useSlots()',
      name: '使用插槽',
      desc: 'useSlots 用于访问组件的插槽内容。',
    },
    {
      key: 'useAttrs()',
      name: '使用属性',
      desc: 'useAttrs 用于访问组件的属性。',
    },
    {
      key: 'useListeners()',
      name: '使用监听器',
      desc: 'useListeners 用于访问组件的事件监听器。',
    },
    {
      key: 'useSSRContext()',
      name: '使用 SSR 上下文',
      desc: 'useSSRContext 用于在服务器端渲染时访问上下文。',
    },
    {
      key: 'useTemplateRef()',
      name: '使用模板引用',
      desc: 'useTemplateRef 用于在组件中访问模板引用。',
    },
    {
      key: 'useCssModule()',
      name: '使用 CSS 模块',
      desc: 'useCssModule 用于在组件中使用 CSS 模块。',
    },
    {
      key: 'useTransition()',
      name: '使用过渡',
      desc: 'useTransition 用于在组件中使用过渡效果。',
    },
    {
      key: 'useTeleport()',
      name: '使用 Teleport',
      desc: 'useTeleport 用于在组件中使用 Teleport 功能。',
    },
    {
      key: 'useEventBus()',
      name: '使用事件总线',
      desc: 'useEventBus 用于在组件中使用事件总线。',
    },
    {
      key: 'useStore()',
      name: '使用状态管理',
      desc: 'useStore 用于在组件中访问 Vuex 状态管理。',
    },
    {
      key: 'useRouter()',
      name: '使用路由',
      desc: 'useRouter 用于在组件中访问 Vue Router 路由功能。',
    },
    {
      key: 'useI18n()',
      name: '使用国际化',
      desc: 'useI18n 用于在组件中使用国际化功能。',
    },
    {
      key: 'useHead()',
      name: '使用头部信息',
      desc: 'useHead 用于在组件中设置文档头部信息。',
    },
    {
      key: 'useFetch()',
      name: '使用数据获取',
      desc: 'useFetch 用于在组件中进行数据获取。',
    },
    {
      key: 'h()',
      name: '创建虚拟节点',
      desc: 'h() 用于创建 Vue 的虚拟节点。',
    },
    {
      key: 'createApp()',
      name: '创建应用',
      desc: 'createApp 用于创建 Vue 应用实例。',
    },
    {
      key: 'isRef()',
      name: 'isRef',
      desc: 'isRef 用于检查一个值是否为 ref。',
    },
    {
      key: 'isReactive()',
      name: 'isReactive',
      desc: 'isReactive 用于检查一个值是否为响应式对象。',
    },
    {
      key: 'isReadonly()',
      name: 'isReadonly',
      desc: 'isReadonly 用于检查一个值是否为只读响应式对象。',
    },
    {
      key: 'markRaw()',
      name: '标记为原始',
      desc: 'markRaw 用于将一个对象标记为不需要响应式处理。',
    },
    {
      key: 'nextTick()',
      name: '下一个 tick',
      desc: 'nextTick 用于在下一个 DOM 更新循环结束之后执行回调。',
    },
    {
      key: 'isProxy()',
      name: 'isProxy',
      desc: 'isProxy 用于检查一个值是否为代理对象。',
    },
    {
      key: 'app.component()',
      name: '注册组件',
      desc: 'app.component 用于在 Vue 应用中注册全局组件。',
    },
    {
      key: 'app.directive()',
      name: '注册指令',
      desc: 'app.directive 用于在 Vue 应用中注册全局指令。',
    },
    {
      key: 'app.mixin()',
      name: '混入',
      desc: 'app.mixin 用于在 Vue 应用中注册全局混入。',
    },
    {
      key: 'app.use()',
      name: '使用插件',
      desc: 'app.use 用于在 Vue 应用中安装插件。',
    },
    {
      key: 'app.mount()',
      name: '挂载应用',
      desc: 'app.mount 用于将 Vue 应用挂载到 DOM 元素上。',
    },
    {
      key: 'app.unmount()',
      name: '卸载应用',
      desc: 'app.unmount 用于卸载 Vue 应用。',
    },
    {
      key: 'app.config',
      name: '应用配置',
      desc: 'app.config 用于访问和修改 Vue 应用的全局配置。',
    },
    {
      key: 'app.provide()',
      name: '提供依赖',
      desc: 'app.provide 用于在 Vue 应用中提供依赖。',
    },
    {
      key: 'app.inject()',
      name: '注入依赖',
      desc: 'app.inject 用于在组件中注入依赖。',
    },
    {
      key: 'app.directive()',
      name: '注册指令',
      desc: 'app.directive 用于在 Vue 应用中注册全局指令。',
    },
    {
      key: '<Teleport>',
      name: 'Teleport 组件',
      desc: 'Teleport 组件用于将子组件传送到 DOM 的其他位置。',
    },
    {
      key: '<Suspense>',
      name: 'Suspense 组件',
      desc: 'Suspense 组件用于处理异步组件的加载状态。',
    },
    {
      key: '<KeepAlive>',
      name: 'KeepAlive 组件',
      desc: 'KeepAlive 组件用于缓存组件的状态。',
    },
    {
      key: '<Transition>',
      name: 'Transition 组件',
      desc: 'Transition 组件用于在组件之间应用过渡效果。',
    },
    {
      key: 'onBeforeMount()',
      name: '组件挂载前',
      desc: 'onBeforeMount() 用于在组件挂载之前执行的钩子函数。',
    },
    {
      key: 'onMounted()',
      name: '组件挂载后',
      desc: 'onMounted() 用于在组件挂载之后执行的钩子函数。',
    },
    {
      key: 'onBeforeUpdate()',
      name: '组件更新前',
      desc: 'onBeforeUpdate() 用于在组件更新之前执行的钩子函数。',
    },
    {
      key: 'onUpdated()',
      name: '组件更新后',
      desc: 'onUpdated() 用于在组件更新之后执行的钩子函数。',
    },
    {
      key: 'onBeforeUnmount()',
      name: '组件卸载前',
      desc: 'onBeforeUnmount() 用于在组件卸载之前执行的钩子函数。',
    },
    {
      key: 'onUnmounted()',
      name: '组件卸载后',
      desc: 'onUnmounted() 用于在组件卸载之后执行的钩子函数。',
    },
    {
      key: 'emits',
      name: '组件事件',
      desc: 'emits 用于定义组件可以触发的事件。',
    },
    {
      key: '$emits',
      name: '组件事件',
      desc: '$emits 用于定义组件可以触发的事件。',
    },
    {
      key: 'defineEmits()',
      name: '定义组件事件',
      desc: 'defineEmits() 用于定义组件可以触发的事件。',
    },
  ],
};
export default vueWords;
