(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{507:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"c-基础学习-二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-基础学习-二"}},[s._v("#")]),s._v(" C++基础学习(二)")]),s._v(" "),t("h2",{attrs:{id:"运算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运算"}},[s._v("#")]),s._v(" 运算")]),s._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5Cdomado%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210313222903677.png",alt:"image-20210313222903677"}})]),s._v(" "),t("p",[t("strong",[s._v("算术运算符中有两个单目运算符（正、负）以及五个双目运算符（乘法、除法、取模、加法、减法），其中单目运算符的优先级最高。")])]),s._v(" "),t("p",[t("strong",[s._v("其中取模运算符 "),t("code",[s._v("%")]),s._v(" 意为计算两个整数相除得到的余数，即求余数。")])]),s._v(" "),t("h3",{attrs:{id:"算术运算中的类型转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#算术运算中的类型转换"}},[s._v("#")]),s._v(" 算术运算中的类型转换")]),s._v(" "),t("ul",[t("li",[s._v("先将 "),t("code",[s._v("char")]),s._v(" ， "),t("code",[s._v("bool")]),s._v(" ， "),t("code",[s._v("short")]),s._v(" 等类型提升至 "),t("code",[s._v("int")]),s._v(" （或 "),t("code",[s._v("unsigned int")]),s._v(" ，取决于原类型的符号性）类型；")]),s._v(" "),t("li",[s._v("若存在一个变量类型为 "),t("code",[s._v("long double")]),s._v(" ，会将另一变量转换为 "),t("code",[s._v("long double")]),s._v(" 类型；")]),s._v(" "),t("li",[s._v("否则，若存在一个变量类型为 "),t("code",[s._v("double")]),s._v(" ，会将另一变量转换为 "),t("code",[s._v("double")]),s._v(" 类型；")]),s._v(" "),t("li",[s._v("否则，若存在一个变量类型为 "),t("code",[s._v("float")]),s._v(" ，会将另一变量转换为 "),t("code",[s._v("float")]),s._v(" 类型；")]),s._v(" "),t("li",[s._v("否则（即参与运算的两个变量均为整数类型）：\n"),t("ul",[t("li",[s._v("若两个变量符号性一致，则将位宽较小的类型转换为位宽较大的类型；")]),s._v(" "),t("li",[s._v("否则，若无符号变量的位宽不小于带符号变量的位宽，则将带符号数转换为无符号数对应的类型；")]),s._v(" "),t("li",[s._v("否则，若带符号操作数的类型能表示无符号操作数类型的所有值，则将无符号操作数转换为带符号操作数对应的类型；")]),s._v(" "),t("li",[s._v("否则，将带符号数转换为相对应的无符号类型。")])])])]),s._v(" "),t("p",[s._v("例如，对于一个整型（ "),t("code",[s._v("int")]),s._v(" ）变量 和另一个双精度浮点型（ "),t("code",[s._v("double")]),s._v(" ）类型变量 ：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("x/3")]),s._v(" 的结果将会是整型；")]),s._v(" "),t("li",[t("code",[s._v("x/3.0")]),s._v(" 的结果将会是双精度浮点型；")]),s._v(" "),t("li",[t("code",[s._v("x/y")]),s._v(" 的结果将会是双精度浮点型；")]),s._v(" "),t("li",[t("code",[s._v("x*1/3")]),s._v(" 的结果将会是整型；")]),s._v(" "),t("li",[t("code",[s._v("x*1.0/3")]),s._v(" 的结果将会是双精度浮点型；")])]),s._v(" "),t("h3",{attrs:{id:"位运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#位运算符"}},[s._v("#")]),s._v(" 位运算符")]),s._v(" "),t("p",[t("strong",[s._v("位操作的意义请参考 "),t("a",{attrs:{href:""}},[s._v("位运算")]),s._v(" 。需要注意的是，位运算符的优先级低于普通的算数运算符。")])]),s._v(" "),t("h4",{attrs:{id:"位运算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#位运算"}},[s._v("#")]),s._v(" 位运算")]),s._v(" "),t("p",[t("strong",[s._v("位运算就是基于整数的二进制表示进行的运算。由于计算机内部就是以二进制来存储数据，位运算是相当快的。")])]),s._v(" "),t("p",[t("strong",[s._v("常用的运算符共 6 种，分别为与（ "),t("code",[s._v("&")]),s._v(" ）、或（ "),t("code",[s._v("|")]),s._v(" ）、异或（ "),t("code",[s._v("^")]),s._v(" ）、取反（ "),t("code",[s._v("~")]),s._v(" ）、左移（ "),t("code",[s._v("<<")]),s._v(" ）和右移（ "),t("code",[s._v(">>")]),s._v(" ）。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5Cdomado%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210313230344486.png",alt:"image-20210313230344486"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5Cdomado%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210313230435595.png",alt:"image-20210313230435595"}})]),s._v(" "),t("h5",{attrs:{id:"取反"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#取反"}},[s._v("#")]),s._v(" 取反")]),s._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5Cdomado%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210314141557235.png",alt:"image-20210314141557235"}})]),s._v(" "),t("p",[s._v("补码：在二进制表示下，正数和 0 的补码为其本身，负数的补码是将其对应正数按位取反后加一。")]),s._v(" "),t("h5",{attrs:{id:"左移和右移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#左移和右移"}},[s._v("#")]),s._v(" 左移和右移")]),s._v(" "),t("p",[t("code",[s._v("num << i")]),s._v(" 表示将 的二进制表示向左移动 位所得的值。")]),s._v(" "),t("p",[t("code",[s._v("num >> i")]),s._v(" 表示将 的二进制表示向右移动 位所得的值。")]),s._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5Cdomado%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210314141806520.png",alt:"image-20210314141806520"}})]),s._v(" "),t("p",[t("strong",[s._v("对于左移操作，需要确保移位后的结果能被原数的类型容纳，否则行为也是未定义的。对一个负数执行左移操作也未定义。")])]),s._v(" "),t("p",[t("strong",[s._v("对于右移操作，右侧多余的位将会被舍弃，而左侧较为复杂：对于无符号数，会在左侧补 0；而对于有符号数，则会用最高位的数（其实就是符号位，非负数为 0，负数为 1）补齐。")])]),s._v(" "),t("h4",{attrs:{id:"应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[s._v("#")]),s._v(" 应用")]),s._v(" "),t("h5",{attrs:{id:"乘-2-的非负整数次幂"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#乘-2-的非负整数次幂"}},[s._v("#")]),s._v(" "),t("strong",[s._v("乘 2 的非负整数次幂")])]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("int mulPowerOfTwo(int n, int m) {  // 计算 n*(2^m)\n  return n << m;\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h5",{attrs:{id:"除以-2-的非负整数次幂"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#除以-2-的非负整数次幂"}},[s._v("#")]),s._v(" "),t("strong",[s._v("除以 2 的非负整数次幂")])]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("int divPowerOfTwo(int n, int m) {  // 计算 n/(2^m)\n  return n >> m;\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("blockquote",[t("p",[s._v("我们平常写的除法是向 0 取整，而这里的右移是向下取整（注意这里的区别），即当数大于等于 0 时两种方法等价，当数小于 0 时会有区别，如： "),t("code",[s._v("-1 / 2")]),s._v(" 的值为 ，而 "),t("code",[s._v("-1 >> 1")]),s._v(" 的值为 -1。")])]),s._v(" "),t("h5",{attrs:{id:"判断一个数是不是2的非负整数次幂"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#判断一个数是不是2的非负整数次幂"}},[s._v("#")]),s._v(" "),t("strong",[s._v("判断一个数是不是2的非负整数次幂")])]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("bool isPowerOfTwo(int n) { return n > 0 && (n & (n - 1)) == 0; }\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h5",{attrs:{id:"对2的非整数次幂取模"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对2的非整数次幂取模"}},[s._v("#")]),s._v(" "),t("strong",[s._v("对2的非整数次幂取模")])]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("int modPowerOfTwo(int x, int mod) { return x & (mod - 1); }\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h5",{attrs:{id:"取绝对值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#取绝对值"}},[s._v("#")]),s._v(" "),t("strong",[s._v("取绝对值")])]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("int Abs(int n) {\n  return (n ^ (n >> 31)) - (n >> 31);\n  /* n>>31 取得 n 的符号，若 n 为正数，n>>31 等于 0，若 n 为负数，n>>31 等于 -1\n     若 n 为正数 n^0=n, 数不变，若 n 为负数有 n^(-1)\n     需要计算 n 和 -1 的补码，然后进行异或运算，\n     结果 n 变号并且为 n 的绝对值减 1，再减去 -1 就是绝对值 */\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h5",{attrs:{id:"取两个数的最大值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#取两个数的最大值"}},[s._v("#")]),s._v(" "),t("strong",[s._v("取两个数的最大值")])]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 如果 a>=b,(a-b)>>31 为 0，否则为 -1\nint max(int a, int b) { return b & ((a - b) >> 31) | a & (~(a - b) >> 31); }\nint min(int a, int b) { return a & ((a - b) >> 31) | b & (~(a - b) >> 31); }\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h5",{attrs:{id:"判断符号是否相同"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#判断符号是否相同"}},[s._v("#")]),s._v(" "),t("strong",[s._v("判断符号是否相同")])]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("bool isSameSign(int x, int y) {  // 有 0 的情况例外\n  return (x ^ y) >= 0;\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h5",{attrs:{id:"交换两个数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#交换两个数"}},[s._v("#")]),s._v(" "),t("strong",[s._v("交换两个数")])]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("void swap(int &a, int &b) { a ^= b ^= a ^= b; }\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("这种方式只能用来交换两个整数，使用范围有限。")]),s._v(" "),t("p",[s._v("对于一般情况下的交换操作，推荐直接调用 "),t("code",[s._v("algorithm")]),s._v(" 库中的 "),t("code",[s._v("std::swap")]),s._v(" 函数。")])]),s._v(" "),t("h5",{attrs:{id:"获取一个数二进制的某一位"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取一个数二进制的某一位"}},[s._v("#")]),s._v(" "),t("strong",[s._v("获取一个数二进制的某一位")])]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 获取 a 的第 b 位，最低位编号为 0\nint getBit(int a, int b) { return (a >> b) & 1; }\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h5",{attrs:{id:"将一个数二进制的某一位设置为0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将一个数二进制的某一位设置为0"}},[s._v("#")]),s._v(" "),t("strong",[s._v("将一个数二进制的某一位设置为0")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 将 a 的第 b 位设置为 0 ，最低位编号为 0\nint unsetBit(int a, int b) { return a & ~(1 << b); }\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h5",{attrs:{id:"将一个数二进制的某一位设置为1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将一个数二进制的某一位设置为1"}},[s._v("#")]),s._v(" "),t("strong",[s._v("将一个数二进制的某一位设置为1")])]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 将 a 的第 b 位设置为 1 ，最低位编号为 0\nint setBit(int a, int b) { return a | (1 << b); }\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h5",{attrs:{id:"将一个数二进制的某一位取反"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将一个数二进制的某一位取反"}},[s._v("#")]),s._v(" "),t("strong",[s._v("将一个数二进制的某一位取反")])]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 将 a 的第 b 位取反 ，最低位编号为 0\nint flapBit(int a, int b) { return a ^ (1 << b); }\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h5",{attrs:{id:"表示集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表示集合"}},[s._v("#")]),s._v(" "),t("strong",[s._v("表示集合")])]),s._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5Cdomado%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210314144448835.png",alt:"image-20210314144448835"}})]),s._v(" "),t("p",[s._v("一个数的二进制表示可以看作是一个集合（0 表示不在集合中，1 表示在集合中）。比如集合 "),t("code",[s._v("{1, 3, 4, 8}")]),s._v(" ，可以表示成（100011010） 。而对应的位运算也就可以看作是对集合进行的操作。")]),s._v(" "),t("h5",{attrs:{id:"遍历某个集合的子集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#遍历某个集合的子集"}},[s._v("#")]),s._v(" "),t("strong",[s._v("遍历某个集合的子集")])]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 遍历 u 的非空子集\nfor (int s = u; s; s = (s - 1) & u) {\n  // s 是 u 的一个非空子集\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"自增-自减"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自增-自减"}},[s._v("#")]),s._v(" 自增/自减")]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("i = 100;\n\nop1 = i++;  // op1 = 100，先 op1 = i，然后 i = i + 1\n\ni = 100;\n\nop2 = ++i;  // op2 = 101，先 i = i + 1，然后赋值 op2\n\ni = 100;\n\nop3 = i--;  // op3 = 100，先赋值 op3，然后 i = i - 1\n\ni = 100;\n\nop4 = --i;  // op4 = 99，先 i = i - 1，然后赋值 op4\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h3",{attrs:{id:"逻辑运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#逻辑运算符"}},[s._v("#")]),s._v(" 逻辑运算符")]),s._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5Cdomado%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210314152155060.png",alt:"image-20210314152155060"}})]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Result = op1 && op2;  // 当 op1 与 op2 都为真时则 Result 为真\n\nResult = op1 || op2;  // 当 op1 或 op2 其中一个为真时则 Result 为真\n\nResult = !op1;  // 当 op1 为假时则 Result 为真\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"逗号运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#逗号运算符"}},[s._v("#")]),s._v(" 逗号运算符")]),s._v(" "),t("p",[t("strong",[s._v("优先级最低的")])]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('exp1, exp2, exp3;  // 最后的值为 exp3 的运算结果。\n\nResult = 1 + 2, 3 + 4, 5 + 6;\n//得到 Result 的值为 3 而不是 11，因为赋值运算符 "="\n//的优先级比逗号运算符高，先进行了赋值运算才进行逗号运算。\n\nResult = (1 + 2, 3 + 4, 5 + 6);\n\n// 若要让 Result 的值得到逗号运算的结果则应将整个表达式用括号提高优先级，此时\n// Result 的值才为 11。\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"成员访问运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#成员访问运算符"}},[s._v("#")]),s._v(" 成员访问运算符")]),s._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5Cdomado%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210314152820950.png",alt:"image-20210314152820950"}})]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("auto result1 = v[1];  // 获取v中下标为2的对象\nauto result2 = p.q;   // 获取p对象的q成员\nauto result3 = p -> q;  // 获取p指针指向的对象的q成员，等价于 (*p).q\nauto result4 = &v;      // 获取指向v的指针\nauto result5 = *v;      // 获取v指针指向的对象\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"流程控制语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#流程控制语句"}},[s._v("#")]),s._v(" 流程控制语句")]),s._v(" "),t("p",[t("strong",[s._v("从简")])]),s._v(" "),t("h3",{attrs:{id:"switch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#switch"}},[s._v("#")]),s._v(" switch")]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("switch (选择句) {\n  case 标签1:\n    主体1;\n  case 标签2:\n    主体2;\n  default:\n    主体3;\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"for"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#for"}},[s._v("#")]),s._v(" for")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("for (int i = 1; i <= n; ++i) {\n  cin >> a[i];\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("都是简单的循环，姑且跳过")])])])}),[],!1,null,null,null);a.default=n.exports}}]);