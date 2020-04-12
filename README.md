 git init
git status
git add .
git commit -m "提交信息"
git push

git config --global user.name "Hu_song"
git config --global user.email "2389268197@qq.com"
git remote rm origin
git remote add origin https://gitee.com/UNIQUE--HS/vueApp.git
git push -u origin master




1  建立项目文件夹
2  终端运行 yarn init -y
3  yarn add webpack webpack-cli -D
4  创建index.html  main.js
5  创建webpack.config.js  配置mode entry output等等信息  //测试用命令 npx webpack
6  配置devServer   package.json里面加scripts   注意配置dev   build  不同的打包
7  yarn add webpack-dev-server -D      /测试用命令 npx run webpack-dev-server   npm run dev
8  yarn add html-webpack-plugin -D    webpack.config.js 里面配置该插件 //自动在dist目录根据模板生成html文件
9  注意哈更新目录
10  配置样式插件  modules
11 yarn add css-loader  style-loader -D
12 src下面新建index.css    main.js中加入 require('./index.css')  同理less  scss  less-loader sass-loader
13 抽离css    yarn add mini-css-extract-plugin -D
14 注意npm run dev 和npm run build  第6条
15  yarn add postcss-loader  autoprefixer -D   //样式适配加前缀插件     postcss-loader
16  创建postcss.config.js     
17 在package.json中配置browserslist
18 yarn add optimize-css-assets-webpack-plugin -D   //css压缩    webpack.config.js配置

//es5 es6转化
19  yarn add babel-loader @babel/core @babel/preset-env -D  
20  yarn add @babel/plugin-proposal-decorators -D
21 yarn add @babel/plugin-transform-runtime -D
22 yarn add @babel/runtime
npm install --save-dev @babel/plugin-proposal-class-properties  //编译类插件
22 yarn add @babel/polyfill  //  转化高级语法  那个js文件需要  就在该文件开头加上require('@babel/polyfill')

23 yarn add eslint eslint-loader  -D   // eslint.org  官网去配置下载json文件
24 yarn add jquery  //一些库需要依赖jquery
25 注意一些引入全局变量问题

26 yarn add file-loader -D --ignore-engines   //下载file-loader  解决打包图片问题   在webpack.config.js配置插件
27  yarn add url-loader -D --ignore-engines // 使用这个  将那个小图片转为base64打包
28 npm install html-withimg-loader --save-dev // 在webpack.config.js配置插件  解决html直接使用img标签使用图片

webpack引入vue
29 npm i vue -$ 
30 npm i vue-loader vue-template-compiler -D  //yarn 不行就用npm
31 main.js 加import Vue from "vue
32 config.js  配置{test:/\.vue$/,use:'vue-loader}  
33 config.js  配置let VueLoaderPlugin = require('vue-loader/lib/plugin');  plugins里面加上 new VueLoaderPlugin(), 
34 创建main.vue文件，在main.js文件中用import将其引入  import main from './main.vue'
35 在main.js中创建new Vue 对象  用render传递main     render:param => param(main),
36  npm i vuex-$ 
37 npm i vue-router -$
38 main.js中  
    import Vuex from 'vuex'
    Vue.use(Vuex)
    import VueRouter from 'vue-router'
    Vue.use(VueRouter)

39 export default {}一个文件只能用一次  接收：import xxx from 'xx.js'
40 export title{}  可以多个  接收：import { title } from 'xx.js

npm i 
npm install babel-plugin-component -D

42  在mui的example里面查找图标样式等

制作
1 app首页
    Mint-UI 的Header
    MUI的Tabbar.html
        购物车--拷贝扩展css样式到lib 
        拷贝扩展字体库ttf文件到lib
        为购物车小图标添加样式 "mui-icon mui-icon-extra mui-icon-extra-cart" 在mui的example里面查找图标样式，源码有样式名称
    设置路由高亮
        方式1 检查样式 查看router-link-active 类 自己定义重写  现成的有 mui-active
        方式2 在router.js中设置linkActiveClass: 'mui-active' 也可以自己写mui-active类