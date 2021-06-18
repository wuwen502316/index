// let flag = true;
window.onload = function(){
	// console.log(window === this);
	
	let elMessageCancle = document.querySelectorAll(".el-message-cancle");
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
					this.$message({
						type:type,
						message: message
					})
				}
			}
		}
	})()
	for (let i = 0; i < elMessageCancle.length; i++) {
		elMessageCancle[i].onclick = () => {
			// console.log(this.$notify)
			let el_message_box_wapper = document.querySelectorAll(".el-message-box__wrapper");
			if(el_message_box_wapper && el_message_box_wapper.length <= 1){
				document.querySelector("body").removeChild(el_message_box_wapper[0]);
			}
			this.$notify({
				message: "已取消",
				type: "error",
				duration: 3000
			})
		}
	}
	let str = `<div role="alert" class="el-notification right" style="top: 16px; z-index: 2011;">
		<!-- <i class="el-notification__icon el-icon-success"></i> -->
		<div class="el-notification__group is-with-icon">
			<h2 class="el-notification__title">成功</h2>
			<div class="el-notification__content">
				<p>这是一条成功的提示消息</p>
			</div>
			<div class="el-notification__closeBtn el-icon-close"></div>
		</div>
	</div>`
}


