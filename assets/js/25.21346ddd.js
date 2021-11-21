(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{512:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"stack-and-dfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stack-and-dfs"}},[s._v("#")]),s._v(" Stack and DFS")]),s._v(" "),a("h3",{attrs:{id:"different-from-bfs-the-nodes-you-visit-earlier-might-not-be-the-nodes-which-are-closer-to-the-root-node-as-a-result-the-first-path-you-found-in-dfs-might-not-be-the-shortest-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#different-from-bfs-the-nodes-you-visit-earlier-might-not-be-the-nodes-which-are-closer-to-the-root-node-as-a-result-the-first-path-you-found-in-dfs-might-not-be-the-shortest-path"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Different from BFS, "),a("code",[s._v("the nodes you visit earlier might not be the nodes which are closer to the root node")]),s._v(". As a result, the first path you found in DFS "),a("code",[s._v("might not be the shortest path")]),s._v(".")])]),s._v(" "),a("h2",{attrs:{id:"number-of-islands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#number-of-islands"}},[s._v("#")]),s._v(" Number of Islands")]),s._v(" "),a("p",[s._v("same question")]),s._v(" "),a("h2",{attrs:{id:"target-sum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#target-sum"}},[s._v("#")]),s._v(" Target Sum")]),s._v(" "),a("p",[s._v("You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols "),a("code",[s._v("+")]),s._v(" and "),a("code",[s._v("-")]),s._v(". For each integer, you should choose one from "),a("code",[s._v("+")]),s._v(" and "),a("code",[s._v("-")]),s._v(" as its new symbol.")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Input: nums is [1, 1, 1, 1, 1], S is 3. \nOutput: 5\nExplanation: \n\n-1+1+1+1+1 = 3\n+1-1+1+1+1 = 3\n+1+1-1+1+1 = 3\n+1+1+1-1+1 = 3\n+1+1+1+1-1 = 3\n\nThere are 5 ways to assign symbols to make the sum of nums be target 3.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[s._v("The length of the given array is positive and will not exceed 20.")]),s._v(" "),a("li",[s._v("The sum of elements in the given array will not exceed 1000.")]),s._v(" "),a("li",[s._v("Your output answer is guaranteed to be fitted in a 32-bit integer.")])]),s._v(" "),a("h3",{attrs:{id:"solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Solution")])]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Solution {\npublic:\n    int dp[21][2005];\n    int solve(vector<int>&nums,int curr,int idx,int sum)\n    {\n        if(idx == nums.size()) return (curr==sum)?1:0;\n        if(dp[idx][curr+1000]!=-1) return dp[idx][curr+1000];\n        return dp[idx][curr+1000] = solve(nums,curr-nums[idx],idx+1,sum)+solve(nums,curr+nums[idx],idx+1,sum);\n    }\n    int findTargetSumWays(vector<int>& nums, int sum) {\n        memset(dp,-1,sizeof(dp));\n        return solve(nums,0,0,sum);\n    }\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"decode-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decode-string"}},[s._v("#")]),s._v(" Decode String")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('Input: s = "3[a]2[bc]"\nOutput: "aaabcbc"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('Input: s = "3[a2[c]]"\nOutput: "accaccacc"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('Input: s = "2[abc]3[cd]ef"\nOutput: "abcabccdcdcdef"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('Input: s = "abc3[cd]xyz"\nOutput: "abccdcdcdxyz"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"solution-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution-2"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Solution")])]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Solution {\nprivate:\n    string helper(string s, int& pos) {\n        string word = \"\"; int num = 0;\n        \n        for (; pos < s.size(); pos++) {\n            if (s[pos] == '[') {\n                string ss = helper(s, ++pos);\n                \n                for (int i = 0; i < num; i++) word += ss; \n                \n                num = 0;\n            } else if (s[pos] == ']') {\n                return word;\n            } else if (isdigit(s[pos])) {\n                num = num * 10 + s[pos] - '0';\n            } else {\n                word += s[pos];\n            }\n        }\n        \n        return word;\n    }\npublic:\n    string decodeString(string s) {\n        int pos = 0; \n        \n        return helper(s, pos);\n    }\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("h2",{attrs:{id:"flood-fill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flood-fill"}},[s._v("#")]),s._v(" Flood Fill")]),s._v(" "),a("p",[s._v("An "),a("code",[s._v("image")]),s._v(" is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).")]),s._v(" "),a("p",[s._v("Given a coordinate "),a("code",[s._v("(sr, sc)")]),s._v(" representing the starting pixel (row and column) of the flood fill, and a pixel value "),a("code",[s._v("newColor")]),s._v(', "flood fill" the image.')]),s._v(" "),a("p",[s._v('To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.')]),s._v(" "),a("p",[s._v("At the end, return the modified image.")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Input: \nimage = [[1,1,1],[1,1,0],[1,0,1]]\nsr = 1, sc = 1, newColor = 2\nOutput: [[2,2,2],[2,2,0],[2,0,1]]\nExplanation: \nFrom the center of the image (with position (sr, sc) = (1, 1)), all pixels connected \nby a path of the same color as the starting pixel are colored with the new color.\nNote the bottom corner is not colored 2, because it is not 4-directionally connected\nto the starting pixel.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"solution-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution-3"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Solution")])]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Solution {\npublic:\n    void paint(vector<vector<int>>&image,int sr,int sc, int oldcolor,int newColor,vector<vector<int>>& canvas){\n        \n        if(sr<0||sc<0||sr>=image.size()||sc>=image[0].size())                          //out of bound condition\n            return;\n        if(canvas[sr][sc]!=oldcolor)                                                   //color not matches\n            return;\n        if(newColor==oldcolor)                                                         //if color is same\n            return;\n        \n        canvas[sr][sc]=newColor;\n        paint(image,sr-1,sc,image[sr][sc],newColor,canvas);         //check upward\n        paint(image,sr,sc+1,image[sr][sc],newColor,canvas);         //check right\n        paint(image,sr+1,sc,image[sr][sc],newColor,canvas);         //check downward\n        paint(image,sr,sc-1,image[sr][sc],newColor,canvas);         //check left\n        \n        return;\n        \n    }\n    \n    \n    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int newColor) {\n        \n        vector<vector<int>> canvas =image;\n        paint(image,sr,sc,image[sr][sc],newColor,canvas);\n        return canvas;\n        \n    }\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("h2",{attrs:{id:"_01-matrix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01-matrix"}},[s._v("#")]),s._v(" 01 Matrix")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Input:\n[[0,0,0],\n [0,1,0],\n [0,0,0]]\n\nOutput:\n[[0,0,0],\n [0,1,0],\n [0,0,0]]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Input:\n[[0,0,0],\n [0,1,0],\n [1,1,1]]\n\nOutput:\n[[0,0,0],\n [0,1,0],\n [1,2,1]]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"solution-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution-4"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Solution")])]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Solution {\npublic:\n   const int MAX = 10000;\n    vector<vector<int>> updateMatrix(vector<vector<int>>& matrix) {\n        for(int i = 0; i < matrix.size(); i++)\n            for(int j = 0; j < matrix[0].size(); j++)\n                if(matrix[i][j])\n                    matrix[i][j] = MAX;\n        \n        for(int i = 0; i < matrix.size(); i++)\n            for(int j = 0; j < matrix[0].size(); j++)\n                if(matrix[i][j])\n                    dfs(matrix, i, j);\n        return matrix;\n    }\n    \n    int dfs(vector<vector<int>>& matrix, int r, int c)\n    {\n        if(r < 0 || c < 0 || r >= matrix.size() || c >= matrix[0].size() || matrix[r][c] == -1)\n            return MAX;\n        \n        if(matrix[r][c] == 0 || matrix[r][c] == 1)\n            return matrix[r][c];\n        \n        int temp = matrix[r][c];\n        \n        matrix[r][c] = -1;\n        \n        int left = dfs(matrix, r, c-1);\n        int right = dfs(matrix, r, c+1);\n        int down = dfs(matrix, r-1, c);\n        int up = dfs(matrix, r+1, c);\n        \n        matrix[r][c] = min({temp, left + 1, right + 1, down + 1, up + 1});\n        return matrix[r][c];\n    }\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br")])]),a("h2",{attrs:{id:"keys-and-rooms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keys-and-rooms"}},[s._v("#")]),s._v(" Keys and Rooms")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Input: [[1],[2],[3],[]]\nOutput: true\nExplanation:  \nWe start in room 0, and pick up key 1.\nWe then go to room 1, and pick up key 2.\nWe then go to room 2, and pick up key 3.\nWe then go to room 3.  Since we were able to go to every room, we return true.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Input: [[1,3],[3,0,1],[2],[0]]\nOutput: false\nExplanation: We can't enter the room with number 2.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"solution-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution-5"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Solution")])]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Solution {\npublic:\n   bool canVisitAllRooms(vector<vector<int>>& rooms) {\n        unordered_map<int, bool> room; //Check if this room is open\n        bool check = true; //Check if have any new room open\n        room[0] = true; //First room always open\n        \n        while(check){\n            check = false; //No new room at first\n            for(int i = 0; i < rooms.size(); i++){\n                if(!rooms[i].size()){ //If this is empty, skip\n                    room[i] = true;\n                    continue;\n                }\n                if(room[i]){ //If this room is open\n                    for(int j:rooms[i]){ //Keys\n                        if(!room[j]){ //If they relative room is close,\n                            room[j] = true; //Open the room\n                            check = true; //New room found\n                        }\n                    }\n                }\n            }\n        }\n        \n        for(auto i:room){\n            if(!i.second){ //If there is still having any close room, return false\n                return false;\n            }\n        }\n        \n        return true;\n    }\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);