 // 设置animation动画
// {参数必须的
// 	animationName,动画名字
// 	fileName,该动画在哪一个css文件下(缩小范围)可选
// 	rules，关键帧
//  url当前页面的域名及端口号window.location.origin可选
// }

let cssBaseUrl = window.location.origin;

function HandleAnimation(options){
	for(let k in options){
		if(!options.hasOwnProperty(k)){
			break;
		}
		this[k] = options[k];
	}
	this.url = null;
	this.myRules = document.styleSheets;
}

HandleAnimation.prototype = {
	pbulicAnimation(callBack){
		const len = this.myRules.length;
		for(let i=0; i<len; i++){//对所有的styleSheets
			// console.log(this.myRules[i].href.includes("element.css"),this.myRules[i].href)
			if(!this.myRules[i].href.includes("element.css")){
				let rulesitem = this.myRules[i].cssRules;
				for (let j = 0; j < rulesitem.length; j++) {
					if(rulesitem[j].type===7&&rulesitem[j].name===this.animationName){
						if(callBack){
							callBack(rulesitem[j]);
						}
					}
				}
			}
		}
	},
	addAnimation(cb){
		if(this.rule){
			this.pbulicAnimation((data)=>{
				data.appendRule(this.rule);
				if(cb){
					cb(data);
				}
				return true;
			})
		}
	},
	removeAnimation(cb){
		if(this.deleteKeyFrame){
			this.pbulicAnimation((data)=>{
				data.deleteRule(this.deleteKeyFrame);
				console.log(data,this.deleteKeyFrame)
				if(cb){
					cb(data);
				}
				return true;
			})
		}
	},
	replaceAnimation(options){
		this.removeAnimation(()=>{
			this.addAnimation()
		})
	}
}

// let HandleAnimation = class HandleAnimation{
// 	constructor(options){
// 		for(let k in options){
// 			if(!options.hasOwnProperty(k)){
// 				break;
// 			}
// 			this[k] = options[k];
// 		}
// 		this.url = null;
// 		this.myRules = document.styleSheets;
// 		this.init();
// 	}
// 	init(){
// 		// 判断是否有fileName
// 		if(this.fileName){
// 			this.url = cssBaseUrl+this.cssfileName;
// 			this.addAnimation();
// 		}else{
// 			this.addAnimation();
// 		}
// 	}
// 	pbulicAnimation(callBack){
// 		const len = this.myRules.length;
// 		for(let i=0; i<len; i++){//对所有的styleSheets
// 			// console.log(this.myRules[i].href.includes("element.css"),this.myRules[i].href)
// 			if(!this.myRules[i].href.includes("element.css")){
// 				let rulesitem = this.myRules[i].cssRules;
// 				for (let j = 0; j < rulesitem.length; j++) {
// 					if(rulesitem[j].type===7&&rulesitem[j].name===this.animationName){
// 						if(callBack){
// 							callBack(rulesitem[j]);
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// 	addAnimation(cb){
// 		if(this.rule){
// 			this.pbulicAnimation((data)=>{
// 				data.appendRule(this.rule);
// 				if(cb){
// 					cb(data);
// 				}
// 			})
// 		}
// 	}
// 	removeAnimation(cb){
// 		if(this.deleteKeyFrame){
// 			this.pbulicAnimation((data)=>{
// 				data.deleteRule(this.deleteKeyFrame);
// 				if(cb){
// 					cb(data);
// 				}
// 			})
// 		}
// 	}
// }


let handleAnimation = (options)=>{
	return new HandleAnimation(options);
}


export default handleAnimation