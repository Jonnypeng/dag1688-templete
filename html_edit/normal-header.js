var normalHeader = document.getElementById("normal-header");
var normalHeaderAd = document.createElement("div");
normalHeader.appendChild(normalHeaderAd);
var normalHeaderHref = document.createElement("a");
normalHeaderHref.href = "http://appstore.huawei.com/app/C10504775";
normalHeaderHref.setAttribute("target","_blank");
normalHeaderAd.appendChild(normalHeaderHref);
var normalHeaderImg = document.createElement("img");
normalHeaderImg.src = "http://www.dag1688.cc/img-store/normal-header.gif";
normalHeaderHref.appendChild(normalHeaderImg);

normalHeader.style.margin = "15px 0px";
normalHeader.style.border = "#eee solid 1px";



