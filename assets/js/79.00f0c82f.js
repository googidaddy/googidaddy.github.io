(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{566:function(s,a,n){"use strict";n.r(a);var e=n(4),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("Docker以及Dockerfile命令合集-持续更新。\n")]),s._v(" "),n("h2",{attrs:{id:"docker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" Docker")]),s._v(" "),n("p",[n("strong",[s._v("build镜像(有Dockerfile)")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("docker build -t myimage --network "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[s._v("myimage是自定义镜像名，可自行更改, -t [命名]")]),s._v(" "),n("p",[s._v("公司配备一般还要加上 --network host才能访问请求网络")])]),s._v(" "),n("p",[n("strong",[s._v("实例化一个容器")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("docker run -d --name bili --network "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" --restart unless-stopped -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9090")]),s._v(":9090 -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8022")]),s._v(":22 myimage\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[s._v("-d 在后台运行容器")]),s._v(" "),n("p",[s._v("-p [容器端口]:[宿主机端口], 可以指定多个端口（多个-p）")]),s._v(" "),n("p",[s._v("myimage 镜像名字")]),s._v(" "),n("p",[s._v("-it  i是保持输入，t是将日志绑定伪终端输出")]),s._v(" "),n("p",[s._v("--restart unless-stopped 这个适用于自动重开容器")])]),s._v(" "),n("p",[n("strong",[s._v("进入容器内部")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("docker "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it 容器id/容器名字 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("查看镜像或者容器")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#镜像\ndocker images\n\n#容器(正在运行的)\ndocker ps\n\n#容器(所有)\ndocker ps -a\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[n("strong",[s._v("删除容器")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker stop 容器id && docker rm 容器id\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[s._v("如果容器实例没有运行，执行后半句,容器id也可以是名字")])]),s._v(" "),n("p",[n("strong",[s._v("删除镜像")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker rmi 镜像id/镜像名字\n#如果提示无法删除，有attach其他镜像，则执行下面语句\ndocker rmi -f 镜像id/镜像名字\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("blockquote",[n("p",[s._v("先要暂停和删除该镜像下的所有容器才能删除镜像")])]),s._v(" "),n("p",[n("strong",[s._v("查看容器运行失败日志")])]),s._v(" "),n("p",[s._v("很多人运行容器几秒内就自动退出，也不知道哪里查看日志信息")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 获取日志地址\ndocker inspect --format '{{.LogPath}}' 容器id\n# 这时会打印一串地址，复制\n# 通过cat命令查看日志\ncat 刚刚复制的地址\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[n("strong",[s._v("查看容器运行时日志")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 适用日志不多，因为是把全部日志输出(打印实时log)\ndocker logs -f 容器名字\n\n# 输出最近10条日志\ndocker logs --tail 10 容器名字\n\n# 筛选log(查找“error”)\ndocker logs | grep error\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[n("strong",[s._v("如果进入了虚拟终端"),n("code",[s._v("-it")]),s._v("，使用"),n("code",[s._v("ctrl")]),s._v("+"),n("code",[s._v("P")]),s._v(" "),n("code",[s._v("Q")]),s._v("(一起按) 达成退出但不停止容器运行")])]),s._v(" "),n("h2",{attrs:{id:"dockerfile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[s._v("#")]),s._v(" Dockerfile")]),s._v(" "),n("p",[n("strong",[s._v("Dockerfile：一个文件命名为Dockerfile，无后缀")])]),s._v(" "),n("div",{staticClass:"language-dockerfile line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" python\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# FROM 指定基础镜像")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" ./app /app\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# COPY [文件1/文件夹1] [路径]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 意思将宿主机的[文件1/文件夹1]复制到镜像的新一层内的目标路径")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /app\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定工作目录")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get update "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("y && \\\n\tapt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get install "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("y vim && \\\n\tpip3 install "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("r requirements.txt\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# RUN 执行命令，务必命令使用&&连起来(\\：意思换行)")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"python3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"main.py"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CMD 容器启动时执行的命令")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" 9090\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 声明暴露指定端口，并不是真的暴露，帮助理解")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("h2",{attrs:{id:"docker-hub"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-hub"}},[s._v("#")]),s._v(" Docker hub")]),s._v(" "),n("p",[s._v("现有一个"),n("code",[s._v("docker hub")]),s._v("账号和新建一个公开仓库")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1")]),s._v("\ndocker tag 要推送的镜像名字:tag 目标仓库名字/用户名:tag\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2 ")]),s._v("\ndocker login\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3 ")]),s._v("\ndocker push 目标仓库名字/用户名:tag\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);