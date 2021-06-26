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
		let btn_types = document.querySelectorAll(".btn_type");
		for (let i = 0; i < btn_types.length; i++) {
			if(btn_types[i].className.indexOf("is-disabled") <= -1){
				btn_types[i].onclick = e=>{
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
	
	var config = {
		routerViewId: "app", // 路由切换的挂载点 id
		stackPages: true, // 多级页面缓存
		animationName: "slide", // 多级页面缓存
		routes: [
		    {
		      path: "/home",
		      name: "home",
		      callback: function(transition) {
		          home()
		      }
		    }
		]
	}
	router.init(config);
}


