
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

- 综合案例-register.html
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


- 综合案例-login.html
1. 排他思想 +data-id +笨办法
2. return alert(" xxx ")
3. 本地存储 

- 综合案例-index.html
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

# case8 
## **作用域**（面试）
- 作用域
1. 作用域 局部 全局
2. 局部 分 块级 和函数 
3. const let 产生块级作用域
4. 全局作用域有哪些?  <script> 标签内部  ；.js 文件
- 作用域链
> 作用域链本质上是底层的变量查找机制。
> 在函数被执行时，会优先查找当前函数作用域中查找变量
> 如果当前作用域查找不到,则会依次逐级查找父级作用域,直到全局作用域
- 垃圾回收机制 
##  01-闭包.html  面试
1.怎么理解闭包? 
> 闭包 = 内层函数 + 外层函数的变量
2.闭包的作用?封闭数据，实现数据私有，外部也可以访问函数内部的变量闭包很有用，因为它允许将函数与其所操作的某些数据(环境)关联起来Y3.闭包可能引起的问题?
>内存泄漏

## 02-变量和函数提升.html
注意:
1. 变量在未声明即被访问时会报语法错误
2. 变量在var声明之前即被访问，变量的值为 undefined
3. let/const声明的变量不存在变量提升
4. 变量提升出现在相同作用域当中
5. 实际开发中推荐先声明再访问变量（const let）
> 初学者经常花很多时间才能习惯变量提升，还经常出现一些意想不到的bug，正因为如此，ES6 引入了块级作用域用let 或者const声明变量，让代码写法更加规范和人性化。

6. 用哪个关键字声明变量会有变量提升? : var
7. 变量提升是什么流程?
> 先把var 变量提升到当前作用域于最前面只提升变量声明，不提升变量赋值,然后依次执行代码
8. 我们不建议使用var声明变量
9. 函数提升能够使函数的声明调用更灵活
10. 函数表达式不存在提升的现象
11. 函数提升出现在相同作用域当中

## 03-剩余参数和展开运算符.html
1. arguments 是一个伪数组，只存在于函数中(没有push pop,箭头函数没有arguments)
2. arguments的作用是动态获取函数的实参
3. 可以通过for循环依次得到传递过来的实参

> 展开运算符 or 剩余参数
> 剩余参数:函数参数使用，得到真数组
> 展开运算符:数组中使用，数组展开 

## 04-ES6箭头函数.html
1. 箭头函数属于表达式函数，因此不存在函数提升
2. 箭头函数只有一个参数时可以省略圆括号 ()
3. 箭头函数函数体只有一行代码时可以省略花括号，并自动做为返回值被返回
4. 加括号的函数体返回对象字面量表达式（对象加括号）
> 箭头函数里面有arguments动态参数吗?可以使用什么参数?
> 没有arguments动态参数
> 可以使用剩余参数 ..arr(arr是真数组，有push pop) 

## 05-箭头函数的this.html
1. **在开发中使用箭头函数前需要考虑函数中 this 的值**
2. 事件回调函数使用箭头函数时，this 为全局的 window，因此DOM事件回调函数为了简便，还是不太推荐使用箭头函数
3. 箭头函数里面有this吗?   
> 箭头函数不会创建自己的this,它只会从自己的作用域链的上一层沿用thiS
4. DOM事件回调函数推荐使用箭头函数吗?
>不太推荐，特别是需要用到this的时候。事件回调函数使用箭头函数时，this 为全局的 window
```js
/*回调函数里的this*/
        const btn = document.querySelector('button')
        // btn.addEventListener('click',function(){
        //     alert(this)  //object  this指向btn
        // })

        btn.addEventListener('click',()=>{
            alert(this)//window
        })
```
## 06-解构赋值-数组.html
> 数组解构是将数组的单元值快速批量赋值给一系列变量的简洁语法。基本语法:
1. 赋值运算符 =左侧的用于批量声明变量，右侧数组的单元值将被赋值给左侧的变量
```js
const [a,b,c] =[1,2,3] //中括号，一一对应
```
2. 变量的顺序对应数组单元值的位置依次进行赋值操作
3. 注意: js 前面必须加分号情况

> 1.数组解构赋值的作用是什么?
> 是将数组的单元值快速批量赋值给一系列变量的简洁语法
> 2.Js前面有两哪种情况需要加分号的?
> 立即执行函数 ; 数组解构

1. 变量少 单元值多
2. 变量多 单元值少的情况:
3. 利用剩余参数解决变量少 单元值多的情况:
4. 防止有undefined传递单元值的情况，可以设置默认值:
5. 按需导入，忽略某些返回值:
6. 支持多维数组的结构

> 1.变量的数量大于单元值数量时，多余的变量将被赋值为?
> undefined
> 2.变量的数量小于单元值数量时，可以通过什么剩余获取所有的值?剩余参数...获取剩余单元值，但只能置于最末位

## 07-多级对象解构案例.html
**对象解构是将对象属性和方法快速批量赋值给一系列变量的简洁语法**
1. 基本语法:
```js
const obj ={
    name:'zxx'
    age:33
}
const {name,age} =obj  //属性名复制，要相同。
```
3.注意解构的变量名不要和外面的变量名冲突否则报错
4.对象中找不到与变量名一致的属性时变量值为 undefined

## 08-渲染商品案例.html
1. list用innerHTML渲染
2. innerHtml 用str赋值
3. str提前声明 =''
4. str 用list对象数组填充
5. list数组遍历forEach ，用模板，str+=
6. 模板字符串里的变量使用 对象解构，就不用每次item.xxx了

## (综合) 09-综合案例-价格筛选.html
1. filter :箭头 + 过滤 +新的数组 +不写return 
2. e.target.dataset  e.target.tagName  使用解构
3. dataset.index  自定义是是字符串类型的  index==='1'
4. css focus 可以使用tab切换 ; active
5. tab栏切换：使用css或者js(排他思想)

# case9

## 04-Object
object 
assign
静态方法 keys values
## 05-Array常用方法.html
1. forEach filter map reduce 
5.实例方法 join 数组元素拼接为字符串，返回字符串(重点)
6.实例方法 find 查找元素，返回符合测试条件的第一个数组元素值，如果没有符合条件的则返回 undefined(重点)
7.实例方法 every 检测数组所有元素是否都符合指定条件，如果所有元素都通过检测返回 true，否则返回 false(重点)
8.实例方法 some 检测数组中的元素是否满足指定条件 如果数组中有元素满足条件返回 true，否则返回false
9.实例方法 concat 合并两个数组，返回生成新数组
10.实例方法 sort 对原数组单元值排序
11.实例方法 splice 删除或替换原数组单元
12.实例方法 reverse 反转数组
13.实例方法 findIndex 查找元素的索引值
14.(静态方法)伪数组转换为真数组 const zhen = Array.from(wei)

## 06-String常用方法.html
1.实例属性 length 用来获取字符串的度长(重点)
2.实例方法 split(分隔符 ) 用来将字符串拆分成数组(重点)
3.实例方法 substring (需要截取的第一个字符的索[,结束的索引号]) 用于字符串截取(重点)4.实例方法 startswith(检测字符串[，检测位置索引号]) 检测是否以某字符开头(重点)
5.实例方法includes(搜索的字符审[，检测位置索引号1)判断一个字符串是否包含在另一个字符串中，根据情况返回true或false(重点)
6.实例方法 touppercase 用于将字母转换成大写
7.实例方法 toLowercase 用于将就转换成小写
8.实例方法 indexof 检测是否包含某字符
9.实例方法 endswith 检测是否以某字符结尾
10.实例方法 replace 用于替换字符串，支持正则匹配
11.实例方法 match 用于查找字符串，支持正则匹配

## 07-

## 08-Number常用方法.html
toFixed() 方法使用定点表示法来格式化一个数值。
实例方法，有返回值，不改变原数值


## 09-综合案例素材.html
小数精确度 ，先变整数，再除

# case10
## 01-原型对象.html
1. 构造函数的方法浪费内存
2. 构造函数和原型对象里的this都指向实例对象

## 02-给数组扩展求最大值方法和求和方法.html
1. prototype 里面有this 指向实例对象
2. 箭头函数没有this
3. reduce 第二位0 ，prev是和

## 03- constructor.html
1. 构造函数自带prototype
2. prototype是对象（原型对象）
3. prototype对象有constructor属性
4. constructor指向该原型对象的调用者（构造函数）
5. prototype={}  是赋值，会把原本的constructor覆盖

## 04-对象原型_proto_.html
1. 每个对象都有属性，叫对象原型__proto__
2. 对象原型__proto__指向原型对象
3. 原型对象放共享方法
4. 对象原型__proto__有属性constructor，和原型对象的constructor一样指向构造函数
5. 一个四个下划线

## 05-原型继承.html
继承是面向对象编程的另一个特征，通过继承进一步提升代码封装的程度，lavaScript 中大多是借助原型对象实现继承
的特性。

## 06-原型链.html
1. 只要是对象就有__proto__，指向原型对象
2. 只要是原型对象就要constructor ,指向构造函数
3. 只要是构造函数，就有prototype原型对象

3.5 原型链-查找规则
当访问一个对象的属性(包括方法)时，首先查找这个对象自身有没有该属性2如果没有就查找它的原型 (也就是 proto 指向的 prototype 原型对象)
O 如果还没有就查找原型对象的原型 (object的原型对象)
@ 依此类推一直找到 object 为止 (null)
_proto 对象原型的意义就在于为对象成员查找机制提供一个方向，或者说一条路线@可以使用 instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
## 07-
面向对象的封装思想

# case11
## 01-浅拷贝.html
1.直接赋值和浅拷贝有什么区别?
直接赋值的方法，只要是对象，都会相互影响，因为是直接拷贝对象栈里面的地址 
浅拷贝如果是一层对象，不相互影响，如果出现多层对象拷贝还会相互影响
2.浅拷贝怎么理解?
拷贝对象之后，里面的属性值是简单数据类型直接拷贝值如果属性值是引用数据类型则拷贝的是地址

## 02-递归模拟定时.html

## 03-深拷贝.html
1.2 深拷贝
首先浅拷贝和深拷贝只针对引用类型深拷贝:拷贝的是对象，不是地址常见方法:
1.通过递归实现深拷贝
2. lodash/cloneDeep3.通过JSoN.stringify()实现

## 04-lodash实习深拷贝.html
实现深拷贝三种方式?
自己利用递归函数书写深拷贝
利用is库 lodash里面的 .cloneDeep()利用JSON字符串转换

## 05-JSON实现深拷贝.html
常见方法:
1.通过递归实现深拷贝
函数递归:
如果一个函数在内部可以调用其本身，那么这个函数就是递归函数简单理解:函数内部自己调用自己，这个函数就是递归函数
递归函数的作用和循环效果类似
由于递归很容易发生“栈溢出”错误 (stack overflow)，所以必须要加退出条件 return
## 06-throw抛出异常.html
异常处理是指预估代码执行过程中可能发生的错误，然后最大程度的避免错误的发生导致整个程序无法继续运行
总结:
1.throw 抛出异常信息，程序也会终止执行
2throw后面跟的是错误提示信息
3.Error 对象配合throw 使用，能够设置更详细的错误信息

## 07-try-catch捕获异常.html

我们可以通过try /catch 捕获错误信息 (浏览器提供的错误信息) try 试试 catch 拦住 finally 最后
总结:..
1.try...catch 用于捕获错误信息
2将预估可能发生错误的代码写在 try 代码段中
3.如果try 代码段中出现错误后，会执行 catch 代码段，并截获到错误信息4.finally 不管是否有错误，都会执行

1.抛出异常我们用那个关键字? 它会终止程序吗?
throw 关键字
会中止程序
2.抛出异常经常和谁配合使用?Error对象配合throw 使用
1.捕获异常我们用那3个关键字?可能会出现的错误代码写到谁里面
try catch finallytry
怎么调用错误信息?
利用catch的参数

debugger 代码打断点

## 08-this指向.html
1.普通函数this指向我们怎么记忆?
[谁调用 this的值指向谁]
2.普通函数严格模式下指向谁?
严格模式下指向 undefined

目标: 能说出箭头函数的this指向
箭头函数中的 this 与普通函数完全不同，也不受调用方式的影响，事实上箭头函数中并不存在 this!1.箭头函数会默认帮我们绑定外层 this 的值，所以在箭头函数中 this 的值和外层的 this 是一样的2.箭头函数中的this引用的就是最近作用域中的this
3.向外层作用域中，一层一层查找this，直到有this的定义

注意情况2:
同样由于箭头函数 this 的原因，基于原型的面向对象也不推荐采用箭头函数

总结
1.函数内不存在this，沿用上一级的
2.不适用
构造函数，原型函数，dom事件函数等等
3适用
需要使用上层this的地方
4使用正确的话，它会在很多地方带来方便，后面我们会大量使用慢慢体会

函数内不存在this，沿用上一级的，过程:向外层作用域中，一层1.一层查找this，直到有this的定义
2。不适用
>构造函数，原型函数，字面量对象中函数，dom事件函数
3.适用
需要使用上层this的地方

## 09-改变this指向
JavaScript 中还允许指定函数中 this 的指向，有 3 个方法可以动态指定普通函数中 this 的指向
call()
apply()
bind()

## 10-call和apply.html
1.call和apply的区别是?
都是调用函数，都能改变this指向参数不一样，apply传递的必须是数组

## 11-bind.html
3.bind()-重点
bind()方法不会调用函数。但是能改变函数内部this 指向
thisArg: 在 fun 函数运行时指定的 this 值arg1，arg2:传递的其他参数返回由指定的 this 值和初始化参数改造的 原函数拷贝 (新函数)
因此当我们只是想改变 this 指向，并且不想调用这个函数的时候，可以使用 bind，比如改变定时器内部的this指向

因此当我们只是想改变 this 指向，并且不想调用这个函数的时候，可以使用 bind，比如改变定时器内部的this指向

call apply bind 总结
相同点:
都可以改变函数内部的this指向
区别点:
call 和apply 会调用函数，并且改变函数内部this指向
call和apply 传递的参数不一样,call 传递参数 aru1,aru2..形式 apply 必须数组形式[arg)bind 不会调用函数，可以改变函数内部this指向.
主要应用场景:
call 调用函数并且可以传递参数
apply 经常跟数组有关系比如借助于数学对象实现数组最大值最小值bind 不调用函数,但是还想改变this指向.比如改变定时器内部的this指向

## 12-性能优化之防抖.html
防抖:单位时间内，频繁触发事件，只执行最后一次

1.防抖是什么?
单位时间内，频繁触发事件，只执行最后一次2.有什么使用场景呢?
搜索框搜索输入。只需用户最后一次输入完，再发送请求手机号、邮箱验证输入检测

核心思路
防抖的核心就是利用定时器(setTimeout)来实现
0:声明一个定时器变量
当鼠标每次滑动都先判断是否有定时器了，如果有定时器先清除以前的定时器如果没有定时器则开启定时器，记得存到变量里面
:在定时器里面调用要执行的函数
## 13-
节流 - throttle
使用场景
高频事件:鼠标移动 mousemove、页面尺寸缩放 resize、滚动条滚动scroll 等等

1.节流是什么?
单位时间内，频繁触发事件，只执行一次
简单理解:在500ms内，不管触发多少次事件，只执行一次2.有什么使用场景呢?
高频事件:鼠标移动 mousemove、页面尺寸缩放 resize、滚动条滚动scroll

利用节流来处理-鼠标滑过盒子显示文字(手写节流函数)要求: 鼠标在盒子上移动，不管移动多少次，每隔500ms才 +1核心思路:
节流的核心就是利用定时器(setTimeout)来实现
0:声明一个定时器变量
当鼠标每次滑动都先判断是否有定时器了，如果有定时器则不开启新定时器如果没有定时器则开启定时器，记得存到变量里面
2:
3:
定时器里面调用执行的函数
定时器里面要把定时器清空


性能优化 | 说明  |使用场景
防抖  |  单位时间内，频繁触发事件，只执行最后一次  | 搜索框搜索输入、手机号、邮箱验证输入检测 
节流  |  单位时间内，频繁触发事件，只执行一次 |  高频事件:鼠标移动 mousemove、页面尺寸缩放 resize滚动条滚动scroll 等等


## 节流综合案例素材.html


##

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

