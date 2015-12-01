window.onload = function(){
					var prev = document.getElementById('prev');
					var next = document.getElementById('next');
					var sImg = document.getElementById('slider-img1');
					var sCation = document.getElementById('slider-cation');
					var arrayImg = ['http://dag1688.aliapp.com/wp-content/uploads/2015/11/dag-1.jpg','http://dag1688.aliapp.com/wp-content/uploads/2015/11/dag-2.jpg','http://dag1688.aliapp.com/wp-content/uploads/2015/11/dag-3.jpg','http://dag1688.aliapp.com/wp-content/uploads/2015/11/dag-4.jpg'];
					var arrayText = ['大光五金旗舰店实拍','国际国内一线品牌代理商','30年五金机电行业服务经验','贵州省各大工矿企业优秀供应商'];
					var num = 0;
					
					document.getElementById('pIcon').onmouseover = function () {
						document.getElementById('pIcon').style.color = "green";
};
					document.getElementById('pIcon').onmouseout = function () {
						document.getElementById('pIcon').style.color = "gray";
};
					document.getElementById('nIcon').onmouseover = function () {
						document.getElementById('nIcon').style.color = "green";
};
					document.getElementById('nIcon').onmouseout = function () {
						document.getElementById('nIcon').style.color = "gray";
};
					sImg.onmouseover = function(){
						sImg.style.filter = "brightness(100%)";
						sImg.style[-webkit-filter] = "brightness(100%)"; 
						sImg.style[-moz-filter] = "brightness(100%)"; 
						sImg.style[-o-filter] = "brightness(100%)";
						sImg.style[-ms-filter] = "brightness(100%)";
					};
					
					sImg.onmouseout = function(){
						sImg.style.filter = "brightness(200%)";
						sImg.style[-webkit-filter] = "brightness(200%)"; 
						sImg.style[-moz-filter] = "brightness(200%)"; 
						sImg.style[-o-filter] = "brightness(200%)";
						sImg.style[-ms-filter] = "brightness(200%)";
					};
					//幻灯片初始化 

				function checkout (){
							sImg.src = arrayImg[num];
							sCation.innerHTML = arrayText[num];
				};
					checkout();

					prev.onclick = function(){
						  num --;
							if(num==-1){
								num = 3;
							}
							checkout();
					};
					next.onclick = function(){
						  num ++;
							if(num == 4){
								num = 0;
									}
						checkout();
					};
					
// 以下是宽度为655的图片样本格式化
var pImg = document.getElementsByClassName('describe')[0];
var img = pImg.getElementsByTagName('img');
var htmlinline = document.getElementsByClassName('htmlinline')[0].innerHTML;
for(var nu =2;nu<img.length-1;nu++){
img[nu].alt = htmlinline;
img[nu].width = "655";
}


					};
