(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{545:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("strong",[s._v("部署v2ray-docker，"),a("s",[s._v("官方文档写的不明不白")]),s._v("，阅读本文需要1.5分钟")])]),s._v(" "),a("h2",{attrs:{id:"pull-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pull-images"}},[s._v("#")]),s._v(" pull images")]),s._v(" "),a("p",[a("strong",[s._v("拉取镜像")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker pull v2fly/v2fly-core\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"create-config-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-config-json"}},[s._v("#")]),s._v(" create-config.json")]),s._v(" "),a("p",[a("strong",[s._v("容器需要挂载配置文件才能运行")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" v2ray\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" config.json\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("提供参考模板（大概能供5个人左右使用的负载），记得删除注释使用（无特殊注释部分，可以不改）")])]),s._v(" "),a("p",[a("strong",[s._v("注：出口使用了http伪装（知道或不知道也无所谓）")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n  "log" : {\n    "access": "/var/log/v2ray/access.log",\n    "error": "/var/log/v2ray/error.log",\n    "loglevel": "warning"\n  },\n  "inbounds": [\n    {\n      "port": 80, // 要部署的端口，后面会提及到，不改也没关系\n      "protocol": "vmess",\n      "settings": {\n        "clients": [\n          {\n          \t// id是uuid,改不改无所谓，要改就搜索一下uuid生成器\n            "id": "ff07909e-5177-f595-2d6b-bc3815b18c5a", \n            "level": 1,\n            "alterId": 64 // 不改也没关系\n          }\n        ]\n      },\n      "streamSettings": {\n        "network": "tcp",\n        "tcpSettings": {\n          "header": { \n            "type": "http",\n            "response": {\n              "version": "1.1",\n              "status": "200",\n              "reason": "OK",\n              "headers": {\n                "Content-Type": ["application/octet-stream", "application/x-msdownload", "text/html", "application/x-shockwave-flash"],\n                "Transfer-Encoding": ["chunked"],\n                "Connection": ["keep-alive"],\n                "Pragma": "no-cache"\n              }\n            }\n          }\n        }\n      }\n    }\n  ],\n  "outbounds": [\n    {\n      "protocol": "freedom",\n      "settings": {}\n    },\n    {\n      "protocol": "blackhole",\n      "settings": {},\n      "tag": "blocked"\n    }\n  ],\n  "routing": {\n    "strategy": "rules",\n    "settings": {\n      "rules": [\n        {\n          "type": "field",\n          "ip": [\n            "geoip:private"\n          ],\n          "outboundTag": "blocked"\n        }\n      ]\n    }\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br")])]),a("h2",{attrs:{id:"run-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-container"}},[s._v("#")]),s._v(" run container")]),s._v(" "),a("p",[a("strong",[s._v("就一条命令就可以走起来，安装流程走，100%成功")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker run -d --name v2ray -v /etc/v2ray:/etc/v2ray -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80 v2fly/v2fly-core v2ray -config"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/v2ray/config.json\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("p",[a("code",[s._v("-d")]),s._v(" 指在后台运行，"),a("code",[s._v("--name v2ray")]),s._v(" 指容器取名"),a("code",[s._v("v2ray")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("-v")]),s._v(" mount（挂载）文件, "),a("code",[s._v("-p")]),s._v(" 开放端口(配置文件中有提到)")])]),s._v(" "),a("li",[a("p",[s._v("剩下的是镜像名"),a("code",[s._v("v2fly...")]),s._v(" 和"),a("code",[s._v("v2ray - ...")]),s._v(" 使用配置文件")])])]),s._v(" "),a("h2",{attrs:{id:"use-tutorial"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-tutorial"}},[s._v("#")]),s._v(" use tutorial")]),s._v(" "),a("p",[a("strong",[s._v("使用就很简单了，举个例子（卑微IOS用户）")])]),s._v(" "),a("p",[a("strong",[s._v("打开shadowrocket,右上角加号，添加vmess，IP写你服务器ip，端口80(配置文件和容器配置一致的)，id（uuid-ff079xxx），alterid-64，然后就可以使用了")])]),s._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[s._v("#")]),s._v(" summary")]),s._v(" "),a("p",[a("s",[s._v("官方文档")])]),s._v(" "),a("p",[a("strong",[s._v("没有用上花里胡哨的BBR加速等，我只是想做一个混淆的实验，过去一直都是一键脚本搭建的，但是看到了脚本留有后门，恰巧服务器有运行比较重要的程序，于是就索性自己读了一下官方文档，")])]),s._v(" "),a("p",[a("strong",[s._v("第一官方文档写的简易上手流程，太多没有说清楚的概念，点击详细的配置，仅仅介绍了参数（哪些非必要和必要都没有说），对新人不友好"),a("s",[s._v("况且还做了什么新手上路，那直接翻车了")])])]),s._v(" "),a("p",[a("strong",[s._v("第二网上一堆的教程都是差不多过时的，想要加自己所需的功能是要不停琢磨那些坑（去不停实验那些参数），相当于文档白写，浪费时间在搭建上")])]),s._v(" "),a("p",[a("strong",[s._v("最后，希望官方文档能更新，毕竟太久没更新过了，个人对网络一窍不通，总算弄明白了，折腾来折腾去就in&out两个大参数里面自定义内容，或者说不想详细教大家，那么可以提供一些及时更新的模板，直接copy改一下运行所需的参数就行（多删少补自己决定），毕竟搭建完，鬼还去怀念config")])])])}),[],!1,null,null,null);n.default=t.exports}}]);