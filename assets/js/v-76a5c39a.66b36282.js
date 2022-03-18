"use strict";(self.webpackChunkvuepress_theme_reco_demo=self.webpackChunkvuepress_theme_reco_demo||[]).push([[652],{2167:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-76a5c39a",path:"/blogs/tech/Chocolatey.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Chocolatey安装&&Yarn",slug:"chocolatey安装-yarn",children:[{level:3,title:"Install Yarn",slug:"install-yarn",children:[]}]}],git:{},filePathRelative:"blogs/tech/Chocolatey.md"}},9187:(e,n,s)=>{s.r(n),s.d(n,{default:()=>t});const a=(0,s(6252).uE)('<h2 id="chocolatey安装-yarn" tabindex="-1"><a class="header-anchor" href="#chocolatey安装-yarn" aria-hidden="true">#</a> Chocolatey安装&amp;&amp;Yarn</h2><p><strong>专供Windows</strong></p><ul><li><p><strong>以管理员身份打开<code>Power Shell</code>，一次性复制下面全部代码，然后回车即可</strong></p></li><li><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString(&#39;https://community.chocolatey.org/install.ps1&#39;))\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p><strong>接着继续在<code>Power Shell</code>输入<code>choco</code>验证安装</strong></p></li></ul><h3 id="install-yarn" tabindex="-1"><a class="header-anchor" href="#install-yarn" aria-hidden="true">#</a> Install Yarn</h3><p><strong>以管理员身份打开<code>Power Shell</code>，输入一下</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>choco <span class="token function">install</span> <span class="token function">yarn</span>\n\n// 验证是否安装成功\n<span class="token function">yarn</span> version\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>配置代理（国内建议配置）</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// 替换所需ip<span class="token operator">&amp;</span>Port\n<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> proxy http://ip:Port\n\n<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> https-proxy http://ip:Port\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',8),l={},t=(0,s(3744).Z)(l,[["render",function(e,n){return a}]])}}]);