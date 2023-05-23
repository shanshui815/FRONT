
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