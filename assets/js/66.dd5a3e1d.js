(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{551:function(t,e,r){"use strict";r.r(e);var n=r(4),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[r("strong",[t._v("从恩山那里学习总结过来的，单刀直入。"),r("a",{attrs:{href:"http://openwrt.ink:88/archives/s-breed",target:"_blank",rel:"noopener noreferrer"}},[t._v("感谢大大"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"前期准备"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前期准备"}},[t._v("#")]),t._v(" 前期准备")]),t._v(" "),r("p",[r("a",{attrs:{href:"http://openwrt.ink:8666/%E5%AE%98%E6%96%B9%E5%B7%A5%E5%85%B7%E5%8C%85/%E5%B0%8F%E7%B1%B3AC2100/%E5%AE%98%E6%96%B9%E5%9B%BA%E4%BB%B6/miwifi_r2100_firmware_64288_2.0.376.bin",target:"_blank",rel:"noopener noreferrer"}},[t._v("红米AC2100-2.0.7固件"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"http://openwrt.ink:8666/Padavan/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Padavan固件-下载redmi211.trx"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("XShell（自行下载）")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("如果说你有比较好的老毛子(Padavan)固件什么的，可以自行替代")])])]),t._v(" "),r("p",[r("strong",[t._v("红米ac2100闪存分为晶豪（欧皇）和东芝两种，一般有坏块3-4个（不是太多）也无妨，刷机代码已经规避了")])]),t._v(" "),r("p",[r("strong",[t._v("本人到手也是是东芝，检测有坏块，然后去换了，成功到手晶豪")])]),t._v(" "),r("h2",{attrs:{id:"开始"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[t._v("#")]),t._v(" 开始")]),t._v(" "),r("p",[t._v("综合步骤如果看不懂可以参考"),r("a",{attrs:{href:"https://www.bilibili.com/video/BV1Zf4y1v74o",target:"_blank",rel:"noopener noreferrer"}},[t._v("此视频"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("首先登录进"),r("a",{attrs:{href:"192.168.31.1"}},[t._v("路由器管理地址")])])]),t._v(" "),r("p",[r("strong",[t._v("点系统状态，手动升级，升级红米ac2100-2.0.7固件")])]),t._v(" "),r("p",[r("strong",[t._v("等待升级重启完毕，路由器灯会变成正常的蓝色，再次打开路由器管理地址")])]),t._v(" "),r("p",[r("strong",[t._v("此时地址会变为")]),r("code",[t._v("http://192.168.31.1/cgi-bin/luci/;stok=<STOK>/web/home#router")])]),t._v(" "),r("p",[t._v("复制下来"),r("code",[t._v("<STOK>")])]),t._v(" "),r("p",[t._v("替换stok"),r("code",[t._v("http://192.168.31.1/cgi-bin/luci/;stok=<STOK>/api/misystem/set_config_iotdev?bssid=Xiaomi&user_id=longdike&ssid=-h%3B%20nvram%20set%20ssh_en%3D1%3B%20nvram%20commit%3B%20sed%20-i%20's%2Fchannel%3D.*%2Fchannel%3D%5C%22debug%5C%22%2Fg'%20%2Fetc%2Finit.d%2Fdropbear%3B%20%2Fetc%2Finit.d%2Fdropbear%20start%3B")])]),t._v(" "),r("p",[r("strong",[t._v("然后将网址复制下来粘贴网页打开，会显示"),r("code",[t._v('"code":0')]),t._v("代表成功")])]),t._v(" "),r("p",[t._v("打开xshell，连接"),r("code",[t._v("192.168.31.1")]),t._v(" 用户名为"),r("code",[t._v("root")]),t._v(" 密码"),r("code",[t._v("admin")])]),t._v(" "),r("p",[r("strong",[t._v("直接输入一下命令刷入Breed，并等待20s")])]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("cd /tmp && wget https://breed.hackpascal.net/breed-mt7621-xiaomi-r3g.bin && mtd -r write breed-mt7621-xiaomi-r3g.bin Bootloader\n\n或者下面命令：\ncd /tmp && wget http://openwrt.ink:8666/Breed/breed-mt7621-xiaomi-r3g.bin && mtd -r write breed-mt7621-xiaomi-r3g.bin Bootloader\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br")])]),r("p",[r("strong",[t._v("正常结束后是会显示reboot，然后断开与ssh连接，（自己尝试能不能输入东西就知道了）")])]),t._v(" "),r("p",[r("strong",[t._v("路由器断电，找个针戳住路由器背后的reset小孔并插电，记得是戳住，等路由器灯一直闪烁后，浏览器输入"),r("code",[t._v("192.168.1.1")]),t._v("进入breed")])]),t._v(" "),r("p",[r("strong",[t._v("找到环境变量，增加:xiaomi.r3g.bootfw 值：2 然后保存")])]),t._v(" "),r("p",[r("strong",[t._v("点击更新固件，上传padavan固件包，等待更新完成，然后就可以进入padavan路由器管理界面")])]),t._v(" "),r("p",[r("strong",[t._v("开启5G频道->160HZ，冲冲冲")])])])}),[],!1,null,null,null);e.default=a.exports}}]);