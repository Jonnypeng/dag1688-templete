//window.onload = function(){
var NoUrl = [
	"http://www.dag1688.com/members_register/&stype=1.html",//企业注册
	"http://www.dag1688.com/members_register.html", //个人注册
	"http://www.dag1688.com/members_index/navigationType=1.html", //会员中心
	"http://www.dag1688.com/members_index/&navigationType=1.html", //会员中心首页
	"http://www.dag1688.com/members_orderlist/&navigationType=2.html", //我的订单
	"http://www.dag1688.com/product_favorite/&navigationType=3.html", //我的收藏夹
	"http://www.dag1688.com/orderext_myalt/&navigationType=4.html", //我的退换货
	"http://www.dag1688.com/members_apply/&navigationType=5.html", //我的到货通知
	"http://www.dag1688.com/members_product_review/&navigationType=6.html", //我的评价
	"http://www.dag1688.com/product_consult/&navigationType=7.html", //我的咨询
	"http://www.dag1688.com/members_myactivity/&navigationType=8.html", //我的活动报名
	"http://www.dag1688.com/members_mass/&navigationType=9.html", //我的订阅,
	"http://www.dag1688.com/members_update/&navigationType=10.html", //我的帐号资料
	"http://www.dag1688.com/account_safety/&navigationType=11.html", //账户安全设置
	"http://www.dag1688.com/account_information/&navigationType=12.html", //我的预存款
	"http://www.dag1688.com/members_profit/&navigationType=14.html", //我的推荐返利
	"http://www.dag1688.com/members_integral/&navigationType=15.html",//我的积分
	"http://www.dag1688.com/members_coupons/&navigationType=16.html", //我的优惠券
	"http://www.dag1688.com/members_addressbook/&navigationType=17.html",//我的地址簿
	"http://www.dag1688.com/help_index.html", //帮助中心
	"http://www.dag1688.com/help_index/&helpId=26&Help_listByMultiCategory01-926FHId=26.html", //新用户注册
	"http://www.dag1688.com/help_index/&helpId=28&Help_listByMultiCategory01-926FHId=28.html", //找回密码
	"http://www.dag1688.com/help_index/&helpId=29&Help_listByMultiCategory01-926FHId=29.html", //修改密码
	"http://www.dag1688.com/help_index/&helpId=25&Help_listByMultiCategory01-926FHId=25.html",//隐私声明
	"http://www.dag1688.com/help_index/&helpId=1&Help_listByMultiCategory01-926FHId=1.html", //服务条款
	"http://www.dag1688.com/help_index/&helpId=2&Help_listByMultiCategory01-926FHId=2.html", //购物流程
	"http://www.dag1688.com/help_index/&helpId=44&Help_listByMultiCategory01-926FHId=44.html", //支付说明
	"http://www.dag1688.com/help_index/&helpId=45&Help_listByMultiCategory01-926FHId=45.html", //配送说明
	"http://www.dag1688.com/help_index/&helpId=5&Help_listByMultiCategory01-926FHId=5.html", //优惠券使用
	"http://www.dag1688.com/help_index/&helpId=9&Help_listByMultiCategory01-926FHId=9.html",//签收注意事项
	"http://www.dag1688.com/help_index/&helpId=15&Help_listByMultiCategory01-926FHId=15.html", //退换货政策
	"http://www.dag1688.com/help_index/&helpId=16&Help_listByMultiCategory01-926FHId=16.html",//退换货流程
	"http://www.dag1688.com/help_index/&helpId=17&Help_listByMultiCategory01-926FHId=17.html",//退款说明
	"http://www.dag1688.com/help_index/&helpId=3&Help_listByMultiCategory01-926FHId=3.html",//会员制度
	"http://www.dag1688.com/help_index/&helpId=4&Help_listByMultiCategory01-926FHId=4.html", //积分规则
	"http://www.dag1688.com/help_index/&helpId=20&Help_listByMultiCategory01-926FHId=20.html", //如何付款
	"http://www.dag1688.com/help_index/&helpId=18&Help_listByMultiCategory01-926FHId=18.html", //如何找回密码	
	"http://www.dag1688.com/help_index/&helpId=21&Help_listByMultiCategory01-926FHId=21.html", //如何办理退款	
	"http://www.dag1688.com/help_index/&helpId=24&Help_listByMultiCategory01-926FHId=24.html", //如何办理退换货
	"http://www.dag1688.com/help_index/&helpId=19&Help_listByMultiCategory01-926FHId=19.html", //如何取消订单
	"http://www.dag1688.com/help_index/&helpId=8&Help_listByMultiCategory01-926FHId=8.html",//配送费收取标准
	"http://www.dag1688.com/help_index/&helpId=7&Help_listByMultiCategory01-926FHId=7.html", //配送范围及时效
	"http://www.dag1688.com/help_index/&helpId=11&Help_listByMultiCategory01-926FHId=11.html", //在线支付详情
	"http://www.dag1688.com/help_index/&helpId=12&Help_listByMultiCategory01-926FHId=12.html", //银行转账详情
	"http://www.dag1688.com/help_index/&helpId=13&Help_listByMultiCategory01-926FHId=13.html",//邮局汇款详情
	"http://www.dag1688.com/help_index/&helpId=6&Help_listByMultiCategory01-926FHId=6.html",//促销说明
	"http://www.dag1688.com/members_findpassword.html", //找回密码
	"http://www.dag1688.com/products_list/&Column_navigation01-002FCId=46&pageNo_Product_list01-105=1&pageSize_Product_list01-105=15.html"  //特定首页
];
var browserWidth = window.innerWidth || document.documentElement.ClientWidth || document.body.clientWidth;
var pmOnOff = true;
var pcbody = null;
var aLink = document.getElementsByTagName("a");

if(window.location.href!=NoUrl[0]&&window.location.href!=NoUrl[1]&&window.location.href!=NoUrl[2]&&window.location.href!=NoUrl[3]&&window.location.href!=NoUrl[4]&&window.location.href!=NoUrl[5]&&window.location.href!=NoUrl[6]&&window.location.href!=NoUrl[7]&&window.location.href!=NoUrl[8]&&window.location.href!=NoUrl[9]&&window.location.href!=NoUrl[10]&&window.location.href!=NoUrl[11]&&window.location.href!=NoUrl[12]&&window.location.href!=NoUrl[13]&&window.location.href!=NoUrl[14]&&window.location.href!=NoUrl[15]&&window.location.href!=NoUrl[16]&&window.location.href!=NoUrl[17]&&window.location.href!=NoUrl[18]&&window.location.href!=NoUrl[19]&&window.location.href!=NoUrl[20]&&window.location.href!=NoUrl[21]&&window.location.href!=NoUrl[22]&&window.location.href!=NoUrl[23]&&window.location.href!=NoUrl[24]&&window.location.href!=NoUrl[25]&&window.location.href!=NoUrl[26]&&window.location.href!=NoUrl[27]&&window.location.href!=NoUrl[28]&&window.location.href!=NoUrl[29]&&window.location.href!=NoUrl[30]&&window.location.href!=NoUrl[31]&&window.location.href!=NoUrl[32]&&window.location.href!=NoUrl[33]&&window.location.href!=NoUrl[34]&&window.location.href!=NoUrl[35]&&window.location.href!=NoUrl[36]&&window.location.href!=NoUrl[37]&&window.location.href!=NoUrl[38]&&window.location.href!=NoUrl[39]&&window.location.href!=NoUrl[40]&&window.location.href!=NoUrl[41]&&window.location.href!=NoUrl[42]&&window.location.href!=NoUrl[43]&&window.location.href!=NoUrl[44]&&window.location.href!=NoUrl[45]&&window.location.href!=NoUrl[46]&&window.location.href!=NoUrl[47]){

//pcbody = document.getElementsByTagName("html")[0].innerHTML;   //存起来
pcMobile();

}

if(window.location.href=="http://www.dag1688.com/products_list/&Column_navigation01-002FCId=46&pageNo_Product_list01-105=1&pageSize_Product_list01-105=15.html"){   //特定首页的代码重写
pcMobile();  //手机版本
//去除面包屑
disableRbread();
//头部初始
var boxRight = document.getElementById("box_right");
var headMain = boxRight.getElementsByTagName("div")[2];
headMain.id = "head-main";
headMain.setAttribute("name","");
headMain.className = "";
headMain.innerHTML = ""; 
//====================>置入幻灯片
//图片与链接进行定量
var slider = [];
slider[0] = {url:"http://www.dag1688.com/products_list/method=submit&keyword=%25E5%25A8%2581%25E8%25BE%25BE&searchType=productSearch.html",img:"http://www.dag1688.com/fileRepository/gg/source/Sl7mpnsDRDiZN2HdGHth3A.jpg"};
slider[1] = {url:"http://www.dag1688.com/products_list/keyword=%25E8%25A5%25BF%25E6%25B9%2596&searchType=productSearch&method=submit.html",img:"http://www.dag1688.com/fileRepository/gg/source/wrCb3YiRSga-QBjqQXXC4g.jpg" };
slider[2] = {url:"http://www.dag1688.com/products_list/keyword=wd-40&searchType=productSearch&method=submit.html",img:"http://www.dag1688.com/fileRepository/gg/source/Fysx0OhUTkyxnga4jSuRug.jpg"};
slider[3] = {url:"http://www.dag1688.com/products_list/keyword=%25E9%25BA%25A6%25E5%25A4%25AA%25E4%25BF%259D&searchType=productSearch&method=submit.html",img:"http://www.dag1688.com/fileRepository/gg/source/vnf_l3gAR2ydHook74mOkA.jpg"};
slider[4] = {url:"http://www.dag1688.com/products_list/keyword=%25E4%25B8%2596%25E8%25BE%25BE&searchType=productSearch&method=submit.html",img:"http://www.dag1688.com/fileRepository/gg/source/H_W39elXSnOHsThgnHJTVA.jpg"};
fnSlider(slider);


//置入导航栏

var Nav = [];
Nav[0] = {url:"#category-index",class:"fa fa-list-ul fa-3x",title:"商品分类"};
Nav[1] = {url:"http://www.dag1688.com/products_brand/&Column_navigation01-001FCId=181&pageNo_ProductBrand_list01-001=1&pageSize_ProductBrand_list01-001=25.html",class:"fa fa-cube fa-3x",title:"品牌世界"};
Nav[2] = {url:"http://www.dag1688.com/news_list/newsCategoryId=1.html",class:"fa fa-money fa-3x",title:"优惠活动"};
Nav[3] = {url:"http://www.dag1688.com/news_list/&Column_navigation01-001FCId=47.html",class:"fa fa-newspaper-o fa-3x",title:"行情资讯"};
Nav[4] = {url:"http://www.dag1688.com/join/&Column_navigation01-001FCId=44.html",class:"fa fa-building fa-3x",title:"百企联盟"};

var navMenu = document.createElement("div");	
navMenu.id = "nav";
headMain.appendChild(navMenu);

var menuUl = document.createElement("ul");
menuUl.id = "navUl";
menuUl.innerHTML = "<li><\/li><li><\/li><li><\/li><li><\/li><li><\/li>"
navMenu.appendChild(menuUl);


var menuLi = menuUl.getElementsByTagName("li");
for(var i=0;i<menuLi.length;i++){
	menuLi[i].innerHTML = "<a><\/a>"
	menuLi[i].getElementsByTagName("a")[0].href = Nav[i].url;
	menuLi[i].getElementsByTagName("a")[0].innerHTML = "<span><\/span><br><span><\/span>";
	menuLi[i].getElementsByTagName("span")[0].className = Nav[i].class;
	menuLi[i].getElementsByTagName("span")[1].innerHTML = Nav[i].title;
}

//置入品牌世界

var brand = document.createElement("div");
brand.id = "brand";
brand.innerHTML = "<div>本周品牌推荐</div><ul><li></li><li></li><li></li><li></li><li></li><li></li></ul>";
headMain.appendChild(brand);

var brandLi = brand.getElementsByTagName("li");
var brandArr = [
"<a href=\"/products_brand_detail/&amp;brandId=7.html\" title=\"长城精工\"><img alt=\"\" src=\"/fileRepository/product/others/3ea44e11-90f8-464d-8318-676419f460e1.jpg\"></a>",
"<a href=\"/products_brand_detail/&amp;brandId=6.html\" title=\"世达\"><img alt=\"\" src=\"/fileRepository/product/others/b08834bc-50a1-481f-872a-0be2a38402fc.jpg\"></a>",
"<a href=\"/products_brand_detail/&amp;brandId=8.html\" title=\"公牛\"><img alt=\"\" src=\"/fileRepository/product/others/84e6ce7c-30f0-4ef9-bc69-1ec84cdf8f46.jpg\"></a>",
"<a href=\"/products_brand_detail/&amp;brandId=12.html\" title=\"麦太保\"><img alt=\"\" src=\"/fileRepository/product/others/67d04ce0-615b-4830-a2b9-7439898ad265.jpg\"></a>",
"<a href=\"/products_brand_detail/&amp;brandId=95.html\" title=\"西湖\"><img alt=\"\" src=\"/fileRepository/product/others/bf4e30e7-b824-43d3-9b10-25ce18868f93.jpg\"></a>",
"<a href=\"/products_brand_detail/&amp;brandId=138.html\" title=\"上海沪工\"><img alt=\"\" src=\"/fileRepository/product/others/e3414fcd-93fe-4728-86e8-c100ba16feac.jpg\"></a>"
];

for(var i=0;i<brandLi.length;i++){
	brandLi[i].className = "column-num6";
	brandLi[i].innerHTML = brandArr[i]; 
};

};

/*if(window.location.href="http://www.dag1688.com/products_list/keyword=%25E5%2585%25AC%25E7%2589%259B&searchType=%25E6%2590%259C%25E7%25B4%25A2&method=submit.html"){
pcMobile();

};*/


function pcMobile(){
if(browserWidth<1000){
if(pmOnOff){
//设置移动界面的头部数据
document.body.style.display = "none"; //白色代替
document.getElementsByTagName("meta")[0].setAttribute("name","viewport");
document.getElementsByTagName("meta")[0].setAttribute("content","initial-scale=1,user-scalable=no");
//将主页面pagewidth进行液态宽度
document.getElementsByClassName("pageWidth")[0].setAttribute("style","");

//将总体宽度的内联样式清空 
var boxRoot = document.getElementById("box_root");
boxRoot.setAttribute("style","");

var allcss = document.getElementsByTagName("link");
for(var i = 0;i<allcss.length;i++){
	allcss[i].href = "";
}

allcss[0].href="http://120.25.236.96/dag1688-templete/dag1688/product.css";


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


//将pagewidth进行container设置
document.getElementsByClassName("pageWidth")[0].setAttribute("class","container pageWidth");

//为头部logo进行更换
var headlogo = document.getElementById("box_header_logo");
headlogo.innerHTML = ""; //清空
var headlogoA = document.createElement("a");
headlogoA.id = "headlogo";
headlogoA.href="http://www.dag1688.com/products_list/&Column_navigation01-002FCId=46&pageNo_Product_list01-105=1&pageSize_Product_list01-105=15.html";
headlogo.appendChild(headlogoA);

var headlogoImg = document.createElement("img");
headlogoImg.src= "http://www.dag1688.com/fileRepository/zhuanti/source/dGI2IkeER-q1L1u_vzJWJQ.png";
headlogoA.appendChild(headlogoImg);

var searchbar = document.createElement("div");
searchbar.id = "searchbar";
searchbar.innerHTML = "<form name=\"searchForm\" action=\"http:\/\/www.dag1688.com\/Product.do?method=submit\" method=\"post\" target=\"_self\" onsubmit=\"return checkNull();\" class=\"bs-example bs-example-form\" role=\"form\"> <div class=\"input-group\"> <input id=\"Product_search01-001_keyword\" name=\"keyword\" value=\"\" maxlength=\"128\" class=\"form-control\" type=\"text\"> <input name=\"action_page\" value=\"/products_list.html\" type=\"hidden\"> <span class=\"input-group-btn\"> <input name=\"searchType\" value=\"搜索\" class=\"btn btn-danger\" type=\"submit\"> <\/span> <\/div> <\/form>";
headlogo.appendChild(searchbar);

var header_hr = document.createElement("hr");
header_hr.className = "header-hr";
headlogo.appendChild(header_hr);


//将主页面box_main的所有子元素内联样式全部清零
var boxMainDiv = document.getElementById("box_main").getElementsByTagName("div");
for(var i=0;i<boxMainDiv.length;i++){
	boxMainDiv[i].setAttribute("style","");
}


var productPic = document.getElementsByClassName("pic");
	
for(var k=0;k<productPic.length;k++){
	disablePicA(productPic[k]);
}

function disablePicA(pic){
	var picA = pic.getElementsByTagName("a")[0];
	if(picA){
	picA.setAttribute("onclick","return false");
};
}	

for(var i=0;i<aLink.length;i++){
	aLink[i].target = "_self";
};

/*尾部*/
//增加分类目录
var boxFooter = document.getElementById("box_footer");
boxFooter.setAttribute("style","");
//boxFooter.getElementsByTagName("div")[0].setAttribute("style","");*/

boxFooter.innerHTML = "<div class=\"comptitle_99\" style=\"\"><strong class=\"titlestyle_47\"><img src=\"\/library\/resources\/images\/icons\/31.gif\">商品类别<\/strong><\/div>" + "<div id=\"category-index\"> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=24.html\"><button type=\"button\" class=\"btn btn-primary btn-block\">五金工具<\/button><\/a> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=25.html\" ><button type=\"button\" class=\"btn btn-primary btn-block\">机电设备<\/button><\/a> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=21.html\" ><button type=\"button\" class=\"btn btn-primary btn-block\">发电设备<\/button><\/a> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=29.html\" ><button type=\"button\" class=\"btn btn-primary btn-block\">化工产品<\/button><\/a> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=4.html\" ><button type=\"button\" class=\"btn btn-primary btn-block\">仪器、仪表</button><\/a> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=26.html\"><button type=\"button\" class=\"btn btn-primary btn-block\">建筑、装饰<\/button></a> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=3.html\"><button type=\"button\" class=\"btn btn-primary btn-block\">劳保、安防</button><\/a> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=28.html\"><button type=\"button\" class=\"btn btn-primary btn-block\">消防、水暖</button><\/a> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=2.html\"><button type=\"button\" class=\"btn btn-primary btn-block\">起重、吊装</button><\/a> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=20.html\"><button type=\"button\" class=\"btn btn-primary btn-block\">电力、线缆</button><\/a> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=27.html\"><button type=\"button\" class=\"btn btn-primary btn-block\">民用五金、照明电器<\/button><\/a> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=18.html\"><button type=\"button\" class=\"btn btn-primary btn-block\">防爆产品、通风设备</button><\/a> <a href=\"http://www.dag1688.com/products_list/&amp;pmcId=17.html\"><button type=\"button\" class=\"btn btn-primary btn-block\">附件<\/button><\/a> <\/div>" + "<div id=\"address\"><address><h5>服务热线<\/h5><p><a href=\"tel:085185757788\">0851-85757788<\/a><br><a href=\"tel:085185770626\">0851-85770626<\/a><\/p><\/address><address><h5>门市电话<\/h5><p><a href=\"tel:085185757779\">0851-85757779<\/a><br><a href=\"tel:085185756800\">0851-85756800<\/a><\/p><\/address><address><h5>邮件微信<\/h5><p>gy@dag1688.com<br>公众微信ID:dagsc1688<\/p><\/address><address><h5>联系地址<\/h5><p>贵阳市沙冲中路33号大光旗舰店<br>网站:www.dag1688.com<\/p><\/address><p>Copyright © 2016 大光物资商城版权所有<br />黔ICP备14002038号<\/p><\/div>"
//fn1(boxFooter);
document.body.style.display = "block"; //全局恢复

}/*else{   //这是执行电脑版本
	document.getElementsByTagName("html")[0].innerHTML = pcbody;	
	document.getElementById("Members_welcomeInfo02-001_notLogin").style.display = "block";
	document.getElementById("Members_welcomeLink01-001_notLogin").style.display = "block";
}*/
}
}


//禁止面包屑
function disableRbread(){
var bread = document.getElementById("elem-Public_breadCrumb01-product");
bread.style.display = "none";
};

//重置面包屑
var breadCrumbs = document.getElementById("elem-Public_breadCrumb01-11") || document.getElementById("elem-Public_breadCrumb01-product");		//前面一个ID是商品详情页的,后面一个ID是商品列表页的
var breadCrumbsIndex = breadCrumbs.getElementsByTagName("a")[0];
breadCrumbsIndex.setAttribute("href","http://www.dag1688.com/products_list/&Column_navigation01-002FCId=46&pageNo_Product_list01-105=1&pageSize_Product_list01-105=15.html");




//======================幻灯片函数
function fnSlider(slidAttr){

var slider = document.createElement("div");
slider.id = "slider";
headMain.appendChild(slider);

var sliderImgA = document.createElement("a");
slider.appendChild(sliderImgA);

var sliderImg = document.createElement("img");
sliderImgA.appendChild(sliderImg);

var control = document.createElement("div");
control.id = "control";
control.innerHTML = "<i class=\"fa fa-circle-o\"><\/i><i class=\"fa fa-circle-o\"><\/i><i class=\"fa fa-circle-o\"><\/i>";
slider.appendChild(control);

var controlIcon = control.getElementsByTagName("i");

//初始化
var sNum = 0;

sliderImgA.href = slidAttr[sNum].url;
sliderImg.src = slidAttr[sNum].img;
control.innerHTML = "<i class=\"fa fa-circle-o\"><\/i><i class=\"fa fa-circle-o\"><\/i><i class=\"fa fa-circle-o\"><\/i><i class=\"fa fa-circle-o\"><\/i><i class=\"fa fa-circle-o\"><\/i>";

//自动化
setInterval(next,3000);

function next(){
	sNum++;
if(sNum>slidAttr.length-1){
	sNum=0;
}
sliderImgA.href = slidAttr[sNum].url;
sliderImg.src = slidAttr[sNum].img;
control.innerHTML = "<i class=\"fa fa-circle-o\"><\/i><i class=\"fa fa-circle-o\"><\/i><i class=\"fa fa-circle-o\"><\/i><i class=\"fa fa-circle-o\"><\/i><i class=\"fa fa-circle-o\"><\/i>";
controlIcon[sNum].setAttribute("class","fa fa-circle");
};
};

	


//更换为切换到电脑板
/*function fn1(boxFooter){
var welcome = document.getElementById("Members_welcomeLink01-001_notLogin");
var pcEdition = document.createElement("span");
pcEdition.id = "pcedition";
pcEdition.innerHTML = "切换到<strong>电脑版<\/strong><i class=\"fa fa-tv\"><\/i>";
boxFooter.appendChild(pcEdition);

pcEdition.onclick = function(){
	pmOnOff = false;	
	pcMobile();
	
}
};*/


