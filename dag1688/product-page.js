window.onload = function(){
var browserWidth = window.innerWidth || document.documentElement.ClientWidth || document.body.clientWidth;
if(browserWidth<1080){

//设置移动界面的头部数据
document.getElementsByTagName("meta")[0].setAttribute("name","viewport");
document.getElementsByTagName("meta")[0].setAttribute("content","initial-scale=1,user-scalable=no");

//将总体宽度的内联样式清空 
var boxRoot = document.getElementById("box_root");
boxRoot.setAttribute("style","");

//将所有的样式表进行清空
var allcss = document.getElementsByTagName("link");
for(var i = 0;i<allcss.length;i++){
	allcss[i].href = "";
}

//将BT框架、奥森图标、自定义样式进行置入
allcss[0].href="//cdn.bootcss.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css";
allcss[1].href="//cdn.bootcss.com/font-awesome/4.5.0/css/font-awesome.min.css";
allcss[2].href="http://www.dag1688.com/styles/product/ProductDetail_image01-d2_c1.css";
allcss[3].href="http://121.40.196.117/dag1688-templete/dag1688/product-page.css";

//为最顶部的登录注册设置样式
document.getElementById("box_header").className = "container";
document.getElementById("box_header_top").className = "row";
document.getElementById("box_header_top_sub1").className = "col-xs-12";
document.getElementById("box_header_top_sub2").className = "col-xs-12";

//将所有的多余行进行隐藏
var clearBoth = document.getElementsByClassName("clearBoth");
for(var i=0;i<clearBoth.length;i++){
	clearBoth[i].style.display = "none";
}

//将主页面pagewidth进行液态宽度
document.getElementsByClassName("pageWidth")[0].setAttribute("style","");

//将pagewidth进行container设置
document.getElementsByClassName("pageWidth")[0].setAttribute("class","container pageWidth");

//为Bootstrap进行样式设置
document.getElementById("box_header_mid").setAttribute("class","row");
document.getElementById("box_header_nav").setAttribute("class","row");
document.getElementById("box_productsImg").setAttribute("class","row");
document.getElementById("box_banner").setAttribute("class","row");
document.getElementById("box_productsBbasic").setAttribute("class","row");
document.getElementsByClassName("box_header_nav1")[0].setAttribute("class","box_header_nav1 col-xs-12");
document.getElementById("box_header_logo").setAttribute("class","col-xs-12");
document.getElementById("box_BreadCrumbs").setAttribute("class","col-xs-12");
document.getElementById("box_header_bot").setAttribute("class","col-xs-12");
document.getElementById("box_header_cart").setAttribute("class","col-xs-12");
document.getElementById("box_productsImg-p").setAttribute("class","col-xs-12");
document.getElementById("box_products-tool").setAttribute("class","col-xs-12");
document.getElementById("elem-ProductDetail_basic01-101").setAttribute("class","col-xs-12");

//为头部logo进行更换
var headlogo = document.getElementById("elem-Eui_comp_imageText-071533").getElementsByTagName("img")[0];
headlogo.setAttribute("src","http://dag1688.aliapp.com/wp-content/uploads/2016/01/logo.png");

//增加自定义的搜索引擎
document.getElementById("box_header_bot").innerHTML += "<form id=\"searchbar\" name=\"searchForm\" action=\"http:\/\/www.dag1688.com\/Product.do?method=submit\" method=\"post\" target=\"_self\" onsubmit=\"return checkNull();\" class=\"bs-example bs-example-form\" role=\"form\"> <div class=\"input-group\"> <input id=\"Product_search01-001_keyword\" name=\"keyword\" value=\"\" maxlength=\"128\" class=\"form-control\" type=\"text\"> <input name=\"action_page\" value=\"/products_list.html\" type=\"hidden\"> <span class=\"input-group-btn\"> <input name=\"searchType\" value=\"商品搜索\" class=\"btn btn-danger\" type=\"submit\"> <\/span> <\/div> <\/form>";

//将主页面box_main的所有子元素内联样式全部清零
var boxMainDiv = document.getElementById("box_main").getElementsByTagName("div");
for(var i=0;i<boxMainDiv.length;i++){
	boxMainDiv[i].setAttribute("style","");
}

//设置选择型号的伪元素
var textType = document.getElementsByClassName("text-type")[0];
var textTypeA = textType.getElementsByTagName("a");
var textTypeActive = textType.getElementsByClassName("text-type-active")[0];
for(var i =0;i<textTypeA.length;i++){
	textTypeA[i].index = i;
	textTypeA[i].onclick = function(){
	//	if(textTypeA[this.index].ClassName == text-type-active){
	//textTypeA[this.index].style.background = "gray";
//}
		textTypeActive.style.background = "gray";
		this.setAttribute("class","text-type-active");

}
}





















}
}
