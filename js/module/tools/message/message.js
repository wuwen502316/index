import icon from "../units/icon.js";


let flag = true;
let Message = class Message {
	constructor(options,classNamed) {
		for (let k in options) {
			if (!options.hasOwnProperty(k)) {
				break;
			}
			this[k] = options[k];
			// console.log(!options.hasOwnProperty(k))
		}
		this.classNamed = classNamed || "message";
		this.className = null;
		this.messageBox = null;
		this.icon = icon[this.type];
		if (flag && this.state === this.classNamed) this.init();
	}
	init() {
		this.HTMLCODE = `<i style = "margin-right: 5px">${this.icon}</i>
			<p class="el-message__content">
				<font style="vertical-align: inherit;">
					<font style="vertical-align: inherit;">${this.message}</font>
				</font>
			</p>
			<i class="el-message__closeBtn" style= "display:${this.is_show_close?'inline-block':'none'}">${icon.close}</i>
			<!---->`
		this.init_data();
	}
	init_data() {
		if (this.type) {
			this.className = `el-message el-message--${this.type}`;
			if (this.is_center) {
				this.className = `el-message el-message--${this.type} is-center`;
			}
		}
		this.create_element();
	}
	create_element() {
		this.messageBox = document.createElement("div");
		this.messageBox.className = this.className;
		this.messageBox.innerHTML = this.HTMLCODE;
		document.querySelector("body").appendChild(this.messageBox);
		console.log("创建完成");
		this.setInfoStyle(); //设置mwssagebox的top
		this.setTimer(); //设置定时器，3s后消失，同时后面的messagebox同步上升
	}
	setInfoStyle() {
		// const str = `.el-message--${this.type}`;
		this.str = `.el-message`;
		let messageBoxs = document.querySelectorAll(this.str);
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
		let _flag = false;
		this.messageBox.addEventListener("transitionend", (e) => {
			if (e.target === this.messageBox && !_flag) {
				_flag = true;
				flag = true;
				cb();
			}
		})//监听transitionend是否完成，否flag = false; 是 flag = true;
	}
	setAllMessageBoxStyle() {
		// const str = `.el-message--${this.type}`;
		let messageBoxs = document.querySelectorAll(this.str);
		let startlen = messageBoxs.length;
		// console.log(len);
		flag = false;
		// throw new Error("请勿频繁点击");
		for (let i = 1; i < startlen; i++) {
			messageBoxs[i].classList.add("el-mssage-info-step-move");
			messageBoxs[i].style.top = parseFloat(getComputedStyle(messageBoxs[i]).top) - this.space + "px";
		}
		let t = setTimeout(() => {
			// const str = `.el-message--${this.type}`;
			// const str = `.el-message`;
			let messageBoxs_end = document.querySelectorAll(this.str);
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
let _message = function(options = {}) {
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
		position:"right",
		style: {
			top: 20
		},
		space: 70
	}, options)
	return new Message(options)
}
export {
	_message,
	Message
};