(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{540:function(s,n,e){"use strict";e.r(n);var t=e(4),a=Object(t.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h3",{attrs:{id:"stateful-component【有状态组件】"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stateful-component【有状态组件】"}},[s._v("#")]),s._v(" Stateful component【有状态组件】")]),s._v(" "),e("div",{staticClass:"language-react line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("import React, { useState } from 'react'\n// 解构赋值\nconst [ counter, setCounter ] = useState(0)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("blockquote",[e("p",[e("em",[s._v("counter")]),s._v(" 变量被赋予的初始值"),e("em",[s._v("state")]),s._v(" 为零。 变量 setCounter 被分配给一个函数，该函数将用于"),e("em",[s._v("修改 state")]),s._v("。")])]),s._v(" "),e("p",[e("code",[s._v("setCounter")]),s._v("被调用时，React重新渲染这个组件")]),s._v(" "),e("h2",{attrs:{id:"effect-hooks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#effect-hooks"}},[s._v("#")]),s._v(" Effect-hooks")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("import React,{useState,useEffect} from 'react'\nimport axios from 'axios'\nconst hook = () => {\n  console.log('effect')\n  axios\n    .get('http://localhost:3001/notes')\n    .then(response => {\n      console.log('promise fulfilled')\n      setNotes(response.data)\n    })\n}\n\nuseEffect(hook, [])\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("p",[e("strong",[e("code",[s._v("useEffect")]),s._v("有两个参数，第一个是函数本身，默认情况下effect总是在组件渲染之后才运行。第二个是运行频率，如果是一个空数组，那么只在组件第一次渲染时运行。")])]),s._v(" "),e("h3",{attrs:{id:"react-trick"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-trick"}},[s._v("#")]),s._v(" React trick")]),s._v(" "),e("div",{staticClass:"language-react line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("{\n  user === null && loginForm()\n}\n// 按条件渲染\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"redux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redux"}},[s._v("#")]),s._v(" Redux")]),s._v(" "),e("p",[s._v("Redux与"),e("code",[s._v("Flux")]),s._v("架构原理相同")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("npm install redux\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://facebook.github.io/flux/img/overview/flux-simple-f8-diagram-explained-1300w.png",alt:"123"}})]),s._v(" "),e("p",[e("strong",[s._v("通过Action驱动Store改变，从而视图更新")])]),s._v(" "),e("div",{staticClass:"language-react line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 简单的例子\nimport {createStore} from 'redux'\n\n// Reducer\nconst counterReducer = (state =0,action)=>{\n    switch (action.type) {\n    case 'INCREMENT':\n      return state + 1\n    case 'DECREMENT':\n      return state - 1\n    case 'ZERO':\n      return 0\n    default: // if none of the above matches, code comes here\n    return state\n}\n}\n// Reducer不应该直接从应用程序中调用，只作为创建store\nconst store = createStore(counterReducer)\n\n// store使用reducer来处理Action,通过dispatch分发到store\nconsole.log(store.getState())\nstore.dispatch({type: 'INCREMENT'})\nstore.dispatch({type: 'INCREMENT'})\nstore.dispatch({type: 'INCREMENT'})\nconsole.log(store.getState())\nstore.dispatch({type: 'ZERO'})\nstore.dispatch({type: 'DECREMENT'})\nconsole.log(store.getState())\n\n// store第三个方法是订阅\nstore.subscribe(()=>{\n    const storeNow = store.getState()\n    console.log(storeNow)\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br")])]),e("p",[e("strong",[s._v("制作一个计数工具，可以直接在"),e("code",[s._v("create-react-app")]),s._v("里的"),e("code",[s._v("index.js")]),s._v("中使用")])]),s._v(" "),e("div",{staticClass:"language-react line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { createStore } from 'redux'\n\n// reducer\nconst counterReducer = (state = 0, action) => {\n  switch (action.type) {\n    case 'INCREMENT':\n      return state + 1\n    case 'DECREMENT':\n      return state - 1\n    case 'ZERO':\n      return 0\n    default:\n      return state\n  }\n}\n\n// reducer创建store\nconst store = createStore(counterReducer)\n\nconst App = () => {\n  return (\n    <div>\n      <div>\n        {store.getState()}\n      </div>\n      <button \n        onClick={e => store.dispatch({ type: 'INCREMENT' })}\n      >\n        plus\n      </button>\n      <button\n        onClick={e => store.dispatch({ type: 'DECREMENT' })}\n      >\n        minus\n      </button>\n      <button \n        onClick={e => store.dispatch({ type: 'ZERO' })}\n      >\n        zero\n      </button>\n    </div>\n  )\n}\n\nconst renderApp = () => {\n  ReactDOM.render(<App />, document.getElementById('root'))\n}\n\nrenderApp()\n// 订阅\nstore.subscribe(renderApp)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br")])]),e("p",[e("strong",[s._v("比较重要的一点是redux中的状态更改必须不改变旧对象，而是新建一个对象...")])]),s._v(" "),e("div",{staticClass:"language-react line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("state.push(['1']) // 这个不行，如果状态改变，旧对象也会被改变\nstate.concat(['1']) // yes!\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])}),[],!1,null,null,null);n.default=a.exports}}]);