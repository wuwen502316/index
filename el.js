let icon = {
	info: `<svg t="1623132245850" class="icon" viewBox="0 0 1024 1024" version="1.1" width="1em" height="1em"><path d="M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768z m0 707.669333a323.669333 323.669333 0 1 1 0-647.338666 323.669333 323.669333 0 0 1 0 647.338666z m-0.085333-248.106666c5.034667-12.245333 12.16-29.866667 21.333333-52.906667 9.216-23.04 16.682667-42.496 22.485333-58.368 5.802667-15.872 8.704-26.197333 8.704-30.976 0-8.106667-5.162667-12.16-15.488-12.16-11.861333 0-29.354667 6.656-52.565333 19.968-23.168 13.312-48.213333 31.402667-75.221333 54.272l13.994666 12.8 10.24-8.405333c6.272-6.016 13.824-11.690667 22.656-16.981334 8.832-5.290667 15.146667-7.936 18.944-7.936 5.290667 0 7.936 2.56 7.936 7.765334 0 1.450667-6.954667 19.626667-20.821333 54.485333-13.866667 34.858667-21.674667 54.698667-23.466667 59.434667l-27.989333 64.426666c-7.296 18.688-10.965333 32.085333-10.965333 40.192 0 5.376 2.133333 9.813333 6.442666 13.354667 4.266667 3.541333 9.216 5.290667 14.762667 5.290667 13.866667 0 33.536-7.253333 58.965333-21.674667 25.472-14.464 49.664-30.72 72.533334-48.810667l-14.677334-13.44-5.248 3.285334a72.533333 72.533333 0 0 1-5.674666 3.285333c-24.96 17.834667-42.24 26.752-51.797334 26.752-5.077333 0-7.594667-2.56-7.594666-7.765333 0-4.138667 3.797333-15.957333 11.349333-35.498667 7.552-19.498667 14.592-36.266667 21.162667-50.389333zM560.981333 298.666667c-9.258667 0-17.664 2.517333-25.173333 7.552a55.466667 55.466667 0 0 0-17.493333 18.346666c-4.266667 7.253333-6.314667 14.933333-6.314667 23.04 0 9.301333 3.456 17.706667 10.410667 25.173334a32.981333 32.981333 0 0 0 25.088 11.221333c13.013333 0 24.576-5.546667 34.688-16.554667 10.069333-11.008 15.146667-22.912 15.146666-35.669333a30.208 30.208 0 0 0-10.837333-23.552 37.376 37.376 0 0 0-25.557333-9.557333z" p-id="7358"></path></svg>`,
	success: `<svg t="1623131062573" class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="3971" width="1em" height="1em"><path d="M512.9 511.1m-447.4 0a447.4 447.4 0 1 0 894.8 0 447.4 447.4 0 1 0-894.8 0Z" fill="#0EC469" p-id="3972"></path><path d="M257.8 493.6s62.9 146.8 160.8 146.8c94.4 0 381.1-333.7 381.1-333.7S521.1 761.6 427.9 761.6c-77.5 0-133.4-110.7-170.1-268z" fill="#FFFFFF" p-id="3973"></path></svg>`,
	warning: `<svg t="1623131041816" class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="3120" width="1em" height="1em"><path d="M467.2 748.8A44.8 44.8 0 1 0 512 704a44.8 44.8 0 0 0-44.8 44.8zM512 640a40.106667 40.106667 0 0 1-40.106667-40.106667V230.826667a40.106667 40.106667 0 0 1 80.213334 0v369.066666A40.106667 40.106667 0 0 1 512 640z m0-640a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m0 72.106667a439.893333 439.893333 0 0 1 170.666667 845.226666A439.893333 439.893333 0 0 1 200.96 200.96a439.04 439.04 0 0 1 311.04-128z" fill="#5E5C5C" p-id="3121"></path></svg>`,
	error: `<svg t="1623131169870" class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="4976" width="1em" height="1em"><path d="M512 0C229.376 0 0 229.376 0 512s229.376 512 512 512 512-229.376 512-512S794.624 0 512 0z m218.624 672.256c15.872 15.872 15.872 41.984 0 57.856-8.192 8.192-18.432 11.776-29.184 11.776s-20.992-4.096-29.184-11.776L512 569.856l-160.256 160.256c-8.192 8.192-18.432 11.776-29.184 11.776s-20.992-4.096-29.184-11.776c-15.872-15.872-15.872-41.984 0-57.856L454.144 512 293.376 351.744c-15.872-15.872-15.872-41.984 0-57.856 15.872-15.872 41.984-15.872 57.856 0L512 454.144l160.256-160.256c15.872-15.872 41.984-15.872 57.856 0 15.872 15.872 15.872 41.984 0 57.856L569.856 512l160.768 160.256z" fill="#CF3736" p-id="4977"></path></svg>`
}
class Info {
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
		this.init_data();
	}
	init_data() {
		// console.log(this.message)
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
		console.log(this.type)
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
		// let all_message_info = document.querySelectorAll(".el-message--info");
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
		// console.log(len);
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
class Notify {
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
		this.init_data();
	}
	init_data() {
		// console.log(this.message)
		if (this.type) {
			this.className = `el-message el-message--${this.type}`;
			if (this.is_center) {
				this.className = `el-message el-message--${this.type} is-center`;
			}
		}
		console.log(this.type)
		this.create_element();
	}
	create_element() {
		this.messageBox = document.createElement("div");
		this.messageBox.className = this.className;
		this.messageBox.innerHTML = `
			<i style = "margin-right: 5px">${this.icon}</i>
			<p class="el-message__content">
				<font style="vertical-align: inherit;">
					<font style="vertical-align: inherit;">${this.message}</font>
				</font>
			</p>
			<!---->
		`
		document.querySelector("body").appendChild(this.messageBox);
		console.log("创建完成");

		this.setInfoStyleTop(); //设置mwssagebox的top
		this.setTimer(); //设置定时器，3s后消失，同时后面的messagebox同步上升
	}
	setInfoStyleTop() {
		const str = `.el-message--${this.type}`;
		let messageBoxs = document.querySelectorAll(str);
		let message_len = messageBoxs.length;
		this.messageBox.style.top =
			`${message_len === 1 ? this.style.top : (message_len-1)*this.space + this.style.top}px`;
	}
	setTimer() {
		let timer = setTimeout(() => {
			this.remove_messagebox(); //赋值className开启动画，并监听transitionend是否完成
			this.setAllMessageBoxStyle();
		}, this.duration)
		console.log("定时器开启")
	}
	remove_messagebox() {
		// let all_message_info = document.querySelectorAll(".el-message--info");
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
		// console.log(len);
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
class Message extends Notify {
	constructor(options) {
		super(options);
		console.log(this.init);
		// this.init();
	}
}
window.$message = function(options = {}) {
	// 可以只传入message的值（字符串）
	if (typeof options === "string") {
		options = {
			message: options
		}
	}
	options = Object.assign({
		state: "message",
		type: "info",
		message: "默认信息",
		duration: 3000,
		is_center: false,
		is_show_close: false,
		style: {
			top: 20
		},
		space: 70
	}, options)
	return new Message(options)
}
this.$message("info")
let elMessageCancle = document.querySelectorAll(".el-message-cancle");
for (let i = 0; i < elMessageCancle.length; i++) {
	elMessageCancle[i].onclick = () => {
		// console.log(this.$notify)
		this.$notify({
			message: "已取消",
			type: "error",
			duration: 3000
		})
	}
}
window.$notify = function(options = {}) {
	// 可以只传入message的值（字符串）
	if (typeof options === "string") {
		options = {
			message: options
		}
	}
	options = Object.assign({
		state: "message",
		type: "info",
		message: "默认信息",
		duration: 3000,
		is_center: false,
		is_show_close: false,
		style: {
			top: 20
		},
		space: 70
	}, options)
	return new Info(options)
}
