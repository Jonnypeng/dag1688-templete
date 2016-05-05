var hugong = document.getElementById("hugong-header");
var hugongAd = document.createElement("div");
hugong.appendChild(hugongAd);

var hugongHref = document.createElement("a");
hugongHref.href = "http://www.dag1688.com/products_brand_detail/&brandId=138.html";
hugongHref.setAttribute("target","_blank");
hugongAd.appendChild(hugongHref);

var hugongImg = document.createElement("img");
hugongImg.src = "http://www.dag1688.cc/img-store/hugong-header.gif";
hugongImg.width = "655";
hugongHref.appendChild(hugongImg);

hugong.style.marginBottom = "15px";

