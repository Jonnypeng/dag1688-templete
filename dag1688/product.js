window.onload = function(){
var browserWidth = window.innerWidth || document.documentElement.ClientWidth || document.body.clientWidth;
if(browserWidth<1080){

document.getElementsByTagName("meta")[0].setAttribute("name","viewport");
document.getElementsByTagName("meta")[0].setAttribute("content","initial-scale=1,user-scalable=no");

//将总体宽度的内联样式清空 
var boxRoot = document.getElementById("box_root");
boxRoot.setAttribute("style","");
//将头部logo进行更换
var headlogo = document.getElementById("elem-Eui_comp_imageText-071533").getElementsByTagName("img")[0];
headlogo.setAttribute("src","http://dag1688.aliapp.com/wp-content/uploads/2016/01/logo.png");
//将底部宽度的内联样式清空
var footer = document.getElementById("box_footer");
var footerDiv = footer.getElementsByTagName("div");
for(var i=0;i<footerDiv.length;i++){
	footerDiv[i].setAttribute("style","");
}
//对样式进行变量
var allJs = document.getElementsByTagName("script");
var allcs = document.getElementsByTagName("link");
var nav = document.getElementById("ProductCategory_show01-left_nav");

var productlist = document.getElementById("box_right");
// JS与CSS进行清零
for(var i=0;i<allJs.length;i++){
	allJs[i].setAttribute("src","#");
}
for(var i=0;i<allcs.length;i++){
	allcs[i].setAttribute("href","");
}


//将底部的内联样式表全部清零
document.getElementById("box_footer").setAttribute("style","");

//将商品类别迁移到商品列表之后
nav.style.display = "none";
productlist.innerHTML += nav.innerHTML;

var clearboth = document.getElementsByClassName("clearBoth");
for(var i=0;i<clearboth.length;i++){
	clearboth[i].style.display = "none";
}

//将搜索引擎栏的旁注进行修改
var search = document.getElementById("Product_search01-001_form");
search.getElementsByTagName("em")[0].innerHTML = "商品搜索&nbsp;&nbsp;&nbsp;";

//将目录菜单进行设置动作
var firstLi = document.getElementsByClassName("first-li"); 
var showDiv = document.getElementsByClassName("show-div"); 
var onOff = true;
	for(var i =0;i<firstLi.length;i++){
	firstLi[i].index = i;
	firstLi[i].onclick = function(){
		if(onOff){
			showDiv[this.index].style.display = "block";
			onOff = false;
			}else{
			showDiv[this.index].style.display = "none";
			onOff = true;
}
}
}

//将底部的联系方式进行替换
var footer = document.getElementById("elem-Public_textInfo01-001");
footer.innerHTML = "<address><h4>服务热线</h4><p><a href=\"tel:085185757788\">0851-85757788</a><br><a href=\"tel:085185770626\">0851-85770626</a></p></address>" + "<address><h4>门市电话</h4><p><a href=\"tel:085185757779\">0851-85757779</a><br><a href=\"tel:085185756800\">0851-85756800</a></p></address>" + "<address><h4>邮件微信</h4><p>gy@dag1688.com<br>公众微信ID:dagsc1688</p></address>"	+ "<address><h4>联系地址</h4><p>贵阳市沙冲中路33号大光旗舰店<br>网站:www.dag1688.com</p></address><p>Copyright © 2016 大光物资商城版权所有</p>";






























allcs[0].setAttribute("href","product.css");

}
}
