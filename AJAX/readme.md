# AJAX
学习链接【b站】
 https://www.bilibili.com/video/BV1WC4y1b78y?p=25&vd_source=9d601459a3b282816969e39b91d0eb59

【尚硅谷】3小时Ajax入门到精通

## Ajax简介

- Ajax全称为Asynchronous Javascript And XML，即异步JS和XML
- 通过Ajax可以在浏览器中向服务器发送异步请求，最大的优势：**无刷新获取数据**
- AJAX不是新的编程语言，而是一种将现有的标准组合在一起使用的新方式

## XML简介

- XML：可扩展标记语言
- XML：被设计用来传输和存储数据
- XML和HTML类似，不同点：HTML中都是预定义标签，XML中没有预定义标签，全是自定义标签，用来表示一些数据
- 现在已被JSON取代


#### 1.3.1 AJAX的优点

1. 可以无刷新页面与服务端进行通信
2. 允许你根据用户事件来更新部分页面内容

#### 1.3.2 AJAX 的缺点
1. 没有浏览历史，不能回退
2. 存在跨域问题（同源）
3. SEO不友好（爬虫获取不到信息）

# 2-原生AJAX
## index-get.html
1. 报错  不允许跨域
```js
from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested 
```
要在服务器端的响应头加上允许跨域

2. xhr (AJAX请求的筛选) :xml  http  request

3. f12 > Network  : 请求/响应报文
> 行  HTTP/1.1 200  OK    版本  状态码  状态字符串
> 头  Content-Type: text/html;charset=utf-8
>     Content-length: 2048
>     Content-encoding: gzip
> 空行
>体  html代码

4. xhr  XMLHttpRequest  AJAX请求

## GET请求URL传参
> xhr.open('GET','http://127.0.0.1:3000/server?a=100&b=200&c=300')
1. 使用? &分割
2. f12 > network > query string parameter

## index-post.html
1. url里不要忘记写端口号
2. server要有对应的post方法
3. post传数据，放send里 
4. 设置请求头信息
    1. 预定义的直接写 
    2. 自定义的 服务器端设置所有请求头都接受 response.setHea
    3. 服务器端所有请求都处理  app.all

# 3-响应JSON数据
1. server不要忘记request 和 response
2. post请求 参数放send里
3. post请求自定义响应头传参
4. 自动解析json
5. 手动解析json

# nodemon  
> nodemon 是一种工具，可在检测到目录中的文件更改时通过自动重新启动 node 应用程序来帮助开发基于 node.js 的应用程序。
因为之前总是修改服务器端内容，每次都要重启，十分麻烦

# AJAX IE缓存的解决办法
url 不同，浏览器会默认为不同的请求
```js
xhr.open('GET','http://127.0.0.1:3000/ie?t='+new Date())
        xhr.open('GET','http://127.0.0.1:3000/ie?t='+Date.now())
```
# 5-请求超时和网络异常
```js
//1. 超时设置 取消请求 (还没有返回数据 就把请求取消)
        xhr.timeout=2000
        //2. 超时回调
        xhr.ontimeout = ()=>{
            alert('超时')
        }
        //3.网络异常回调
        xhr.onerror = ()=>{
            alert('网络异常')
        }
```

# 6-手动取消请求
前提：请求一直未成功（服务器端用延迟模拟）
未请求成功期间 手动取消
**abort() 方法**
1. f12 看状态：network > name(请求的页面服务器端)  status:pedding(请求中可以中途取消)  
2. status 200成功 
3. status canceled取消请求

# 8-
bootcdn 下次jquery
jquery中文文档 可以查看ajax个性化的设置属性

# 9-Axios 
vue 和 react 推荐 的AJAX请求工具库
axios:引入 1. npm  2. script标签

# 10-fetch
使用全局方法fetch发送ajax请求
> 位于 workerOrGlobalScope 这一个 mixin 中的 fetch() 方法用于发起获取资源的请求。
> 它返回一个promise，这个 promise 会在请求响应后被 resolve，并传回 Response 对象。

# 11-同源策略

同源策略（Same-Origin Policy）最早由 Netscape 公司提出，是浏览器的一种安全策略。

 同源：协议、域名、端口号 必须完全相同

违背同源策略就是跨域

# 12- JSONP

1. JSONP是什么

   JSONP (JSON with Padding)，是一个非官方的跨域解决方案，纯粹凭借程序员的聪明才智开发出来，只支持get请求

2. JSONP 怎么工作的？

   在网页有一些标签天生具有跨域能力，比如：img, link, iframe, script

   JSONP就是利用**script**标签的跨域能力来发送请求的

3. JSONP的使用

   - 动态的创建一个script标签

   ```js
   var script = document.createElement("script");
   ```

   - 设置script的src，设置回调函数

   ~~~js
   script.src = "http://locallhost:3000/textAJAX?callback=abc"
   ~~~

   

# 13 CORS

推荐阅读：

- http://www.ruanyifeng.com/blog/2016/04/cors.html
- https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS

1. CORS是什么？

   CORS (Cross-Origin Resource Sharing), 跨域资源共享。CORS 是官方的跨域解决方案，它的特点是不需要在客户端做任何特殊的操作，完全在服务器中进行处理，支持 get 和 post 等请求。跨域资源共享标准新增了一组 HTTP  首部字段（响应头），允许服务器声明哪些源站通过浏览器有权限访问哪些资源

2. CORS怎么工作的？

   CORS 是通过设置一个响应头来告诉浏览器，该请求允许跨域，浏览器收到该响应以后就会对响应放行。

3. CORS 的使用

   主要是服务端的设置：

   ```js
   rounter.get("/testAJAX",function(req, res){
   
   })
   ```