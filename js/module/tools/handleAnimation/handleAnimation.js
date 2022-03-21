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
	this.flag = false;//默认不存在该条rule即cssKeyFrams.findRule的返回值为null(res)
	if(!this.rule && !this.animationName){
		console.err(`参数错误<br></br>animationName:${animationName};rule:${rule}`);
		return;
	}
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
						let res = rulesitem[j].findRule(this.ruleName);
						this.flag = Boolean(res);
						if(callBack){
							callBack(rulesitem[j]);
						}
					}else{
						console.log(`options:${options}，没有该动画`)
					}
				}
			}
		}
	},
	addAnimation(callBack){
		this.pbulicAnimation((data)=>{
			if(this.rule){
				if(!this.flag){
					data.appendRule(this.rule);
					// console.log(1)
				}
				if(callBack){
					// console.log(2)
					callBack(data);
				}
				return true;
			}
		})
	},
	removeAnimation(callBack){
		if(this.ruleName){
			this.pbulicAnimation((data)=>{
				if(this.flag){
					data.deleteRule(this.ruleName);
				}
				// console.log(data,this.deleteKeyFrame)
				if(callBack){
					callBack(data);
				}
				return true;
			})
		}else{
			console.err(`参数缺失，ruleName:${this.ruleName}`)
		}
	},
	replaceAnimation(options){
		this.removeAnimation(()=>{
			this.addAnimation()
		})
	}
}

let handleAnimation = (options)=>{
	return new HandleAnimation(options);
}


export default handleAnimation
