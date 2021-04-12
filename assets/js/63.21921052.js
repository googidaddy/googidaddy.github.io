(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{550:function(s,n,t){"use strict";t.r(n);var a=t(4),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("strong",[s._v("阅读本文大概需要3分钟")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[s._v("前期")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("# 初始化 最好不要用全局安装（yarn 未收录)\nnpm install @vuepress-reco/theme-cli\ntheme-cli init\n# 上面这条打完之后第一个翻译是要不要新建一个文件夹，输入n（也就是不\n# 然后是输入名字、描述、作者名字\n# 选择blog和doc无大区别我选择blog\n\n# 安装\nnpm install\n\n# 运行(等加载完"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("点开localhost那个链接就可以看到自己的网站，帅不帅？)\nnpm run dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[s._v("部署到 Github Pages 的方式有两种，一种是自动化，一种是打工人的灵魂（自己动手），当然！为了更好理解！")]),s._v(" "),t("p",[s._v("以手动化作为灯塔！")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("# 创建github仓库"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("网上有几种设置base的，如果你是用github用户名.github.io作为仓库名\n# 则不需要设置base属性，把.vuepress\\config.js的"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dest"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"public"')]),s._v("删除\n# 删除的目的是：打包在默认的dist文件夹.\n# 如果是起一个名字作为仓库，同样删除这个public一行，还需要另外加上\n\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"base"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/你仓库的名字/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n# 部署(不需要提前拉仓库，拉了仓库到本地也没事，包括你项目就在仓库本地)\n\nnpm run build\n\n# 这时候.vuepress文件夹会多出一个dist文件夹\n\ncd .vuepress\\dist\n\n# Github Pages是通过你push这个dist才能识别的。每次push都记得cd到这个dist，这个dist文件夹是生产环境！如果你的项目就是在仓库就不需要第四行代码建立关系，后续会填加上自动脚本，手动先体验灵魂，\n\ngit init\ngit add .\ngit commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deploy"')]),s._v("\ngit push\ngit remote add origin 你项目地址(https)\ngit push -u origin master -f\n# 这个push 会创建一个master分支，进入仓库 setting\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("p",[s._v("然后滚轮滚到下面，找到 GitHub Pages 选择 master 分支然后 save 就行了")])]),s._v(" "),t("h1",{attrs:{id:"关于目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于目录结构"}},[s._v("#")]),s._v(" 关于目录结构")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/googidaddy/img/img/%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84.png",alt:""}})]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[s._v("一般搜索的网络教学关于目录结构都是通篇给一个结构树图，能有几个一眼看懂不疑惑？")]),s._v(" "),t("blockquote",[t("p",[s._v("dist是运行了"),t("code",[s._v("npm run build")]),s._v("所产生的目录，没必要动它")]),s._v(" "),t("p",[s._v("blogs目录放你想写的.md文件，随意新建文件夹自己分类别，文章里tags或者categories写好就会自行分类")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/googidaddy/img/img/%E4%BB%A3%E7%A0%81.png",alt:""}})]),s._v(" "),t("blockquote",[t("p",[s._v("docs是导航栏的docs里面写的文章不用写类别会自动归类到docs")])]),s._v(" "),t("p",[t("strong",[s._v("基本就这样了!")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);