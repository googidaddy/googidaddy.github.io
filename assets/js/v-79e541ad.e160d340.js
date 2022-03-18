"use strict";(self.webpackChunkvuepress_theme_reco_demo=self.webpackChunkvuepress_theme_reco_demo||[]).push([[8080],{4547:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-79e541ad",path:"/blogs/front/SCSS%E7%AE%80%E5%8D%95%E5%AD%A6%E4%B9%A0.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"SCSS EAZY CLASS",slug:"scss-eazy-class",children:[{level:3,title:"安装",slug:"安装",children:[]},{level:3,title:"变量",slug:"变量",children:[]},{level:3,title:"操作符",slug:"操作符",children:[]},{level:3,title:"插值",slug:"插值",children:[]},{level:3,title:"嵌套",slug:"嵌套",children:[]},{level:3,title:"混合",slug:"混合",children:[]},{level:3,title:"不同",slug:"不同",children:[]}]}],git:{},filePathRelative:"blogs/front/SCSS简单学习.md"}},6681:(s,n,a)=>{a.r(n),a.d(n,{default:()=>t});const e=(0,a(6252).uE)('<h2 id="scss-eazy-class" tabindex="-1"><a class="header-anchor" href="#scss-eazy-class" aria-hidden="true">#</a> SCSS EAZY CLASS</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><p>yarn/npm</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> sass\n<span class="token function">npm</span> <span class="token function">install</span> sass\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>lang = &quot;scss&quot;</code></p><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$h</span></span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="操作符" tabindex="-1"><a class="header-anchor" href="#操作符" aria-hidden="true">#</a> 操作符</h3><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">.test </span><span class="token punctuation">{</span>\n\t<span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$h</span> <span class="token operator">*</span> 2<span class="token punctuation">;</span>\n\t<span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token variable">$h</span>/2<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="插值" tabindex="-1"><a class="header-anchor" href="#插值" aria-hidden="true">#</a> 插值</h3><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$name</span></span><span class="token punctuation">:</span> foot<span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$a</span></span><span class="token punctuation">:</span> border<span class="token punctuation">;</span>\np.#<span class="token punctuation">{</span>name<span class="token punctuation">}</span> <span class="token punctuation">{</span>\n\t#<span class="token punctuation">{</span>a<span class="token punctuation">}</span><span class="token property">-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// something just like that&gt;</span>\n<span class="token selector">p:before </span><span class="token punctuation">{</span>\n\t<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;I ate #{5 + 10} pies!&#39;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="嵌套" tabindex="-1"><a class="header-anchor" href="#嵌套" aria-hidden="true">#</a> 嵌套</h3><p><strong>顾名思义，把一套 css 带进另一套中</strong></p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">#test </span><span class="token punctuation">{</span>\n\t<span class="token property">width</span><span class="token punctuation">:</span> 97%<span class="token punctuation">;</span>\n\t<span class="token selector">&gt; .son </span><span class="token punctuation">{</span>\n\t\t<span class="token property">background-color</span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="混合" tabindex="-1"><a class="header-anchor" href="#混合" aria-hidden="true">#</a> 混合</h3><p><strong>对经常重复使用的代码，使用 mixin 可以“打包”，然后随处用</strong></p><h4 id="定义-mixin" tabindex="-1"><a class="header-anchor" href="#定义-mixin" aria-hidden="true">#</a> 定义-mixin</h4><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token selector">clearfix </span><span class="token punctuation">{</span>\n\t<span class="token selector"><span class="token parent important">&amp;</span>:after </span><span class="token punctuation">{</span>\n\t\t<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>\n\t\t<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>\n\t\t<span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="引用-include" tabindex="-1"><a class="header-anchor" href="#引用-include" aria-hidden="true">#</a> 引用-include</h4><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">#parent </span><span class="token punctuation">{</span>\n\t<span class="token keyword">@include</span> clearfix<span class="token punctuation">;</span>\n\t<span class="token property">padding</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>\n\t<span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承-%</h4><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector"><span class="token placeholder">%border-style</span> </span><span class="token punctuation">{</span>\n\t<span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 使用</span>\n<span class="token selector">.container </span><span class="token punctuation">{</span>\n\t<span class="token keyword">@extend</span> <span class="token placeholder selector">%border-style</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="不同" tabindex="-1"><a class="header-anchor" href="#不同" aria-hidden="true">#</a> 不同</h3><p>与混合不一样的是，混合编译为 CSS 后，会在每个引入混合样式的选择器下插入样式，而继承则是把继承的选择器加入到共有的样式选择器前，不会被编译到 CSS 文件中。</p>',24),p={},t=(0,a(3744).Z)(p,[["render",function(s,n){return e}]])}}]);