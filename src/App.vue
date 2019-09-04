<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
export default {
	name: 'App',
	data(){
		return {
			title:'“一带一路” 前海国际路演中心官方报名入口-新一代信息技术专场路演邀请函',
			decs:'路演时间：8月20日 路演地点：前海深港青年梦工场 智汇全球·追梦前海>>',
			imgUrl:'https://m.dyly.com/register/app_h5/img/qh.jpg',
			sharehref:'https://m.dyly.com/register/app_h5/qh/index.html'
		}
	},
	created(){
		
	},
	methods:{
		share(){
			var that = this;
			$.getScript('https://res.wx.qq.com/open/js/jweixin-1.0.0.js', function(){
				$.ajax({
					url: "https://m.dyly.com/weixin/getWxConfig",
					type: 'POST',
					data: {
						url: that.sharehref
					}
				}).success(function(data){
					wx.config({
						appId: data.data.appId,
						timestamp: data.data.timestamp,
						nonceStr: data.data.nonceStr,
						signature: data.data.signature,
						jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage']
					});
					// updateAppMessageShareData
					wx.ready(function(){
						// 朋友圈分享
						wx.onMenuShareTimeline({
							title: that.title,
							link: that.sharehref,
							imgUrl: that.imgUrl
						})
						// 分享给朋友
						wx.onMenuShareAppMessage({
							title: that.title,
							desc: that.decs,
							link: that.sharehref,
							imgUrl: that.imgUrl
						})
					})
				})
			});
		},
	}
	  
}
</script>

<style lang="scss">
#app {
	width:100%;
	max-width:750px;
	height:100%;
	margin:0 auto;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
/* 靠左标题 */
.headlineleft{
	height:36px;
	padding-left:24px;
	box-sizing: border-box;
	background:linear-gradient(135deg,rgba(65,179,243,0.7) 0%,rgba(96,120,234,0) 100%);
	font-weight: bold;
	display:flex;
	align-items: center;
    color:rgba(255,255,255,1);
}
/* 靠右标题 */
.headlineright{
	float:right;
	height:36px;
	padding-right:31px;
	box-sizing: border-box;
	background:linear-gradient(135deg,rgba(96,120,234,0) 0%, rgba(65,179,243,0.7) 100%);
	font-weight: bold;
	display:flex;
	justify-content: flex-end;
	align-items: center;
    color:rgba(255,255,255,1);
}
/* 文字颜色 */
.activityBg{
	width:100%;
	padding:25px 24px 0 24px;
	box-sizing: border-box;
	font-size: 14px;
	color:rgba(98,178,232,0.8);
	line-height:22px;
}
.singupFormContain{
	width:100%;
	padding:0 16px;
	box-sizing: border-box;
	.singupForm{
		width:100%;
		border-radius:12px;
		border:1px solid rgba(11,208,236,1);
		padding:40px 20px 23px 20px;
		box-sizing: border-box;
		position:relative;
		.signtitle{
			display:block;
			position:absolute;
			left:50%;
			top:0;
			margin-left:-90px;
			margin-top:-20px;
			width:180px;
			height:40px;
			background:rgba(1,4,13,1);
			border-radius:8px;
			border:1px solid rgba(11,208,236,1);
			color:rgba(11,208,236,1);
			display:flex;
			align-items: center;
			justify-content: center;
			// background: linear-gradient(135deg, rgba(23,234,217,1) 0%, rgba(96,120,234,1) 100%);
			// -webkit-background-clip: text;
			// color: transparent;
		}
		.radioSingle{
			width:100%;
			padding:0 12px;
			box-sizing: border-box;
			height:44px;
			background:rgba(59,150,210,0.29);
			border-radius:4px;
			display:flex;
			align-items: center;
			justify-content: space-between;
			color:#ffffff;
			font-size:14px;
			margin-bottom: 6px;
			span{
				&:nth-child(2){
					transform: rotate(90deg);
				}
			}
		}
		input{
			display:block;
			width:100%;
			height:44px;
			background:rgba(59,150,210,0.29);
			border-radius:4px;
			border:none;
			margin-bottom: 6px;
			padding-left:12px;
			box-sizing: border-box;
			appearance:none;
			-webkit-appearance: none;
			font-size: 14px;
			color:#ffffff;
		}
		input::-webkit-input-placeholder{
			color:rgba(255,255,255,0.3);
			font-size: 14px;
		}
		input::-moz-placeholder{   /* Mozilla Firefox 19+ */
			color:rgba(255,255,255,0.3);
			font-size: 14px;
		}
		input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
			color:rgba(255,255,255,0.3);
			font-size: 14px;
		}
		input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
			color:rgba(255,255,255,0.3);
			font-size: 14px;
		}
		button{
			display:block;
			width:100%;
			height:44px;
			border:none;
			background:linear-gradient(135deg,rgba(23,234,217,1) 0%,rgba(96,120,234,1) 100%);
			border-radius:4px;
			color:#ffffff;
			font-size: 14px;
		}
	}
}

.roadQyContain{
	width:100%;
	padding: 0 24px;
	box-sizing: border-box;
	.roadQyitem{
		width:100%;
		display:flex;
		justify-content: space-between;
		color:rgba(65,179,243,1);
		font-size: 13px;
		line-height:20px;
		margin-top:24px;
		img{
			width:32px;
			height:32px;
			margin-right:12px;
		}
		.left{
			width:49%;
			display:flex;
			span{
				width:calc(100% - 45px);
			}
		}
		.right{
			width:49%;
			display:flex;
			span{
				width:calc(100% - 45px);
			}
		}
	}
}		


.roadTitleContain{
	width:100%;
	display:flex;
	align-items: center;
	justify-content: center;
	.roadTitle{
		width:73.6%;
		height:36px;
		background:linear-gradient(90deg,rgba(65,179,243,0) 0%,rgba(65,179,243,1) 48%,rgba(96,120,234,0) 100%);
		display:flex;
		align-items: center;
		justify-content: center;
		color:rgba(255,255,255,1);
	}
}

.download{
	width:100%;
	display:flex;
	align-items: center;
	justify-content: center;
	span{
		font-size:14px;
		color:rgba(65,179,243,1);
		line-height:20px;
		border-bottom: 1px solid rgba(65,179,243,1);
	}
}
.projectItem{
	color:#ffffff;
	font-size:14px;
	margin-bottom: 10px;
	span{
		display:block;
	}
}
</style>
