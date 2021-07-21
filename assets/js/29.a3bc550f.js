(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{513:function(s,n,e){"use strict";e.r(n);var a=e(4),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"two-pointer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#two-pointer"}},[s._v("#")]),s._v(" Two-Pointer")]),s._v(" "),e("p",[e("strong",[s._v("learn with a classic problem:")])]),s._v(" "),e("blockquote",[e("p",[e("strong",[s._v("Reverse the elements in an array")])])]),s._v(" "),e("p",[e("strong",[s._v("Here is the code")])]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("void reverse(int *a,int N)\n{\n    int i = 0;// begining\n    int j = N-1;// the end of array\n    while(i>j)\n    {\n        swap(v[i],v[j]);\n        i++;\n        j--;\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("blockquote",[e("p",[e("strong",[s._v("Iterate the array from two ends to the middle")])]),s._v(" "),e("p",[e("strong",[s._v("One pointer starts from the beginning while the other pointer starts from the end.")])])]),s._v(" "),e("p",[e("strong",[s._v("often used in a "),e("code",[s._v("sorted")]),s._v(" array")])]),s._v(" "),e("p",[e("strong",[s._v("Neat code")])]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("class Solution {\npublic:\n    void reverseString(vector<char>& s) {\n        int n = s.size();\n        for(int i =0;i<n/2;i++) // middle\n        {\n            swap(s[i],s[n-i-1]);\n        }\n            \n    }\n};\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("h3",{attrs:{id:"remove-element"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remove-element"}},[s._v("#")]),s._v(" "),e("strong",[s._v("Remove Element")])]),s._v(" "),e("p",[e("strong",[s._v("given an value,remove all the elements which equal to the value")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Input: nums = [3,2,2,3], val = 3\nOutput: 2, nums = [2,2]\n\nInput: nums = [0,1,2,2,3,0,4,2], val = 2\nOutput: 5, nums = [0,1,4,0,3]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("class Solution {\npublic:\n    int removeElement(vector<int>& nums, int val) {\n        // remove only delete the value,does not change the size and capacity\n        // return last-one point\n        // erase method will change size,but not include capacity\n        nums.erase(remove(nums.begin(), nums.end(), val), nums.end());  \n        // a = remove(nums.begin,...end()) return last element point(empty)\n        // erase(a,b) = delete a->b size\n\t\treturn nums.size();\n    }\n};\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h2",{attrs:{id:"move-zeroes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#move-zeroes"}},[s._v("#")]),s._v(" Move Zeroes")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Input: nums = [0,1,0,3,12]\nOutput: [1,3,12,0,0]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Input: nums = [0]\nOutput: [0]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("strong",[s._v("code")])]),s._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("class Solution {\npublic:\n    void moveZeroes(vector<int>& nums) {\n        if(nums.size()==1 || nums.size()==0)return;\n            \n        int i=0,j =0;\n        \n        while(j<nums.size()){\n       \n           if(nums[j]==0) j++;\n           \n           else{\n                swap(nums[i],nums[j]);\n                i++;j++;\n            }\n        }\n    }\n};\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);