(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{546:function(s,a,n){"use strict";n.r(a);var t=n(4),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[n("strong",[s._v("从WSGI到ASGI")])]),s._v(" "),n("h3",{attrs:{id:"简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),n("p",[s._v("自从说了要从"),n("code",[s._v("Flask")]),s._v("到"),n("code",[s._v("Fastapi")]),s._v("转变，还要学习不同架构，ASGI作为非常优秀的异步框架，给我感觉就是如果你没学过python，那么建议你直接从python3直接学，而不是从python2开始...，本次是自底向上说明，方便理解。")]),s._v(" "),n("h3",{attrs:{id:"改造过程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#改造过程"}},[s._v("#")]),s._v(" 改造过程")]),s._v(" "),n("p",[s._v("此次的实验项目是之前的"),n("a",{attrs:{href:"https://github.com/googidaddy/bili_upload_tool",target:"_blank",rel:"noopener noreferrer"}},[s._v("上传视频项目"),n("OutboundLink")],1),s._v("，由于是传统的"),n("code",[s._v("WSGI")]),s._v("架构，加上"),n("code",[s._v("Flask")]),s._v("是同步框架，调用上遇到异步的问题就头大。(思考要不要修改开发源代码...)")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("--docker-compose.yaml\n--Docker-main\n----main.py\n----Dockerfile\n--nginx\n----nginx.conf\n----Dockerfile\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h4",{attrs:{id:"flask变fastapi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flask变fastapi"}},[s._v("#")]),s._v(" Flask变Fastapi")]),s._v(" "),n("p",[n("strong",[s._v("对比来说，改动地方不多，")])]),s._v(" "),n("ul",[n("li",[n("p",[s._v("首先用pipenv配置好Fastapi相关环境")])]),s._v(" "),n("li",[n("p",[s._v("把模板搭载放在了nginx，可以翻看"),n("strong",[s._v("萌新nginx配置")]),s._v("那一篇。")])]),s._v(" "),n("li",[n("p",[s._v("增加"),n("a",{attrs:{href:"https://fastapi.tiangolo.com/tutorial/body/",target:"_blank",rel:"noopener noreferrer"}},[s._v("请求验证"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pydantic "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" BaseModel\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对数据有验证")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Item")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("BaseModel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),s._v("\n    b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),s._v("\n    c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),s._v("\n    d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 去掉__main__程序里uvicorn启动程序")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("原来的数据处理部分变更成异步async/await")])])]),s._v(" "),n("h4",{attrs:{id:"增加nginx反向代理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#增加nginx反向代理"}},[s._v("#")]),s._v(" 增加nginx反向代理")]),s._v(" "),n("div",{staticClass:"language-dockerfile line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("alpine\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" ./dist /usr/share/nginx/html/\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" nginx.conf /etc/nginx/conf.d/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("strong",[s._v("解释一下，我这里只是轻度使用，Alpine不会造成啥影响，反而轻量更适合，静态文件copy到nginx docker的默认html文件夹，copy自定义nginx配置文件到conf.d，不同于网上大部分教程是因为避免配置规则约束(同时他们也不会说清楚这一点)，网上大部分教程是nginx首要配置文件，需要遵循一定规范才能运行，咱不上纲上线，能跑就行。")])]),s._v(" "),n("blockquote",[n("p",[s._v("ps：nginx配置在那个教程")])]),s._v(" "),n("h4",{attrs:{id:"增加docker-compose"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#增加docker-compose"}},[s._v("#")]),s._v(" 增加docker-compose")]),s._v(" "),n("p",[s._v("使用docker-compose是一个 run container的一个更好替换，像配置nginx反向代理和api服务，应该隔离开两个容器。")]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3.9"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("web")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 8080"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("api")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Docker"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("main\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 9090"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9090")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("p",[s._v("这次卡壳的主要是nginx的配置，网上教程不靠谱，一个一个坑都要自己踩过来，最后使用上，也需要自己去翻看uvicorn部署,"),n("strong",[s._v("有些默认配置的坑(--host --port)")]),s._v("，")])])}),[],!1,null,null,null);a.default=e.exports}}]);