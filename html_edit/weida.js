var weida = document.getElementById("weida");
var weidaAd = document.createElement("div");
weida.appendChild(weidaAd);

var weidaHref = document.createElement("a");
weidaHref.href = "http://www.dag1688.com/products_brand_detail/&brandId=170.html";
weidaHref.setAttribute("target","_blank");
weidaAd.appendChild(weidaHref);

var weidaImg = document.createElement("img");
weidaImg.src = "http://www.dag1688.cc/img-store/weida-ad.jpg";
weidaHref.appendChild(weidaImg);

weida.style.marginBottom = "15px";



