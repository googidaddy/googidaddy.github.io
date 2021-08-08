(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{497:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("strong",[s._v("Array从基础学习")])]),s._v(" "),a("h2",{attrs:{id:"chapter-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter-1"}},[s._v("#")]),s._v(" chapter 1")]),s._v(" "),a("h3",{attrs:{id:"array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#array"}},[s._v("#")]),s._v(" Array")]),s._v(" "),a("p",[s._v("By completing this chapter, you should be able to answer the following questions:")]),s._v(" "),a("ol",[a("li",[s._v("What is the "),a("code",[s._v("difference")]),s._v(" between array and dynamic array?")]),s._v(" "),a("li",[s._v("What is the corresponding "),a("code",[s._v("built-in data structure")]),s._v(" of array and dynamic array in your frequently-used language?")]),s._v(" "),a("li",[s._v("How to perform "),a("code",[s._v("basic operations")]),s._v(" (initialization, data access, modification, iteration, sort, etc) in an "),a("code",[s._v("array")]),s._v("?")]),s._v(" "),a("li",[s._v("How to perform "),a("code",[s._v("basic operations")]),s._v(" (initialization, data access, modification, iteration, sort, addition, deletion, etc) in a "),a("code",[s._v("dynamic array")]),s._v("?")])]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#include <iostream>\n\nint main() {\n    // 1. Initialize\n    int a0[5];\n    int a1[5] = {1, 2, 3};  // other element will be set as the default value\n    // 2. Get Length\n    int size = sizeof(a1) / sizeof(*a1);\n    cout << "The size of a1 is: " << size << endl;\n    // 3. Access Element\n    cout << "The first element is: " << a1[0] << endl;\n    // 4. Iterate all Elements\n    cout << "[Version 1] The contents of a1 are:";\n    for (int i = 0; i < size; ++i) {\n        cout << " " << a1[i];\n    }\n    cout << endl;\n    cout << "[Version 2] The contents of a1 are:";\n    for (int& item: a1) {\n        cout << " " << item;\n    }\n    cout << endl;\n    // 5. Modify Element\n    a1[0] = 4;\n    // 6. Sort\n    sort(a1, a1 + size);\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h3",{attrs:{id:"dynamic-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-array"}},[s._v("#")]),s._v(" Dynamic Array")]),s._v(" "),a("p",[a("strong",[s._v("其实是vector拉")])]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#include <iostream>\n\nint main() {\n    // 1. initialize\n    vector<int> v0;\n    vector<int> v1(5, 0);\n    // 2. make a copy\n    vector<int> v2(v1.begin(), v1.end());\n    vector<int> v3(v2);\n    // 2. cast an array to a vector\n    int a[5] = {0, 1, 2, 3, 4};\n    vector<int> v4(a, *(&a + 1));\n    // 3. get length\n    cout << "The size of v4 is: " << v4.size() << endl;\n    // 4. access element\n    cout << "The first element in v4 is: " << v4[0] << endl;\n    // 5. iterate the vector\n    cout << "[Version 1] The contents of v4 are:";\n    for (int i = 0; i < v4.size(); ++i) {\n        cout << " " << v4[i];\n    }\n    cout << endl;\n    cout << "[Version 2] The contents of v4 are:";\n    for (int& item : v4) {\n        cout << " " << item;\n    }\n    cout << endl;\n    cout << "[Version 3] The contents of v4 are:";\n    for (auto item = v4.begin(); item != v4.end(); ++item) {\n        cout << " " << *item;\n    }\n    cout << endl;\n    // 6. modify element\n    v4[0] = 5;\n    // 7. sort\n    sort(v4.begin(), v4.end());\n    // 8. add new element at the end of the vector\n    v4.push_back(-1);\n    // 9. delete the last element\n    v4.pop_back();\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br")])]),a("h3",{attrs:{id:"_2d-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2d-array"}},[s._v("#")]),s._v(" 2D Array")]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#include <iostream>\n\ntemplate <size_t n, size_t m>\nvoid printArray(int (&a)[n][m]) {\n    for (int i = 0; i < n; ++i) {\n        for (int j = 0; j < m; ++j) {\n            cout << a[i][j] << " ";\n        }\n        cout << endl;\n    }\n}\n\nint main() {\n    cout << "Example I:" << endl;\n    int a[2][5];\n    printArray(a);\n    cout << "Example II:" << endl;\n    int b[2][5] = {{1, 2, 3}};\n    printArray(b);\n    cout << "Example III:"<< endl;\n    int c[][5] = {1, 2, 3, 4, 5, 6, 7};\n    printArray(c);\n    cout << "Example IV:" << endl;\n    int d[][5] = {{1, 2, 3, 4}, {5, 6}, {7}};\n    printArray(d);\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("h3",{attrs:{id:"rotate-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rotate-array"}},[s._v("#")]),s._v(" Rotate Array")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Input: nums = [1,2,3,4,5,6,7], k = 3\nOutput: [5,6,7,1,2,3,4]\nExplanation:\nrotate 1 steps to the right: [7,1,2,3,4,5,6]\nrotate 2 steps to the right: [6,7,1,2,3,4,5]\nrotate 3 steps to the right: [5,6,7,1,2,3,4]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Input: nums = [-1,-100,3,99], k = 2\nOutput: [3,99,-1,-100]\nExplanation: \nrotate 1 steps to the right: [99,-1,-100,3]\nrotate 2 steps to the right: [3,99,-1,-100]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("1 <= nums.length <= 2 * 104")])]),s._v(" "),a("li",[a("code",[s._v("-231 <= nums[i] <= 231 - 1")])]),s._v(" "),a("li",[a("code",[s._v("0 <= k <= 105")])])]),s._v(" "),a("p",[a("strong",[s._v("code")])]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Solution {\npublic:\n    void rotate(vector<int>& nums, int k) {\n         reverse(nums.begin(),nums.end());                   // reverse the array\n        reverse(nums.begin(),nums.begin()+k%nums.size());  // reverse the first k ele\n        reverse(nums.begin()+k%nums.size(),nums.end());   // reverse the last n-k ele\n    }\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("explanation: (k=3)\n[1,2,3,4,5,6,7]\n// reverse(nums.begin(),nums.end()); \n[7,6,5,4,3,2,1]\nreverse(nums.begin(),nums.begin()+k%nums.size());\n[5,6,7,4,3,2,1]\nreverse(nums.begin()+k%nums.size(),nums.end());\n[5,6,7,1,2,3,4]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"pascal-s-triangle-i"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pascal-s-triangle-i"}},[s._v("#")]),s._v(" Pascal's Triangle I")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif",alt:"gif"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Input: numRows = 5\nOutput: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Input: numRows = 1\nOutput: [[1]]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("Constraints:")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("1 <= numRows <= 30")])])]),s._v(" "),a("p",[a("strong",[s._v("Solution")])]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Solution {\npublic:\n    vector<vector<int>> generate(int numRows) {\n      \n        vector<vector<int>> a(numRows);\n      for(int i=0;i<numRows;i++)\n      {\n          a[i].resize(i+1);\n          a[i][0] = a[i][i] = 1;\n          for(int j=1;j<i;j++)\n          {\n              a[i][j]=a[i-1][j-1]+a[i-1][j];\n          }\n      }\n        return a;\n    }\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"pascal-s-triangle-ii"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pascal-s-triangle-ii"}},[s._v("#")]),s._v(" Pascal's Triangle II")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif",alt:"gif2"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Input: rowIndex = 3\nOutput: [1,3,3,1]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Input: rowIndex = 0\nOutput: [1]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Input: rowIndex = 1\nOutput: [1,1]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("Constraints:")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("0 <= rowIndex <= 33")])])]),s._v(" "),a("p",[a("strong",[s._v("Solution-similar to I")])]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Solution {\npublic:\n    vector<int> getRow(int rowIndex) {\n         vector<vector<int>> a(rowIndex+1);\n         vector<int> b;\n        b.push_back(1);\n      for(int i=0;i<rowIndex+1;i++)\n      {\n          a[i].resize(i+1);\n          a[i][0] = a[i][i] = 1;\n          for(int j=1;j<i;j++)\n          {\n              a[i][j]=a[i-1][j-1]+a[i-1][j];\n              if(i==rowIndex)\n              {\n                  b.push_back(a[i][j]);\n              }\n          }\n      }\n        if(rowIndex!=0)\n        {b.push_back(1);}\n        return b;\n    }\n    \n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("p",[a("strong",[s._v("Solution-neat-code")])]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vector<int>nums(rowIndex+1,1);\n        for(int i=1;i<rowIndex;i++)\n        {   for(int j=i;j>0;j--)\n            nums[j]+=nums[j-1];\n        }\n        return nums;\n        }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"remove-duplicates-from-sorted-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove-duplicates-from-sorted-array"}},[s._v("#")]),s._v(" Remove Duplicates from Sorted Array")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Input: nums = [1,1,2]\nOutput: 2, nums = [1,2]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Input: nums = [0,0,1,1,1,2,2,3,3,4]\nOutput: 5, nums = [0,1,2,3,4]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("Constraints:")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("0 <= nums.length <= 3 * 104")])]),s._v(" "),a("li",[a("code",[s._v("-104 <= nums[i] <= 104")])]),s._v(" "),a("li",[a("code",[s._v("nums")]),s._v(" is sorted in ascending order.")])]),s._v(" "),a("p",[a("strong",[s._v("Tip : simply change")])]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Solution {\npublic:\n    int removeDuplicates(vector<int>& nums) {\n        if(nums.empty()) // empty nums\n            return 0;\n        int index =0;\n        for(int i=0;i<nums.size();i++)\n        {\n            if(nums[i]!=nums[index])\n                nums[++index] = nums[i]; // changed index when different nums\n        }\n        return index+1;\n    }\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);