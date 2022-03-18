"use strict";(self.webpackChunkvuepress_theme_reco_demo=self.webpackChunkvuepress_theme_reco_demo||[]).push([[4715],{2870:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-354fd856",path:"/blogs/NodeJS/NodeJS%E6%8C%89%E8%A1%8C%E8%AF%BB%E6%96%87%E4%BB%B6.html",title:"",lang:"en-US",frontmatter:{},excerpt:"\x3c!-- ---\ntitle: JS按行读文件\ndate: 2021-09-26\ntags:\n  - NodeJS\ncategories:\n  - NodeJS\n--- --\x3e\n<p><strong>如何按行读文件</strong></p>\n",headers:[{level:2,title:"NodeJS 按行读文件",slug:"nodejs-按行读文件",children:[]}],git:{},filePathRelative:"blogs/NodeJS/NodeJS按行读文件.md"}},8253:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<p><strong>如何按行读文件</strong></p><h2 id="nodejs-按行读文件" tabindex="-1"><a class="header-anchor" href="#nodejs-按行读文件" aria-hidden="true">#</a> NodeJS 按行读文件</h2><p><strong>show the code</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> fs <span class="token keyword">from</span> <span class="token string">&#39;fs&#39;</span>\n<span class="token keyword">import</span> readline <span class="token keyword">from</span> <span class="token string">&#39;readline&#39;</span>\n\n<span class="token keyword">const</span> fileStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&#39;xx.txt&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> rl <span class="token operator">=</span> readline<span class="token punctuation">.</span><span class="token function">createInterface</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\tinput<span class="token operator">:</span> fileStream<span class="token punctuation">,</span>\n\tcrlfDelay<span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\nrl<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>line<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\t<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',4),t={},p=(0,a(3744).Z)(t,[["render",function(n,s){return e}]])}}]);