// Mibary ---- Coder Ming的个人小库    My blog: www.coderming.com


// 元素选择器
function Mselect(a) {
	return document.querySelectorAll(a).length == 1 ? document.querySelector(a) : document.querySelectorAll(a);
}


// 固定返回数组的选择器 
function MselectAll(a) {
	return document.querySelectorAll(a);
}


// Ajax-Get
function MAjaxGET(b, c, d) {
	var m = new XMLHttpRequest(),
		a = {};
	m.open("GET", b, true);
	if (!d) {
		d = function() {
			console.log("MAjaxGET is not search error");
		}
	}
	m.onreadystatechange = function() {
		if (m.readyState == 4) {
			if (m.status == 200 || m.status == 304) {
				a = JSON.parse(m.responseText);
				c(a);
			}
			else {
				d();
			}
		}
	}
	m.send();
	return true;
}


// 给数组赋index的值
function Mindex(a) {
	for (var i = a.length - 1; i >= 0; i--) {
		a[i].index = i;
	}
}


// input框回车触发事件
function MenterInput(a, b) {
	a.onkeyup = function() {
		if (event.keyCode == 13) {
			b();
		}
	}
}










