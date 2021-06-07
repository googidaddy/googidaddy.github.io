(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{513:function(s,n,e){"use strict";e.r(n);var a=e(4),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"string"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[s._v("#")]),s._v(" String")]),s._v(" "),e("ul",[e("li",[s._v("Be familiar with the "),e("code",[s._v("basic operations")]),s._v(" in a string, especially the unique operations which we don't have in an array")]),s._v(" "),e("li",[s._v("Understand the differences between different "),e("code",[s._v("comparison")]),s._v(" functions;")]),s._v(" "),e("li",[s._v("Determine whether the string is "),e("code",[s._v("immutable")]),s._v(" or not in your favorite language and understand the impact of this feature;")]),s._v(" "),e("li",[s._v("Be able to solve basic string-related problems.")])]),s._v(" "),e("p",[e("strong",[s._v("For instance, if the length of the string is "),e("code",[s._v("N")]),s._v(", the time complexity of both finding operation and substring operation is "),e("code",[s._v("O(N)")]),s._v(".")])]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('#include <iostream>\n\nint main() {\n    string s1 = "Hello World";\n    cout << "s1 is \\"Hello World\\"" << endl;\n    string s2 = s1;\n    cout << "s2 is initialized by s1" << endl;\n    string s3(s1);\n    cout << "s3 is initialized by s1" << endl;\n    // compare by \'==\'\n    cout << "Compared by \'==\':" << endl;\n    cout << "s1 and \\"Hello World\\": " << (s1 == "Hello World") << endl;\n    cout << "s1 and s2: " << (s1 == s2) << endl;\n    cout << "s1 and s3: " << (s1 == s3) << endl;\n    // compare by \'compare\'\n    cout << "Compared by \'compare\':" << endl;\n    cout << "s1 and \\"Hello World\\": " << !s1.compare("Hello World") << endl;\n    cout << "s1 and s2: " << !s1.compare(s2) << endl;\n    cout << "s1 and s3: " << !s1.compare(s3) << endl;\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("h2",{attrs:{id:"string-is-mutable-in-c"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#string-is-mutable-in-c"}},[s._v("#")]),s._v(" String is mutable in C++")]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#include <iostream>\n\nint main() {\n    string s1 = \"Hello World\";\n    s1[5] = ',';\n    cout << s1 << endl;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#include <iostream>\n\nint main() {\n    string s1 = \"Hello World\";\n    // 1. concatenate\n    s1 += \"!\";\n    cout << s1 << endl;\n    // 2. find\n    cout << \"The position of first 'o' is: \" << s1.find('o') << endl;\n    cout << \"The position of last 'o' is: \" << s1.rfind('o') << endl;\n    // 3. get substr (include 6)\n    cout << s1.substr(6, 5) << endl;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("h2",{attrs:{id:"an-interesting-example-from-leetcode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#an-interesting-example-from-leetcode"}},[s._v("#")]),s._v(" An Interesting example from leetcode")]),s._v(" "),e("p",[e("img",{attrs:{src:"C:%5CUsers%5Cdomado%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210319134029167.png",alt:"image-20210319134029167"}})]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('//solution\nclass Solution {\npublic:\n    string longestCommonPrefix(vector<string>& words) {\n       if (empty(words)) return "";\n        string output = "";\n        sort(begin(words), end(words));\n        auto a = words.front(), b = words.back();\n        for (auto i = 0; i < size(a); ++i) {\n            if (a[i] == b[i]) { output += a[i]; } else { break; } \n        }\n        return output;\n    }\n};\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("ul",[e("li",[s._v("sort puts them in alphabetical order.")]),s._v(" "),e("li",[s._v("only need to compare the first and last one cuz all ones in the middle will be cancelled out.")])]),s._v(" "),e("h2",{attrs:{id:"reverse-words-in-a-string"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reverse-words-in-a-string"}},[s._v("#")]),s._v(" Reverse Words in a String")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('Input: s = "the sky is blue"\nOutput: "blue is sky the"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('Input: s = "  hello world  "\nOutput: "world hello"\nExplanation: Your reversed string should not contain leading or trailing spaces.\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('Input: s = "a good   example"\nOutput: "example good a"\nExplanation: You need to reduce multiple spaces between two words to a single space in the reversed string.\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('Input: s = "  Bob    Loves  Alice   "\nOutput: "Alice Loves Bob"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('Input: s = "Alice does not even like bob"\nOutput: "bob like even not does Alice"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("strong",[s._v("Tip : Using a vector")])]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("class Solution {\npublic:\n    string reverseWords(string s) {\n       stringstream ss(s);\n        string word;\n        vector<string> v;\n        while(ss>>word)\n            v.push_back(word);\n        \n        string ans = \"\";\n        for(int i=v.size()-1;i>=0;i--)\n        {\n            ans+=v[i] + ' ';\n        }\n        ans.erase(ans.end()-1);\n        return ans;\n    }\n};\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("h2",{attrs:{id:"reverse-words-in-a-string-iii"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reverse-words-in-a-string-iii"}},[s._v("#")]),s._v(" Reverse Words in a String III")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('Input: s = "Let\'s take LeetCode contest"\nOutput: "s\'teL ekat edoCteeL tsetnoc"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('Input: s = "God Ding"\nOutput: "doG gniD"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("strong",[s._v("code")])]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('class Solution {\npublic:\n    string reverseWords(string s) {\n        stringstream ss(s);\n        string word;\n        string ans = "";\n        while(ss>>word)\n        {\n           reverse(word.begin(),word.end());\n            ans +=" "+word;\n        }\n        return ans.substr(1,ans.size()-1);\n    }\n};\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);