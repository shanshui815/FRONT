
# case1-order
- 搭建订单页面，输入内容，生成订单

# case2
- 随机抽奖.html 
    1. 随机数-列表-人名
    2. 随机数-图片名-更换图片
    3. 随机数-背景图片更换
- 轮播图-刷新.html
    1. 不是轮播，刷新随机显示数组里的图片路径（得手动刷新）
    2. const li  =document.querySelector(`.slider-indicator li:nth-child(${index+1})`)
- 轮播图.html
    1. querySelector 里面选择器要加点
    2. 第一个li在html里要加active，不然底下删除找不到会报错
- 用户注册倒计时
    1. 设置定时器，1秒 （60秒阅读后按钮可点击）
    2. index==0  ？ 清除定时器，按钮可点击，内容修改： 内容上的时间修改

# case3 
- 随机点名案例.html 
    1. 最后一个，开始键disabled
- 小米搜索框.html
    1. input.classList.add('search')  属性名不是类不用加点
    2. 焦点事件
- 评论回车发布.html
    1. rows 可见行数 <textarea placeholder="请输入..." rows="2" maxlength="200" ></textarea>
    2. focus blur input 获取长度渲染
    3. 平滑拉伸 transition :all .2s
- tab栏切换
    1. hover和mouseenter :移开后是否会恢复原状
    2. 表头和表体用i来连接
    优化后：
    1. 取消for循环
    2. 使用自定义属性标识第几个content
    
# case4
- 全选反选案例.html
    1. 通过css的伪类选择器   .ck:checked{ weight:20px;heght:20px}  实现勾选样式改变
    2. 查找所有被选中的标签 document.querySelectorAll(".ck:checked")
    3. **代码简化**：给全选赋值 全选接受布尔值，判断返回布尔值=》让全选按钮 被赋值为 判断条件
```js
checkAll.checked = document.querySelectorAll(".ck:checked").length === cks.length
        // if(document.querySelectorAll(".ck:checked").length ==cks.length){
        //   checkAll.checked = true
        // }else{
        //   checkAll.checked = false
        // }
```

- 事件捕获冒泡.html
    1. 父级 且 同名事件 ，触发后会 产生事件流动
    2. 阻止方法 e.stopPropagation()
    3. 解绑事件 removeEventListener()
    4. 事件流：捕获-document html body div-冒泡
 
 - 事件委托.html
    1. 不再对每个li进行事件绑定 ，省略for循环
    2. 把事件绑定到父亲，利用**事件冒泡**对当前点击的标签进行事件触发
    3. e.target  是当前这个对象，点击的标签，本质是个对象；
    4. e.target.tagName 可以用来判断这个标签是否是自己的目标标签，（不是每种类型的子元素都要绑定相同的事件）

- 页面加载.html 
    1. load
    2. DOMContetnLoad

- 页面滚动.html
    1. div 滚动
    2. 页面滚动，卷去多少像素
    3. 获得body :document.body  ; 获得html :document.documentElement
    4. 首先要有滚动条

- 页面尺寸事件.html
    1. window.addEvent resize 页面尺寸改变的时候出发事件 
    2. clientWidth  padding *2 + width
    3. 获取宽高 offsetWidth  offsetHeight
    4. 获取位置 offsetLeft offsetTop
    offsetLeft/Top  带定位元素的父级  不可读写   |  scrollTop/Left 卷走的长度 可读写
    offsetWidth/offsetHeight   自己padding border  | clientWidth/clientHeight  自己 padding
    div.getBoundingClientRect()   返回元素的大小及其相对视口的位置

- **电梯导航**
    1. 排他思想 添加判断
    2. 导航栏平滑移动
```css
html{
  scroll-behavior: smooth;
}
```
3. 要持续监听的，就要放监听函数里
4. 通过小盒子的自定义属性（是大盒子属性的一部分），来获取大盒子，使用模板选择器：.querySelector(`.xtx_goods_${e.target.dataset.name}`)
5. 通过属性选择器获取元素
    1. [type] 
    2. input[type]
    3. input[type=text]
    4. [data-name]
    5. [data-name=news]

# case5
- 1-Date对象.html
1. 将当前时间以:YYYY-MM-DD HH:mm 形式显示在页面 2008-08-08 08:08
2. 年月日时分秒+星期  月和星期从0开始
3. setInterval() 定时器 1秒更新一次
4. 简便快速  date.toLocaleString()

- 2-时间戳.html
1. 时间戳计算 倒计时的  毫秒数 （是指1970年01月01日00时00分00秒起至现在的毫秒数）
2. 显示星期 使用数组
3. 计算相差的天数
    1. 获取这两天的时间戳
    2. 相减
    3. 除 （24*60*60*1000）一天的毫秒数

- **3-倒计时.html**
1. 随机刷新背景颜色
2. 通过秒数获取时分秒
> let d = parseInt(count/60/60/24) //天数
      let h = parseInt(count/60/60%24) //小时
      let m = parseInt(count/60%60) //分钟
      let s = parseInt(count%60)//秒

- 4-DOM节点
1. 父亲，孩子们 ，前一个兄弟，下一个兄弟
> console.log(me.parentNode.parentNode)
        console.log(me.nextElementSibling)
        console.log(me.previousElementSibling)
        xx.children  数组对象

- 5-添加节点.html
1. ul.appendChild(li) //在后面
2. ul.insertBefore(l,ul.children[0])

- 6-克隆删除节点
- 7-M端事件 
移动端 触摸 离开 滑动

- 8-swiper插件使用 & FC
> 熟悉官网,了解这个插件可以完成什么需求 https://www.swiper.com.cn/
> 看在线演示,找到符合自己需求的demo https://www.swiper.com.cn/demo/index.htm
> 查看基本使用流程 https://www.swiper.com.cn/usage/index.html
> 查看APi文档,去配置自己的插件https://www.swiper.com.cn/api/index.html
> 注意:多个swiper同时使用的时候,类名需要注意区分

- 学生信息表
1. form下的button 标签默认type为submit ,会跳转到form中的action地址。如果想让它跳转到button里的地址，使用type='button'
2. 浏览器对button的默认类型不同，每个button尽量写type
3.  <form class="info" autocomplete="off">
4. this.reset()  重置就是清空
5. 每次渲染，把之前渲染的列表清空  tbody.innerHTML=''
6. 删除操作，事件委托，选父亲，再确定是父亲里的哪个儿子
7. 父亲选择要唯一的，比如a或者tr td 就太多了，要一个个for，违背了事件委托的初衷，所以选tbody
8. 通过自定义属性删除对应数据
9. 通过属性选择器获取带name  的表单元素

- **学成在线重构**
1. 使用创建节点 渲染ul
2. 先获取父亲，再遍历data,创建li,li的innerHTML 加内容，使用模板字符串

- 6-克隆删除节点.html
1. 有父亲就可以对孩子进行添加 ，直接append
2. 有父亲就可以在孩子的指定位置添加 . insertBefore
3. 有父亲可以删除孩子
4. 有父亲可以添加上 ，克隆的某个孩子 。 true 深克隆；  flase 内容不克隆

- 7-M端事件.html
> touchstart
touchmove
touchend
手指触摸到一个 DOM 元素时触发
手指在一个 DOM 元素上滑动时触发
手指从一个 DOM 元素上移开时触发

# case6
- 延时函数.html 
1. 和间歇函数用法相同
2. xx.setTimeout()是错的
3. BOM > DOM  (window.fn   window.document.xxx 是对的)

- **js执行机制.html**（面试必问）
1. js单线程 浏览器多线程
2. event loop  事件循环
3. 先执行主线程执行栈里的代码 ，有异步任务在交给浏览器的异步进程处理，异步任务完成后推到任务队列里，主线程执行完毕后循环读取任务队列里的任务 
4. （pink -js API-127-事件循环）

- 5秒后跳转页面效果.html
1. 首先是个链接，可以点击跳转
2. 如果不点击，使用间歇函数递减秒数，倒计时结束就跳转

- location.html
1. location.href
2. location.search  ?后面的值  （表单提交获取name  password）
3. location.hash  #后面的值  （页面不跳转，更改显示的内容）
4. 后期vue路由的铺垫，经常用于不刷新页面，显示不同页面，比如 网易云音乐
5. location.reload() f5刷新
6. location.reload(true) ctrl+f5 强制刷新

- navigator.html
1. 判断是pc端还是移动端
2. history go(-1) 后退， go(1) 前进
 
- localStorage.html
1. 可以将数据永久存储在本地(用户的电脑),除非手动删除，否则关闭页面也会存在
2. sessionStorage 关闭浏览器窗口就消失，用法同localStorage
3. 键值对 加引号，否则就认为是变量
4. 存储后会转为字符串，取出来的也是字符串
5. f12 applicaton (如果跨域不共享数据，同一个域切换页面localStorage仍然存在)
6. 存对象 ，JSON.stringify   JSON.parse

- 综合案例-学生就业统计表案例.html
1. return alert('')
2. 阻止跳转 e.preventDefault()
3. this.reset()
4. let data = JSON.parse(localStorage.getItem('arr')) ||[]
5. 先获取本地数据，否则用空的arr去写，会覆盖之前的数据
6. data-id 必须来源于index索引，如果来源于uid ，删除后data-id与在数组中的位置不符
7. 因为删除是删除arr里的第i个，所以这个i要根据当初由arr渲染时候的i绝对（而不是id,id删除后在数组中的顺序与id本身的号不符合）
8. id号是最大值+1 或者1  uId:arr.length? arr[arr.length-1].uId+1:1,
9. confirm


# case7
- 01-正则表达式.html
> 正则表达式是什么?
> 是用于匹配字符串中字符组合的模式2.
> 正则表达式有什么作用?
> 1. 表单验证(匹配)
> 2. 过滤敏感词(替换)
> 3. 字符串中提取我们想要的部分(提取)

1. 正则表达式检测查找 test方法和exec方法有什么区别?
test方法 :用于判断是否有符合规则的字符串，返回的是布尔值 找到返回true，否则false
exec方法:用于检索(查找)符合规则的字符串，找到返回数组，否则为 null

- 02-元字符.html

- 03-正则修饰符.html
1. i 不区分大小写 g全局  ig结合
2. replace 返回值

- 04-验证用户名案例.html
1. span.classList.add('right')
2. span.className='right'  会覆盖

- 综合案例-register
1. 发送验证码
    1. 用户体验更好，一点击就改变
    2. 点击事件里再setInterval  ，不能用this 
    3. 节流阀，定时任务期间不可以点击（不一定是button）不能点击就相当于不执行代码
2. 验证用户名
    1. innerText
    2. span 没有class ,使用nextSibiling
    3. change 相比blur  只有变化才会触发
    4. **正则不能有空格 ！！！！**
3. 勾选阅读协议 & form提交
    1. toggle 有删除，无添加（className）
    2. form的submit
    3. 验证是否勾选 classList.contains 
    4. 验证是否都满足条件
    5. 阻止跳转
    6. 历史记录 autocomplete="off"


- 综合案例-login
1. 排他思想 +data-id +笨办法
2. return alert(" xxx ")
3. 本地存储 

- 综合案例-index
1. href="" ，javascript:;相当于javascript:void(0); 什么都不执行
```js
<a href=""> 你好</a>
    <a href="javascript:;"> 你好</a>
```
2. 渲染单独封装函数render()


- 素材-小兔鲜详情页
small 鼠标经过 切换大中小图片，并且small边框变化（排他）
1. click 有冒泡  mouseover 有冒泡（事件委托） ；mousenter 无冒泡
2. 有active 就用排他，没有for+ 自定义属性id

经过离开中图，大图显示隐藏，隐藏延迟
1. 显示隐藏封装 display
2. 延迟timeout
3. bug 快速经过会空白：使用同一个timeid  （显示:不管有没有延迟任务，先清除id ）

大图内容根据中途改变，并且，一进入页面就默认显示图一（其他大图都是经过小图显示）
1. 小图mouseover时候：大图的backgroundImage :`url(${e.target.src} )`
2. 大图的css backgroun-image 设置默认


注意：
1. mouseenter  两个e
2. mouseenter 对应mouseleave


----------------------------------
# practice目录
- 230410.html     ： map reduce filter 
- 230411.html     ： 字符串数组方法 
- 230417-1.html   ： 渲染柱形图案例 
- 230411-1.html   ： 遍历的方法     
- 230420.html     :  99乘法表
- 学生信息渲染.html： 渲染列表
- 随机数.html     :  随机点名案例
- 随机颜色案例.html
- 表单操作.html   : 表单  ； 密码可见 ；全选 ；按钮不可按 ； 自定义属性

# trash目录 ： 练习用的垃圾桶


const lists = ['zxx','yxx','xigua','caoming','gezi','baolu','linyi']

