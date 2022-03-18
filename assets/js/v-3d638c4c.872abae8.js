"use strict";(self.webpackChunkvuepress_theme_reco_demo=self.webpackChunkvuepress_theme_reco_demo||[]).push([[7217],{661:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-3d638c4c",path:"/blogs/front/Localstorage.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Localstorage",slug:"localstorage",children:[{level:3,title:"场景",slug:"场景",children:[]},{level:3,title:"实现",slug:"实现",children:[]}]}],git:{},filePathRelative:"blogs/front/Localstorage.md"}},1783:(e,n,a)=>{a.r(n),a.d(n,{default:()=>r});const s=(0,a(6252).uE)('<h2 id="localstorage" tabindex="-1"><a class="header-anchor" href="#localstorage" aria-hidden="true">#</a> Localstorage</h2><h3 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h3><p><strong>组件Props是<code>setState</code>，表单<code>submit</code>绑定了<code>setState</code>，自定义一个Hook</strong></p><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>// 伪代码，场景展示\nconst idRef = useRef()\nfunction handleSubmit(e) {\n    e.preventDefault()\n    setState(idRef.current.value)\n}\n&lt;form onSubmit={handleSubmit}&gt;\n&lt;/form&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>const [id,setId] = useLocalStorage()\n\nexport default function useLocalStorage(key, initialValue){\n    const [value, setValue] = useState(()=&gt;{\n        const jsonValue = localStorage.getItem(Key)\n        if(jsonValue) return JSON.parse(jsonValue)\n        if(typeof initialValue === &#39;function&#39;){\n            return initialValue()\n        }else{\n            return initialValue\n        }\n    })\n    useEffect(()=&gt;{\n        localStorage.setItem(key, JSON.stringify(value))\n    },[key,value])\n    return [value,setValue]\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>',6),l={},r=(0,a(3744).Z)(l,[["render",function(e,n){return s}]])}}]);