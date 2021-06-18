import icon from "../units/icon.js";
import {Notify} from "../notify/notify.js";


class Message extends Notify {
	constructor(options) {
		// console.log("from message",options);
		super(options);
		// this.options = options
	}
	// init() {
	// 	console.log("message")
	// }
}
let _message = (options = {}) => {
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
	return new Message(options);
}
export default _message
