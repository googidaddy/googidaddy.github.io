(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{578:function(s,a,e){"use strict";e.r(a);var t=e(4),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"docker-compose命令合集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose命令合集"}},[s._v("#")]),s._v(" docker-compose命令合集")]),s._v(" "),e("h3",{attrs:{id:"运行相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行相关"}},[s._v("#")]),s._v(" "),e("strong",[s._v("运行相关")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# dir\n|\n - docker-compose.yaml\n - /app\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker-compose up -d\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("-d 后台运行")]),s._v(" "),e("p",[s._v("--no-recreate 只启动暂停状态的容器")]),s._v(" "),e("p",[s._v("--force-recreate  强制重新创建容器")])]),s._v(" "),e("p",[e("strong",[s._v("如果我更改某项服务（Nginx），只想针对nginx重建容器")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker-compose up nginx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("重构服务(一般用不着)")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker-compose build service_name\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[e("code",[s._v("--force-rm")]),s._v(" 删除构建过程中的临时容器。")]),s._v(" "),e("p",[e("code",[s._v("--no-cache")]),s._v(" 构建镜像过程中不使用 cache（这将加长构建过程）。")]),s._v(" "),e("p",[e("code",[s._v("--pull")]),s._v(" 始终尝试通过 pull 来获取更新版本的镜像。")])]),s._v(" "),e("p",[e("strong",[s._v("进入容器")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker-compose exec service_name bash\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("日志")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker-compose logs service_name\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("-f 实时日志")])]),s._v(" "),e("h3",{attrs:{id:"sample"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sample"}},[s._v("#")]),s._v(" Sample")]),s._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("web")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" helloworld"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("latest\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 3000"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("api")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("latest\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 9090"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9090")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./.env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/app/.env\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Local Deployment")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# services:")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   web:")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     build:")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#\t\tcontext: ./dir")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#       dockerfile: Dockerfile-alternate")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     ports:")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#       - 3000:3000")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   api:")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     build: ./api")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     ports:")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#       - 9090:9090")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     volumes:")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#       - ./.env:/app/.env")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br")])]),e("p",[e("strong",[e("code",[s._v("build")]),s._v("指定"),e("code",[s._v("Dockerfile")]),s._v("所在的文件夹，可以使用"),e("code",[s._v("context")]),s._v("指定所在文件夹路径和"),e("code",[s._v("dockerfile")]),s._v("指定"),e("code",[s._v("dockerfile")]),s._v("文件名")])]),s._v(" "),e("p",[e("strong",[e("code",[s._v("image")]),s._v("镜像名字或者id，本地不存在，会尝试pull")])])])}),[],!1,null,null,null);a.default=n.exports}}]);