import {_message} from "./tools/message/message.js";
import notify from "./tools/notify/notify.js";
import {confirm} from "./tools/confirm/confirm.js";
import icon from "./tools/units/icon.js";
import asideData from "./tools/units/aisdeData.js";
import handleClass from "./tools/handleClass/handleClass.js";
import handleAnimation from "./tools/handleAnimation/handleAnimation.js";


// console.log(handleAnimation);
let tools = {
	$message:_message,
	icon:icon,
	$notify:notify,
	$confirm:confirm,
	handleClass:handleClass,
	handleAnimation:handleAnimation
}
window.tools = tools;
// window.tools.asideData = asideData;



let num = 0;
function DetailNavList(){
	this.config = null;
	this.navList = null;
	this.data = null;
}
DetailNavList.prototype={
	init(config){// 初始化
		this.config = config;
		// console.log(this)
		for(let k in this.config){
			if(!this.config.hasOwnProperty(k)){
				break;
			}
			if(Object.prototype.toString.call(this.config[k]) === "[object Array]"){
				this.data = this.config[k];
				this.creatrNav(this.data);
			}
		}
	},
	createFristClassMenu(data){
		let str ="";
		str =//一级menu的title和icon和arrow
		 `<li role="menuitem" tabindex="-1" class="el-submenu">
			<div aria-haspopup="true" class="el-submenu__title" 
			style="padding-left: ${data.classNav*20}px;">
				<i>${window.tools.icon[data.icon]()}</i>
				<span>${data.navName}</span>
				${(()=>{//有childMenu时加载箭头
					if(data.childrens){
						return `<i class="arrow fristClass-menu-arrow" 
						role="arrow">${window.tools.icon.arrow(20,20,"arrow-roll-begining")}</i>`
					}else{
						return ""
					}
				})()}
			</div>
			${(()=>{//二级menu
				let child_2 = data.childrens;
				if(child_2){//判断是否有二级menu
					return `<ul role="menu" class="el-menu el-menu--inline" style="display: none;">
						${(()=>{
							let HTML_2 = "";
							const len = child_2.length;
							for(let item =0; item<len; item++){
								// console.log(child_2[item].childrens);
								let child_2_item = child_2[item];
								let _position = false;
								if(child_2_item.childrens){
									_position = true;
								}
								let str = this.createSecondClassMenu(child_2_item,_position)
								
								HTML_2 += str;
							}
							return HTML_2
						})()}
					</ul>`
				}else{
					return ""
				}
			})()}
		</li>`
		return str;
	},
	createSecondClassMenu(data,flag){//二级menu的子栏
		let str = "";
		str = `<li class="el-menu-item-group" role="menuItemGrounp"><!--li-->
		${(function(){//是否有标题以及有childs时设置定位
			if(data.navName&&typeof(data.navName)==="string"){
				return `<div class="el-menu-item-group__title" role="menuItemGrounpTitle"
				style=";padding-left:${20+data.classNav*5}px;
				${function(){if(flag){return "position:relative"}}()}">
				${function(){
					if(data.icon){
						return `<i class="arrow">${window.tools.icon[data.icon]()}</i>`
					}else{
						return ""
					}
				}()}
				<span>${data.navName}</span>
				${(()=>{
					if(data.childrens){
						return `<i class="arrow secondClass-menu-arrow" role="menuItemGrounpArrow" >${window.tools.icon.arrow(14,14,"arrow-roll-begin")}</i>`
					}else{
						return ""
					}
				})()}
				</div>`
			}else{
				return ""
			}
		})()}
		
		${(()=>{
			if(flag){
				return `<ul role="menu" class="el-menu el-menu--inline" style="display: block;">
					${function(){
						let child_3 = data.childrens;
						let HTML_3 = "";
						for(let val=0; val<child_3.length; val++){
							let str=`<li role="menuitem" tabindex="-1" class="el-menu-item"
								style="padding-left: ${20+child_3[val].classNav*5}px;">${child_3[val].navName}</li>`
							HTML_3 += str;
						}
						return HTML_3;
					}()}
				</ul>`
			}else{
				return ""
			}
		})()}</li>`
		return str;
	},
	createArrow:(data)=>{//通过字符串模板处理数据，并返回
		if(data.childrens){
			return `<i>${window.tools.icon.arrow(20,20,"arrow-roll-begin arrow")}</i>`
		}
	},
	creatrNav(data){
		//主字符串模板,生成nav并添加到html中
		let ul = document.createElement("ul");
		for(let i=0; i<data.length; i++){//对数据处理
			let str = this.createFristClassMenu(data[i]);//第一级menu及主导航栏的子栏
			ul.innerHTML += str;
		}
		document.querySelector(".navMenu").appendChild(ul)
	},
	
}
let detailNavList = new DetailNavList();
if(asideData.code == 200){
	let data = asideData.data;
	detailNavList.init(data);
}
