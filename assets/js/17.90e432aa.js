(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{503:function(n,s,a){"use strict";a.r(s);var e=a(4),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"c-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-notes"}},[n._v("#")]),n._v(" C++-notes")]),n._v(" "),a("p",[a("strong",[n._v("写leetcode的时候，有时候经常需要查阅相关用法，C++还未印入灵魂，so，去微软学习了一趟,"),a("u",[n._v("有一定机翻的僵硬")])])]),n._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/cpp/cpp/cpp-type-system-modern-cpp?view=msvc-160",target:"_blank",rel:"noopener noreferrer"}},[n._v("source"),a("OutboundLink")],1)]),n._v(" "),a("h2",{attrs:{id:"c-概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-概念"}},[n._v("#")]),n._v(" C++概念")]),n._v(" "),a("p",[n._v("C + + 是一种 "),a("em",[n._v("强类型")]),n._v(" 语言，它也是 "),a("em",[n._v("静态类型化")]),n._v(" 的。每个对象都有一个类型，该类型永远不会改变 (不会与静态数据对象) 混淆。 在代码中声明变量时，必须显式指定其类型，或者使用 "),a("strong",[a("code",[n._v("auto")])]),n._v(" 关键字指示编译器从初始值设定项推断类型。 在代码中声明函数时，必须指定每个参数的类型及其返回值; "),a("strong",[a("code",[n._v("void")])]),n._v(" 如果函数未返回任何值，则必须指定其返回值。 例外情况是，当使用允许任意类型参数的函数模板时。")]),n._v(" "),a("h3",{attrs:{id:"在c-中强烈建议不要使用原始指针"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在c-中强烈建议不要使用原始指针"}},[n._v("#")]),n._v(" 在C++中强烈建议不要使用原始指针")]),n._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("void someFunction() {\n    unique_ptr<MyClass> pMc(new MyClass);\n    pMc->DoSomeWork();\n}\n  // No memory leak. Out-of-scope automatically calls the destructor\n  // for the unique_ptr, freeing the resource.c\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br")])]),a("h3",{attrs:{id:"范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#范围"}},[n._v("#")]),n._v(" 范围")]),n._v(" "),a("p",[a("strong",[n._v("全局范围、命名空间范围、本地范围、类范围、语句范围、函数范围")])]),n._v(" "),a("h3",{attrs:{id:"lambda"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lambda"}},[n._v("#")]),n._v(" Lambda")]),n._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/cpp/cpp/lambda-expressions-in-cpp?view=msvc-160",target:"_blank",rel:"noopener noreferrer"}},[n._v("source"),a("OutboundLink")],1)]),n._v(" "),a("p",[n._v("首先来一个ez demo")]),n._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("#include <algorithm>\n#include <cmath>\n\nvoid abssort(float* x, unsigned n) {\n    std::sort(x, x + n,\n        // Lambda expression begins\n        [](float a, float b) {\n            return (std::abs(a) < std::abs(b));\n        } // end of lambda expression\n    );\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br")])]),a("p",[a("strong",[n._v("Lambda组成部分：")])]),n._v(" "),a("p",[a("img",{attrs:{src:"https://docs.microsoft.com/zh-cn/cpp/cpp/media/lambdaexpsyntax.png?view=msvc-160",alt:""}})]),n._v(" "),a("ol",[a("li",[a("strong",[a("em",[n._v("捕获子句")]),n._v(" (也称为 c + + 规范中的 "),a("em",[n._v("引导")]),n._v(" 。 )")])]),n._v(" "),a("li",[a("strong",[a("em",[n._v("参数列表")]),n._v(" 可有可无. (也称为 "),a("em",[n._v("lambda 声明符")]),n._v(")")])]),n._v(" "),a("li",[a("strong",[a("em",[n._v("可变规范")]),n._v(" 可有可无.")])]),n._v(" "),a("li",[a("strong",[a("em",[n._v("异常规范")]),n._v(" 可有可无.")])]),n._v(" "),a("li",[a("strong",[a("em",[n._v("尾随-返回类型")]),n._v(" 可有可无.")])]),n._v(" "),a("li",[a("strong",[a("em",[n._v("lambda 体")]),n._v("。")])])]),n._v(" "),a("p",[a("strong",[n._v("demo 1")])]),n._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('// even_lambda.cpp\n// compile with: cl /EHsc /nologo /W4 /MTd\n#include <algorithm>\n#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main()\n{\n   // Create a vector object that contains 9 elements.\n   vector<int> v;\n   for (int i = 1; i < 10; ++i) {\n      v.push_back(i);\n   }\n\n   // Count the number of even numbers in the vector by\n   // for_each(把v的值传给n，遍历一边，偶数增加evenCount)\n   int evenCount = 0;\n   for_each(v.begin(), v.end(), [&evenCount] (int n) {\n      cout << n;\n      if (n % 2 == 0) {\n         cout << " is even " << endl;\n         ++evenCount;\n      } else {\n         cout << " is odd " << endl;\n      }\n   });\n\n   // Print the count of even numbers to the console.\n   cout << "There are " << evenCount\n        << " even numbers in the vector." << endl;\n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br")])]),a("p",[a("strong",[n._v("demo 2")])]),n._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// declaring_lambda_expressions1.cpp\n// compile with: /EHsc /W4\n#include <functional>\n#include <iostream>\n\nint main()\n{\n\n    using namespace std;\n\n    // Assign the lambda expression that adds two numbers to an auto variable.\n    auto f1 = [](int x, int y) { return x + y; };\n\n    cout << f1(2, 3) << endl; // 5\n\n    // Assign the same lambda expression to a function object.\n    function<int(int, int)> f2 = [](int x, int y) { return x + y; };\n\n    cout << f2(3, 4) << endl; // 7\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br")])]),a("p",[a("strong",[n._v("demo 3")])]),n._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// declaring_lambda_expressions2.cpp\n// compile with: /EHsc /W4\n#include <functional>\n#include <iostream>\n\nint main()\n{\n   using namespace std;\n\n   int i = 3;\n   int j = 5;\n\n   // The following lambda expression captures i by value and\n   // j by reference.\n   function<int (void)> f = [i, &j] { return i + j; };\n\n   // Change the values of i and j.\n   i = 22;\n   j = 44;\n\n   // Call f and print its result.\n   cout << f() << endl; // 47\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br")])]),a("h3",{attrs:{id:"智能指针"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#智能指针"}},[n._v("#")]),n._v(" 智能指针")]),n._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/cpp/standard-library/unique-ptr-class?view=msvc-160",target:"_blank",rel:"noopener noreferrer"}},[n._v("Unique_ptr"),a("OutboundLink")],1),n._v("不共享其指针。 不能将其复制到另一个，而是 "),a("code",[n._v("unique_ptr")]),n._v(" 通过值传递给函数，也不能在需要进行复制的任何 c + + 标准库算法中使用。 只能移动 "),a("code",[n._v("unique_ptr")]),n._v("。 这意味着，内存资源所有权将转移到另一 "),a("code",[n._v("unique_ptr")]),n._v("，并且原始 "),a("code",[n._v("unique_ptr")]),n._v(" 不再拥有此资源。 我们建议你将对象限制为由一个所有者所有，因为多个所有权会使程序逻辑变得复杂。 因此，当你需要一个智能指针用于纯 c + + 对象时，请使用 "),a("code",[n._v("unique_ptr")]),n._v(" ，当构造时， "),a("code",[n._v("unique_ptr")]),n._v(" 请使用 "),a("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/cpp/standard-library/memory-functions?view=msvc-160#make_unique",target:"_blank",rel:"noopener noreferrer"}},[n._v("make_unique"),a("OutboundLink")],1),n._v(" helper 函数。")]),n._v(" "),a("p",[a("img",{attrs:{src:"https://docs.microsoft.com/zh-cn/cpp/cpp/media/unique_ptr.png?view=msvc-160",alt:""}})]),n._v(" "),a("p",[a("strong",[n._v("demo")])]),n._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('unique_ptr<Song> SongFactory(const std::wstring& artist, const std::wstring& title)\n{\n    // Implicit move operation into the variable that stores the result.\n    return make_unique<Song>(artist, title);\n}\n\nvoid MakeSongs()\n{\n    // Create a new unique_ptr with a new object.\n    auto song = make_unique<Song>(L"Mr. Children", L"Namonaki Uta");\n\n    // Use the unique_ptr.\n    vector<wstring> titles = { song->title };\n\n    // Move raw pointer from one unique_ptr to another.\n    unique_ptr<Song> song2 = std::move(song);\n\n    // Obtain unique_ptr from function that returns by value.\n    auto song3 = SongFactory(L"Michael Jackson", L"Beat It");\n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);