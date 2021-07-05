import {_message} from "./tools/message/message.js";
import notify from "./tools/notify/notify.js";
import {confirm} from "./tools/confirm/confirm.js";
import icon from "./tools/units/icon.js";
import asideData from "./tools/units/aisdeData.js";
import {reg,handleClass} from "./tools/handleClass.js";


// console.log(_message)
window.$message = _message;
window.icon = icon;
window.$notify = notify;
window.$confirm = confirm;
window.$reg = reg;
window.$handleClass = handleClass;
// window.asideData = asideData;
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
	createArrow:(data)=>{//通过字符串模板处理数据，并返回
		if(data.childrens){
			return `<i>${window.icon.arrow(20,20,"arrow-roll-begin")}</i>`
		}
	},
	creatrNav(data){//主字符串模板,生成nav并添加到html中
		let ul = document.createElement("ul");
		for(let i=0; i<data.length; i++){
			let str = 
			`<li role="menuitem" tabindex="-1" class="el-submenu">
				<div aria-haspopup="true" class="el-submenu__title" style="padding-left: ${data[i].classNav*20}px;">
					<i>${window.icon[data[i].icon]()}</i>
					<span>${data[i].navName}</span>
					${(()=>{
						if(data[i].childrens){
							return `<i>${window.icon.arrow(20,20,"arrow-roll-begin")}</i>`
						}else{
							return ""
						}
					})()}
				</div>
				${(()=>{
					let child_2 = data[i].childrens;
					if(child_2){
						return `<ul role="menu" class="el-menu el-menu--inline" style="display: none;">
							<li class="el-menu-item-group"><!--li-->
							${(function(){
								let HTML_2 = "";
								const len = child_2.length;
								for(let item =0; item<len; item++){
									// console.log(child_2[item].childrens);
									let child_2_item = child_2[item];
									let _position = false;
									if(child_2_item.childrens){
										_position = true;
									}
									let str =
									`<div class="el-menu-item-group__title" style="padding-left:${child_2_item.classNav*20}px;${function(){if(_position){return "position:relative"}}()}">
										${function(){
											if(child_2_item.icon){
												return `<i  class="arrow">${window.icon[child_2_item.icon]()}</i>`
											}else{
												return ""
											}
										}()}
										<span>${child_2_item.navName}</span>
										${(()=>{
											if(child_2_item.childrens){
												return `<i class="arrow">${window.icon.arrow(14,14,"arrow-roll-begin")}</i>`
											}else{
												return ""
											}
										})()}
									</div>
									${(()=>{
										if(_position){
											return `<ul role="menu" class="el-menu el-menu--inline" style="display: none;">
												${function(){
													let child_3 = child_2_item.childrens;
													let HTML_3 = "";
													for(let val=0; val<child_3.length; val++){
														let str=`<li role="menuitem" tabindex="-1" class="el-menu-item"
															style="padding-left: ${child_3[val].classNav*20}px;">${child_3[val].navName}</li>`
														HTML_3 += str;
													}
													return HTML_3;
												}()}
											</ul>`
										}else{
											return ""
										}
									})()}`
									HTML_2 += str;
								}
								return HTML_2
							}())}
							</li>
						</ul>`
					}else{
						return ""
					}
				})()}
			</li>`
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
// setTimeout(()=>{
// 	if(asideData.code == 200){
// 		let data = asideData.data;
// 		detailNavList.init(data);
// 		// detailNavList(data);
// 		// console.log(detailNavList)
// 	}
// },3000)


// <li role="menuitem" tabindex="-1" aria-haspopup="true" class="el-submenu">//通过是否有子元素判断class...
// 	<div class="el-submenu__title" style="padding-left: 20px;">//通过是否有子元素判断是否加载div
// 		<i class="el-icon-location"></i>//icon
// 		<span>导航一</span>//navName
// 		<i class="el-submenu__icon-arrow el-icon-arrow-down"></i>//向下的箭头
// 	</div>
// 	<ul role="menu" class="el-menu el-menu--inline" style="display: none;">//
// 		<li class="el-menu-item-group">
// 			<div class="el-menu-item-group__title" style="padding-left: 40px;">分组一</div>
// 			<ul>
// 				<li role="menuitem" tabindex="-1" class="el-menu-item"
// 					style="padding-left: 40px;">选项1</li>
// 				<li role="menuitem" tabindex="-1" class="el-menu-item"
// 					style="padding-left: 40px;">选项2</li>
// 			</ul>
// 		</li>
// 		<li class="el-menu-item-group">
// 			<div class="el-menu-item-group__title" style="padding-left: 40px;">分组2</div>
// 			<ul>
// 				<li role="menuitem" tabindex="-1" class="el-menu-item"
// 					style="padding-left: 40px;">选项3</li>
// 			</ul>
// 		</li>
// 		<li role="menuitem" aria-haspopup="true" class="el-submenu">
// 			<div class="el-submenu__title" style="padding-left: 40px;">选项4<i
// 					class="el-submenu__icon-arrow el-icon-arrow-down"></i></div>
// 			<ul role="menu" class="el-menu el-menu--inline" style="display: none;">
// 				<li role="menuitem" tabindex="-1" class="el-menu-item"
// 					style="padding-left: 60px;">选项1</li>
// 			</ul>
// 		</li>
// 	</ul>
// </li>