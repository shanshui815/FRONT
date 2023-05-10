# case开头的文件
## case1-order
- 搭建订单页面，输入内容，生成订单

## case2
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

## case3 
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