"use strict";(self.webpackChunkvuepress_theme_reco_demo=self.webpackChunkvuepress_theme_reco_demo||[]).push([[6776],{7705:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-38a1fedd",path:"/blogs/tech/docker%E9%83%A8%E7%BD%B2v2ray.html",title:"docker部署v2ray",lang:"en-US",frontmatter:{title:"docker部署v2ray",date:"2021/03/26",tags:["v2ray","docker"],categories:["tech"]},excerpt:"<p><strong>部署v2ray-docker，<s>官方文档写的不明不白</s>，阅读本文需要1.5分钟</strong></p>\n",headers:[{level:2,title:"pull images",slug:"pull-images",children:[]},{level:2,title:"create-config.json",slug:"create-config-json",children:[]},{level:2,title:"run container",slug:"run-container",children:[]},{level:2,title:"use tutorial",slug:"use-tutorial",children:[]},{level:2,title:"summary",slug:"summary",children:[]}],git:{},filePathRelative:"blogs/tech/docker部署v2ray.md"}},5050:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<p><strong>部署v2ray-docker，<s>官方文档写的不明不白</s>，阅读本文需要1.5分钟</strong></p><h2 id="pull-images" tabindex="-1"><a class="header-anchor" href="#pull-images" aria-hidden="true">#</a> pull images</h2><p><strong>拉取镜像</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull v2fly/v2fly-core\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="create-config-json" tabindex="-1"><a class="header-anchor" href="#create-config-json" aria-hidden="true">#</a> create-config.json</h2><p><strong>容器需要挂载配置文件才能运行</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc\n<span class="token function">mkdir</span> v2ray\n<span class="token builtin class-name">cd</span> v2ray\n<span class="token function">vim</span> config.json\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>提供参考模板（大概能供5个人左右使用的负载），记得删除注释使用（无特殊注释部分，可以不改）</strong></p><p><strong>注：出口使用了http伪装（知道或不知道也无所谓）</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n  &quot;log&quot; : {\n    &quot;access&quot;: &quot;/var/log/v2ray/access.log&quot;,\n    &quot;error&quot;: &quot;/var/log/v2ray/error.log&quot;,\n    &quot;loglevel&quot;: &quot;warning&quot;\n  },\n  &quot;inbounds&quot;: [\n    {\n      &quot;port&quot;: 80, // 要部署的端口，后面会提及到，不改也没关系\n      &quot;protocol&quot;: &quot;vmess&quot;,\n      &quot;settings&quot;: {\n        &quot;clients&quot;: [\n          {\n          \t// id是uuid,改不改无所谓，要改就搜索一下uuid生成器\n            &quot;id&quot;: &quot;ff07909e-5177-f595-2d6b-bc3815b18c5a&quot;, \n            &quot;level&quot;: 1,\n            &quot;alterId&quot;: 64 // 不改也没关系\n          }\n        ]\n      },\n      &quot;streamSettings&quot;: {\n        &quot;network&quot;: &quot;tcp&quot;,\n        &quot;tcpSettings&quot;: {\n          &quot;header&quot;: { \n            &quot;type&quot;: &quot;http&quot;,\n            &quot;response&quot;: {\n              &quot;version&quot;: &quot;1.1&quot;,\n              &quot;status&quot;: &quot;200&quot;,\n              &quot;reason&quot;: &quot;OK&quot;,\n              &quot;headers&quot;: {\n                &quot;Content-Type&quot;: [&quot;application/octet-stream&quot;, &quot;application/x-msdownload&quot;, &quot;text/html&quot;, &quot;application/x-shockwave-flash&quot;],\n                &quot;Transfer-Encoding&quot;: [&quot;chunked&quot;],\n                &quot;Connection&quot;: [&quot;keep-alive&quot;],\n                &quot;Pragma&quot;: &quot;no-cache&quot;\n              }\n            }\n          }\n        }\n      }\n    }\n  ],\n  &quot;outbounds&quot;: [\n    {\n      &quot;protocol&quot;: &quot;freedom&quot;,\n      &quot;settings&quot;: {}\n    },\n    {\n      &quot;protocol&quot;: &quot;blackhole&quot;,\n      &quot;settings&quot;: {},\n      &quot;tag&quot;: &quot;blocked&quot;\n    }\n  ],\n  &quot;routing&quot;: {\n    &quot;strategy&quot;: &quot;rules&quot;,\n    &quot;settings&quot;: {\n      &quot;rules&quot;: [\n        {\n          &quot;type&quot;: &quot;field&quot;,\n          &quot;ip&quot;: [\n            &quot;geoip:private&quot;\n          ],\n          &quot;outboundTag&quot;: &quot;blocked&quot;\n        }\n      ]\n    }\n  }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><h2 id="run-container" tabindex="-1"><a class="header-anchor" href="#run-container" aria-hidden="true">#</a> run container</h2><p><strong>就一条命令就可以走起来，安装流程走，100%成功</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -d --name v2ray -v /etc/v2ray:/etc/v2ray -p <span class="token number">80</span>:80 v2fly/v2fly-core v2ray -config<span class="token operator">=</span>/etc/v2ray/config.json\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><p><code>-d</code> 指在后台运行，<code>--name v2ray</code> 指容器取名<code>v2ray</code></p></li><li><p><code>-v</code> mount（挂载）文件, <code>-p</code> 开放端口(配置文件中有提到)</p></li><li><p>剩下的是镜像名<code>v2fly...</code> 和<code>v2ray - ...</code> 使用配置文件</p></li></ul><h2 id="use-tutorial" tabindex="-1"><a class="header-anchor" href="#use-tutorial" aria-hidden="true">#</a> use tutorial</h2><p><strong>使用就很简单了，举个例子（卑微IOS用户）</strong></p><p><strong>打开shadowrocket,右上角加号，添加vmess，IP写你服务器ip，端口80(配置文件和容器配置一致的)，id（uuid-ff079xxx），alterid-64，然后就可以使用了</strong></p><h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> summary</h2><p><s>官方文档</s></p><p><strong>没有用上花里胡哨的BBR加速等，我只是想做一个混淆的实验，过去一直都是一键脚本搭建的，但是看到了脚本留有后门，恰巧服务器有运行比较重要的程序，于是就索性自己读了一下官方文档，</strong></p><p><strong>第一官方文档写的简易上手流程，太多没有说清楚的概念，点击详细的配置，仅仅介绍了参数（哪些非必要和必要都没有说），对新人不友好<s>况且还做了什么新手上路，那直接翻车了</s></strong></p><p><strong>第二网上一堆的教程都是差不多过时的，想要加自己所需的功能是要不停琢磨那些坑（去不停实验那些参数），相当于文档白写，浪费时间在搭建上</strong></p><p><strong>最后，希望官方文档能更新，毕竟太久没更新过了，个人对网络一窍不通，总算弄明白了，折腾来折腾去就in&amp;out两个大参数里面自定义内容，或者说不想详细教大家，那么可以提供一些及时更新的模板，直接copy改一下运行所需的参数就行（多删少补自己决定），毕竟搭建完，鬼还去怀念config</strong></p>',23),r={},t=(0,a(3744).Z)(r,[["render",function(n,s){return e}]])}}]);