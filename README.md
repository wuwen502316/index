#### 每个人都有属于自己的一片森林,迷失的人迷失了,相逢的人会再相逢

----
###前端 js
##### 原生js实现element-ui的消息通知

[github地址:https://wuwen502316.github.io/main/](https://wuwen502316.github.io/main/ "gitub")

------
### 目录

 * [简介](#简介)
     * [需求](#需求)
     * [实现思路](#实现思路)
----
### 简介 

样式是从element-ui官网down下来的(elementUI的css部分),样式和一些动画来自elementUI,对于icon部分使用了svg矢量，对css文件做了初步分类，对于css的详细分类持续更新中...

--------
### 需求
##### 通过class类实现类似于  this.\$message 或者 this.\$notify  弹出框 
##### 首先对function初始化，并return class实例；后挂载到window对象上
```js
const _message = function(options = {}) {
  // 可以只传入message的值（字符串）
  if (typeof options === "string") {
       options = {
	    message: options
       } 
  }
  options = Object.assign({
       state: "message",//用来判断执行的是否为message
       type: "info",//icon的类型
       message: "默认信息",//内容
       duration: 3000,//setTimeout时延时的时间，接受number类型
       is_center: false,//文字是否居中
       is_show_close: false,//是否显示cancel图标
       position:"right",//还在开发中，目的是实现弹出框的位置
       style: {
	    top: 20
       },
       space: 70
  }, options)
  return new Message(options)
}
window.message = _message;
 ```
##### 1、createELement（\$message)

######首先createELement("div")，div内添加如下代码，后添加到body中

```js
this.HTMLCODE = `<i style = "margin-right: 5px">${this.icon}</i>//icon为图标
<p class="el-message__content">
      <font style="vertical-align: inherit;">
           <font style="vertical-align: inherit;">${this.message}</font>//message为显示的内容
      </font>
 </p>
 ${this.is_show_close ? `<i class="el-message__closeBtn">${icon.close}</i>` : `<!---->`}`
```
设置messagebox的top(获取所有的el-message **as***  this.messageBoxs，通过判断this.messageBoxs.length决定top值)

判断**duration<=0**,决定是否开启一个定时器,3s后（默认)移除this.message，若duration<=0为不会自动关闭的弹框

```js
if(this.duration){
	this.timer = setTimeout(() => {
		this.remove_setStyle();//赋值className开启css动画，并监听transitionend是否完成
	}, this.duration)
	console.log("定时器开启");
}
//添加click监听
//点击后; 1、关闭定时器2、同步top同步上升(详见3)
if(this.is_show_close){
	this.closeBtn.onclick = (e) => {
	if(this.duration) clearTimeout(this.timer);
		this.remove_setStyle();
	}
}
```


**this.remove_setStyle()**大致概括为 :
所有的messageBox同步上升，同时添加监 **addEventListener("transitioned",()=>{})**来判断css动画是否完成
 ******注意！******对于transitioned的监听时，如果有多个值（如top,left两个变化值）时，该监听会执行多次。
 
###### 解决方法：可以设置一个flag来判断，()=>{flag = false;}

------------

##### 2、top同步完成后，移除className，并removeChild(this.message)

----
##### 3、如果 **is_show_close = true** 时

点击关闭按钮 --> 关闭setTimeout --> top同步上升

```js
let messageBoxs = document.querySelectorAll(this.str);//获取所有el-message节点
let preMessageBoxs = [];
for(let i = messageBoxs.length-1; i>=0; i--){//获取关闭当前按钮后面的所有兄弟节点
  if(messageBoxs[i] == this.messageBox){
    break;
  }
  preMessageBoxs.unshift(messageBoxs[i]);
}
let startlen = preMessageBoxs.length;
flag = false;//主要目的是避免在同步top时，创建新的$message *or* $notify,造成两个弹出框重叠（效果是点击过快，实际上3个，但显示为2个，其中2个重叠在了一起，
//同时显示的2个中间由于是通过querySlectorAll('el-message').length初始化top，会有一块空白）
// throw new Error("请勿频繁点击");
for (let i = 0; i < startlen; i++) {
	preMessageBoxs[i].classList.add("el-mssage-info-step-move");
	preMessageBoxs[i].style.top = parseFloat(getComputedStyle(preMessageBoxs[i]).top) - this.space + "px";
}
let t = setTimeout(() => {
	// const str = `.el-message--${this.type}`;
	// const str = `.el-message`;
	let endlen = preMessageBoxs.length;
	for (let i = 0; i < startlen; i++) {
		if (preMessageBoxs[i] !== undefined) {
		        console.log("同步上移完成");
			preMessageBoxs[i].classList.remove("el-mssage-info-step-move");
		}
	}
	clearTimeout(t);
}, 300)
```
