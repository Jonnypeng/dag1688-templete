window.onload = function(){
var browserWidth = window.innerWidth || document.documentElement.ClientWidth || document.body.clientWidth;
if(browserWidth<1080){

document.getElementsByTagName("meta")[0].setAttribute("name","viewport");
document.getElementsByTagName("meta")[0].setAttribute("content","initial-scale=1,maximun-scale=1,user-scalable=no");

var allJs = document.getElementsByTagName("script");
var allcs = document.getElementsByTagName("link");
// JS与CSS进行清零
for(var i=0;i<allJs.length;i++){
	allJs[i].setAttribute("src","#");
}
for(var i=0;i<allcs.length;i++){
	allcs[i].setAttribute("href","");
}

allcs[0].setAttribute("href","product.css");

var headlogo = document.getElementById("elem-Eui_comp_imageText-071533").getElementsByTagName("img")[0];
headlogo.setAttribute("src","http://dag1688.aliapp.com/wp-content/themes/dag1688-mobile/images/logo.svg");











































}
}
