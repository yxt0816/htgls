//1、输出100以内的奇数
function hundredji(num){
			for(var i=1;i<=num;i++){
				if(i%2!=0){
					 document.write(i+",");
				}
			}	
		}

//2、输出100以内所有偶数的和
function hundredoushuSum(num){
			var sum=0;
			for(var i=1;i<=num;i++){
				if(i%2==0){
					 sum=sum+i;
				}
			}
		return sum;						
		}	
//3、输出100以内7的倍数
function sevenTimes(num){
			for(var i=7;i<=num;i+=7){
				document.write(i+",");
			}					
		}	
//4、用函数实现加减乘除余
function matharithmetic(num1,num2,oper){
		var sum;
		switch(oper){
				case "+":sum=num1+num2;break;
				case "-":sum=num1-num2;break;
				case "*":sum=num1*num2;break;
				case "/":if(num2!=0){
						sum=num1/num2;break;
				}else{
					sum="您输入有误";break;
				}
				case "%":if(num2!=0){
						sum=num1%num2;break;
				}else{
					sum="您输入有误";break;
				}
				default :;
		}
		return sum;
			}		
//5、用函数计算三个数字的大小，按从小到大顺序输出
function numSort(num1,num2,num3){
		if(num1<num2){
			if(num3<num1){
				document.write(num3+","+num1+","+num2);
			}else if(num3<num2){
				document.write(num1+","+num3+","+num2);
			}else{
				document.write(num1+","+num2+","+num3);
			}
		}else{
			if(num3<num2){
				document.write(num3+","+num2+","+num1);
			}else if(num3<num1){
				document.write(num2+","+num3+","+num1);
			}else{
				document.write(num2+","+num1+","+num3);
			}
		}
			}	
//6、生成4位验证码函数返回结果
function identifyingCode(num){
	var str="";
		for(var i=1;i<=num;i++){
			str=str+parseInt(Math.random()*10);
		}
		return str;
	}
//7、m到n之间所能组成的奇数（两位数，十位取m-n,个位取m-n）
function mnji(m,n){
		var num;
		var count=0;
		for(var i=m;i<=n;i++){
			for(var j=m;j<=n;j++){
				if(i!=j){
					if(j%2==1){
						num=i*10+j;
						count++;
						console.log(num+",");
					}
				}
			}	
		}
		return count;
	}
/*var count = 0;
	while(num>0){
		var temp = num%10;
		num = parseInt(num/10);
		
		count++;
		document.write("第"+count+"位数是:"+temp+"<br/>");
	}*/	
	
	
//8、给数字加密
/*某公司用电话传递数据（如：6234），需要加密，规则如下
a，每位数字都加上5然后用除以10的余数代替（如：1789）
b，将第一和第四位交换，第二和第三位交换（如：9871）
编写函数，输入原文，输出密文*/

function numPassword(num){
		var a=((num%10)+5)%10;
		var b=(parseInt((num%100)/10)+5)%10;
		var c=(((parseInt(num/100))%10)+5)%10;
		var d=(parseInt(num/1000)+5)%10;
		//var num1=d*1000+c*100+b*10+a;
		var str="";
		var num2=""+a+b+c+d;
		return num2;
	}	
//9两数相加
function twoNumAddition(num1,num2){
			return num1+num2;
			}
//10、输入一个整数，判断大于0小于0还是等于0
function than(x){
		var str="";
		if(x>0){
			str="大于零";
		}else if(x<0){
			str="小于零";
		}else{
			str="等于零";
		}
		return str;
			}
//11、开发一款软件，根据公式（身高-108）*2=体重，可以有10斤左右的浮动。来观察测试者体重是否合适
 //提示：输入身高算体重，然后判断算出的体重和输入的体重差值在正负10斤以内，可使用Math.abs()
 function  measuremen(num,weight){
		if(Math.abs((num-weight))<10){
			var str="合适";
		}else{
			var str="不合适";
		}
		return str;
 }
 //12、输入一个数判断是奇数还是偶数，并输出结果
 function  oddoreven(x){
		if(x%2==0){
			var str="是偶数";
		}else{
			var str="是奇数";
		}
		return str;
 }
 //13、输入一个年份判断是否是闰年
 function  runyear(x){
		if((x%4==0 && x%100!=0)||(x%400==0)){
			var str="是闰年";
		}else{
			var str="不是闰年";
		}
		return str;
 }
 //14、输入成绩转成成绩等级（A,B,C,D,E），使用if和switch两种写法完成
 //if
 function   GradeLevelone(x){
		if(x<0 || x>100){
			var str="输入有误";
		}else{
			if(x>90 && x<=100){
				var str="A";
			}else if(x>80 && x<=90){
				var str="B";
			}else if(x>70 && x<=80){
				var str="C";
			}else if(x>60 && x<=70){
				var str="D";
			}else{
				var str="E";
			}
		}
		return str;
 }
 //switch
  function   GradeLeveltwo(x){
		if(x>100 || x<0){
			var str="请输入0-100的数"
		}else{
			var temp=parseInt(x/10);
			switch(temp){
				case 10:;
				case 9:var str="A";break;
				case 8:var str="B";break;
				case 7:var str="C";break;
				case 6:var str="D";break;
				default:var str="E";break;
				}
		}
		return str;
 }
 //15、输入年和月份显示当月天
 function yearmonthday(year,month){
		if(year<1900){
			var str="请输入大于等于1900的年份";
		}else{
			switch(month){
				case 1:var str="31";break;
				case 2:if((year%4==0 && year%100!=0) || year%400==0){
						var str="29";
					}else{
						var str="28";
					};break;
				case 3:var str="31";break;	
				case 4:var str="30";break;
				case 5:var str="31";break;
				case 6:var str="30";break;
				case 7:var str="31";break;
				case 8:var str="31";break;
				case 9:var str="30";break;
				case 10:var str="31";break;
				case 11:var str="30";break;
				case 12:var str="31";break;
				default:var str="请输入1-12的整数";break;
			}
			}
		return str;
 }
 //16、输入数字显示星期几
  function   week(day){
		switch(day){
				case 0:var str="星期天";break;
				case 1:var str="星期一";break;	
				case 2:var str="星期二";break;	
				case 3:var str="星期三";break;
				case 4:var str="星期四";break;
				case 5:var str="星期五";break;
				case 6:var str="星期六";break;
				default:var str="请输入0-6的整数";break;
			}
		return str;
 }
  //17、计算折扣大小
  function  discount(price,jifen){
		if(jifen<0){
			var zhekou="请输入大于零的数";
		}else{
			if(jifen>10000){
				var zhekou=price*(1-5/10);
			}else if(jifen>=8000 && jifen<=10000){
				var zhekou=price*(1-6/10);
			}else if(jifen>=6000 && jifen<=8000){
				var zhekou=price*(1-7/10);
			}else{
				var zhekou=price*(1-8/10);
			}
		}
		return zhekou;
 }
 //18、加减乘除计算器
  function   computingCounter(n1,n2,options){
			switch(options){
				case "+":var num=n1+n2;break;
				case "-":var num=n1-n2;break;
				case "*":var num=n1*n2;break;
				case "/":if(n2!=0){
							var num=n1/n2;break;
						}else{
							var num="分母不能为零";
						}
		}
		return num;
  }
//19  输入年，月，日，求出该日期是当前年的第几天
 function   dangnianday(year,month,day){
		var febday=28 ;
		if(year%4==0 && year%100!=0 || year%400==0){
					var febday=29 ;
				}
		var days=0;
		
		if(year<1900){
				var days="请输入大于1900的合法年份";
			}
		if(month<0 || month>12){
				var days="请输入合法月份";
			}
		switch(month){
		case 1:var days=day;break;
		case 2:var days=31+day;break;
		case 3:var days=31+febday+day;break;
		case 4:var days=31+febday+31+day;break;
		case 5:var days=31+febday+31+30+day;break;
		case 6:var days=31+febday+31+30+31+day;break;
		case 7:var days=31+febday+31+30+31+30+day;break;
		case 8:var days=31+febday+31+30+31+30+31+day;break;
		case 9:var days=31+febday+31+30+31+30+31+31+day;break;
		case 10:var days=31+febday+31+30+31+30+31+31+30+day;break;
		case 11:var days=31+febday+31+30+31+30+31+31+30+31+day;break;
		case 12:var days=31+febday+31+30+31+30+31+31+30+31+30+day;break;
			
			/*case 12:var days=days+30;
			case 11:var days=days+31;
			case 10:var days=days+30;
			case 9:var days=days+31;
			case 8:var days=days+31;
			case 7:var days=days+30;
			case 6:var days=days+31;
			case 5:var days=days+30;
			case 4:var days=days+31;
			case 3:var days=days+febday;
			case 2:var days=days+31;
			case 1:var days=days+day;*/
			}			
		return days;
  }
 
 //20、
 //(1)、1-100的数相加
 function testfa(sum){	
		sum=0;
		var add=1;
		while(add<=100){
			sum=sum+add;
			add++;
		}
		return sum;
	}
//(2)、1-100的奇数和
function testfb(sum){	
		sum=0;
		var add=1;
		while(add<=100){
			sum=sum+add;
			add+=2;
		}
		return sum;
	}
//(3)、输出1-100的奇数
function testfc(i){	
		i=1;
		var str="";
		while(i<=50){
			var add=2*i-1;
			i++;
			str+=add+",";
		}
		return str;
	}
//(4)、1-100的偶数和
function testfd(sum){	
		sum=0;
		var add=2;
		while(add<=100){
			sum=sum+add;
			add+=2;
		}
		return sum;
	}
//(5)、输出100以内7的倍数
function testff(i){	
		i=1;
		var str="";
		while(i<=14){
			var add=i*7;
			i++;
			str+=add+",";
		}
		return str;
	}
	 
 //21、求出1-1/2+1/3-1/4+1/5....1/100的和（加奇减偶）。
	function jiaqijianou(sum){	
		sum=0;
		for(var i=1;i<=100;i++){
			if(i%2!=0){
				var add=1/i;
			}else{
				var add=-1/i;
			}
			sum=sum+add;
		
		/*sum=sum+(i%2!=0)?(1/i):(-1/i);*/
		}
		return sum;	
	}
	
 //22、	一个新入职，月工资为10K的员工，每年涨工资5%，50年后的月工资是多少？
 function fiftyyearmoney(startMoney,zhang,endMoney){	
		for(var year=1;year<=50;year++){
			endMoney=endMoney+endMoney*(zhang/100);
		}
		return endMoney;
	}
	
 //23、山上有口缸可以装50升水，现有15升，小和尚下山挑水，每次挑5升，几次挑满
 function jicitaoman(maxnum,startnum,pernum){	
		var count=0;
		for(var i=startnum;i<maxnum;i=i+pernum){
			count++;
		}
		return count;
	}
 //24、打印1000-2000年间的闰年，每行打印4个
function dayinrunnian(startYear,endYear){			
			var count=0;
			var str="";
			for(var i=startYear;i<=endYear;i++){
				if((i%4==0 && i%100!=0) || (i%400==0)){
					str+=i+",";
					count++;
					if(count%4==0){
						str+="<br/>";
					}
				}	
		}
		return str;
	}	

//25、打星星۞۞۞۞۞	
function daxingxing(){
			for(var i=0;i<5;i++){
					document.write("۞۞۞۞۞<br/>");
				}	
		}
		
//26、
//保存cookie(添加cookie)
//参数：
	//键
	//值
	//有效期：单位是天；
//返回值：无
function addCookie(key,value,dayCount){
	var d = new Date();
	d.setDate(d.getDate()+dayCount);
	document.cookie = key+"="+escape(value)+";expires="+d.toGMTString();
}

//获取cookie
//参数：
//键
//返回值：值

function getCookie(key){
	var str = unescape(document.cookie);
	
	//1、分割成数组
	var arr=str.split("; ");
	
	//2、循环数组，查找键，并得到对应的值
	for(var i in arr){
		if(arr[i].indexOf(key+"=")==0){
			return arr[i].substring((key+"=").length);
		}
	}
	return null;
}
function addCookieByMinutes(key,value,count){
	var d = new Date();
	d.setMinutes(d.getMinutes()+count);
	document.cookie = key+"="+escape(value)+";expires="+d.toGMTString();
}

//删除cookie
//参数：键
//返回值：无
function removeCookie(key){
	/*
	var d = new Date();
	d.setDate(d.getDate()-1);
	document.cookie = key+"=bye;expires="+d.toGMTString();
	*/
	addCookie(key,"bye",-1);
}



//27

//封装ajax
//参数:
//请求方式：get或post
//url：
//请求参数：
//是否异步
//回调函数
function ajax1804(method,url,sendStr,isAsync,func){
	let xhr = new XMLHttpRequest();
	let urlStr = url;
	if(method.toLowerCase()=="get" && sendStr!=""){	
		urlStr+="?"+sendStr;
	}
	xhr.open(method,urlStr,isAsync);
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){			
			func(xhr.responseText);
		}
	}
	if(method.toLowerCase()=="post"){	
		xhr.setRequestHeader("Content-type","application/x-www.form-urlencoded");
		xhr.send(sendStr);
	}else{
		xhr.send();
	}
}

function ajax1804UseObj(obj){
	
	
	let xhr = new XMLHttpRequest();
	let urlStr = obj.url;
	if(obj.method.toLowerCase()=="get" && obj.sendStr!=""){	
		urlStr+="?"+obj.sendStr;
	}
	xhr.open(obj.method,urlStr,obj.isAsync);
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){			
			obj.func&&obj.func(xhr.responseText);
		}
	}
	if(obj.method.toLowerCase()=="post"){	
		xhr.setRequestHeader("Content-type","application/x-www.form-urlencoded");
		xhr.send(obj.sendStr);
	}else{
		xhr.send();
	}
}

//ajax
function ajax1804UseObjAndDefault(obj){
	
	let defaultObj = {
		"method":"get",
		"func":null,
		"url":"#",
		"sendStr":"",
		"isAsync":true
	};
	
	for(let key in obj){
		defaultObj[key] = obj[key];
	}
	
	let xhr = new XMLHttpRequest();
	let urlStr = defaultObj.url;
	if(defaultObj.method.toLowerCase()=="get" && defaultObj.sendStr!=""){	
		urlStr+="?"+defaultObj.sendStr;
	}
	xhr.open(defaultObj.method,urlStr,defaultObj.isAsync);
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){			
			defaultObj.func&&defaultObj.func(xhr.responseText);
		}
	}
	if(defaultObj.method.toLowerCase()=="post"){	
		xhr.setRequestHeader("Content-type","application/x-www.form-urlencoded");
		xhr.send(defaultObj.sendStr);
	}else{
		xhr.send();
	}
}
//
// function $(str){
// 	if(str.charAt(0)=="#"){
// 		return document.getElementById(str.substring(1));
// 	}else if(str.charAt(0)=="."){
// 		return document.getElementsByClassName(str.substring(1));
// 	}else{
// 		return document.getElementsByTagName(str);
// 	}
// }	


//随机色
function getColors(){
	var str="";
    var a=0;
	for(i=0;i<3;i++){
		var b=parseInt(Math.random()*256);	
		 a=a+b+","
	}
	var b = Math.random()+0.4;
	if(b>1){
		b=1
	}
	str ="rgba"+"("+a+b+")";
	return str;
}
//或随机色
function getColor(){
	let str="#";
	for(let j=1;j<=6;j++){
		let num=(parseInt(Math.random()*16)).toString(16);
		str+=num;
		}
		return str;
	}

//获取某一对象特定属性
function getStyle(domObj,attr){
	if(domObj.currentStyle){
		return domObj.currentStyle[attr];
	}else{
		var obj  = window.getComputedStyle(domObj);
		return obj[attr];
	}
}