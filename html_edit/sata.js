var sata = document.getElementById("sata-header");
var sataAd = document.createElement("div");
sata.appendChild(sataAd);

var sataHref = document.createElement("a");
sataHref.href = "http://www.dag1688.com/products_brand_detail/&brandId=6.html";
sataHref.setAttribute("target","_blank");
sataAd.appendChild(sataHref);

var sataImg = document.createElement("img");
sataImg.src = "http://www.dag1688.cc/img-store/sata-header.gif";
sataImg.width = "655";
sataHref.appendChild(sataImg);

sata.style.marginBottom = "15px";

