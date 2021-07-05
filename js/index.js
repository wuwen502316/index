// let flag = true;
window.onload = function(){
	// console.log(window === this);
	window.is_show_close = true;
	let handleCancel = document.querySelectorAll(".handle-cancel");
	let elBtnChange = document.querySelector(".el-btn-change");
	let elBtnChangeSpan = document.querySelector(".el-btn-change>span");
	let showCloseDiv = document.querySelector(".is-showClose");
	let showCloseSpan = document.querySelector(".is-showClose>span");
	elBtnChange.onclick = ()=>{
		const inner = elBtnChangeSpan.innerHTML;
		elBtnChangeSpan.innerHTML = inner && inner === "message" ? "notify" : "message";
	}
	showCloseDiv.onclick = ()=>{
		const inner = showCloseSpan.innerHTML;
		showCloseSpan.innerHTML = inner && inner === "可关闭" ? "不可关闭" : "可关闭";
		this.is_show_close = !this.is_show_close;
	}
	(function btnClick(){
		let btns = document.querySelectorAll(".btns-conllection >.el-button");
		for (let i = 0; i < btns.length; i++) {
			if(btns[i].className.indexOf("is-disabled") <= -1 && btns[i].getAttribute("role") === "btn"){
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
						this.$message({
							type:type,
							message: message,
							is_show_close:window.is_show_close,
							duration:3000
						})
					}else{
						this.$notify({
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
			// console.log(this.$notify)
			let el_message_box_wapper = document.querySelectorAll(".el-message-box__wrapper");
			if(el_message_box_wapper && el_message_box_wapper.length <= 1){
				document.querySelector("body").removeChild(el_message_box_wapper[0]);
			}
			this.$message({
				message: "已取消",
				type: "error",
				duration: 3000
			})
		}
	}
	(function aside(){//则边栏click事件
		const submenuTitle = document.querySelectorAll(".el-submenu__title");
		for (let i = 0; i < submenuTitle.length; i++) {
			submenuTitle[i].onclick = function(e) {
				let el = e.currentTarget.parentNode;
				let flag = el.querySelector(".el-submenu__title").getAttribute("aria-expanded");
				if(el.className.includes("el-submenu") && !el.className.includes("is-disabled") && !flag){
					let menu_inline = el.querySelector(".el-menu.el-menu--inline");
					el.querySelector(".el-submenu__title").setAttribute("aria-expanded",true);
					if(menu_inline){
						menu_inline.style.display = !flag ? "block" : "none";
					}
					let svg = el.querySelector("div .arrow-roll-begin");
					svg.classList.remove("arrow-roll-begin")
					svg.classList.add("arrow-roll-click");
					el.classList.add("is-opened");
					el.classList.add("el-submenu-transform");
				}else if(flag){
					el.querySelector(".el-submenu__title").removeAttribute("aria-expanded");
					let svg = el.querySelector("div .arrow-roll-click");
					svg.classList.remove("arrow-roll-click")
					svg.classList.add("arrow-roll-begin");
					el.classList.remove("is-opened")
					el.classList.remove("arrow-roll-click")
					el.classList.remove("el-submenu-transform")
					let menu_inline = el.querySelector(".el-menu.el-menu--inline");
					if(menu_inline){
						menu_inline.style.display = !flag ? "block" : "none";
					}
					
				}
				e.stopPropagation();
			}
		}
	}())
}


