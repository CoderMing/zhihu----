//广告点击按钮关闭
$(".right-ad1-delete").click(function(){
	$("#right-ad1, .right-ad1-delete").hide();
})
$(".right-ad2-delete").click(function(){
	$("#right-ad2, .right-ad2-delete").hide();
})


//提问小框弹出与关闭
$("#top-main-ask, .left-ask, .ask-top-delete, .ask-submit").click(function(){
	$("#ask").toggle();
})




// oh,shit 我还是用js吧。。。

var main = document.querySelectorAll(".left-article-main-main"),
	del = document.querySelectorAll(".left-article-main-right-buttom-delete"),
	topUser = document.querySelector("#top-main-user"),
	topUserMore = document.querySelector("#top-main-user-more");


// 文章点击显示全部
for (var i = main.length - 1; i >= 0; i--) {
	main[i].index = i;
	del[i].index = i;
}
for (var i = main.length - 1; i >= 0; i--) {
	main[i].onclick = function() {
		del[this.index].style.display = "inline-block";
		this.style.height = "auto";
		this.style.cursor = "auto";
	}
	del[i].onclick = function() {
		this.style.display = "none";
		main[this.index].style.height = "120px";
		main[this.index].style.cursor = "pointer";
	}
}
// 顶部hover
topUserMore.onmouseover = topUser.onmouseover = function() {
	topUserMore.style.transform = "none";
}
topUserMore.onmouseout = topUser.onmouseout = function() {
		topUserMore.style.transform = "translate(-1000px,-1000px)";
}










