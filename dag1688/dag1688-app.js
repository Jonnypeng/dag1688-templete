var dagIframe = document.getElementById("iframe-dag");
var navMenu = document.getElementById("nav-menu");
var navMenuLi = navMenu.getElementsByTagName("li");
var exitBtn = document.getElementById("exitBtn");
var exit = document.getElementById("exit-model");
var okExit = document.getElementById("okExit");
var noExit = document.getElementById("noExit");
var moreBtn = document.getElementById("more");
var navFooter = document.getElementById("nav-footer");
var closedBtn = document.getElementById("closed");
var navFooterDiv = navFooter.getElementsByTagName("div");
var menuOnOff = false;


onload();

closedBtn.onclick = function (){
	disableMenu();
};
	//关闭菜单函数
	function disableMenu(){
		if(menuOnOff==true){
			navMenu.style.display = "none";
			menuOnOff = false;
		};
};
	//载入cordova事件
function onload(){
	document.addEventListener("deviceready",onDeviceReady,false);

		function onDeviceReady(){
			document.addEventListener("menubutton",onMenuButton,false);
		};

		function onMenuButton(){
		if(menuOnOff==false){
			navMenu.style.display = "block";
			menuOnOff = true;
		}
			};
		};
		//退出程序按钮
		exitBtn.onclick = function(){
				disableMenu();
				exit.style.display = "block";
};
		
	okExit.onclick = function (){
		navigator.app.exitApp();
};

	noExit.onclick = function (){
		exit.style.display = "none";
};

//========================底部菜单键的动作
	moreBtn.onclick = function (){
		if(menuOnOff==false){
			navMenu.style.display = "block";
			menuOnOff = true;
		};
	};



//底部菜单
for(var i = 0;i<navFooterDiv.length;i++){
	navFooterDiv[0].onclick = function(){
		frameSrc("http://www.dag1688.com/products_list/&Column_navigation01-002FCId=46&pageNo_Product_list01-105=1&pageSize_Product_list01-105=15.html");
				};
	navFooterDiv[1].onclick = function(){
		frameSrc("http://dag1688.aliapp.com/search-product.html");
				};
	navFooterDiv[2].onclick = function(){
		frameSrc("http://www.dag1688.com/products_brand/&Column_navigation01-001FCId=181&pageNo_ProductBrand_list01-001=1&pageSize_ProductBrand_list01-001=25.html#category-index");
				};
};


//左侧菜单
for(var i = 0;i<navMenuLi.length;i++){
navMenuLi[0].onclick = function(){
		frameSrc("http://www.dag1688.com/products_list/&Column_navigation01-002FCId=46&pageNo_Product_list01-105=1&pageSize_Product_list01-105=15.html");
	disableMenu();
};
navMenuLi[1].onclick = function(){
		frameSrc("http://www.dag1688.com/products_brand/&Column_navigation01-001FCId=181&pageNo_ProductBrand_list01-001=1&pageSize_ProductBrand_list01-001=25.html");
	disableMenu();
};
navMenuLi[2].onclick = function(){
		frameSrc("http://www.dag1688.com/zhuanti/dagmap/wechat-map.html");
	disableMenu();
};
navMenuLi[3].onclick = function(){
		frameSrc("http://www.dag1688.com/zhuanti/dagmap/streetview.html");
	disableMenu();
};
navMenuLi[4].onclick = function(){
		frameSrc("http://dag1688.aliapp.com/");
	disableMenu();
};
};

function frameSrc(url){
		dagIframe.setAttribute("src",url);
		};


