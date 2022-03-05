"use strict";(self.webpackChunkvuepress_theme_reco_demo=self.webpackChunkvuepress_theme_reco_demo||[]).push([[7806],{4523:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-195e5ba5",path:"/blogs/C++/C++%E5%9F%BA%E7%A1%80%E5%AD%A6%E4%B9%A0(%E4%BA%8C).html",title:"C++基础学习(二)",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"运算",slug:"运算",children:[{level:3,title:"算术运算中的类型转换",slug:"算术运算中的类型转换",children:[]},{level:3,title:"位运算符",slug:"位运算符",children:[]},{level:3,title:"自增/自减",slug:"自增-自减",children:[]},{level:3,title:"逻辑运算符",slug:"逻辑运算符",children:[]},{level:3,title:"逗号运算符",slug:"逗号运算符",children:[]},{level:3,title:"成员访问运算符",slug:"成员访问运算符",children:[]}]},{level:2,title:"流程控制语句",slug:"流程控制语句",children:[{level:3,title:"switch",slug:"switch",children:[]},{level:3,title:"for",slug:"for",children:[]}]}],git:{},filePathRelative:"blogs/C++/C++基础学习(二).md"}},22:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<h1 id="c-基础学习-二" tabindex="-1"><a class="header-anchor" href="#c-基础学习-二" aria-hidden="true">#</a> C++基础学习(二)</h1><h2 id="运算" tabindex="-1"><a class="header-anchor" href="#运算" aria-hidden="true">#</a> 运算</h2><p><img src="C:\\Users\\domado\\AppData\\Roaming\\Typora\\typora-user-images\\image-20210313222903677.png" alt="image-20210313222903677"></p><p><strong>算术运算符中有两个单目运算符（正、负）以及五个双目运算符（乘法、除法、取模、加法、减法），其中单目运算符的优先级最高。</strong></p><p><strong>其中取模运算符 <code>%</code> 意为计算两个整数相除得到的余数，即求余数。</strong></p><h3 id="算术运算中的类型转换" tabindex="-1"><a class="header-anchor" href="#算术运算中的类型转换" aria-hidden="true">#</a> 算术运算中的类型转换</h3><ul><li>先将 <code>char</code> ， <code>bool</code> ， <code>short</code> 等类型提升至 <code>int</code> （或 <code>unsigned int</code> ，取决于原类型的符号性）类型；</li><li>若存在一个变量类型为 <code>long double</code> ，会将另一变量转换为 <code>long double</code> 类型；</li><li>否则，若存在一个变量类型为 <code>double</code> ，会将另一变量转换为 <code>double</code> 类型；</li><li>否则，若存在一个变量类型为 <code>float</code> ，会将另一变量转换为 <code>float</code> 类型；</li><li>否则（即参与运算的两个变量均为整数类型）： <ul><li>若两个变量符号性一致，则将位宽较小的类型转换为位宽较大的类型；</li><li>否则，若无符号变量的位宽不小于带符号变量的位宽，则将带符号数转换为无符号数对应的类型；</li><li>否则，若带符号操作数的类型能表示无符号操作数类型的所有值，则将无符号操作数转换为带符号操作数对应的类型；</li><li>否则，将带符号数转换为相对应的无符号类型。</li></ul></li></ul><p>例如，对于一个整型（ <code>int</code> ）变量 和另一个双精度浮点型（ <code>double</code> ）类型变量 ：</p><ul><li><code>x/3</code> 的结果将会是整型；</li><li><code>x/3.0</code> 的结果将会是双精度浮点型；</li><li><code>x/y</code> 的结果将会是双精度浮点型；</li><li><code>x*1/3</code> 的结果将会是整型；</li><li><code>x*1.0/3</code> 的结果将会是双精度浮点型；</li></ul><h3 id="位运算符" tabindex="-1"><a class="header-anchor" href="#位运算符" aria-hidden="true">#</a> 位运算符</h3><p><strong>位操作的意义请参考 <a href="">位运算</a> 。需要注意的是，位运算符的优先级低于普通的算数运算符。</strong></p><h4 id="位运算" tabindex="-1"><a class="header-anchor" href="#位运算" aria-hidden="true">#</a> 位运算</h4><p><strong>位运算就是基于整数的二进制表示进行的运算。由于计算机内部就是以二进制来存储数据，位运算是相当快的。</strong></p><p><strong>常用的运算符共 6 种，分别为与（ <code>&amp;</code> ）、或（ <code>|</code> ）、异或（ <code>^</code> ）、取反（ <code>~</code> ）、左移（ <code>&lt;&lt;</code> ）和右移（ <code>&gt;&gt;</code> ）。</strong></p><p><img src="C:\\Users\\domado\\AppData\\Roaming\\Typora\\typora-user-images\\image-20210313230344486.png" alt="image-20210313230344486"></p><p><img src="C:\\Users\\domado\\AppData\\Roaming\\Typora\\typora-user-images\\image-20210313230435595.png" alt="image-20210313230435595"></p><h5 id="取反" tabindex="-1"><a class="header-anchor" href="#取反" aria-hidden="true">#</a> 取反</h5><p><img src="C:\\Users\\domado\\AppData\\Roaming\\Typora\\typora-user-images\\image-20210314141557235.png" alt="image-20210314141557235"></p><p>补码：在二进制表示下，正数和 0 的补码为其本身，负数的补码是将其对应正数按位取反后加一。</p><h5 id="左移和右移" tabindex="-1"><a class="header-anchor" href="#左移和右移" aria-hidden="true">#</a> 左移和右移</h5><p><code>num &lt;&lt; i</code> 表示将 的二进制表示向左移动 位所得的值。</p><p><code>num &gt;&gt; i</code> 表示将 的二进制表示向右移动 位所得的值。</p><p><img src="C:\\Users\\domado\\AppData\\Roaming\\Typora\\typora-user-images\\image-20210314141806520.png" alt="image-20210314141806520"></p><p><strong>对于左移操作，需要确保移位后的结果能被原数的类型容纳，否则行为也是未定义的。对一个负数执行左移操作也未定义。</strong></p><p><strong>对于右移操作，右侧多余的位将会被舍弃，而左侧较为复杂：对于无符号数，会在左侧补 0；而对于有符号数，则会用最高位的数（其实就是符号位，非负数为 0，负数为 1）补齐。</strong></p><h4 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h4><h5 id="乘-2-的非负整数次幂" tabindex="-1"><a class="header-anchor" href="#乘-2-的非负整数次幂" aria-hidden="true">#</a> <strong>乘 2 的非负整数次幂</strong></h5><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">mulPowerOfTwo</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 计算 n*(2^m)</span>\n  <span class="token keyword">return</span> n <span class="token operator">&lt;&lt;</span> m<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h5 id="除以-2-的非负整数次幂" tabindex="-1"><a class="header-anchor" href="#除以-2-的非负整数次幂" aria-hidden="true">#</a> <strong>除以 2 的非负整数次幂</strong></h5><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">divPowerOfTwo</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 计算 n/(2^m)</span>\n  <span class="token keyword">return</span> n <span class="token operator">&gt;&gt;</span> m<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>我们平常写的除法是向 0 取整，而这里的右移是向下取整（注意这里的区别），即当数大于等于 0 时两种方法等价，当数小于 0 时会有区别，如： <code>-1 / 2</code> 的值为 ，而 <code>-1 &gt;&gt; 1</code> 的值为 -1。</p></blockquote><h5 id="判断一个数是不是2的非负整数次幂" tabindex="-1"><a class="header-anchor" href="#判断一个数是不是2的非负整数次幂" aria-hidden="true">#</a> <strong>判断一个数是不是2的非负整数次幂</strong></h5><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>bool <span class="token function">isPowerOfTwo</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> n <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>n <span class="token operator">&amp;</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h5 id="对2的非整数次幂取模" tabindex="-1"><a class="header-anchor" href="#对2的非整数次幂取模" aria-hidden="true">#</a> <strong>对2的非整数次幂取模</strong></h5><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">modPowerOfTwo</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> mod<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> x <span class="token operator">&amp;</span> <span class="token punctuation">(</span>mod <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h5 id="取绝对值" tabindex="-1"><a class="header-anchor" href="#取绝对值" aria-hidden="true">#</a> <strong>取绝对值</strong></h5><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">Abs</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>n <span class="token operator">^</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;&gt;</span> <span class="token number">31</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;&gt;</span> <span class="token number">31</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">/* n&gt;&gt;31 取得 n 的符号，若 n 为正数，n&gt;&gt;31 等于 0，若 n 为负数，n&gt;&gt;31 等于 -1\n     若 n 为正数 n^0=n, 数不变，若 n 为负数有 n^(-1)\n     需要计算 n 和 -1 的补码，然后进行异或运算，\n     结果 n 变号并且为 n 的绝对值减 1，再减去 -1 就是绝对值 */</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h5 id="取两个数的最大值" tabindex="-1"><a class="header-anchor" href="#取两个数的最大值" aria-hidden="true">#</a> <strong>取两个数的最大值</strong></h5><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 如果 a&gt;=b,(a-b)&gt;&gt;31 为 0，否则为 -1</span>\n<span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> b <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>a <span class="token operator">-</span> b<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token operator">|</span> a <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token operator">~</span><span class="token punctuation">(</span>a <span class="token operator">-</span> b<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">31</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token keyword">int</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> a <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>a <span class="token operator">-</span> b<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token operator">|</span> b <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token operator">~</span><span class="token punctuation">(</span>a <span class="token operator">-</span> b<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">31</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h5 id="判断符号是否相同" tabindex="-1"><a class="header-anchor" href="#判断符号是否相同" aria-hidden="true">#</a> <strong>判断符号是否相同</strong></h5><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>bool <span class="token function">isSameSign</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 有 0 的情况例外</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>x <span class="token operator">^</span> y<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h5 id="交换两个数" tabindex="-1"><a class="header-anchor" href="#交换两个数" aria-hidden="true">#</a> <strong>交换两个数</strong></h5><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">&amp;</span>a<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">&amp;</span>b<span class="token punctuation">)</span> <span class="token punctuation">{</span> a <span class="token operator">^=</span> b <span class="token operator">^=</span> a <span class="token operator">^=</span> b<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>这种方式只能用来交换两个整数，使用范围有限。</p><p>对于一般情况下的交换操作，推荐直接调用 <code>algorithm</code> 库中的 <code>std::swap</code> 函数。</p></blockquote><h5 id="获取一个数二进制的某一位" tabindex="-1"><a class="header-anchor" href="#获取一个数二进制的某一位" aria-hidden="true">#</a> <strong>获取一个数二进制的某一位</strong></h5><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 获取 a 的第 b 位，最低位编号为 0</span>\n<span class="token keyword">int</span> <span class="token function">getBit</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">(</span>a <span class="token operator">&gt;&gt;</span> b<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="将一个数二进制的某一位设置为0" tabindex="-1"><a class="header-anchor" href="#将一个数二进制的某一位设置为0" aria-hidden="true">#</a> <strong>将一个数二进制的某一位设置为0</strong></h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// 将 a 的第 b 位设置为 0 ，最低位编号为 0\nint unsetBit(int a, int b) { return a &amp; ~(1 &lt;&lt; b); }\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="将一个数二进制的某一位设置为1" tabindex="-1"><a class="header-anchor" href="#将一个数二进制的某一位设置为1" aria-hidden="true">#</a> <strong>将一个数二进制的某一位设置为1</strong></h5><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 将 a 的第 b 位设置为 1 ，最低位编号为 0</span>\n<span class="token keyword">int</span> <span class="token function">setBit</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> a <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="将一个数二进制的某一位取反" tabindex="-1"><a class="header-anchor" href="#将一个数二进制的某一位取反" aria-hidden="true">#</a> <strong>将一个数二进制的某一位取反</strong></h5><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 将 a 的第 b 位取反 ，最低位编号为 0</span>\n<span class="token keyword">int</span> <span class="token function">flapBit</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> a <span class="token operator">^</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="表示集合" tabindex="-1"><a class="header-anchor" href="#表示集合" aria-hidden="true">#</a> <strong>表示集合</strong></h5><p><img src="C:\\Users\\domado\\AppData\\Roaming\\Typora\\typora-user-images\\image-20210314144448835.png" alt="image-20210314144448835"></p><p>一个数的二进制表示可以看作是一个集合（0 表示不在集合中，1 表示在集合中）。比如集合 <code>{1, 3, 4, 8}</code> ，可以表示成（100011010） 。而对应的位运算也就可以看作是对集合进行的操作。</p><h5 id="遍历某个集合的子集" tabindex="-1"><a class="header-anchor" href="#遍历某个集合的子集" aria-hidden="true">#</a> <strong>遍历某个集合的子集</strong></h5><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// 遍历 u 的非空子集</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> s <span class="token operator">=</span> u<span class="token punctuation">;</span> s<span class="token punctuation">;</span> s <span class="token operator">=</span> <span class="token punctuation">(</span>s <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> u<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// s 是 u 的一个非空子集</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="自增-自减" tabindex="-1"><a class="header-anchor" href="#自增-自减" aria-hidden="true">#</a> 自增/自减</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>i <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>\n\nop1 <span class="token operator">=</span> i<span class="token operator">++</span><span class="token punctuation">;</span>  <span class="token comment">// op1 = 100，先 op1 = i，然后 i = i + 1</span>\n\ni <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>\n\nop2 <span class="token operator">=</span> <span class="token operator">++</span>i<span class="token punctuation">;</span>  <span class="token comment">// op2 = 101，先 i = i + 1，然后赋值 op2</span>\n\ni <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>\n\nop3 <span class="token operator">=</span> i<span class="token operator">--</span><span class="token punctuation">;</span>  <span class="token comment">// op3 = 100，先赋值 op3，然后 i = i - 1</span>\n\ni <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>\n\nop4 <span class="token operator">=</span> <span class="token operator">--</span>i<span class="token punctuation">;</span>  <span class="token comment">// op4 = 99，先 i = i - 1，然后赋值 op4</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h3><p><img src="C:\\Users\\domado\\AppData\\Roaming\\Typora\\typora-user-images\\image-20210314152155060.png" alt="image-20210314152155060"></p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>Result <span class="token operator">=</span> op1 <span class="token operator">&amp;&amp;</span> op2<span class="token punctuation">;</span>  <span class="token comment">// 当 op1 与 op2 都为真时则 Result 为真</span>\n\nResult <span class="token operator">=</span> op1 <span class="token operator">||</span> op2<span class="token punctuation">;</span>  <span class="token comment">// 当 op1 或 op2 其中一个为真时则 Result 为真</span>\n\nResult <span class="token operator">=</span> <span class="token operator">!</span>op1<span class="token punctuation">;</span>  <span class="token comment">// 当 op1 为假时则 Result 为真</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="逗号运算符" tabindex="-1"><a class="header-anchor" href="#逗号运算符" aria-hidden="true">#</a> 逗号运算符</h3><p><strong>优先级最低的</strong></p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>exp1<span class="token punctuation">,</span> exp2<span class="token punctuation">,</span> exp3<span class="token punctuation">;</span>  <span class="token comment">// 最后的值为 exp3 的运算结果。</span>\n\nResult <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token number">6</span><span class="token punctuation">;</span>\n<span class="token comment">//得到 Result 的值为 3 而不是 11，因为赋值运算符 &quot;=&quot;</span>\n<span class="token comment">//的优先级比逗号运算符高，先进行了赋值运算才进行逗号运算。</span>\n\nResult <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 若要让 Result 的值得到逗号运算的结果则应将整个表达式用括号提高优先级，此时</span>\n<span class="token comment">// Result 的值才为 11。</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="成员访问运算符" tabindex="-1"><a class="header-anchor" href="#成员访问运算符" aria-hidden="true">#</a> 成员访问运算符</h3><p><img src="C:\\Users\\domado\\AppData\\Roaming\\Typora\\typora-user-images\\image-20210314152820950.png" alt="image-20210314152820950"></p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">auto</span> result1 <span class="token operator">=</span> v<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// 获取v中下标为2的对象</span>\n<span class="token keyword">auto</span> result2 <span class="token operator">=</span> p<span class="token punctuation">.</span>q<span class="token punctuation">;</span>   <span class="token comment">// 获取p对象的q成员</span>\n<span class="token keyword">auto</span> result3 <span class="token operator">=</span> p <span class="token operator">-&gt;</span> q<span class="token punctuation">;</span>  <span class="token comment">// 获取p指针指向的对象的q成员，等价于 (*p).q</span>\n<span class="token keyword">auto</span> result4 <span class="token operator">=</span> <span class="token operator">&amp;</span>v<span class="token punctuation">;</span>      <span class="token comment">// 获取指向v的指针</span>\n<span class="token keyword">auto</span> result5 <span class="token operator">=</span> <span class="token operator">*</span>v<span class="token punctuation">;</span>      <span class="token comment">// 获取v指针指向的对象</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="流程控制语句" tabindex="-1"><a class="header-anchor" href="#流程控制语句" aria-hidden="true">#</a> 流程控制语句</h2><p><strong>从简</strong></p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> switch</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>选择句<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">case</span> 标签<span class="token number">1</span><span class="token operator">:</span>\n    主体<span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">case</span> 标签<span class="token number">2</span><span class="token operator">:</span>\n    主体<span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token keyword">default</span><span class="token operator">:</span>\n    主体<span class="token number">3</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>for (int i = 1; i &lt;= n; ++i) {\n  cin &gt;&gt; a[i];\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>都是简单的循环，姑且跳过</strong></p>',75),p={},t=(0,a(3744).Z)(p,[["render",function(n,s){return e}]])}}]);