import {_message} from "./tools/message/message.js";
import notify from "./tools/notify/notify.js";
import {confirm} from "./tools/confirm/confirm.js";

window.$message = _message;
window.$notify = notify;
window.$confirm = confirm;

