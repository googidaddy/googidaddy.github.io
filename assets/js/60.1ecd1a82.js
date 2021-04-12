(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{545:function(s,t,n){"use strict";n.r(t);var a=n(4),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[n("strong",[s._v("阅读本文大概需要4分钟")])]),s._v(" "),n("p",[n("strong",[s._v("如果真的条件只有centos系统，那么你还是看完吧，我已经顺利的安装完了！")])]),s._v(" "),n("p",[n("strong",[s._v("假如有条件选择别的linux系统，请搜索"),n("code",[s._v("Ubuntu 安装python3")]),s._v("，然后可以关闭此网页")])]),s._v(" "),n("p",[n("strong",[s._v("centos7本身自带有python2（yum就是python写的），所以你安装python3，是需要设置python路径，"),n("u",[s._v("并且需要设置pip的路径和yum本身的路径")])])]),s._v(" "),n("hr"),s._v(" "),n("h2",{attrs:{id:"安装步骤-前方地狱"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装步骤-前方地狱"}},[s._v("#")]),s._v(" 安装步骤-前方地狱")]),s._v(" "),n("h2",{attrs:{id:"_1-准备依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备依赖"}},[s._v("#")]),s._v(" 1.准备依赖")]),s._v(" "),n("p",[s._v("python3的安装需要一定的依赖，"),n("strong",[s._v("务必使用root权限安装（sudo）")]),s._v("。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("yum update -y\nyum groupinstall -y 'Development Tools'\nyum install -y gcc openssl-devel bzip2-devel libffi-devel wget\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"_2-下载python3-9"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载python3-9"}},[s._v("#")]),s._v(" 2.下载python3.9")]),s._v(" "),n("p",[n("strong",[s._v("确保执行无缺漏依赖（也就是不要error导致中断）")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("wget https://www.python.org/ftp/python/3.9.0/Python-3.9.0.tgz -O /tmp/Python-3.9.0.tgz\ncd /tmp && tar zxf Python-3.9.0.tgz\ncd Python-3.9.0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"_3-安装python3-9"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装python3-9"}},[s._v("#")]),s._v(" 3.安装python3.9")]),s._v(" "),n("p",[s._v("安装是需要等一会")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("./configure prefix=/usr/local/python3\nmake && make install\nexport PATH=$PATH:/usr/local/python3/bin/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("建立python软连接（也就是把python路径添加到path）")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ln -s /usr/local/python3/bin/python3.9 /usr/bin/python3\nln -s /usr/local/python3/bin/pip3 /usr/bin/pip3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"_4-验证python安装是否成功"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-验证python安装是否成功"}},[s._v("#")]),s._v(" 4.验证python安装是否成功")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("python3\n# 显示已省略，反正可以看到python3.x和>>>，ctrl + D 退出\n>>>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("pip3 -V\n# 会显示pip命令详细使用tips\n# 不放心可以再试一试安装一个库\npip3 install requests\n# 安装成功之后会提示你一段代码'xx upgrade pip' ，你复制运行就可以更新pip3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("hr")])}),[],!1,null,null,null);t.default=e.exports}}]);