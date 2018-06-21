<h1>HappyMall-admin</h1>
<h3>技术栈：React+React-Router，结合yarn,webpack,ES6和Sass等技术,在ajax请求中使用Jquery，文档结构用了bootstarp中的一个主题。
<h3>特点：前后端分离，模块化

<h2>功能模块</h2>
<h4>1. 通用模块：
    通用组织结构，通用菜单，通用导航
<h4>2. 用户模块：
    登录，退出，用户列表
<h4>3. 商品模块：
    带筛选的商品列表，商品详情，添加/修改商品
<h4>4. 品类模块：
    品类列表，添加品类，修改品类名称
<h4>5. 订单模块：
    带筛选的订单列表，订单详情

<h2>技术学习：</h2>
1. React：JSX表达式,组件的分离与组装，生命周期的使用，虚拟DOM的理解，数据管理方式。
2. React-Router：浏览器路由原理，动态路由，声明式路由，路由组件的封装
3. cookie+session：资源加载原理，cookie操作，用户信息保存机制，本地存储
4. 工具的使用：webpack资源打包，webpack-dev-server配置，ES6转换工具Babel,包管理工具Yarn,Sass语言
5. 项目部署上线：em..准备上线来着，等我完善了商城的东西一起更新。

<h2>项目的启动：</h2>
1. 项目启动：`yarn dev`
2. 项目打包：`yarn dist`[linux和mac]  
           `yarn dist_win`[windows]
3. 访问：<http://localhost:8083>

<h2>用到的工具网址：</h2>
1. [后台数据接口地址](https://gitee.com/imooccode/happymmallwiki/wikis)
2. [项目中使用的主题地址](https://webthemez.com/demo/insight-free-bootstrap-html5-admin-template/ui-elements.html#)
3. [《Font-awesome》图标字体库](http://fontawesome.dashgame.com/)
4. [Webpack中文官网地址](https://doc.webpack-china.org/)

<h2>项目跨域问题：</h2>
    <p>在webpack中配置代理,改变其域名`changeOrigin: true`.
