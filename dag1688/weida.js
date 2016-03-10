//=====================================置入幻灯片
//图片与链接进行定量
var slider = ["http://www.cw-maxpower.com/images/2.jpg","http://www.cw-maxpower.com/images/1a.jpg"];

var weidaHeader = document.getElementById("weida-header");
var weidaSliderImg = document.createElement("img");
weidaHeader.appendChild(weidaSliderImg);

var weidaNum = 0;

//初始化
weidaSliderImg.src = slider[0];

setInterval(function (){
	weidaNum++;
	if(weidaNum==slider.length){
	weidaNum = 0;
}
	weidaSliderImg.src = slider[weidaNum];	
},3000);

var weidaFooter = document.getElementById("weida-footer");
var peisong = document.createElement("img");
peisong.id = "peisong";
peisong.src = "http://dag1688.aliapp.com/wp-content/uploads/2015/11/dag-wuliu1.jpg";
weidaFooter.appendChild(peisong);

var aboutDag = document.createElement("img");
aboutDag.src = "http://dag1688.aliapp.com/wp-content/uploads/2016/03/daglogo.jpg";
weidaFooter.appendChild(aboutDag);

var aboutDagText = document.createElement("div");
aboutDagText.id = "aboutDagText";
aboutDagText.innerHTML = "<p>我公司是在改革大潮中崛起，伴随着市场调节不断发展壮大>的民营企业集团。集五金产销，机电设备。汽车贸易等经营项目于一体，自1985年7月15日成立以来，坚持在困难中求生存，改革中寻活力，竞争中谋发展，立足贵州，面向全国， 走向世界。致力营造恪守信用，讲求信誉，注意信义的企业文化。先后在上海，嘉兴，香港等地设立分公司。1995年荣登全国500家最大私营企业排行榜，名列第326位，在贵州一>枝独秀，连年荣获贵阳市纳税先进企业，“重合同、守信用”等多种殊荣。</p><p> 1999年10月9日，经过近两年的筹备，全国工商联五金商会正式成立 ，选举我司董事长吴石川为首任会长，商会秘书处设在我司，2002年4月，我司董事长吴石川再次当选为全国工商联五金商会会长，秘书处迁至北京。</p><p> 源于更多国家、社会，企事业单位和广大消费者的社会责任感，我公司从“货买源头”入手，坚持“人无我有、人有我新、人新我精”的产品导向，向客户提供全国乃>至全世界的名优五金产品，素以品种齐全，质量可靠，价格合理，服务周到赢得广大消费者的信赖，并给予高度评价：“大光五金，样样精品”，“货比百家，不如走大光一家”。价>格透明，诚信无欺，是我司一以贯之的经营理念，所有商品价格一律向消费者公开，只赚取合理的商业利润，在贵州省乃至西南五金界树立鲜明一帜。</p>";
weidaFooter.appendChild(aboutDagText);

var concatus = document.createElement("div");
concatus.id = "concatus";
concatus.innerHTML = "<a href=\"http://www.dag1688.com/zhuanti/dagmap/wechat-map.html\" target=\"_blank\"><img src=\"http://dag1688.aliapp.com/wp-content/uploads/2015/11/dag-map.jpg\"></a><a href=\"http://www.dag1688.com/zhuanti/dagmap/streetview.html\" target=\"_blank\"><img src=\"http://dag1688.aliapp.com/wp-content/uploads/2015/11/dag-streetview.jpg\"></a>";
weidaFooter.appendChild(concatus);


