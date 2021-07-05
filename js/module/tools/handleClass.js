let reg = {
	elementReg(data){
		let reg = /^"([^\s]?)([a-z]+)(\s+?)([A-Z]+)([a-zA-Z]+)([^\s]?)"$/g;//"[object SVGSVGElement]"
		return reg.test(Object.prototype.toString.call(data));
	},
	typeofReg(data,str){
		let result = (typeof(data) === str);
		return result;
	},
	objectReg(data){
		let result = (typeof(data) === "object");
		return result;
	},
	stringReg(data){
		let result = (typeof(data) === "string");
		return result;
	},
	firstWordToUpperCase(str){
		var arr = [];
		var list = str.split(" ");
		for(let i = 0; i<list.length;i++){
			let starWord = list[i].substring(0,1).toUpperCase();
			let str = list[i].substring(1);
			arr.push(starWord+str);
		}
		str = arr.join().replace(","," ");
		return str;
	},
	stickReg(data,string){
		if(!this.stringReg(string)){
			return string;
		}
		let str = `^"([^\s]?)([a-z]+)(\s+?)[${this.firstWordToUpperCase(string)}]`
		let reg = /^"([^\s]?)([a-z]+)(\s+?)([A-Z]+)([a-z]+)([^\s]?)"$/g;
		return reg.test(str);
	}
}
let handleClass = {
	addClass:function(element,config){
		if(!reg.elementReg(element)){
			return false;
		}
		var str = "";
		var classList = null;
		if(reg.typeofReg(config,"string")){
			classList = config.split(" ");
		}else if(Object.prototype.toString.call(config) === "object Array"){
			classList = config;
		}else{
			throw new Error("参数config必须为string 或者array类型")
		}
		for (var i = 0; i < classList.length; i++) {
			str = " "+classList[i];
		}
		element.className+=str;
		return true;
	},
	replace:function(element,config,replacedString){
		if(!reg.elementReg(element) && reg.typeofReg(config,"string") && reg.typeofReg(config,"replacedString")){
			return false;
		}
	}
}

export {
	reg,
	handleClass
}