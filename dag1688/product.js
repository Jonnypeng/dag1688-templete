window.onload = function(){
var browserWidth = window.innerWidth || document.documentElement.ClientWidth || document.body.clientWidth;
if(browserWidth<1080){

//设置移动界面的头部数据
document.getElementsByTagName("meta")[0].setAttribute("name","viewport");
document.getElementsByTagName("meta")[0].setAttribute("content","initial-scale=1,user-scalable=no");

//将总体宽度的内联样式清空 
var boxRoot = document.getElementById("box_root");
boxRoot.setAttribute("style","");

var allcss = document.getElementsByTagName("link");
for(var i = 0;i<allcss.length;i++){
	allcss[i].href = "";
}

//将BT框架、奥森图标、自定义样式进行置入
allcss[0].href="//cdn.bootcss.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css";
allcss[1].href="//cdn.bootcss.com/font-awesome/4.5.0/css/font-awesome.min.css";
allcss[2].href="http://www.dag1688.com/styles/product/ProductDetail_image01-d2_c1.css";
allcss[3].href="http://121.40.196.117/dag1688-templete/dag1688/product.css";

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

//为头部logo进行更换
var headlogo = document.getElementById("elem-Eui_comp_imageText-071533").getElementsByTagName("img")[0];
headlogo.setAttribute("src","http://dag1688.aliapp.com/wp-content/uploads/2016/01/logo.png");

//增加自定义的搜索引擎
document.getElementById("box_header_bot").innerHTML += "<form id=\"searchbar\" name=\"searchForm\" action=\"http:\/\/www.dag1688.com\/Product.do?method=submit\" method=\"post\" target=\"_self\" onsubmit=\"return checkNull();\" class=\"bs-example bs-example-form\" role=\"form\"> <div class=\"input-group\"> <input id=\"Product_search01-001_keyword\" name=\"keyword\" value=\"\" maxlength=\"128\" class=\"form-control\" type=\"text\"> <input name=\"action_page\" value=\"/products_list.html\" type=\"hidden\"> <span class=\"input-group-btn\"> <input name=\"searchType\" value=\"商品搜索\" class=\"btn btn-danger\" type=\"submit\"> <\/span> <\/div> <\/form>" + "<hr\/>";

//将主页面box_main的所有子元素内联样式全部清零
var boxMainDiv = document.getElementById("box_main").getElementsByTagName("div");
for(var i=0;i<boxMainDiv.length;i++){
	boxMainDiv[i].setAttribute("style","");
}

/*为下拉菜单增加样式*/
var productSelect = document.getElementById("Product_list01-105_select");
productSelect.setAttribute("class","form-control");
/*商品筛选层级下划线
var productFilter = document.getElementById("elem-Product_filterSearch01-101");
productFilter.innerHTML += "<hr\/>";*/
//为Bootstrap进行样式设置
//document.getElementById("box_header_mid").setAttribute("class","row");
//document.getElementById("box_header_nav").setAttribute("class","row");
//document.getElementById("box_productsImg").setAttribute("class","row");
//document.getElementById("box_banner").setAttribute("class","row");
//document.getElementById("box_productsBbasic").setAttribute("class","row");
//document.getElementsByClassName("box_header_nav1")[0].setAttribute("class","box_header_nav1 col-xs-12");
//document.getElementById("box_header_logo").setAttribute("class","col-xs-12");
//document.getElementById("box_BreadCrumbs").setAttribute("class","col-xs-12");
//document.getElementById("box_header_bot").setAttribute("class","col-xs-12");
//document.getElementById("box_header_cart").setAttribute("class","col-xs-12");
//document.getElementById("box_productsImg-p").setAttribute("class","col-xs-12");
//document.getElementById("box_products-tool").setAttribute("class","col-xs-12");
//document.getElementById("elem-ProductDetail_basic01-101").setAttribute("class","col-xs-12");


/*将导航页码进行样式重置*/



























































/*尾部*/
//增加分类目录
var boxFooter = document.getElementById("box_footer");
boxFooter.setAttribute("style","");
//boxFooter.getElementsByTagName("div")[0].setAttribute("style","");*/

boxFooter.innerHTML = "<div class=\"comptitle_99\" style=\"\"><strong class=\"titlestyle_47\"><img src=\"\/library\/resources\/images\/icons\/31.gif\">商品类别<\/strong><\/div>" + "<div id=\"category-index\"> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=24.html\" target=\"_blank\"><button type=\"button\" class=\"btn btn-primary btn-block\">五金工具<\/button><\/a> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=25.html\" target=\"_blank\"><button type=\"button\" class=\"btn btn-primary btn-block\">机电设备<\/button><\/a> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=21.html\" target=\"_blank\"><button type=\"button\" class=\"btn btn-primary btn-block\">发电设备<\/button><\/a> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=29.html\" target=\"_blank\"><button type=\"button\" class=\"btn btn-primary btn-block\">化工产品<\/button><\/a> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=4.html\" target=\"_blank\"><button type=\"button\" class=\"btn btn-primary btn-block\">仪器、仪表</button><\/a> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=26.html\" target=\"_blank\"><button type=\"button\" class=\"btn btn-primary btn-block\">建筑、装饰<\/button></a> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=3.html\" target=\"_blank\"><button type=\"button\" class=\"btn btn-primary btn-block\">劳保、安防</button><\/a> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=28.html\" target=\"_blank\"><button type=\"button\" class=\"btn btn-primary btn-block\">消防、水暖</button><\/a> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=2.html\" target=\"_blank\"><button type=\"button\" class=\"btn btn-primary btn-block\">起重、吊装</button><\/a> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=20.html\" target=\"_blank\"><button type=\"button\" class=\"btn btn-primary btn-block\">电力、线缆</button><\/a> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=27.html\" target=\"_blank\"><button type=\"button\" class=\"btn btn-primary btn-block\">民用五金、照明电器<\/button><\/a> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=18.html\" target=\"_blank\"><button type=\"button\" class=\"btn btn-primary btn-block\">防爆产品、通风设备</button><\/a> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=17.html\" target=\"_blank\"><button type=\"button\" class=\"btn btn-primary btn-block\">附件<\/button><\/a> <\/div>" + "<div id=\"address\"><address><h5>服务热线<\/h5><p><a href=\"tel:085185757788\">0851-85757788<\/a><br><a href=\"tel:085185770626\">0851-85770626<\/a><\/p><\/address><address><h5>门市电话<\/h5><p><a href=\"tel:085185757779\">0851-85757779<\/a><br><a href=\"tel:085185756800\">0851-85756800<\/a><\/p><\/address><address><h5>邮件微信<\/h5><p>gy@dag1688.com<br>公众微信ID:dagsc1688<\/p><\/address><address><h5>联系地址<\/h5><p>贵阳市沙冲中路33号大光旗舰店<br>网站:www.dag1688.com<\/p><\/address><p>Copyright © 2016 大光物资商城版权所有<\/p><\/div>"
















































}
}

