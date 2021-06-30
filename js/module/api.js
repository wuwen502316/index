import {_message} from "./tools/message/message.js";
import notify from "./tools/notify/notify.js";
import {confirm,Confirm} from "./tools/confirm/confirm.js";

window.$message = _message;
window.$notify = notify;
window.$Confirm = Confirm;
window.$confirm = confirm;

