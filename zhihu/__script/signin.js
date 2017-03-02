var moduleSign = document.querySelectorAll(".module-sign"),
	signin = document.querySelector("#signin"),
	signup = document.querySelector("#signup"),
	download = document.querySelector("#download"),
	downloadImg = document.querySelector("#download-img"),
	upName = document.querySelector("#up-name"),
	upPhone = document.querySelector("#up-phone"),
	upPassword = document.querySelector("#up-password"),
	upButt = document.querySelector("#up-butt"),
	inPhone = document.querySelector("#in-phone"),
	inPassword = document.querySelector("#in-password"),
	inButt = document.querySelector("#in-butt"),
	getPhone = new XMLHttpRequest(),
	Jgetphone,
	showPhone = document.querySelector(".showphone");




// 点击切换注册登陆
moduleSign[0].onclick = function() {
	signin.style.display = "none";
	moduleSign[1].className = "module-sign";
	signup.style.display = "block";
	moduleSign[0].className = "module-sign module-sign-active";
}
moduleSign[1].onclick = function() {
	signin.style.display = "block";
	moduleSign[1].className = "module-sign module-sign-active";
	signup.style.display = "none";
	moduleSign[0].className = "module-sign";
}


// 显示手机归属地 ---- 不跨域的办法
// upPhone.onkeyup = function() {
// 	if (upPhone.value.length == 7) {
// 		getPhone.open("GET", "http://apis.juhe.cn/mobile/get?phone=" + upPhone.value + "&dtype=&key=fcbbb62f008c07cc7f8bae66c59be1f2", true);
// 		getPhone.onreadystatechange = function() {
// 			if (getPhone.readyState == 4) {
// 				if (getPhone.status == 200 || getPhone.status == 304) {
// 					Jgetphone = JSON.parse(getPhone.responseText);
// 					if (Jgetphone.resultode = 200) {
// 						showPhone.innerHTML = Jgetphone.result.province + Jgetphone.result.company;
// 						showPhone.className += " showphone-ACTIVE";
// 					}
// 				}
// 			}
// 		}
// 		getPhone.send();
// 	}
// 	else if (upPhone.value.length < 7){
// 		showPhone.className = "showphone";
// 	}
// }



// // JSONP ---- 解决跨域
// var m = document.createElement("script");
// m.src = "http://apis.juhe.cn/mobile/get?phone=1309663&dtype=&key=fcbbb62f008c07cc7f8bae66c59be1f2&callback=jsonpcallback";
// m.id = "aaa";
// document.querySelector("body").appendChild(m);

document.aaaa = function (a) {
	Jgetphone = a;
	if (Jgetphone.resultcode == "200") {
		showPhone.innerHTML = Jgetphone.result.province + Jgetphone.result.company;
		showPhone.className += " showphone-ACTIVE";
	}
}

upPhone.onkeyup = function() {

	if (upPhone.value.length == 7) {
		var m = document.createElement("script");
		m.src = "http://apis.juhe.cn/mobile/get?phone=" + upPhone.value + "&dtype=&key=fcbbb62f008c07cc7f8bae66c59be1f2&callback=document.aaaa";
		document.body.appendChild(m);
	}
	else if (upPhone.value.length < 7){
		showPhone.className = "showphone";
	}
}







// 封装实验

// function jsonpCallBack(p) {
// 		aaa = p;
// 	}
// MAjaxJSONP(aaa, 
// 	"http://apis.juhe.cn/mobile/get?phone=1309663&dtype=&key=fcbbb62f008c07cc7f8bae66c59be1f2&",
// 	function() {
// 		if (Jgetphone.resultode = 200) {
// 			showPhone.innerHTML = Jgetphone.result.province + Jgetphone.result.company;
// 			showPhone.className += " showphone-ACTIVE";
// 		}
// 	});




// 二维码页面出现与消失
download.onclick = function() {
	if (downloadImg.style.zIndex == 2) {
		downloadImg.style.transform = "translate(0,50px)";
		downloadImg.style.opacity = 0;
		downloadImg.style.zIndex = -1;
		download.querySelector("p").innerHTML = "下载知乎App";
	}
	else{
		downloadImg.style.transform = "none";
		downloadImg.style.opacity = 1;
		downloadImg.style.zIndex = 2;	
		download.querySelector("p").innerHTML = "关闭二维码";
	}
}







