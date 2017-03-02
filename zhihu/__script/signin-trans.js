
// 表单提交部分
upButt.onclick = function() {
	if (!upName.value) {
		alert("请输入姓名");
	}
	else if (upPhone.value.length != 11 || upPhone.value != parseInt(upPhone.value).toString()) { 
		//怎么保证一个字符串全是数字？？？
		alert("请输入正确的手机号");
	}
	else if (upPassword.value.length < 8) {
		alert("请输入格式正确的密码");
	}
	else {
	 	MAjaxGET(
	 		"../houduan/register.php" +
		 		"?user_name=" + upName.value + 
		 		"&user_phone=" + upPhone.value +
		 		"&user_password=" + upPassword.value,
	 		function(a) {
	 			_signin = a;
	 			if (!a.result) {
	 				alert("注册成功，开始你的知乎之旅吧！");
	 				window.location.href = "./main/index.html";
	 			}
	 			else if (a.result == 1) {
	 				alert("注册失败，该电话号码已注册。");
	 				upName.value = "";
	 			}
	 			else if (a.result == 2) {
	 				alert("注册失败，该用户名已注册。");
	 				upName.value = "";
	 			}
	 			else if (a.result == 3) {
	 				alert("注册失败，出现意外故障");
	 			}
	 	});
	}
}



inButt.onclick = function() {
	if (!inPhone.value) {
		alert("请输入姓名");
	}
	else if (inPassword.value.length < 8) {
		alert("请输入正确的密码")
	}
	else {
		MAjaxGET(
			"../houduan/login.php" +
				"?user_phone=" + inPhone.value +
				"&user_password=" + inPassword.value,
			function(a) {
				if (!a.state) {
					alert("登陆成功");
	 				window.location.href = "./main/index.html";
				}
				else if (a.state == 1) {
					alert("登陆失败，密码错误");
					inPassword.value = "";
				}
				else if (a.state == 2) {
					alert("登录失败，该手机号尚未注册！");
				}
		});
	}
}












