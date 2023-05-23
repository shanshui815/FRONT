(function flexible (window, document) { 
  var docEl = document.documentElement  //获取html
  var dpr = window.devicePixelRatio || 1    //逻辑中断 undefined就当作1解析；pc端是1，移动端是2

  // adjust body font size
  function setBodyFontSize () {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    }else {//有时候页面打卡元素还没有加载完
      document.addEventListener('DOMContentLoaded', setBodyFontSize)//加载完再执行
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10
  function setRemUnit () {
    var rem = docEl.clientWidth / 10  //html 整个窗口的宽度，不包含边框滚动条 
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize 一旦屏幕尺寸发生改变就重置大小
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) { //解决兼容性的问题，为了火狐。resize有问题
    if (e.persisted) {
      setRemUnit() 
    }
  })

  // detect 0.5px supports 
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}(window, document))//传入的实参