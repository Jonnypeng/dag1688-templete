var changcheng = document.getElementById("changcheng-header");
var changchengAd = document.createElement("div");
changcheng.appendChild(changchengAd);

var changchengHref = document.createElement("a");
changchengHref.href = "http://www.dag1688.com/products_brand_detail/&brandId=7.html";
changchengHref.setAttribute("target","_blank");
changchengAd.appendChild(changchengHref);

var changchengImg = document.createElement("img");
changchengImg.src = "http://www.dag1688.cc/img-store/changcheng-header.gif";
changchengHref.appendChild(changchengImg);

changchengImg.style.width = "100%";
changchengImg.style.border = "solid #eee 1px";
changcheng.style.margin = "15px 0px";

