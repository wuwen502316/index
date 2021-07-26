// let flag = true;
window.onload = function(){
const tools = window.tools;//全局变量引入
window.is_show_close = true;

let handleCancel = document.querySelectorAll(".handle-cancel");//关闭按钮
let dropdownTrigger = document.querySelector(".el-header-item.right.dropdown-trigger");
let elBtnChange = document.querySelector(".el-btn-change");//change innerHTML内容
let elBtnChangeSpan = document.querySelector(".el-btn-change>span");//change innerHTML内容
let showCloseDiv = document.querySelector(".is-showClose");
let showCloseSpan = document.querySelector(".is-showClose>span");
let dropdown = document.querySelector("ul[role='dropdown--menu']");//dropdown(下拉菜单)的ul
let dropdownMenuitems = document.querySelectorAll(".dropdown--menuitem");//dropdown下拉菜单的div

dropdown.addEventListener("click",(e)=>{
	e.stopPropagation();
})
dropdown.addEventListener("click",(e)=>{//点击ul时阻止冒泡
	let eTarget = null;
	if(e.target.nodeName == "UL" || e.target.className.includes("dropdown-menuitem-divider")){
		return;
	}
	if(e.target.nodeName == "SPAN"){
		eTarget = e.target.parentElement;
	}
	if(e.target.nodeName == "LI" && e.target.className.includes("dropdown--menuitem")){
		eTarget = e.target;
	}
	
	if(!eTarget.className.includes("dropdown--menuitem-selected")){
		for(let i = 0; i<dropdownMenuitems.length; i++){
			if(dropdownMenuitems[i].className.includes("dropdown--menuitem-selected")){
				dropdownMenuitems[i].classList.remove("dropdown--menuitem-selected");
			}
		}
		eTarget.classList.add("dropdown--menuitem-selected")
	}
	setTimeout(clickEvent.closeDropDownMenu,200);
	e.stopPropagation();
})
let clickEvent = {//事件
	dropdownTriggerClick(e){//dropdown下拉菜单点击事件
		// let e = e ? e : window.event;
		let extend = dropdown.getAttribute("is-extend");
		if(!JSON.parse(extend)){
			tools.handleClass.replaceClass(dropdown,"hidden","show");
		}else{
			tools.handleClass.replaceClass(dropdown,"show","hidden");
		}
		dropdown.setAttribute("is-extend",!JSON.parse(extend));
		e.stopPropagation();
	},
	elBtnChangeClick(){//改变内的nitify or message
		const inner = elBtnChangeSpan.innerHTML;
		elBtnChangeSpan.innerHTML = inner && inner === "message" ? "notify" : "message";
	},
	isShowCloseBtn(){//控制关闭按钮
		const inner = showCloseSpan.innerHTML;
		showCloseSpan.innerHTML = inner && inner === "可关闭" ? "不可关闭" : "可关闭";
		window.is_show_close = !window.is_show_close;
	},
	closeDropDownMenu(){//当ul:display:block时，点击其他地方隐藏ul
		let extend = dropdown.getAttribute("is-extend");
		if(JSON.parse(extend)){
			window.tools.handleClass.replaceClass(dropdown,"show","hidden");
			dropdown.setAttribute("is-extend",!JSON.parse(extend));
		}
		return ;
	}
}

dropdownTrigger.onclick = (e)=>{//dropdown下拉菜单点击事件
	clickEvent.dropdownTriggerClick(e);
}
elBtnChange.onclick = ()=>{//改变内的nitify or message
	clickEvent.elBtnChangeClick();
}
showCloseDiv.onclick = ()=>{//控制关闭按钮
	clickEvent.isShowCloseBtn();
}

document.addEventListener('click', function(){
	clickEvent.closeDropDownMenu();
}, false);
(function btnClick(){
	let btns = document.querySelectorAll(".btns-conllection >.el-button");
	for (let i = 0; i < btns.length; i++) {
		if(btns[i].className.indexOf("is-disabled") <= -1&&btns[i].getAttribute("role")==="btn"){
			btns[i].onclick = e=>{
				let type = null;
				let message = null;
				let el = e;
				if(e.target.nodeName ===  "SPAN"){
					el = e.target.parentNode;
					type = el.getAttribute("rtype");
					message = el.innerHTML;
				}else{
					type = e.target.getAttribute("rtype");
					message = e.target.children[0].innerHTML;
				}
				
				if(elBtnChangeSpan.innerHTML == "message"){
					this.tools.$message({
						type:type,
						message: message,
						is_show_close:window.is_show_close,
						duration:3000
					})
				}else{
					this.tools.$notify({
						type:type,
						title:"title",
						message: message,
						is_show_close:window.is_show_close
					})
				}
			}
		}
	}
}())
for (let i = 0; i < handleCancel.length; i++) {
	handleCancel[i].onclick = () => {
		let el_message_box_wapper = document.querySelectorAll(".el-message-box__wrapper");
		if(el_message_box_wapper && el_message_box_wapper.length <= 1){
			document.querySelector("body").removeChild(el_message_box_wapper[0]);
		}
		this.tools.$message({
			message: "已取消",
			type: "error",
			duration: 3000
		})
	}
}
(function aside(){//则边栏click事件
	const submenuTitle = document.querySelectorAll(".el-submenu__title");
	let k = 0;
	for (let i = 0; i < submenuTitle.length; i++) {
		
		submenuTitle[i].onclick = function(e) {k++;
			let el = e.currentTarget.parentNode;//li 获取绑定click事件的dom节点(不同于e.target)
			let flag = el.querySelector(".el-submenu__title").getAttribute("aria-expanded");
			// console.log(flag)
			//当前节点下获取目标节点的属性
			if(el.className.includes("el-submenu")&&!el.className.includes("is-disabled")&&!flag){
				// console.log(1)
				//判断li的className是否符合要求,并且li>div没有"aria-expanded"属性
				let menu_inline = el.querySelector(".el-menu.el-menu--inline");//li>div>ul
				el.querySelector(".el-submenu__title").setAttribute("aria-expanded",true);
				// li设置"aria-expanded"属性即li是展开状态
				if(menu_inline){
					tools.handleAnimation({
						animationName:"menu-item-fade-out",
						rule:"to{height:260px;opacity:1;}",
						ruleName:"to"
					}).addAnimation(()=>{//回调
						menu_inline.classList.add("aside-menu-fade-out");
						menu_inline.style = ""
					})
					
					menu_inline.addEventListener("animationend",()=>{//监听动画是否完成
						menu_inline.classList.remove("aside-menu-fade-out");
						menu_inline.style = ""
					},false)
				}
				
				let svg = el.querySelector("div .arrow-roll-begining");//svg2D变换
				tools.handleClass.replaceClass(svg,"arrow-roll-begining","arrow-roll-clicked");
				tools.handleClass.addClass(el,"is-opened el-submenu-transform");//li添加className
			}else if(flag){
				// console.log(2)
				el.querySelector(".el-submenu__title").removeAttribute("aria-expanded");
				//li折叠时移除"aria-expanded"属性即表示不是展开状态
				let svg = el.querySelector("div .arrow-roll-clicked");
				tools.handleClass.replaceClass(svg,"arrow-roll-clicked","arrow-roll-begining");
				tools.handleClass.removeClass(el,"is-opened el-submenu-transform arrow-roll-clicked");
				let menu_inline = el.querySelector(".el-menu.el-menu--inline");
				if(menu_inline){
					tools.handleAnimation({
						rule:"0%{height:210px;opacity:1;}",
						animationName:"menu-item-fade-in",
						ruleName:"from"
					}).addAnimation(()=>{
						menu_inline.classList.add('aside-menu-fade-in')
					})
					menu_inline.addEventListener("animationend",()=>{
						menu_inline.style.display = !flag ? "block" : "none";
						menu_inline.classList.remove("aside-menu-fade-in");
					},false)
				}
			}
			e.stopPropagation();
		}
	}
}())
}


