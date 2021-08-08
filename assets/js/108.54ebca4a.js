(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{592:function(s,a,n){"use strict";n.r(a);var t=n(4),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"docker-compose安装redis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose安装redis"}},[s._v("#")]),s._v(" Docker-compose安装Redis")]),s._v(" "),n("p",[n("strong",[s._v("注意：最好在服务器"),n("code",[s._v("Ubuntu")]),s._v("上实践")])]),s._v(" "),n("h3",{attrs:{id:"创建文件夹"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建文件夹"}},[s._v("#")]),s._v(" 创建文件夹")]),s._v(" "),n("p",[s._v("DEMO："),n("code",[s._v("redis")]),s._v("文件夹结构路径如下")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".\n├── data\n│   └── dump.rdb // 这个不用创建\n├── docker-compose.yml\n├── logs\n│   └── redis.log // 这个不用创建\n└── redis.conf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[n("strong",[s._v("docker-compose.yml")])]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("redis")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("alpine\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 出错自动重启")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 容器名字")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server /usr/local/etc/redis/redis.conf "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用自定义的conf启动redis")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'16379:6379'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 16379宿主机端口绑定容器6379端口")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/data\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./redis.conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/local/etc/redis/redis.conf\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./logs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/logs\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[n("a",{attrs:{href:"https://download.redis.io/redis-stable/redis.conf",target:"_blank",rel:"noopener noreferrer"}},[s._v("redis.conf模板文件下载"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("strong",[s._v("redis.conf需要修改的内容如下")])]),s._v(" "),n("div",{staticClass:"language-conf line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('# log文件存放位置\nlogfile "/logs/redis.log" \n\n# 密码登录！！！必须设置,把注释去掉\nrequirepass ZXCzxc132\n\n# 允许外网访问 注释掉即可\n# bind 127.0.0.1\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[n("strong",[s._v("其余根据需求来添加或者修改")])]),s._v(" "),n("p",[n("strong",[s._v("运行"),n("code",[s._v("docker-compose up -d")])])]),s._v(" "),n("p",[n("strong",[s._v("然后试着连接。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);