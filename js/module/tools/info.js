class Info{
	constructor(options) {
		for (let k in options) {
			if (!options.hasOwnProperty(k)) {
				break;
			}
			this[k] = options[k];
			// console.log(!options.hasOwnProperty(k))
		}
		this.className = null;
		this.messageBox = null;
		this.icon = icon[this.type];
		this.init();
	}
	init() {
		// console.log("from info");
		this.init_data();
	}
	init_data() {
		if(this.title){
			if (this.type) {
				this.className = `el-notification right`;
				if (this.is_center) {
					this.className = `el-notification right is-center`;
				}
			}
		}else{
			if (this.type) {
				this.className = `el-message el-message--${this.type}`;
				if (this.is_center) {
					this.className = `el-message el-message--${this.type} is-center`;
				}
			}
		}
		this.create_element();
	}
	create_element() {
		this.messageBox = document.createElement("div");
		this.messageBox.className = this.className;
		this.messageBox.role = "alert";
		let s = `
			<i style = "margin-right: 5px">${this.icon}</i>
			<div class="el-notification__group">
				<h2 class="el-notification__title">
					<font style="vertical-align: inherit;">
						<font style="vertical-align: inherit;">成功</font>
					</font>
				</h2>
				<div class="el-notification__content">
					<p>
						<font style="vertical-align: inherit;">
							<font style="vertical-align: inherit;">这是一条成功的提示消息</font>
						</font>
					</p>
				</div>
				<!--<div class="el-notification__closeBtn"> X </div> -->
			</div>`
		let _str = `
			<i style = "margin-right: 5px">${this.icon}</i>
			<p class="el-message__content">
				<font style="vertical-align: inherit;">
					<font style="vertical-align: inherit;">${this.message}</font>
				</font>
			</p>
			<!---->`
		this.messageBox.innerHTML = s;
		document.querySelector("body").appendChild(this.messageBox);
		console.log("创建完成");
		this.setInfoStyleTop(); //设置mwssagebox的top
		this.setTimer(); //设置定时器，3s后消失，同时后面的messagebox同步上升
	}
	setInfoStyleTop() {
		const str = `.el-message--${this.type}`;
		let messageBoxs = document.querySelectorAll(str);
		let message_len = messageBoxs.length;
		this.messageBox.style.top = `${message_len === 1 ? this.style.top : (message_len-1)*this.space + this.style.top}px`;
	}
	setTimer() {
		let timer = setTimeout(() => {
			this.remove_messagebox(); //赋值className开启动画，并监听transitionend是否完成
			this.setAllMessageBoxStyle();
		}, this.duration)
		console.log("定时器开启")
	}
	remove_messagebox() {
		let message_box = this.messageBox;
		message_box.style.top = parseFloat(getComputedStyle(this.messageBox).top) - this.space + "px";
		message_box.style.opacity = 0;
		// this.setAllMessageBoxStyle();//设置后面的messagebox同步上升
		let remove_ele = () => { //回调函数执行后删除元素
			document.querySelector("body").removeChild(this.messageBox);
			console.log("已移除");
		}
		this.eventListener(remove_ele);
	}
	eventListener(cb) {
		let flag = false;
		this.messageBox.addEventListener("transitionend", (e) => {
			if (e.target === this.messageBox && !flag) {
				flag = true;
				cb();
			}
		})
	}
	setAllMessageBoxStyle() {
		const str = `.el-message--${this.type}`;
		let messageBoxs = document.querySelectorAll(str);
		let startlen = messageBoxs.length;
		for (let i = 1; i < startlen; i++) {
			messageBoxs[i].classList.add("el-mssage-info-step-move");
			messageBoxs[i].style.top = parseFloat(getComputedStyle(messageBoxs[i]).top) - this.space + "px";
		}
		let t = setTimeout(() => {
			const str = `.el-message--${this.type}`;
			let messageBoxs_end = document.querySelectorAll(str);
			let endlen = messageBoxs_end.length;
			for (let i = 0; i < startlen; i++) {
				if (messageBoxs_end[i] !== undefined) {
					console.log("同步上移完成");
					messageBoxs_end[i].classList.remove("el-mssage-info-step-move");
				}
			}
			clearTimeout(t);
		}, 300)
	}
}