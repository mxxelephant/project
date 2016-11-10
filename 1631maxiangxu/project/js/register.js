$(function(){

	$.ajax({
		url: 'js/register.json',
		type: 'GET',
		success:function(data){	
			for(var i = 0; i < data.length; i++){
				if(data[i].id == 0){
					var html = "";
					for(var j = 0; j < data[i].langue.length;j++){
						html += '<li><a class ="a'+(j+1)+'">'+data[i].langue[j]+'</a></li>';
					}
					$(".langue .langue-ipt3").html(html);

//----------用户名效果 点击按钮展开
					var s = true;
					$(".langue .langue-ipt2").stop(true,true).click(function(){
						if( s == true){
							$(".langue-ipt3").css("display","block");
							s = false;
						}else{
							$(".langue-ipt3").css("display","none");
							s = true;
						}
					})
//------------li移入背景色改变
					$(".langue .langue-ipt3").find('li').hover(function() {
						$(this).css({background:"#146cd8"})
					}, function() {
						$(this).css({background:"#fff"})
					});
//----------点击a给text输入进去
					$(".langue .langue-ipt3").find('li').click(function(){
						$(".langue-ipt3").css("display","none");
						$(".langue-ipt3 a").css({background:"0"});
						var a = $(this).clone(true).find('a');
						$(".langue-ipt1").html(a);
						$(this).find("a").css({background:"#f3f3f3"});
					})

//-----------用户名效果单击文本框展开
					var s = true;
					$(".langue .langue-ipt1").stop(true,true).click(function(){
						if( s == true){
							$(".langue-ipt3").css("display","block");
							s = false;
						}else{
							$(".langue-ipt3").css("display","none");
							s = true;
						}
					})				
				}
//--------data[i] == 1  手机邮件切换
				if(data[i].id == 1){
					$(".elect1").find("a").html(data[i].a[0]);
					var s2 = true;
					$(".elect1").find("a").click(function(){
						if(s2 == true){
							$(".elect1").find("a").html(data[1].a[1]);
								var html1 = "";
								for(var j = 0; j < data[0].phone.length;j++){
									html1 += '<li><a class ="a'+(j+1)+'">'+data[0].phone[j]+'</a></li>';
								}
								$(".langue .langue-ipt3").html(html1);  //ipt3变成电话号
							
//-- 变成电话号-----用户名效果 点击按钮展开
								var s = true;
								$(".langue .langue-ipt2").stop(true,true).click(function(){
									if( s == true){
										$(".langue-ipt3").css("display","block");
										s = false;
									}else{
										$(".langue-ipt3").css("display","none");
										s = true;
									}
								})
//-----------------li移入背景色改变
								$(".langue .langue-ipt3").find('li').hover(function() {
									$(this).css({background:"#146cd8"});
								}, function() {
									$(this).css({background:"#fff"});
								});
//--------------------点击a给text输入进去
								$(".langue .langue-ipt3").find('li').click(function(){
									$(".langue-ipt3 a").css({background:"0"})
									var a = $(this).clone(true).find('a');
									$(".langue-ipt1").html(a);
									$(this).find("a").css({background:"#f3f3f3"})
								})

//----------------------用户名效果单击文本框展开
								var s = true;
								$(".langue .langue-ipt1").stop(true,true).click(function(){
									if( s == true){
										$(".langue-ipt3").css("display","block");
										s = false;
									}else{
										$(".langue-ipt3").css("display","none");
										s = true;
									}
								})
								$(".email .email-ipt1").html("");
								$(".langue .langue-ipt4").val("");
								$(".email .email-ipt1").attr('placeholder','China  86')
								$(".langue .langue-ipt4").attr('placeholder','China  86')

//-----------变成电话号结束----
							s2 = false;
						}else{
							$(".elect1").find("a").html(data[1].a[0]);
								var htm3 = "";
								for(var j = 0; j < data[0].langue.length;j++){
									htm3 += '<li><a class ="a'+(j+1)+'">'+data[0].langue[j]+'</a></li>';
								}
								$(".langue .langue-ipt3").html(htm3);
//---------变成邮箱-------用户名效果 点击按钮展开
								var s = true;
								$(".langue .langue-ipt2").stop(true,true).click(function(){
									if( s == true){
										$(".langue-ipt3").css("display","block");
										s = false;
									}else{
										$(".langue-ipt3").css("display","none");
										s = true;
									}
								})
//-----------------------li移入背景色改变
								$(".langue .langue-ipt3").find('li').hover(function() {
									$(this).css({background:"#146cd8"})
								}, function() {
									$(this).css({background:"#fff"})
								});
//-------------------------点击a给text输入进去
								$(".langue .langue-ipt3").find('li').click(function(){
									$(".ipt3 a").css({background:"0"})
									var a = $(this).clone(true).find('a');
									$(".langue-ipt1").html(a);
									$(this).find("a").css({background:"#f3f3f3"});

								})

//-----------------------------用户名效果单击文本框展开
								var s = true;
								$(".langue .langue-ipt1").stop(true,true).click(function(){
									if( s == true){
										$(".langue-ipt3").css("display","block");
										s = false;
									}else{
										$(".langue-ipt3").css("display","none");
										s = true;
									}
								})
								$(".email .email-ipt1").html("");
								$(".langue .langue-ipt4").html("");
								$(".email-ipt1").val(" ");
								$(".email .email-ipt1").attr('placeholder','china')
								$(".langue .langue-ipt4").attr('placeholder','China')
//-----------------变成邮箱结束------
							s2 = true;
						}
					})
				}

				

			}
		}
	});
							
})





$(function(){
//--------------移入问号 显示提示信息
	$(".fate span").hover(function() {
		$(".fate").find('.fate-p2').css({display:"block"})
	}, function() {
		$(".fate").find('.fate-p2').css({display:"none"})
	});
})




//----------------------日操作
$(function(){
	$.ajax({
		url: 'js/register.json',
		type: 'GET',
		success:function(data){

			for(var i = 0; i < data.length; i++){
				if(data[i].id == 2){
					var html = "";
					for(var j = 0; j < data[i].ri.length;j++){
						html += '<li><a class ="a'+(j+1)+'">'+data[i].ri[j]+'</a></li>';
					}
					$(".month-ipt3").html(html);

//-------------------用户名效果 点击按钮展开
					var s = true;
					$(".month-ipt2").stop(true,true).click(function(){
						if( s == true){
							$(".month-ipt3").css("display","block");
							s = false;
						}else{
							$(".month-ipt3").css("display","none");
							s = true;
						}
					})
//------------------li移入背景色改变
						$(".month-ipt3").find('li').hover(function() {
							$(this).css({background:"#146cd8"})
						}, function() {
							$(this).css({background:"#fff"})
						});
//-----------------------点击a给text输入进去
						$(".month-ipt3").find('li').click(function(){
							$(".month-ipt3").css("display","none");
							$(".month-ipt3 a").css({background:"0"})
							var a = $(this).clone(true).find('a');
							$(".month-ipt1").html(a);
							$(this).find("a").css({background:"#f3f3f3"})
						})

//------------------------用户名效果单击文本框展开
						var s = true;
						$(".month-ipt1").stop(true,true).click(function(){
							if( s == true){
								$(".month-ipt3").css("display","block");
								s = false;
							}else{
								$(".month-ipt3").css("display","none");
								s = true;
							}
						})
				}//id == 2  j结束
//---------id ==3------------------
				if(data[i].id == 3){
					var html = "";
					for(var j = 0; j < data[i].yue.length;j++){
						html += '<li><a class ="a'+(j+1)+'">'+data[i].yue[j]+'</a></li>';
					}
					$(".sun-ipt3").html(html);

//--------------------用户名效果 点击按钮展开
					var s = true;
					$(".sun-ipt2").stop(true,true).click(function(){
						if( s == true){
							$(".sun-ipt3").css("display","block");
							s = false;
						}else{
							$(".sun-ipt3").css("display","none");
							s = true;
						}
					})
//-------------------li移入背景色改变
						$(".sun-ipt3").find('li').hover(function() {
							$(this).css({background:"#146cd8"})
						}, function() {
							$(this).css({background:"#fff"})
						});
//---------------------点击a给text输入进去
						$(".sun-ipt3").find('li').click(function(){
							$(".sun-ipt3").css("display","none");
							$(".sun-ipt3 a").css({background:"0"})
							var a = $(this).clone(true).find('a');
							$(".sun-ipt1").html(a);
							$(this).find("a").css({background:"#f3f3f3"})
						})

//---------------------用户名效果单击文本框展开
						var s = true;
						$(".sun-ipt1").stop(true,true).click(function(){
							if( s == true){
								$(".sun-ipt3").css("display","block");
								s = false;
							}else{
								$(".sun-ipt3").css("display","none");
								s = true;
							}
						})
				}//id == 3 j结束	

//-------------id ==4-------------
				if(data[i].id == 4){
					var html = "";
					for(var j = 0; j < data[i].nian.length;j++){
						html += '<li><a class ="a'+(j+1)+'">'+data[i].nian[j]+'</a></li>';
					}
					$(".age-ipt3").html(html);

//------------------用户名效果 点击按钮展开
					var s = true;
					$(".age-ipt2").stop(true,true).click(function(){
						if( s == true){
							$(".age-ipt3").css("display","block");
							s = false;
						}else{
							$(".age-ipt3").css("display","none");
							s = true;
						}
					})
//-----------------li移入背景色改变
						$(".age-ipt3").find('li').hover(function() {
							$(this).css({background:"#146cd8"})
						}, function() {
							$(this).css({background:"#fff"})
						});
//---------------------点击a给text输入进去
						$(".age-ipt3").find('li').click(function(){
							$(".age-ipt3").css("display","none");
							$(".age-ipt3 a").css({background:"0"})
							var a = $(this).clone(true).find('a');
							$(".age-ipt1").html(a);
							$(this).find("a").css({background:"#f3f3f3"})
						})

//--------------------用户名效果单击文本框展开
						var s = true;
						$(".age-ipt1").stop(true,true).click(function(){
							if( s == true){
								$(".age-ipt3").css("display","block");
								s = false;
							}else{
								$(".age-ipt3").css("display","none");
								s = true;
							}
						})
				}//id == 4 j结束
																																										//																																									
			}//for  i 循环结束
		}//data结束
	})
})

//生成验证码    
$(function(){
        var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
        var str = '';
        for(var i = 0 ; i < 4 ; i ++ )
            str += ''+arr[Math.floor(Math.random() * arr.length)];
        $(".code-ipt1").val(str);
})

//---------------------------创建账户
$(function(){
	var mx = 0;
	var xx = 0;
	var mx1 = 0;
	$(".reveal-ipt1").val("");
	$(".na").val("");
	$(".me").val("");
	$(".backup-ipt1").val("");
//--------------------------------判断邮箱
	$(".email-ipt1").val("");
	$(".email-ipt1").focus(function(){
		$(".email-p").css({display:"none"})
		$(".psword").css({marginTop:60})
	})
//--------------------------------判断邮箱合法
	$(".email-ipt1").blur(function(){
		var name = $(".email-ipt1").val();
		var reg = /\w+[@]{1}\w+[.]\w+/;
		 if(reg.test(name)){
		 	mx = 1;
		 	$.cookie("name",name,{expires:7})		 	 	
		 	$(".email-ipt2").html(name);
		 	$(".email-ipt2").css({display:"block"})
		 }else{
		 	$(".email-p").css({display:"block"})
		 	$(".psword").css({marginTop:100})
		  	$(".email-p").html("请输入正确的email地址");
		 }
	})

	$(".email-a").hover(function() {
		$(this).css({background:"#f3f3f3"});
	}, function() {
		$(this).css({background:""});
	});
//---------------------------------------------判断邮箱结束
//----------------------------------------------判断可选邮箱合法

//---------------------------------------------判断密码
	$(".psword-ipt1").val("");
	$(".psword-ipt1").focus(function(){
		
	})
	$(".psword-ipt1").blur(function(){
		var password = $(".psword-ipt1").val();
		var reg =/^[0-9a-zA-Z]+$/;
		if(password.length >= 7 && reg.test(password) || password.length <= 16 ){
			xx = 1;
			$(".psword-p").css({display:"none"});
			$.cookie("password",password,{expires:7})
		}else{
			$(".psword-p").css({display:"block"})
			$(".psword-p").html("输入至少 7 个字符最多16个，由字母数字组成，不含空格。")
		}
	})
//-------------------------------------------------判断密码结束
	

var zh1 = null;
var zh2 = null;
	$(".reveal-ipt1").blur(function(){
		zh1 = $(".code-ipt1").val();
		zh2 = $(".reveal-ipt1").val();
		
		if(zh1 == zh2){
			$(".elect").css({marginTop:80})
			$(".reveal-p").css({display:"none"})
			$(".reveal-p").html("")
		}else{
			$(".elect").css({marginTop:40})
			$(".reveal-p").css({display:"block"})
			$(".reveal-p").html("验证码输入错误")			
		}
	})




		$(".acc").click(function(){
			if(mx == 1 && xx == 1 && zh1 == zh2 && ($(".me").val().length) >=1 && ($(".na").val().length) >= 1){
				alert("恭喜你注册成功");
				window.location.href="enter.html";
			}else{
				alert("恭喜你注册失败,空得填！！")
			}
		})		
	
})