(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{571:function(t,r,n){"use strict";n.r(r);var o=n(4),e=Object(o.a)({},(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("strong",[t._v("ESP8266 连接阿里云")])]),t._v(" "),n("h2",{attrs:{id:"esp8266-连接阿里云"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#esp8266-连接阿里云"}},[t._v("#")]),t._v(" ESP8266 连接阿里云")]),t._v(" "),n("p",[n("strong",[t._v("最近在倒腾 ESP8266，弄物联网，为了联上阿里云物联网平台，得多加使用搜索引擎。")])]),t._v(" "),n("p",[n("strong",[t._v("第一步先 Arduino 适配合适的板子(esp8266)和型号，具体自己搜一下，这个要学会自己配置")])]),t._v(" "),n("blockquote",[n("p",[t._v("Arduino IDE 配置")]),t._v(" "),n("ul",[n("li",[t._v("首选项 - "),n("code",[t._v("附加开发板管理器网址")]),t._v(" 输入 "),n("code",[t._v("https://arduino.esp8266.com/stable/package_esp8266com_index.json")])]),t._v(" "),n("li",[t._v("工具 - 开发板 - 开发板管理器 - 搜索 "),n("code",[t._v("8266")]),t._v(" 并安装")])])]),t._v(" "),n("p",[n("strong",[t._v("为了避免大家走弯路，直接给出合理官方的 SDK。（切记那些 18、19 年的教学早已过时）")])]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/yu-tou/arduino-aliyun-iot-sdk",target:"_blank",rel:"noopener noreferrer"}},[t._v("Arduino-Aliyun-IoT-SDK"),n("OutboundLink")],1),n("strong",[t._v("，这个是 Arduino 的阿里 IOT 库，官方仓库。")])]),t._v(" "),n("p",[n("strong",[t._v("使用上照着仓库 Usage，安装好 ArduinoJson,Crypto,PubSubClient 库，根据使用实例填好所需项。")])]),t._v(" "),n("p",[n("strong",[t._v("然后注意！打开 Arduino 的 libraries 的 PubSubClient 的 Src 文件夹，找到"),n("code",[t._v("PubSubClient.h")]),t._v("修改 MQTT_MAX_PACKET_SIZE 和 MQTT_KEEPALIVE 的值，将其改大点，比如改成 1024 和 60。")])]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.codenong.com/cs107032096/",target:"_blank",rel:"noopener noreferrer"}},[t._v("感谢填坑者！"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("strong",[t._v("最后连接。")])]),t._v(" "),n("hr")])}),[],!1,null,null,null);r.default=e.exports}}]);