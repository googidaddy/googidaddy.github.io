(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{541:function(e,r,t){"use strict";t.r(r);var s=t(4),a=Object(s.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"react16新架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react16新架构"}},[e._v("#")]),e._v(" React16新架构")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://react.iamkasong.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("source"),t("OutboundLink")],1)]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("从递归更新变成可中断更新")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("多了Scheduler（Reconciler、Renderer）")])])])]),e._v(" "),t("p",[t("strong",[e._v("工作原理变化：首先由Scheduler调度器调度任务的优先级，高优先任务先进入Reconciler,Reconciler标记所有需要更新的虚拟DOM（标记在内存中操作，并且Reconciler不再与Renderer交替工作），之后交由Renderer渲染")])]),e._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5Cdomado%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210618220350630.png",alt:"image-20210618220350630"}})]),e._v(" "),t("p",[e._v("其中红框中的步骤随时可能由于以下原因被中断：")]),e._v(" "),t("ul",[t("li",[e._v("有其他更高优任务需要先更新")]),e._v(" "),t("li",[e._v("当前帧没有剩余时间")])]),e._v(" "),t("p",[e._v("由于红框中的工作都在内存中进行，不会更新页面上的DOM，所以即使反复中断，用户也不会看见更新不完全的DOM（即上一节演示的情况）。")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Reconciler")]),e._v("工作的阶段被称为"),t("code",[e._v("render")]),e._v("阶段。因为在该阶段会调用组件的"),t("code",[e._v("render")]),e._v("方法。")]),e._v(" "),t("li",[t("code",[e._v("Renderer")]),e._v("工作的阶段被称为"),t("code",[e._v("commit")]),e._v("阶段。就像你完成一个需求的编码后执行"),t("code",[e._v("git commit")]),e._v("提交代码。"),t("code",[e._v("commit")]),e._v("阶段会把"),t("code",[e._v("render")]),e._v("阶段提交的信息渲染在页面上。")]),e._v(" "),t("li",[t("code",[e._v("render")]),e._v("与"),t("code",[e._v("commit")]),e._v("阶段统称为"),t("code",[e._v("work")]),e._v("，即"),t("code",[e._v("React")]),e._v("在工作中。相对应的，如果任务正在"),t("code",[e._v("Scheduler")]),e._v("内调度，就不属于"),t("code",[e._v("work")]),e._v("。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/31481964/85862700-b41e2880-b7f4-11ea-9f28-b9e0a39e1498.png",alt:"image"}})]),e._v(" "),t("p",[t("u",[t("strong",[e._v("在render阶段")])]),e._v("，React将更新应用于通过setState或render方法触发的组件，并确定需要在用户屏幕上做哪些更新--哪些节点需要插入，更新或删除，哪些组件需要调用其生命周期方法。最终的这些更新信息被保存在一个叫effect list的fiber 节点树上（关于fiber的内容，在这篇文章中有简述"),t("a",{attrs:{href:"https://github.com/mbaxszy7/blog/issues/14",target:"_blank",rel:"noopener noreferrer"}},[e._v("react中的fiber"),t("OutboundLink")],1),e._v("）。当然，在首次渲染时，React不需要产生任何更新信息，而是会给每个从render方法返回的element生成一个fiber节点，最终生成一个fiber节点树， 后续的更新也是复用了这棵fiber树。")]),e._v(" "),t("p",[e._v("在上图中， render阶段被标记为纯的、没有副作用的，可能会被React暂停、终止或者重新执行。也就是说，React会根据产生的任务的优先级，安排任务的调度（schedule）。利用类似requestIdleCallback的原理在浏览器空闲阶段进行更新计算，而不会阻塞动画，事件等的执行。")]),e._v(" "),t("hr"),e._v(" "),t("p",[t("u",[t("strong",[e._v("在commit阶段")])])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("current fiber tree: 在首次渲染时，React不需要产生任何更新信息，而是会给每个从render方法返回的element生成一个fiber节点，最终生成一个fiber节点树， 后续的更新也是复用了这棵fiber树。\n\nworkInProgress fiber tree: \n所有的更新计算工作都在workInProgress tree的fiber上执行。当React 遍历current fiber tree时，它为每个current fiber 创建一个替代（alternate）节点，这样的alternate节点构成了workInProgress tree\n\neffect list fiber tree: workInProgress fiber tree 的子树，这个树的作用串联了标记具有更新的节点\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("commit阶段会遍历effect list，把所有更新都commit到DOM树上。具体的，首先会有一个pre-commit阶段，主要是执行getSnapshotBeforeUpdate方法，可以获取当前DOM的快照（snap）。然后给需要卸载的组件执行componentWillUnmount方法。接着会把current fiber tree 替换为workInProgress fiber tree。最后执行DOM的插入、更新和删除，给更新的组件执行componentDidUpdate，给插入的组件执行componentDidMount。")]),e._v(" "),t("p",[t("u",[t("strong",[e._v("重点要注意的是，这一阶段是同步执行的，不能中止")])]),e._v("。")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"源码的结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#源码的结构"}},[e._v("#")]),e._v(" 源码的结构")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("根目录\n├── fixtures        # 包含一些给贡献者准备的小型 React 测试项目\n├── packages        # 包含元数据（比如 package.json）和 React 仓库中所有 package 的源码（子目录 src）\n├── scripts         # 各种工具链的脚本，比如git、jest、eslint等\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("h4",{attrs:{id:"packages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#packages"}},[e._v("#")]),e._v(" packages")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("├── react \t\t\t# react的核心，包含全局的API\n├── shceduler\t\t# Scheduler的实现\n├── shared\t\t\t# 源码中其他模块公用的方法和全局变量\n├── renderer\n├─────react-art\n├─────react-dom  \t# 注意这是同时DOM和SSR(服务端渲染)的入口\n├─────react-native-renderer\n├─────react-noop-renderer\t# 用于debug fiber\n├─────react-test-renderer\n├── test\t\t\t# 抽出出来独立的包，实验性质所以不建议生产环境使用\n├─────react-server \t\t# 创建自定义SSR流\n├─────react-client \t\t# 创建自定义流\n├─────react-fetch\t\t# 用于数据请求\n├─────react-interactions # 用于测试交互相关的内部特性，such as:React的事件模型\n├─────react-reconciler\t# Reconciler的实现，构建自己的Renderer\n├── 辅助包\t\t\t  # 辅助功能单独形成的包\n├─────react-is \t\t# 用于测试组件是否是某类型\n├─────react-client  # 创建自定义流\n├─────react-fetch   # 用于数据请求\n├─────react-refresh # “热重载”的官方版本\n├── react-reconciler\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br")])])])}),[],!1,null,null,null);r.default=a.exports}}]);