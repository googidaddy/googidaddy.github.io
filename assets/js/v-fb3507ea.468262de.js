"use strict";(self.webpackChunkvuepress_theme_reco_demo=self.webpackChunkvuepress_theme_reco_demo||[]).push([[8398],{7376:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-fb3507ea",path:"/blogs/tech/%E8%90%8C%E6%96%B0nginx%E9%85%8D%E7%BD%AE.html",title:"萌新nginx配置",lang:"en-US",frontmatter:{title:"萌新nginx配置",date:"2021/08/08",tags:["nginx"],categories:["tech"]},excerpt:"<p><strong>2分钟简单学习nginx配置。</strong></p>\n",headers:[{level:3,title:"配置",slug:"配置",children:[]}],git:{},filePathRelative:"blogs/tech/萌新nginx配置.md"}},9041:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<p><strong>2分钟简单学习nginx配置。</strong></p><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p>简单直接跑起来</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>\n\t<span class="token comment"># 监听8080端口,简单体验的话，写不写无所谓</span>\n    listen <span class="token number">8080</span><span class="token punctuation">;</span>\n    <span class="token comment"># 简单来说一般使用正则匹配,如果只是体验一下，不需要配置.</span>\n    server_name yourdomain.com<span class="token punctuation">;</span>\n    <span class="token comment"># 配置静态文件,/表示根目录</span>\n    location / <span class="token punctuation">{</span>\n        root            /usr/share/nginx/html<span class="token punctuation">;</span>\n        index           index.html<span class="token punctuation">;</span>\n        try_files       <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>\n\n <span class="token punctuation">}</span>\n\t<span class="token comment"># 访问yourdomian.com/upload 会转发域名到baidu.com</span>\n\t<span class="token comment"># 剩下是配置请求头</span>\n    <span class="token comment">#location /upload {</span>\n    <span class="token comment">#    proxy_pass http://baidu.com;</span>\n    <span class="token comment">#    add_header Access-Control-Allow-Origin *;</span>\n    <span class="token comment">#    add_header Access-Control-Allow-Methods &quot;POST, GET, OPTIONS&quot;;</span>\n    <span class="token comment">#    add_header Access-Control-Allow-Headers &quot;Origin, Authorization, Accept&quot;;</span>\n    <span class="token comment">#    add_header Access-Control-Allow-Credentials true;</span>\n<span class="token comment">#}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>',4),p={},t=(0,a(3744).Z)(p,[["render",function(n,s){return e}]])}}]);