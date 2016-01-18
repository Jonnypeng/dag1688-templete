window.onload = function(){
var browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if(browserWidth < 768){


var allcss = document.getElementsByTagName("link");
allcss[0].href="";
allcss[1].href="";

document.getElementById("box_root").style = "";
document.getElementById("box_root").setAttribute("class","container");
document.getElementById("box_header_mid").setAttribute("class","row");
document.getElementById("box_header_logo").setAttribute("class","col-xs-12");

document.getElementById("box_main").setAttribute("class","row");
document.getElementById("elem-Public_textInfo01-001").setAttribute("class","row");
document.getElementById("box_BreadCrumbs").setAttribute("class","col-xs-12");
document.getElementById("Public_textInfo01-001").setAttribute("class","col-xs-12");
document.getElementById("box_right").setAttribute("class","col-xs-12");
document.getElementById("elem-Eui_comp_imageText-071533").getElementsByTagName("img")[0].setAttribute("src","http://dag1688.aliapp.com/wp-content/themes/dag1688-mobile/images/logo.svg");
document.getElementsByClassName("Apple-style-span")[2].style.display = "none";

















































































}
}
