var topIn = document.querySelector("#top-in"),
	topSearch = document.querySelector("#top-search"),
	mainCover = document.querySelector("#main-cover"),
	mainTrans = document.querySelector("#main-top-user-trans"),
	mainUser = document.querySelector("#main-top-user"),
	mainLeft = document.querySelector("#main-left"),
	topMain = document.querySelector("#top-main"),
	listLi = document.querySelectorAll(".function-list li");


// input框active的效果
topIn.onfocus = function() {
	topIn.style.background = "white";
	topIn.style.width = "400px";
	topIn.style.border = "1px solid #aaaaaa";
	topSearch.style.transform = "scale(0,0)";
	mainCover.style.display = "block";
	mainCover.style.opacity = 0;
	setTimeout(function(){
		mainCover.style.opacity = 1;
	},0);
}
topIn.onblur = function() {
	topIn.style.background = "#f7f8fa";
	topIn.style.width = "320px";
	topIn.style.border = "1px solid #e7eaf1";
	mainCover.style.opacity = 0;
	setTimeout(function(){
		mainCover.style.display = "none";
		topSearch.style.transform = "scale(1,1)";
	},300);
}

// 点击显示详细信息
mainTrans.onclick = function() {
	if (mainUser.style.height == "250px") {
		mainTrans.innerHTML = "点击展开详细信息>>>"
		mainUser.style.height = "160px";
		document.querySelector("#int-b").style.height = "0px";
	}
	else {
		mainTrans.innerHTML = "点击收起>>>"
		mainUser.style.height = "250px";
		document.querySelector("#int-b").style.height = "90px";
	}
}

// 滚动到下方导航栏切换
setInterval(function(){
	if (window.scrollY > mainLeft.offsetTop) {
		topMain.style.marginTop = "-60px";
	}
	else {
		topMain.style.marginTop = "0px";
	}
},100);

// 页面list点击切换
for (var i = listLi.length - 1; i >= 0; i--) {
	listLi[i].index = i;
}
for (var i = (listLi.length)/2 - 1; i >= 0; i--) {
	listLi[i].onclick = function() {
		for (var i = listLi.length - 1; i >= 0; i--) {
			listLi[i].className = " ";
		}
		this.className = "function-list-ACTIVE";
		listLi[this.index+5].className = "function-list-ACTIVE"
	}
	listLi[i+5].onclick = function() {
		for (var i = listLi.length - 1; i >= 0; i--) {
			listLi[i].className = " ";
		}
		this.className = "function-list-ACTIVE";
		listLi[this.index-5].className = "function-list-ACTIVE";
	}
}