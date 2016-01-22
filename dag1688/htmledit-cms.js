window.onload = function(){
var browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if(browserWidth < 1000){


var allcss = document.getElementsByTagName("link");
for(var i=0;i<allcss.length;i++){
	if(i<allcss.lenght-1){
		allcss[i].setAttribute("href","#");
}else{
	allcss[i].setAttribute("href","htmledit-cms.css");
}
}
var logo = document.getElementById("elem-Eui_comp_imageText-071533");
logo.innerHTML+="<hr/>";
var footer = document.getElementById("elem-Public_textInfo01-001");
footer.innerHTML = "<address><h4>服务热线</h4><p><a href=\"tel:085185757788\">0851-85757788</a><br><a href=\"tel:085185770626\">0851-85770626</a></p></address>" + "<address><h4>门市电话</h4><p><a href=\"tel:085185757779\">0851-85757779</a><br><a href=\"tel:085185756800\">0851-85756800</a></p></address>" + "<address><h4>邮件微信</h4><p>gy@dag1688.com<br>公众微信ID:dagsc1688</p></address>"	+ "<address><h4>联系地址</h4><p>贵阳市沙冲中路33号大光旗舰店<br>网站:www.dag1688.com</p></address><p>Copyright © 2016 大光物资商城版权所有</p>";



document.getElementsByTagName("meta")[0].setAttribute("name","viewport");
document.getElementsByTagName("meta")[0].setAttribute("content","initial-scale=1, maximum-scale=1, user-scalable=no");
//document.getElementsByTagName("meta")[1].setAttribute("http-equiv","Cache-Control");
//document.getElementsByTagName("meta")[1].setAttribute("content","no-cache,no-store,must-revalidate");
//document.getElementsByTagName("meta")[2].setAttribute("http-equiv","Pragma");
//document.getElementsByTagName("meta")[2].setAttribute("content","no-cache");
//document.getElementsByTagName("meta")[3].setAttribute("http-equiv","Expires");
//document.getElementsByTagName("meta")[3].setAttribute("content","0");
document.getElementById("box_root").style = "";
document.getElementById("box_root").setAttribute("class","container");
document.getElementById("box_header_mid").setAttribute("class","row");
document.getElementById("box_header_logo").setAttribute("class","col-xs-12");
document.getElementById("box_main").setAttribute("class","row");
document.getElementById("elem-Public_textInfo01-001").setAttribute("class","row");
document.getElementById("box_BreadCrumbs").setAttribute("class","margin-15");
document.getElementById("box_right").setAttribute("class","col-xs-12");
document.getElementById("elem-Eui_comp_imageText-071533").getElementsByTagName("img")[0].setAttribute("src","http://dag1688.aliapp.com/wp-content/themes/dag1688-mobile/images/logo.svg");
document.getElementsByClassName("Apple-style-span")[2].style.display = "none";
}
}
