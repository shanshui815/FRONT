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
// function practice(){
// 	console.log('---------条件判断--------')
// 	var age=28;
// 	if(age>=18){
// 		alert('adult');
// 	}else{
// 		alert('teenager');
// 	}
// 	//循环
// 	console.log('---------循环--------')
// 	var x=0;
// 	var i=0;
// 	for(;i<100;i++){
// 		x+=i;
// 	}
// 	console.log(`x=${x}`);
// 	//遍历数组
// 	console.log('---------遍历数组--------')
// 	var arr=[1,2,3,4,'hello','love u '];
// 	var i;
// 	for(i=0;i<arr.length;i++){
// 		console.log(arr[i]);
// 	}
// 	console.log(a[i]); // a b



// //----------------------map  set
// var map= new Map(['张三'，33],['张四'，13],['张五'，23]);
// var m = new Map();
// m.set('张三',35);
// m.get('张三')；
// m.has('李四')  ;// undefined
// m.delete('张三')；

// var set =new Set([1,2,2,3,'3','三']); //  1 2 3 '3' '三'
// var s = new Set();
// s.add(4);
// s.delete(3);
// //----------iterable
// //for of
// var arr = ['a','b','c'];
// var set = new Set([ ['a','b','c']]);
// var map = new Map([[1,'a'],[2,'b'],[3,'c']]);
// for(var x of arr){
// 	console.log(i); //a  b  c
// };
// for(var x of set){
// 	console.log(x); //同
// }；
// for(var x of map){
// 	console.log(`${x[0]}:${x[1]}`);  //1:a  2:b  3:c
// }
// //forEach
// arr.forEach(function(e,i,arr){  //array
// 	console.log(`${i}:${e}`);
// });
// set.forEach(function(e,samee,set){  //set
// 	console.log(e);
// });
// map.forEach(function(value,key,map){//map
// 	console.log(`${key}:${value}`); 
// });

// //-------------函数
// //法一 
// function funa(x){};
// //法二 匿名函数
// var funb = function(){};

// /*测试用例*/
// // var i, args = [];
// // for (i=1; i<=100; i++) {
// //     args.push(i);
// // }
// // if (sum() !== 0) {
// //     console.log('测试失败: sum() = ' + sum());
// // } else if (sum(1) !== 1) {
// //     console.log('测试失败: sum(1) = ' + sum(1));
// // } else if (sum(2, 3) !== 5) {
// //     console.log('测试失败: sum(2, 3) = ' + sum(2, 3));
// // } else if (sum.apply(null, args) !== 5050) {
// //     console.log('测试失败: sum(1, 2, 3, ..., 100) = ' + sum.apply(null, args));
// // } else {
// //     console.log('测试通过!');
// // }
// };

/*--------------------廖雪峰test:map\redeuce\filter--------230410-1 ----*/
// // map方法 平方 数组方法，作用在每一个数组上
// var foo =function(x){return x*x;};
// var arr = [1,2,3];
// var res =arr.map(foo);

// // reduce 1. 变为整数13579
// var arr = [1, 3, 5, 7, 9];

// var res =arr.reduce(function(x,y){
// 	return x*10+y;
// });

// // 2.把一个字符串"13579"变成整数13579
// var arr ="13579";
// // var res= parseInt(arr);
// var res = arr.split().map(function(a){return a*1;}).reduce(function(x,y){return x*10+y;});

// var str = "1234";
// var num =parseInt(str);
// console.log(typeof(num));


// // 3.请把用户输入的不规范的英文名字，变为首字母大写，其他小写的规范名字。输入：
var arr =['adam', 'LISA', 'barT'];//输出：['Adam', 'Lisa', 'Bart'];
// // var res =arr.map(function(s){return s[0].toUpperCase()+s.toLowerCase().substring(1);});//对数组里的**每一个**map字符串执行操作字符串操作
// var res =arr.map(function(s){return s[0].toUpperCase()+s.substring(1).toLowerCase();});


// // 4. 把字符串变成整数
// var arr = ['1', '2', '3'];
// // var res =arr.map(parseInt); //1 NaN NaN
// var foo = function(x){return x*1;};
// var res = arr.map(foo);
// // var res = arr.map(function(x){return x*1;});

// console.log(`arr type :${typeof(arr)}`);
// console.log(`res type :${typeof(res)}`);
// console.log(`arr:${arr}`);
// console.log(`res:${res}`);
/*-------------------------------廖雪峰test:数组sort----------230410-2-----*/
// var arr=[2,1,7,3,5];
// //升序
// arr.sort(function(x,y){
// 	return x>y?1:(x===y?0:-1);

// });
// console.log(arr);// [1, 2, 3, 5, 7]

// //降序
// arr.sort(function(x,y){
// 	if(x===y){
// 		return 0;
// 	}else if(x<y){
// 		return 1;
// 	}else{
// 		return -1;
// 	}
// });
// console.log(arr);//[7, 5, 3, 2, 1]

// //忽略ascii 大小写排序
// var arrs = ['Google', 'apple', 'Microsoft'];
// arrs.sort(function(x,y){

// 	//wrong 本身不改变  x.toUpperCase();
// 	//wrong 本身不改变  y.toUpperCase();
// 	let a = x.toUpperCase();
// 	let b = y.toUpperCase();
// 	if(a<b)return -1;
// 	if(a>b) return 1;
// 	return 0;
// });
// console.log(arrs);  // ['apple', 'Google', 'Microsoft']


/*-----------------------数组其他方法----------------------230411-1------*/
// var arr =[1,2,8,11];
// //筛选素数
// function get_primes0(arr) {
// 	// 能整除表示取余为0
// 	var res = arr.filter(function(x,index,self){
// 		for(let i=2;i<Math.floor(x/2);i++){
// 			if (x%i===0)return false;
// 		}
// 		return x!==1;
// 	});
// 	return res;

// }
// var res =get_primes0(arr);

// //筛选素数
// function get_primes1(arr){
// 	var res = arr.filter(function(x){
// 		for(let i =2;i<=Math.sqrt(x);i++){
// 			if(x%i===0)return false;
// 		}
// 		return x!==1;
// 	});
// 	return res;
// // 	return arr.filter(function(e){
// //     for(let i=2; i<=Math.sqrt(e); i++){
// //         if ( e===1 || e%i === 0 ){
// //             return false;
// //         }
// //     }
// //     return true;
// // });
// }

// //筛选素数
// function get_primes2(arr){
// 	var res=[];
// 	var flag=0;
// 	for(let i =0;i<arr.length;i++){
// 		flag=0;
// 		if(arr[i]!==1){
// 			for(let j =2;j<Math.floor(arr[i]/2);j++){
// 				if(arr[i]%i===0){
// 					flag=1;
// 					break;
// 				}
// 			}
// 			if(!flag)res.push(arr[i]);
// 		}
// 	}
// 	return res;
// }


// console.log(`arr:${arr}`);
// console.log(`res1:${get_primes1(arr)}`);
// console.log(`res2:${get_primes2(arr)}`);

/*---------------------------------------------230411-2------*/
// //array  every
// //判断是否每个元素长度都>0
// var arr=['','hello','good morning'];
// var boo = arr.every(function(s){return s.length>0});
// console.log(boo);
// //判断是否都是大写
// var arr1=['Add','hello','good morning'];
// // var boo1=arr.every(function(s){return s.toUpperCase()===s;});  //false
// var boo1=arr.every(function(s){return s.toLowerCase()===s;});  //true
// console.log(boo1);
// //查找全是小写的元素
// var arr2 = ['Apple', 'pear', 'orange'];
// var e = arr2.find(function(s){return s.toLowerCase()===s;});
// console.log(e);//pear
// //找全是小写的元素的下标
// var i = arr2.findIndex(function(s){return s.toLowerCase()===s;});
// console.log(i);//pear
// //遍历
// arr2.forEach(function(s){console.log(s);}); //遍历元素
// arr2.forEach(console.log);

/*---------------------------------------------230411-3---字符串---数组-----*/
// //字符串 6个方法 
// var str="hello world!"
// console.log(str.length);
// console.log(`字符串模板使用反引号:${str}`);
// console.log(str[0]);
// console.log(str.indexOf('o'));
// console.log(str.toUpperCase());
// console.log(str.substring(1,3));//[1,3)
// console.log(str.substring(3));//截取3以及以后的
// var arrf = str.split('');//不加引号，就是一个元素的数组
// arrf.forEach(console.log);
/* 字符串-》 数组  ；数组-》字符串*/
// var str1 = 'qwarasdazxav';
// var arr1 = str1.split('');
// console.log(arr1);// ["q", "w", "a", "r", "a", "s", "d", "a", "z", "x", "a", "v"]

// var arr2 = str1.split('a');
// console.log(arr2);//["qw", "r", "sd", "zx", "v"]

// //数组 9个方法
// // var arr1=[1,'四',5,6,7,8];
// var arr1=[1,4,9,6,30,8];
// console.log(arr1[0]);
// console.log(arr1.length);
// console.log(arr1.indexOf(1));
// // console.log(arr1.indexOf('四'));
// console.log(arr1.slice(1,3)); //4 9
// console.log(arr1.slice(3));//6 30 8
// console.log(arr1.splice(1,2,2,3));//从1开始删除2个，添加2,3,返回删除的值 4，9；变为1，2，3，6，308
// console.log(arr1.splice(1,2));//只删除 返回2 ，3
// console.log(arr1.splice(1,0,2,3));//只添加
// console.log(`排序：${arr1.sort()}`);//排序是错的，要重新写 1 2 3 30 6 8
// console.log('重写sort');
// console.log(arr1.sort(function(x,y){
// 	if(x>y)return 1;
// 	if(x<y)return -1;
// 	return 0;
// }))
// console.log(`倒序：${arr1.reverse()}`);
// console.log(arr1.push(55));//返回新长度 7
// console.log(arr1.pop());//55
// // arr1.forEach(console.log);
// arr1.forEach(function(x){console.log(x);});
// console.log(`unshift:${arr1.unshift(-2)}`);//返回长度 7
// console.log(arr1.unshift(-1)); //length 8
// console.log(`从前删除shift：${arr1.shift(-1)}`);
// // var con =[67,99];
// var con = arr1.concat([67,99]);
// console.log('---');
// con.forEach(function(x){console.log(x)});
// var new1 = arr1.join(' ~ ');
// console.log(new1);
/*---------------------------------------------230411-4---map  set  Object--------*/
// var arr=['arr1','arr2','arr3'];

/*map*/
// var map = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
// for(let x of map){
// 	console.log(`key:${x[0]}  value:${x[1]}`);
// }

// var map1= new Map([['张三',33],['张四',13],['张五',23]]);
// for(let x of map1){
// 	console.log(`key:${x[0]}  value:${x[1]}`);
// }

// var m = new Map();
// m.set('张三',35);
// m.set('王五',63);
// console.log(m.get('张三'));
// console.log(m.has('李四'));  // undefined
// m.delete('张三');
// console.log(m.get('张三'));

/*set*/
// var set =new Set([1,2,2,3,'3','三']); //  1 2 3 '3' '三'
// var s = new Set();
// s.add(4);
// s.delete(3);
// for(let x of set){
// 	console.log(x);
// }


/*Object*/
// var ob = {
// 	name:'zxx',
// 	age:22,
// 	job:'cook'
// }
// ob.birth=2001;//添加属性
// for(let prop in ob){
// 	console.log(`${prop}:${ob[prop]}`);
// }

// console.log('---删掉 name  birth属性');
// delete ob.birth;
// delete ob['name'];
// for(let prop in ob){
// 	console.log(`${prop}:${ob.prop}`);//错
// 	console.log(`${prop}:${ob[prop]}`);
// }
// console.log(ob['age']);//对
// console.log(ob.age);//对
// console.log(ob[age]);//错

/*---------------------------------------------230411-5-------------遍历--------*/
// //for in 遍历对象，也可以遍历数组，但是本质遍历的是属性，数组也是对象
// console.log('---for in 遍历对象');
// var obj = {a:1, b:2, c:3};
// for (var prop in obj) {
//   console.log("obj." + prop + " = " + obj[prop]);
// }
// // Output:
// // "obj.a = 1"
// // "obj.b = 2"
// // "obj.c = 3"

// /*for in 遍历数组*/
// console.log('---for in 遍历数组错误方法');
// var arr = ['a','b','c'];
// arr.name='zxx';
// for(let i in arr){
// 	console.log(i); //结果应该是属性，0，1，2，name
// }
// console.log('---for in 遍历数组正确方法');
// for(let i in arr){
// 	console.log(arr[i]);
// }


/*----for of  (ES6改进 数组 对象 map set )---*/
// console.log('---for of 遍历数组--');
// for(let x of arr){
// 	console.log(x);
// }
// console.log('---for of 遍历map');
// for(let x of map){
// 	console.log(`key:${x[0]};value:${x[1]}`);
// }
// console.log('---for of 遍历set');
// for(let x of set){
// 	console.log(x);
// }

/*forEach*/
// 	console.log('-----forEach------');
// arr.forEach(function(e,i,arr){  //array
// 	console.log(`${i}:${e}`);
// });
// set.forEach(function(e,samee,set){  //set
// 	console.log(e);
// });
// map.forEach(function(value,key,map){//map
// 	console.log(`${key}:${value}`); 
// });
/*---------------------------------------------230413-1---闭包求和-----------*/
// //对array求和  寻常方法
// function sum1(arr){
// 	return arr.reduce(function(x,y){return x+y;});
// }
// console.log(`求和寻常6：${sum1([1,2,3])}`);
// //返回求和的函数,先传入参数，待需要时候再计算
// function lazy_sum(arr){
// 	var foo = function(){
// 		return arr.reduce(function(x,y){return x+y;}); //错：忘记return
// 	};
// 	return foo;
// }
// var foo =lazy_sum([4,5,6]);
// console.log(`求和闭包 15：${foo()}`);

/*---------------------------------------------230413-2---闭包错误引用循环变量-----------*/
/*闭包的返回函数不要引用任何循环变量，变量在改变，待到使用的时候已经改变了*/
// console.log('-----闭包的返回函数不要引用任何循环变量----');
// function count(){
// 	var res=[];
// 	for(var i =1;i<4;i++){//不能用let ,
// 		res.push(function(){return i*i}); //现在并没有执行function(){return i*i} 
// 	}
// 	return res;
// }
// var res = count();//每一个res里放的都是一个函数
// res.forEach(function(x){console.log(x)}); //x是一个函数，输出ƒ (){return i*i}
// var f1 = res[0];
// var f2 = res[1];
// var f3 = res[2];
// console.log(f1());//16 ；用let就是1
// console.log(f1());//16
// console.log(f1());//16

/*-------------------------------230413-3-----闭包引用循环变量，错误使用匿名函数闭包---*/
//如果一定要使用循环遍历，就再创建一个函数 ，使用匿名函数并立即执行
// //匿名函数
// function(x){return x*x};
// //匿名函数传参，立即执行
// (function(x){return x*x;})(i);
// //匿名函数返回一个函数，实现闭包,闭包可以隔着一个空形参的function
// (function(x){return function(){return x*x}})(i);

// console.log('------错误的----闭包使用循环变量-------');
// function countRight(){
// 	var result=[];//每一个参数是一个函数
// 	for(var j =1;j<4;j++){
// 		result.push((function(x){return x*x;})(j));
// 	}
// 	return result;
// }
// var re= countRight();
// var fun1 = re[0];
// var fun2 = re[1];
// var fun3 = re[2];
// console.log(fun1());// 报错：fun1不是一个函数。
// console.log(fun2());// 应该console.log(fun2);
// console.log(fun3());//

/*-------------------------------------230413-4---闭包闭包正确使用循环变量-----------*/
// console.log('----------闭包正确使用循环变量-------');
// // //匿名函数 立即执行
// // (function(x){return x*x;})(i);
// // //匿名函数 返回函数 
// // (function(x){return function(){return x*x;}})(i);

// function count(){
// 	var res =[];
// 	for(var i =1;i<4;i++){
// 		res.push((function(x){return function(){return x*x;}})(i));//错：忘记返回函数return
// 	}
// 	return res;
// }
// var re = count();
// var fun1 = re[0];
// var fun2 = re[1];
// var fun3 = re[2];
// console.log(fun1());// 1
// console.log(fun2());// 4
// console.log(fun3());// 9

/*----------------------------------箭头函数-------------------230413-5-------------*/
// 'use strict'
// //无参数
// var pi =()=>3.14;
// console.log(pi());

// //单语句 单形参  相当于匿名函数，返回的是一个函数  
// var fn = x=>x*x;
// console.log(fn);// x=>x*x
// console.log(fn(2));//4

// //多语句，单形参
// var fn1 = x=>{
// 	if (x > 0) {
//         return x * x;
//     }
//     else {
//         return - x * x;
//     }
// }
// console.log(fn1(-2));  //-4

// //单语句，多形参
// var fn2=(x,y)=>x*x+y*y;
// console.log(fn2(1,2));//5

// //多语句，可变参数
// var fn3 = (x,y,...rest)=>{
// 	var sum=x+y;
// 	for(let i =0;i<rest.length;i++){
// 		sum+=rest[i];
// 	}
// 	return sum;
// }

// var fn =(x,y,...rest)=>{
// var sum=x+y;
// sum+=rest.reduce(function(x,y){return  x+y;});
// return sum;
// }
// console.log(fn(1,2,3,4));

// console.log(`多语句可变参数${fn3(11,22,33,44)}`);//110
// function sum1(...rest) {
//    //rest是个数组 数组有length  遍历;for  ;for of ;forEach
// 	sum1 =0;
// 	rest.forEach(function(e){
// 		sum1+=e;	
// 	});
// }


// //单语句 返回对象
// //x=>{foo:x};//错误的 会和函数体的{}冲突
// x=>({foo:x});//对
/*----------------------------------230413-6----------箭头函数解决this------------------*/
//this  无法实现预期
//对 
// var obj ={
// 	birth:1997,
// 	age:function(){
// 		// var b =this.birth;
// 		var that = this;
// 		var fn =function(){
// 		return new Date().getFullYear()-that.birth;//错
// 		// return new Date().getFullYear()-b;
// 		}
// 		return fn();
// 	}
// }
// console.log(obj.age());//26


//对
// var obj ={
// 	birth:1997,
// 	age:function(){
// 		var b =this.birth;
// 		// var that = this;
// 		var fn =function(){
// 		// return new Date().getFullYear()-that.birth;//错
// 		return new Date().getFullYear()-b;
// 		}
// 		return fn();
// 	}
// }
// console.log(obj.age());

//错
// var obj ={
// 	birth:1997,
// 	age:function(){
// 		// var b =this.birth;
// 		// var that = this;
// 		var fn =function(){
// 		return new Date().getFullYear()-this.birth;//错
// 		// return new Date().getFullYear()-b;
// 		}
// 		return fn();
// 	}
// }
// console.log(obj.age()); //NaN


//箭头修复这个问题
// var obj1={
// 	birth:1997,
// 	getAge:function(){
// 		// var b =this.birth;
// 		var fn =()=>new Date().getFullYear()-this.birth;
// 		return fn();
// 	}
// }
// console.log(obj1.getAge());


/*-----------------------------------------------------230414-1---------generator-----------*/
// /*generator*/
// function* foo(x){
// 	yield x+1;
// 	yield x+2;
// 	return x+3;
// }

// /*斐波那契数列*/
// function fib(max){
// 	var
// 		a=0,
// 		b=1,
// 		arr=[0,1];
// 		while(arr.length <max){
// 			[a,b]=[b,a+b];
// 			arr.push(b);
// 		}
// 		return arr;
// }
// var res =fib(4);
// for(var x in res){
// 	console.log(res[x]);
// }


/*----------------------------------Date---------------------230416-1------------*/
// var now =new Date();
// console.log(now);//Sun Apr 16 2023 18:27:35 GMT+0800 (中国标准时间)
// // var d = new Date(2015, 5, 19, 20, 15, 30, 123);//123 = GMT+0800
// var d = new Date(1997,7,15,0,0,0,123);  //9月份从0开始
// console.log(d);//Fri Aug 15 1997 00:00:00 GMT+0800 (中国标准时间)
// console.log(d.toLocaleString());//1997/8/15 00:00:00
// console.log(Date.now());//获取时间戳
/*-------------------------------------------------正则------230416-2------------*/
// var re1 =/js/;
// var re2 = new RegExp('js');

// console.log(re1.test('js'));

/*-------------------------------------------------JASON-序列化-----230418-1------------*/
// JavaScript对象
// var zxx={
// 	name:'zxx',
// 	age:29,
// 	birth:1994,
// 	'middle-school': '\"W3C\" Middle School',
// 	skills:['JavaScript', 'Java', 'Python', 'Lisp']
// };
// var s =JSON.stringify(zxx);

//1.按照缩进输出
// var s =JSON.stringify(zxx,null,'  ');
//2.输出指定属性
// var s = JSON.stringify(zxx,['name','age'],'  ');
//3.传入函数，所有键值对的value被提前处理
// function convert(key,value){
// 	if(typeof(value)==='string '){//单引号。number string boolean null array object
// 		return value.toUpperCase();
// 	}
// 	return value;
// }
// var s = JSON.stringify(zxx,convert,' ');

//4.精确控制序列化，定义一个toJSON方法，返回需要序列化的数据
// var yxx={
// 	name:'yxx',
// 	age:20,
// 	birth:2003,
// 	'middle-school': '\"W3C\" Middle School',
// 	skills:['JavaScript', 'Java', 'Python', 'Lisp'],
// 	toJSON:function(){
// 		return {
// 			'Name':'yxx',
// 			"age":20
// 		};
// 	}
// };
// var s =JSON.stringify(yxx,null,' ');

// console.og(s);
/*----------------------------------JSON 反序列号---------------230418-2-----------------------*/
// var j ={"name":"小明","age":14}; 错
// var obj = JSON.parse(j);错

// var obj = JSON.parse('{"name":"小明","age":14}',function(key,value){
// 	if(key==='name')return value+'同学';
// 	return value;

// });

// console.log(obj);
/*----------------------------------JSON ---------------230418-3-----------------------*/
//访问天气数据
var url ="https://api.openweathermap.org/data/2.5/forecast?q=Beijing,cn&appid=800f49846586c3ba6e7052cfc89af16c";
$.getJSON(url,function(data){
	var info={
		city:data.city.name,
		weather:data.list[0].weather[0].main,
		time:data.list[0].dt_txt
	};
	console.log(JSON.stringify(info));
	console.log("xx");
})


/*----------------------------------草稿---------------------------------------*/
//rest 可变参数
// console.log('---可变参数');
// function argue(...rest){
// 	return rest.reduce(function(x,y){return x+y;});
// }
// console.log(argue(1,2,3));


// function count(arr){
// 	var foo = arr.deduce(function(x,y){return x+y;});
// 	return foo;
// }
// var foo1 = count([1,2,3]);
// foo1();

// function count(){
// 	var res =[];//每个元素被给予一个函数 
// 	for(var i=1;i<3;i++){//最终i=4
// 		res.push(function(){return i*i;});
// 	}
// 	return res;
// }
// var res1=count();//函数集合
// var f1 = res1[0];
// var f2 = res1[1];
// var f3 = res1[2];
// console.log(f1());//16 ；用let就是1
// console.log(f1());//16
// console.log(f1());//16

//匿名函数：除了匿名，其他和普通函数相同
// function(x){return x*x};
// //匿名函数立即执行
// (function(x){return x*x})(i);//i是循环变量，从外部传入

// function count(){
// 	var res=[];
// 	for(var i =1;i<3;i++){
// 		res.push((function(x){return x*x;})(i));

// 	}
// }

/*--------------闭包求和-----------*/
// function count(arr){
// 	var fn = function(){
// 		return arr.reduce(function(x,y){return x+y;});
// 	}
// 	return fn;
// }
// var fn = count([1,2,3]);
// console.log(fn());

// function count(){
// var res = [];
// for(var i =1;i<4;i++){
// 	res.push(function(){return i*i;})
// }
// return res;
// }
// var res = count();
// var f1= res[1];
// console.log(f1());

// 匿名函数立即执行
// (function(x){return x*x;})(i);
// 闭包匿名函数
// (function(x){return function(){return x*x;}})(i);

// function count(){
// 	var res=[]
// for(var i =1;i<4;i++){
// 	res.push((function(x){return function(){return x*x;}})(i));
// }
// return res;
// }
// var res = count();
// var f1= res[0];
// console.log(f1());

// var pi = ()=>3.14;

// var res =x=>x*x;

// var fn =x=>{
// 	if(x>0)return x*x;
// 	if(x<0)return -x*x;
// }

// var fn =(x,y)=>x*y;

// var fn =(x,y,...rest)=>{
// var sum=x+y;
// sum+=rest.reduce(function(x,y){return  x+y;});
// }

// var res = arr.map(function(x){return x*x;})
// res.forEach(console.log);

// var res =arr.reduce(function(x,y){return x*10+y;});

// var str = "1234";
// var num =str.parseInt(str);
// console.log(typeof(num));

// var res = str.split().map(function(x){return x*1;}).reduce(fuanction(x,y){return x*10+y;});
// var res = arr.map(function(str){return str[0].toUpperCase()+str.substring(1).toLowerCase()});

// arr.map(function(s){});

// var map = new Map([['1',"张三"],["二","李四"],[3,"王五"]]);
// map.set('4',"赵二");
// map.delete('二');
// for(var x of map){
// 	console.log(`${x[0]}:${x[1]}`);
// }

