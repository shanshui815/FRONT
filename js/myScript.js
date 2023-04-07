function fun(){
	document.getElementById("btn-1").onclick= function(){
        console.log(document.getElementById("content").innerHTML);
        document.getElementById("content").innerHTML = "Hello " +document.getElementById("name").value;
      }
}
function myfun(){
	document.getElementById('demo').innerHTML="按钮被按下";
	document.write("for test 会删除所有现有html");
	window.alert("弹窗");
	console.log("控制台测试");
}
function tryFun(){
	const PI =3.1415926;
	try{
		PI=3.14;
	}catch(err){
		document.getElementById('demo1').innerHTML=err;
	}
}
function changFun(){
	const person={
		name:"张三",
		age:3,
		hobby:"swim"
	};
	console.log("原名： "+person.name);
	person.name="李四";
	console.log("改为"+person.name);
};
function jiaFun(){
	var a = Number(document.getElementById("first-number").value);
	var b = Number(document.getElementById("second-number").value);

	document.getElementById("result").innerHTML= a+b;
};
function jianFun(){
	var a = Number(document.getElementById("first-number").value);
	var b = Number(document.getElementById("second-number").value);

	document.getElementById("result").innerHTML= a-b;
};
function chenFun(){
	var a = Number(document.getElementById("first-number").value);
	var b = Number(document.getElementById("second-number").value);

	document.getElementById("result").innerHTML= a*b;
};
function chuFun(){
	var a = Number(document.getElementById("first-number").value);
	var b = Number(document.getElementById("second-number").value);

	document.getElementById("result").innerHTML= a/b;
}
function bmiFun(){
	var tz =57;
	var sg= 1.58;
	var res = Math.round(tz/(sg*sg));//四舍五入
	// var res =tz/(sg*sg); //带小数
	console.log("BMI:"+res);
};
/**
 * @method calculateSum
 * @param {number }price 打折钱的总消费额
 * @param {Boolean}vip 是否为 vip
 * @return {number} 返回打折后的总金额
 */
function calculateSum(price,vip){
	var count=price;
    if(vip){
    	count=price*0.98;
    }

    if(count>=300){
    	count=count-30;
    }else if(count>=200){
    	count=count-10;
    }else{
    	count-=5;
    }
    console.log(count);
};
/**
 * @description 实现判断参数是否为合法的数字类型，如何是返回 ture ，如果不是 返回 false。
 * @method isNumeric
 * @param num 任意数据类型的变量
 * @return {Boolean} 如何是数字类型返回 ture ，如果不是 返回 false。
 */
function isNumeric(num) {
  return typeof(num)==='number';
};
/*
实现一个判断传入的参数是否为 undefined 类型
返回一个布尔值，如果是undefied 为true，否之，为fase
*/
function isUndefined(arg){
    return typeof(arg) == "undefined";
};

/*
实现一个判断传入的参数是否为 null 类型
返回一个布尔值，如果是null 为true，否之，为fase
*/
function isNull(arg){
    return arg===null;
};



function Fun1(){
	//测试用例
	console.log("是否数字类型")
// console.log(isNumeric("0")); // ->false
// console.log(isNumeric(0)); // ->true
// console.log(isNumeric(null)); // ->false
// console.log(isNumeric("")); // ->false
// console.log(isNumeric(" ")); // ->false
//判空
	console.log("是否null 和 undefined类型")
var expUndefined = undefined;
var expNull = null;
var expZero = 0;
var a;
var o = new Object();
console.log(isUndefined(expUndefined)); // ->true
console.log(isUndefined(expNull)); // ->false
console.log(isUndefined(a)); // ->true
console.log(isUndefined(o)); // ->true
console.log(isNull(expUndefined)); // ->false
console.log(isNull(expNull)); // ->true
console.log(isNull(expZero)); // ->false
console.log(isNull(a)); // ->false
console.log(isNull(o)); // ->false

}
function showCount(count){
	alert(count ?? "unknown");
}
let sayHi =function(){
	alert("Hi !");
};//要有分号
let say = sayHi; //赋值
// let say = sayHi();//把返回值赋值
// sayHi(); //调用函数 

/*
回调函数：在函数外面声明
*/
function askme1(){
	ask("Do you agree?",showOk,showCancel);
}
function ask(question,yes,no){
	if(confirm(question))yes();//调用传入的yes函数
	else no();
}
function showOk(){
	alert("agree!");
}
function showCancel(){
	alert("reject !");
}
/*
回调函数：匿名函数，传参时候定义
*/
function askme2(){
	ask(
"Do you agree?",
function(){alert("I ageree !")},
function(){alert("I reject !")}
		);
}
/*箭头函数*/
let sum=(a,b)=>a+b; 
function showSum(){alert(sum(1,2));}

let double=a=>a^2;//一个参数

let sayHi1=()=>alert("箭头函数：hi");
/*体温 函数表达式*/
let tem;
function fun180(){
	tem = prompt("what's your temperature?",37);
	temperatureBodyDetection(success,fail);
}
let success =function(){
	document.getElementById('res').innerHTML="体温正常，打卡成功！";
}
let fail=function(){
	document.getElementById('res').innerHTML="体温异常，打卡失败！";
}
function temperatureBodyDetection(success,fail){
	tem>=36 &&tem<=38 ?success():fail();
}
/*switch case  体重BMI*/
let showResult= function(){
	val = document.getElementById('result').innerHTML;
	var height = Number(document.getElementById('sc-sg').value);
	var weight = Number(document.getElementById('sc-tz').value);
	res= weight/(height^2);

	switch(true){
	case res<18.5:document.getElementById('result').innerHTML="您是偏瘦体型，可以适当增肥咯";break;
	case res<25:document.getElementById('result').innerHTML="您是标准体型，保持的不错哟";break;
	default:document.getElementById('result-173').innerHTML="您是过重体型，已经影响健康了，需要重视自己的饮食管理了";break;
	}

	// k = res <18.5? 1:(res<25?2:(res<28?3:(res<32?4:5));
	// switch(){
	// case 1:value="您是偏瘦体型，可以适当增肥咯";break;
	// case 2:value="您是标准体型，保持的不错哟";break;
	// case 3:value="您是微胖体型，可以多吃粗粮，让饮食结构更加健康";break;
	// case 4:value="您是肥胖体型，管住嘴迈开腿开始减肥吧！";break;
	// case 5:value="您是过重体型，已经影响健康了，需要重视自己的饮食管理了";break;
	// }

}
/*操作字符串对象*/ 
/**
 * @param {string} name
 * slug 不应超过 15 个字符。当超过 15 个字符时，忽略第 15 个字符之后的所有内容。
 * slug 应始终为小写。
 * 空格字符应替换为破折号 (-)。
 */
const convertToSlug = (name) => {
 	let slug = name.toLowerCase();
 	slug.replace(' ','-');
 	alert(slug.substring(0,15)) ;
};
// 测试用例
// console.log(convertToSlug("to do list")); // "to-do-list"
// console.log(convertToSlug("My SeCond BlOg")); // "my-second-blog"
// console.log(convertToSlug("Grade inquiry of CET-4&6")); // "grade-inquiry-o"

/*嵌套模板*/
let joint =function(){
	var a=5;
	var b=10;
	// console.log('fifteen is'+(a+b)+'and\nnot'+(a^2));
	// console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
//使用模板
	console.log(`fifteen is ${a+b} and
		not ${a^2}`);
// 	console.log(`Fifteen is ${a + b} and
// not ${2 * a + b}.`);
}
//字符串；合并
function concatString(firstStr, lastStr) {
  console.log(`${firstStr} ${lastStr}`);
};

/*数组*/
function Fun204(){
	const emptyArr=[];
	const names=['zxx','yxx'];
	const nums=[4,5,6];
	emptyArr.length;//0
	names.length;//2
	console.log(nums);
	nums.push(7);
	nums.push(8);
	console.log(nums.pop());
	console.log(nums);
	nums.unshift(3);
	console.log(nums);

}
function fun207(){
	const nums=[3,6,8,10,11];
	odd = 3;
	//迭代删掉里面的奇数
	nums.forEach(function(num){
		//对每个数字输出
		console.log(`依次输出${num}`);
		//删除是奇数的
		if(num===3){
		nums.shift();//去头
		}
	});
	console.log(`结果${nums}`);
}
/*属性选择器*/
function fun213(){
	let elem = document.querySelector("#id211");
	elem.style.background='#7FFFD4';
}

/*
廖雪峰js课程 练习
*/
function practice(){
	console.log('---------条件判断--------')
	var age=28;
	if(age>=18){
		alert('adult');
	}else{
		alert('teenager');
	}
	//循环
	console.log('---------循环--------')
	var x=0;
	var i=0;
	for(;i<100;i++){
		x+=i;
	}
	console.log(`x=${x}`);
	//遍历数组
	console.log('---------遍历数组--------')
	var arr=[1,2,3,4,'hello','love u '];
	var i;
	for(i=0;i<arr.length;i++){
		console.log(arr[i]);
	}
	console.log(a[i]); // a b



//----------------------map  set
var map= new Map(['张三'，33],['张四'，13],['张五'，23]);
var m = new Map();
m.set('张三',35);
m.get('张三')；
m.has('李四')  ;// undefined
m.delete('张三')；

var set =new Set([1,2,2,3,'3','三']); //  1 2 3 '3' '三'
var s = new Set();
s.add(4);
s.delete(3);
//----------iterable
//for of
var arr = ['a','b','c'];
var set = new Set([ ['a','b','c']]);
var map = new Map([[1,'a'],[2,'b'],[3,'c']]);
for(var x of arr){
	console.log(i); //a  b  c
};
for(var x of set){
	console.log(x); //同
}；
for(var x of map){
	console.log(`${x[0]}:${x[1]}`);  //1:a  2:b  3:c
}
//forEach
arr.forEach(function(e,i,arr){  //array
	console.log(`${i}:${e}`);
});
set.forEach(function(e,samee,set){  //set
	console.log(e);
});
map.forEach(function(value,key,map){//map
	console.log(`${key}:${value}`); 
});

//-------------函数
//法一 
function funa(x){};
//法二 匿名函数
var funb = function(){};

/*测试用例*/
// var i, args = [];
// for (i=1; i<=100; i++) {
//     args.push(i);
// }
// if (sum() !== 0) {
//     console.log('测试失败: sum() = ' + sum());
// } else if (sum(1) !== 1) {
//     console.log('测试失败: sum(1) = ' + sum(1));
// } else if (sum(2, 3) !== 5) {
//     console.log('测试失败: sum(2, 3) = ' + sum(2, 3));
// } else if (sum.apply(null, args) !== 5050) {
//     console.log('测试失败: sum(1, 2, 3, ..., 100) = ' + sum.apply(null, args));
// } else {
//     console.log('测试通过!');
// }




};


