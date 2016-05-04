var normalFooter = document.getElementById("normal-footer");
var footerContent = document.createElement("div");
normalFooter.appendChild(footerContent);
var contentHref = document.createElement("a");
footerContent.appendChild(contentHref);
var hrefImg = document.createElement("img");
contentHref.appendChild(hrefImg);
var contentHref1 = document.createElement("a");
footerContent.appendChild(contentHref1);
var hrefImg1 = document.createElement("img");
contentHref1.appendChild(hrefImg1);
/*尾部的第一行图片*/

var arrcontent = [{url:"#",img:"http://www.dag1688.cc/img-store/dag-wuliu.jpg"},{url:"http://appstore.huawei.com/app/C10504775",img:"http://www.dag1688.cc/img-store/app-download.jpg"},{url:"http://www.dag1688.cc/dag1688-templete/zhuanti/wechat-map.html",img:"http://www.dag1688.cc/img-store/dag-location.jpg"}]; 

/*初始化*/
	hrefImg.setAttribute("src",arrcontent[0].img);
	contentHref.setAttribute("href",arrcontent[0].url);

/*尾部的第二行图片*/

		hrefImg1.setAttribute("src",arrcontent[1].img);
		contentHref1.setAttribute("href",arrcontent[1].url);
var i = 1;
setInterval(function(){
	i++;
	if(i>arrcontent.length-1){
	i=1;
};
		hrefImg1.src = arrcontent[i].img;
		contentHref1.href = arrcontent[i].url;
},5000);
