## HappyMall-admin

### 技术栈：

> React+React-Router，结合yarn,webpack,ES6和Sass等技术,在ajax请求中使用Jquery，文档结构用了bootstarp中的一个主题。

### 特点：前后端分离，模块化

### 功能模块

* 通用模块：
    通用组织结构，通用菜单，通用导航
    
* 用户模块：
    登录，退出，用户列表
    
* 商品模块：
    带筛选的商品列表，商品详情，添加/修改商品
    
* 品类模块：
    品类列表，添加品类，修改品类名称
    
* 订单模块：
    带筛选的订单列表，订单详情

## 技术学习：

  * React：JSX表达式,组件的分离与组装，生命周期的使用，虚拟DOM的理解，数据管理方式。
 
  * React-Router：浏览器路由原理，动态路由，声明式路由，路由组件的封装
 
  * cookie+session：资源加载原理，cookie操作，用户信息保存机制，本地存储
 
  * 工具的使用：webpack资源打包，webpack-dev-server配置，ES6转换工具Babel,包管理工具Yarn,Sass语言
 
  * 项目部署上线：em..准备上线来着，等我完善了商城的东西一起更新。

## 项目的启动：

* 项目启动：yarn dev

* 项目打包：

> * yarn dist   (linux和mac)  

> * yarn dist_win(windows)

* 访问：<http://localhost:8083>

## 用到的工具网址：

* [后台数据接口地址](https://gitee.com/imooccode/happymmallwiki/wikis)

* [项目中使用的主题地址](https://webthemez.com/demo/insight-free-bootstrap-html5-admin-template/ui-elements.html#)

* [《Font-awesome》图标字体库](http://fontawesome.dashgame.com/)

* [Webpack中文官网地址](https://doc.webpack-china.org/)

## 项目跨域问题：

   > 在webpack中配置代理,改变其域名`changeOrigin: true`.
