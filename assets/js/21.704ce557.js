(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{508:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("strong",[t._v("学习之路")]),t._v(" "),a("strong",[t._v("从上而下的学习一下C")]),t._v("++\n")]),t._v(" "),a("h2",{attrs:{id:"代码框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码框架"}},[t._v("#")]),t._v(" 代码框架")]),t._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#include <cstdio>\n#include <iostream>\n\nint main() {\n  // do something...\n  return 0;\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("blockquote",[a("p",[t._v("#include 是一个预处理命令，意思将一个文件引入此处，是头文件被引入。你需要确定要#include哪些文件，若引入了多余的文件，会增加编译时间，但几乎不会对运行时间影响")])]),t._v(" "),a("h2",{attrs:{id:"define-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#define-命令"}},[t._v("#")]),t._v(" #define 命令")]),t._v(" "),a("p",[a("code",[t._v("#define")]),t._v("也是一个预处理命令，用于定义宏，本质上是文本替换。")]),t._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#include <iostream>\n#define n 233\n// n 不是变量，而是编译器会将代码中所有 n 文本替换为 233，但是作为标识符一部分的\n// n 的就不会被替换，如 fn 不会被替换成 f233，同样，字符串内的也不会被替换\n\nint main() {\n  std::cout << n;  // 输出 233\n  return 0;\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("blockquote",[a("p",[t._v("在工程上使用"),a("code",[t._v("#define")]),t._v("尽量避免定义函数，一旦定义是作用全局，容易引发许多问题")])]),t._v(" "),a("h2",{attrs:{id:"输入输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入输出"}},[t._v("#")]),t._v(" 输入输出")]),t._v(" "),a("p",[t._v("cin与cout")]),t._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#include <iostream>\n\nint main() {\n  int x, y;                          // 声明变量\n  std::cin >> x >> y;                // 读入 x 和 y\n  std::cout << y << std::endl << x;  // 输出 y，换行，再输出 x\n  return 0;                          // 结束主函数\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("scanf与printf")]),t._v(" "),a("p",[t._v("这两个都是C语言提供的函数，大多数情况下，它们的速度比cin与cout更快，并且更方便控制输入输出格式。")]),t._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#include <cstdio>\n\nint main() {\n  int x, y;\n  scanf("%d%d", &x, &y);   // 读入 x 和 y\n  printf("%d\\n%d", y, x);  // 输出 y，换行，再输出 x\n  return 0;\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("blockquote",[a("ol",[a("li",[a("code",[t._v("%s")]),t._v(" 表示字符串。")]),t._v(" "),a("li",[a("code",[t._v("%c")]),t._v(" 表示字符。")]),t._v(" "),a("li",[a("code",[t._v("%lf")]),t._v(" 表示双精度浮点数 ("),a("code",[t._v("double")]),t._v(")。")]),t._v(" "),a("li",[a("code",[t._v("%lld")]),t._v(" 表示长整型 ("),a("code",[t._v("long long")]),t._v(")。根据系统不同，也可能是 "),a("code",[t._v("%I64d")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("%u")]),t._v(" 表示无符号整型 ("),a("code",[t._v("unsigned int")]),t._v(")。")]),t._v(" "),a("li",[a("code",[t._v("%llu")]),t._v(" 表示无符号长整型 ("),a("code",[t._v("unsigned long long")]),t._v(")，也可能是 "),a("code",[t._v("%I64u")]),t._v("。")])])]),t._v(" "),a("p",[a("strong",[t._v("掌握了整体框架，预处理命令，输入输出，自然到了中间层的学习。")])]),t._v(" "),a("h2",{attrs:{id:"变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[t._v("#")]),t._v(" 变量")]),t._v(" "),a("p",[t._v("数据类型（内置了六种数据类型）")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",[t._v("关键字")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("布尔型")]),t._v(" "),a("td",[t._v("bool")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("字符型")]),t._v(" "),a("td",[t._v("char")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("整型")]),t._v(" "),a("td",[t._v("int")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("浮点型")]),t._v(" "),a("td",[t._v("float")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("双浮点型")]),t._v(" "),a("td",[t._v("double")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("无类型")]),t._v(" "),a("td",[t._v("void")])])])]),t._v(" "),a("h3",{attrs:{id:"布尔类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布尔类型"}},[t._v("#")]),t._v(" "),a("strong",[t._v("布尔类型")])]),t._v(" "),a("p",[t._v("一个 "),a("code",[t._v("bool")]),t._v(" 类型的变量取值只可能为两种："),a("code",[t._v("true")]),t._v(" 和 "),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("p",[t._v("一般情况下，一个 "),a("code",[t._v("bool")]),t._v(" 类型变量占有 1字节（一般情况下， 字节 = 8位）的空间。")]),t._v(" "),a("h3",{attrs:{id:"字符型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符型"}},[t._v("#")]),t._v(" "),a("strong",[t._v("字符型")])]),t._v(" "),a("p",[a("code",[t._v("char")]),t._v(" 类型的变量用于存放字符（实际上存储的仍然是整数，一般通过 "),a("a",{attrs:{href:"http://www.asciitable.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ASCII 编码"),a("OutboundLink")],1),t._v(" 实现字符与整数的一一对应）。"),a("code",[t._v("char")]),t._v(" 的位数一般为8 位。")]),t._v(" "),a("p",[t._v("一般情况下，"),a("code",[t._v("char")]),t._v(" 的表示范围在-128~127 之间。")]),t._v(" "),a("h3",{attrs:{id:"整型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整型"}},[t._v("#")]),t._v(" "),a("strong",[t._v("整型")])]),t._v(" "),a("p",[t._v("C++中，"),a("code",[t._v("int")]),t._v("至少为2字节，也就是16位")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("int")]),t._v("可以使用如下修饰关键字")])]),t._v(" "),a("p",[t._v("符号性：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("signed")]),t._v("：表示带符号整数（默认）；")]),t._v(" "),a("li",[a("code",[t._v("unsigned")]),t._v("：表示无符号整数。")])]),t._v(" "),a("p",[t._v("大小：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("short")]),t._v("：表示 "),a("strong",[t._v("至少")]),t._v("16 位整数；")]),t._v(" "),a("li",[a("code",[t._v("long")]),t._v("：表示 "),a("strong",[t._v("至少")]),t._v(" 32位整数；")]),t._v(" "),a("li",[a("code",[t._v("long long")]),t._v("：表示 "),a("strong",[t._v("至少")]),t._v(" 64位整数。")])]),t._v(" "),a("blockquote",[a("p",[t._v("注意，加了修饰词，长度随之有变化。")])]),t._v(" "),a("h3",{attrs:{id:"单精度浮点型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单精度浮点型"}},[t._v("#")]),t._v(" "),a("strong",[t._v("单精度浮点型")])]),t._v(" "),a("p",[a("code",[t._v("float")]),t._v(" 类型为单精度浮点类型。一般为 32位。")]),t._v(" "),a("p",[t._v("因为 "),a("code",[t._v("float")]),t._v(" 类型表示范围较小，且精度不高，实际应用中常使用 "),a("code",[t._v("double")]),t._v(" 类型（双精度浮点型）表示浮点数。")]),t._v(" "),a("h3",{attrs:{id:"双精度浮点型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双精度浮点型"}},[t._v("#")]),t._v(" 双精度浮点型")]),t._v(" "),a("p",[a("code",[t._v("double")]),t._v(" 类型为双精度浮点型。一般为 64位。")]),t._v(" "),a("h3",{attrs:{id:"无类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无类型"}},[t._v("#")]),t._v(" 无类型")]),t._v(" "),a("p",[a("code",[t._v("void")]),t._v(" 类型为无类型，与上面几种类型不同的是，不能将一个变量声明为 "),a("code",[t._v("void")]),t._v(" 类型。但是函数的返回值允许为 "),a("code",[t._v("void")]),t._v(" 类型，表示该函数无返回值。")]),t._v(" "),a("h3",{attrs:{id:"类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型转换"}},[t._v("#")]),t._v(" 类型转换")]),t._v(" "),a("p",[t._v("比较复杂，仅介绍两个（"),a("strong",[t._v("数值提升、数值转换")]),t._v("）")]),t._v(" "),a("h4",{attrs:{id:"数值提升"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数值提升"}},[t._v("#")]),t._v(" 数值提升")]),t._v(" "),a("p",[t._v("数值提升，值本身不变")]),t._v(" "),a("h4",{attrs:{id:"数值转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数值转换"}},[t._v("#")]),t._v(" 数值转换")]),t._v(" "),a("ul",[a("li",[t._v("浮点数转为整数，会舍去小数部分")])]),t._v(" "),a("h4",{attrs:{id:"变量作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量作用域"}},[t._v("#")]),t._v(" 变量作用域")]),t._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('int g = 20;  // 定义全局变量\nint main() {\n  int g = 10;         // 定义局部变量\n  printf("%d\\n", g);  // 输出 g 10\n  return 0;\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h4",{attrs:{id:"常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常量"}},[t._v("#")]),t._v(" 常量")]),t._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const int a = 2; // 定义后不允许被改变\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);