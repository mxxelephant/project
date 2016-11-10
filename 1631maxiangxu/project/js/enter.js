$(function(){
	$(".ipt1").val("");
	$(".ipt2").val("");
	var name = $.cookie("name");
	var password = $.cookie("password");

	$(".ipt1").focus(function(){
		$(".ipt1").val(name);
		$(".ipt2").val(password);
	})
	
	$(".ipt4").click(function(){

		if($(".ipt1").val() == name && $(".ipt2").val() == password){
			alert("恭喜你你登入成功")
			window.location.href="index.html";
		}else{
			alert("登入失败账号密码错了")
		}
	})
	$(".ipt6-d1").click(function(){
		alert("请用账号登入，没注册可以点击下面注册")
	})
	$(".ipt6-d2").click(function(){
		alert("请用账号登入，没注册可以点击下面注册")
	})
})