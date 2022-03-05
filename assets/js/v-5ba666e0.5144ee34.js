"use strict";(self.webpackChunkvuepress_theme_reco_demo=self.webpackChunkvuepress_theme_reco_demo||[]).push([[3408],{3100:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-5ba666e0",path:"/blogs/C++/C++%E5%9F%BA%E7%A1%80%E5%AD%A6%E4%B9%A0%EF%BC%88%E5%9B%9B%EF%BC%89.html",title:"C++基础学习（四）",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"关联式容器",slug:"关联式容器",children:[{level:3,title:"set",slug:"set",children:[]},{level:3,title:"map",slug:"map",children:[]}]}],git:{},filePathRelative:"blogs/C++/C++基础学习（四）.md"}},7508:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="c-基础学习-四" tabindex="-1"><a class="header-anchor" href="#c-基础学习-四" aria-hidden="true">#</a> C++基础学习（四）</h1><h2 id="关联式容器" tabindex="-1"><a class="header-anchor" href="#关联式容器" aria-hidden="true">#</a> 关联式容器</h2><h3 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> set</h3><p><code>set</code> 是关联容器，含有键值类型对象的已排序集，搜索、移除和插入拥有对数复杂度。<code>set</code> 内部通常采用红黑树实现。平衡二叉树的特性使得 <code>set</code> 非常适合处理需要同时兼顾查找、插入与删除的情况。</p><p>和数学中的集合相似，<code>set</code> 中不会出现值相同的元素。如果需要有相同元素的集合，需要使用 <code>multiset</code>。<code>multiset</code> 的使用方法与 <code>set</code> 的使用方法基本相同。</p><h4 id="插入与删除操作" tabindex="-1"><a class="header-anchor" href="#插入与删除操作" aria-hidden="true">#</a> 插入与删除操作</h4><ul><li><code>insert(x)</code> 当容器中没有等价元素的时候，将元素 x 插入到 <code>set</code> 中。</li><li><code>erase(x)</code> 删除值为 x 的 <strong>所有</strong> 元素，返回删除元素的个数。</li><li><code>erase(pos)</code> 删除迭代器为 pos 的元素，要求迭代器必须合法。</li><li><code>erase(first,last)</code> 删除迭代器在 范围内的所有元素。</li><li><code>clear()</code> 清空 <code>set</code>。</li></ul><h4 id="迭代器" tabindex="-1"><a class="header-anchor" href="#迭代器" aria-hidden="true">#</a> 迭代器</h4><p><code>set</code> 提供了以下几种迭代器：</p><ol><li><code>begin()/cbegin()</code> 返回指向首元素的迭代器，其中 <code>*begin = front</code>。</li><li><code>end()/cend()</code> 返回指向数组尾端占位符的迭代器，注意是没有元素的。</li><li><code>rbegin()/rcbegin()</code> 返回指向逆向数组的首元素的逆向迭代器，可以理解为正向容器的末元素。</li><li><code>rend()/rcend()</code> 返回指向逆向数组末元素后一位置的迭代器，对应容器首的前一个位置，没有元素。</li></ol><h4 id="查找" tabindex="-1"><a class="header-anchor" href="#查找" aria-hidden="true">#</a> 查找</h4><ul><li><code>count(x)</code> 返回 <code>set</code> 内键为 x 的元素数量。</li><li><code>find(x)</code> 在 <code>set</code> 内存在键为 x 的元素时会返回该元素的迭代器，否则返回 <code>end()</code>。</li><li><code>lower_bound(x)</code> 返回指向首个不小于给定键的元素的迭代器。如果不存在这样的元素，返回 <code>end()</code>。</li><li><code>upper_bound(x)</code> 返回指向首个大于给定键的元素的迭代器。如果不存在这样的元素，返回 <code>end()</code>。</li><li><code>empty()</code> 返回容器是否为空。</li><li><code>size()</code> 返回容器内元素个数。</li></ul><blockquote><p><code>set</code> 自带的 <code>lower_bound</code> 和 <code>upper_bound</code> 的时间复杂度为 O(logn)。</p><p>但使用 <code>algorithm</code> 库中的 <code>lower_bound</code> 和 <code>upper_bound</code> 函数对 <code>set</code> 中的元素进行查询，时间复杂度为O(n) 。****</p></blockquote><h4 id="样例-贪心算法" tabindex="-1"><a class="header-anchor" href="#样例-贪心算法" aria-hidden="true">#</a> 样例-贪心算法</h4><p>在贪心算法中经常会需要出现类似 <strong>找出并删除最小的大于等于某个值的元素</strong>。这种操作能轻松地通过 <code>set</code> 来完成。</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 现存可用的元素</span>\nset<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> available<span class="token punctuation">;</span>\n<span class="token comment">// 需要大于等于的值</span>\n<span class="token keyword">int</span> x<span class="token punctuation">;</span>\n\n<span class="token comment">// 查找最小的大于等于x的元素</span>\nset<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token operator">::</span>iterator it <span class="token operator">=</span> available<span class="token punctuation">.</span><span class="token function">lower_bound</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>it <span class="token operator">==</span> available<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 不存在这样的元素，则进行相应操作……</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 找到了这样的元素，将其从现存可用元素中移除</span>\n  available<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// 进行相应操作……</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h3><p><code>map</code> 是有序键值对容器，它的元素的键是唯一的。搜索、移除和插入操作拥有对数复杂度。<code>map</code> 通常实现为红黑树。</p><p>你可能需要存储一些键值对，例如存储学生姓名对应的分数：<code>Tom 0</code>，<code>Bob 100</code>，<code>Alan 100</code>。但是由于数组下标只能为非负整数，所以无法用姓名作为下标来存储，这个时候最简单的办法就是使用 STL 中的 <code>map</code> 了！</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>map<span class="token operator">&lt;</span>Key<span class="token punctuation">,</span> T<span class="token operator">&gt;</span> yourMap<span class="token punctuation">;</span>\nmap<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">&gt;</span> mp<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="插入与删除" tabindex="-1"><a class="header-anchor" href="#插入与删除" aria-hidden="true">#</a> 插入与删除</h4><ul><li>可以直接通过下标访问来进行查询或插入操作。例如 <code>mp[&quot;Alan&quot;]=100</code>。</li><li>通过向 <code>map</code> 中插入一个类型为 <code>pair&lt;Key, T&gt;</code> 的值可以达到插入元素的目的，例如 <code>mp.insert(pair&lt;string,int&gt;(&quot;Alan&quot;,100));</code>；</li><li><code>erase(key)</code> 函数会删除键为 <code>key</code> 的 <strong>所有</strong> 元素。返回值为删除元素的数量。</li><li><code>erase(pos)</code>: 删除迭代器为 pos 的元素，要求迭代器必须合法。</li><li><code>erase(first,last)</code>: 删除迭代器在 范围内的所有元素。</li><li><code>clear()</code> 函数会清空整个容器。</li></ul><blockquote><p>在利用下标访问 <code>map</code> 中的某个元素时，如果 <code>map</code> 中不存在相应键的元素，会自动在 <code>map</code> 中插入一个新元素，并将其值设置为默认值（对于整数，值为零；对于有默认构造函数的类型，会调用默认构造函数进行初始化）。</p><p>当下标访问操作过于频繁时，容器中会出现大量无意义元素，影响 <code>map</code> 的效率。因此一般情况下推荐使用 <code>find()</code> 函数来寻找特定键的元素。</p></blockquote><h4 id="查询" tabindex="-1"><a class="header-anchor" href="#查询" aria-hidden="true">#</a> 查询</h4><ul><li><code>count(x)</code>: 返回容器内键为 x 的元素数量。复杂度为 （关于容器大小对数复杂度，加上匹配个数）。</li><li><code>find(x)</code>: 若容器内存在键为 x 的元素，会返回该元素的迭代器；否则返回 <code>end()</code>。</li><li><code>lower_bound(x)</code>: 返回指向首个不小于给定键的元素的迭代器。</li><li><code>upper_bound(x)</code>: 返回指向首个大于给定键的元素的迭代器。若容器内所有元素均小于或等于给定键，返回 <code>end()</code>。</li><li><code>empty()</code>: 返回容器是否为空。</li><li><code>size()</code>: 返回容器内元素个数。</li></ul><h4 id="样例" tabindex="-1"><a class="header-anchor" href="#样例" aria-hidden="true">#</a> 样例</h4><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 存储状态与对应的答案</span>\nmap<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">&gt;</span> record<span class="token punctuation">;</span>\n\n<span class="token comment">// 新搜索到的状态与对应答案</span>\nstring status<span class="token punctuation">;</span>\n<span class="token keyword">int</span> ans<span class="token punctuation">;</span>\n<span class="token comment">// 查找对应的状态是否出现过</span>\nmap<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token operator">::</span>iterator it <span class="token operator">=</span> record<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>it <span class="token operator">==</span> record<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 尚未搜索过该状态，将其加入状态记录中</span>\n  record<span class="token punctuation">[</span>status<span class="token punctuation">]</span> <span class="token operator">=</span> ans<span class="token punctuation">;</span>\n  <span class="token comment">// 进行相应操作……</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 已经搜索过该状态，进行相应操作……</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h4 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h4><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>set<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> s<span class="token punctuation">;</span>\n<span class="token keyword">typedef</span> set<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token operator">::</span>iterator si<span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span>si it <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> it <span class="token operator">!=</span> s<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> it<span class="token operator">++</span><span class="token punctuation">)</span> cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>it <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>需要注意的是，对 <code>map</code> 的迭代器解引用后，得到的是类型为 <code>pair&lt;Key, T&gt;</code> 的键值对。</p></blockquote><p>c++11</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>set<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> s<span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> x <span class="token operator">:</span> s<span class="token punctuation">)</span> cout <span class="token operator">&lt;&lt;</span> x <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',32),o={},p=(0,a(3744).Z)(o,[["render",function(n,s){return e}]])}}]);