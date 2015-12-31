var dataForWeixin = {
	appId: "",
	msgImg: "http://www.dag1688.com/zhuanti/dag2016/images/xinniankuaile.gif",
	url: "http://www.dag1688.com/zhuanti/dag2016/index.html",
	title : "大光五金:祝各位商家及消费者，2016年新年快乐！万事如意！", 
	ftitle : "大光五金:祝各位商家及消费者，2016年新年快乐！万事如意！",
	desc: "2016年新年快乐！万事如意！",
	fakeid: "",
	callback: function() {}
};

(function() {
	var onBridgeReady = function() {
		/*发送给好友*/
		WeixinJSBridge.on('menu:share:appmessage', function(argv) {
			WeixinJSBridge.invoke('sendAppMessage', {
				"appid": dataForWeixin.appId,
				"img_url": dataForWeixin.msgImg,
				"img_width": "120",
				"img_height": "120",
				"link": dataForWeixin.url,
				"desc": dataForWeixin.desc,
				"title": dataForWeixin.title
			},
			function(res) { 
				(dataForWeixin.callback)();
			});
		});
		/*分享到朋友圈*/
		WeixinJSBridge.on('menu:share:timeline', function(argv) {
			WeixinJSBridge.invoke('shareTimeline', {
				"img_url": dataForWeixin.msgImg,
				"img_width": "400",
				"img_height": "400",
				"link": dataForWeixin.url,
				"desc": dataForWeixin.desc,
				"title": dataForWeixin.ftitle || dataForWeixin.title
			},
			function(res) { 
				(dataForWeixin.callback)();
			});
		});
	};
	// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
	if (document.addEventListener) {
		document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
	} else if (document.attachEvent) {
		document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
		document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
	}
})();
