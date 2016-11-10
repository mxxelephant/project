//----------------------------------------------------------
//top鼠标的移入移除事件
$(function(){
	var timer = null;
	var timer1 = null;
	$(".top-con-d2-li2").hover(function() {
		$("#nav").css({zIndex:-2});
		$("#show").css({zIndex:-3})
		$("#htc1").css({zIndex:-3})
		$("#show").css({border:0})
		$(".show-con").css({display:"none"})
		$(this).css({background:"#f6f6f6"})
		$(".top-con-d2-li2 span").css("background","url(img/sjx.jpg)")
		$(".top-con-d2-li2 a").css("color","#a5cf4c")
		$(".top-con-d5").css({display:"block"})
		setTimeout(function(){
			
			$(".top-con-d5").animate({top:100}, 400,function(){
				$(".top-con-d5").css({zIndex:1})
			})	
			$("#show").css({border:0})
			$(".show-con").css({display:"none"})
		},400)

	}, function() {
		timer = setTimeout(function(){
			$("#nav").css({zIndex:1});
			$("#htc1").css({zIndex:0})
			$("#show").css({border:"solid 1px #dfdfdf"})
			$(".show-con").css({display:"block"})
			$("#htc1").css({zIndex:0})
			$(".top-con-d5").css("display","none");
			$(".top-con-d5").stop(true).animate({top:-220}, 40,function(){
				$(".top-con-d5").css({zIndex:-1})
			});
			$(".top-con-d2-li2").css({background:"#fff"})
			$(".top-con-d2-li2 span").css("background","url(img/sjs.jpg)")
			$(".top-con-d2-li2 a").css("color","#666")
		},0)
	});
	$(".top-con-d5").mouseenter(function(){
			$("#nav").css({zIndex:-2});
			$("#show").css({zIndex:-3})
			$("#show").css({border:0})
			$(".show-con").css({display:"none"})
			clearTimeout(timer);
			$(".top-con-d5").css({display:"block",zIndex:1})
			$(".top-con-d2-li2").css({background:"#f6f6f6"})
			$(".top-con-d2-li2 span").css("background","url(img/sjx.jpg)")
			$(".top-con-d2-li2 a").css("color","#a5cf4c")
		})

	$(".top-con-d5").mouseleave(function(){
		timer1 = setTimeout(function(){
			$("#nav").css({zIndex:1});
			$("#htc1").css({zIndex:0})
			$("#show").css({border:"solid 1px #dfdfdf"})
			$(".show-con").css({display:"block"})
			$(".top-con-d5").css("display","none");
			$(".top-con-d5").stop(true).animate({top:-220}, 40,function(){
			$(".top-con-d5").css({zIndex:-1});
			})
			$(".top-con-d2-li2").css({background:"#fff"});
			$(".top-con-d2-li2 span").css("background","url(img/sjs.jpg)");
			$(".top-con-d2-li2 a").css("color","#666");
		},0)


		$(".top-con-d2-li2").mouseenter(function(){
			clearTimeout(timer1)
			$("#nav").css({zIndex:-2});
			$("#show").css({zIndex:-3})
			$("#show").css({border:0})
			$(".show-con").css({display:"none"})
			$(".top-con-d5").animate({top:100}, 400,function(){
				$(".top-con-d5").css({display:"block",zIndex:1})
			});
			$(".top-con-d2-li2").css({background:"#f6f6f6"})
			$(".top-con-d2-li2 span").css("background","url(img/sjx.jpg)")
			$(".top-con-d2-li2 a").css("color","#a5cf4c")
		});
	})
})
//鼠标的移入移除事件  完事


//-----------------------------------------------------------
//json加载的所有数据
$(function(){
	$.ajax({
		url: 'js/store.json',
		type: 'GET',
		success:function(data){
			for(var i = 0; i < data.length; i ++){
				if(data[i].id == 0){ //id ==0 全部产品下拉
					var html = "";
					for(var j = 0; j < data[i].left.length; j++){
						html += '<li class = "top-con-d5-da-left-ul-li'+(j+1)+'"><a>'+data[i].left[j]+'</a></li>'
					}
					$(".top-con-d5-da-left-ul").html(html);
					var html1 ="";
					for(var k = 0; k < data[i].right.length; k++){
						html1 +='<div class = "top-con-d5-da-right-div'+(k+1)+'"><img src="'+data[i].right[k].img+'" alt="" /><h2>'+data[i].right[k].h2+'</h2><p>'+data[i].right[k].p+'</p></div>'
					}
					$(".top-con-d5-da-right").html(html1);
				}

//-----------------------------------------------------------------
				if(data[i].id == 1){ // id == 1 全部手机下拉
					var html = "";
					var html1 = "";
					html = '<a href="#">'+data[i].a+'</a>';
					$(".nav-con-div2-d1").html(html);
//--------------全部商品下拉里的引入和效果
					$(".nav-con-div2-d1 a").css({color:"#428bca",fontSize:12,marginLeft:22,lineHeight:5});
					for(var j = 0; j < data[i].bot.length; j++){
						html1 += '<dl class = "nav-con-div2-d2-dl'+(j+1)+'"><dt><img src="'+data[i].bot[j].img+'" alt="" /></dt><dd><span></span>'+data[i].bot[j].p+'</dd></dl>'
					}
					$(".nav-con-div2-d2").html(html1);
//----------botttom变颜色
					$(".nav-con-div2-d2 dl dt").hover(function() {
						$(this).css({borderBottom:"solid 1px #90be78"});
						$(this).css("background","#e8e9e9")
					}, function() {
						$(this).css({borderBottom:"solid 1px #666"});
						$(this).css("background","")
					});
//下面的bottom变颜色
					$(".nav-con-div2-d2 dl dd").hover(function() {
						$(this).css({borderBottom:"solid 1px #90be78"});
						$(this).css("background","#e8e9e9")
					}, function() {
						$(this).css({borderBottom:"solid 1px #666"});
						$(this).css("background","")
					});
				}

//------------------------------------------------
				if(data[i].id == 2){ // id == 2 配件下拉
					var html = "";
					var html1 = "";
					html = '<a href="#">'+data[i].a+'</a>';
					$(".nav-con-div3-d1").html(html);
//全部商品下拉里的引入和效果
					$(".nav-con-div3-d1 a").css({color:"#428bca",fontSize:12,marginLeft:450,lineHeight:5});  //a的位置
					for(var j = 0; j < data[i].bot.length; j++){
						html1 += '<dl class = "nav-con-div3-d2-dl'+(j+1)+'"><dt><img src="'+data[i].bot[j].img+'" alt="" /></dt><dd><span></span>'+data[i].bot[j].p+'</dd></dl>'
					}
					$(".nav-con-div3-d2").html(html1);
//botttom变颜色
					$(".nav-con-div3-d2 dl dt").hover(function() {
						$(this).css({borderBottom:"solid 1px #90be78"});
						$(this).css("background","#e8e9e9")
					}, function() {
						$(this).css({borderBottom:"solid 1px #666"});
						$(this).css("background","")
					});
//下面的bottom变颜色
					$(".nav-con-div3-d2 dl dd").hover(function() {
						$(this).css({borderBottom:"solid 1px #90be78"});
						$(this).css("background","#e8e9e9")
					}, function() {
						$(this).css({borderBottom:"solid 1px #666"});
						$(this).css("background","")
					});
				}
//------整个左侧右侧的json的加载
				for(var l = 3; l <= 6; l++){ 
					if(data[i].id == l){ //大家都在买
						var html = "";
						var html1 = "";
						for(var j = 0; j < data[i].stair.length; j++){
							html1 += '<a class = "nav-con-div1-d'+(l-2)+'-left-a'+(j+1)+'">'+data[i].stair[j]+'</a>'
						}
						for(var k = 0; k < data[i].two.length; k++){
							html += '<li class = "nav-con-div1-d'+(l-2)+'-ul1-li'+(k+1)+'"><img src="'+data[i].two[k].img+'"/><a>'+data[i].two[k].p+'</a></li>';
						}
						$(".nav-con-div1-d"+(l-2)+"-left").html(html1);
						$(".nav-con-div1-d"+(l-2)+"-ul"+(l-2)+"").html(html);
						
					}
				}
//-------------------------------------------------------
				$("#nav .nav-con-div1 a").hover(function() {
					$(this).css("color","#a7d04e");
				}, function() {
					$(this).css("color","#3e3e3e");
				});
//-------------------------------------------------------
				if(data[i].id == 7){ //tt 的三个标题
					var html = "";
					for(var j = 0; j < data[i].img.length;j++){
						html = '<img src="'+data[i].img[j]+'" alt="" />';
						$(".tt").eq(j).html(html);
					}
				}
//------------------------------------------------------
				
//----------------------------------------------------------
				if(data[i].id == 11){
					var html = "";
					var html1 = "";
					var html2 ="";
					var html3 = "";
					var html4 = "";
					for(var j = 0; j < data[i].p.length; j++){
						html += '<p class = "p'+(j+1)+'">'+data[i].p[j]+'</p>';
					}
					for(var k = 0; k < data[i].a1.length; k++){
						html1 += '<li>'+data[i].a1[k]+'</li>'
					}
					for(var k = 0; k < data[i].a2.length; k++){
						html2 += '<li>'+data[i].a2[k]+'</li>'
					}
					for(var k = 0; k < data[i].a3.length; k++){
						html3 += '<li>'+data[i].a3[k]+'</li>'
					}
					for(var k = 0; k < data[i].a4.length; k++){
						html4 += '<img src="'+data[i].a4[k].img+'" alt="" /><li>'+data[i].a4[k].p+'</li>'
					}
					$(".follow-con-top").html(html);
					$(".follow-con-bot-ul1").html(html1);
					$(".follow-con-bot-ul2").html(html2);
					$(".follow-con-bot-ul3").html(html3);
					$(".follow-con-bot-ul4").html(html4);

					
				}
				
			}
		}
	
	});
});

//------nav 移入事件和移除事件  所有li

$(function(){
	var sum = $(".nav-con ul li");
	var ss = $(".nav-con ul li a")
	for(var i = 1; i < sum.length; i++){
		
		$(".nav-con ul li").eq(i).hover(function() {
			$(this).css({background:"#cdba97",borderBottom:"1px solid #cdba97"})
			$(this).find("a").css("color","#000")
		}, function() {
			$(this).css({background:"#000"})
			$(this).find("a").css("color","#d4c7af")
			$(".nav-con-li3 a").css("color","#c45900")
			$(".nav-con-li4 a").css("color","#c45900")
		});
	}

//div5 和 div6  的移入显示  和移除隐藏
    var timer = null;
	$(".nav-con-li5").hover(function() {  //li5 的移入
		
		$(".nav-con-li5 span").css("display","block");
		$(".nav-con-div2").css("display","block");
	}, function() {      //li5的移出
		$(".nav-con-div2").hover(function() {  //div5的移入
			$(".nav-con-li5").css({background:"#cdba97"})
			$(".nav-con-li5 a").css({color:"#000"})
			clearTimeout(timer);
			$(".nav-con-div2").css("display","block");	
		}, function() {    //div5移出 
			$(".nav-con-div2").css("display","none");
			$(".nav-con-li5 span").css("display","none")
			$(".nav-con-li5").css({background:"#000"})
			$(".nav-con-li5").find("a").css("color","#d4c7af")
		});
		timer = setTimeout(function(){  //延时隐藏
			$(".nav-con-li5 span").css("display","none")
			$(".nav-con-div2").css("display","none");			
		},30)
	});


//div6 的移入显示  和移除隐藏
    var timer1 = null;
	$(".nav-con-li6").hover(function() {  //li5 的移入
		
		$(".nav-con-li6 span").css("display","block");
		$(".nav-con-div3").css("display","block");
	}, function() {      //li5的移出
		$(".nav-con-div3").hover(function() {  //div5的移入
			$(".nav-con-li6").css({background:"#cdba97"})
			$(".nav-con-li6 a").css({color:"#000"})
			clearTimeout(timer1);
			$(".nav-con-div3").css("display","block");	
		}, function() {    //div5移出 
			$(".nav-con-div3").css("display","none");
			$(".nav-con-li6 span").css("display","none")
			$(".nav-con-li6").css({background:"#000"})
			$(".nav-con-li6").find("a").css("color","#d4c7af")
		});
		timer1 = setTimeout(function(){  //延时隐藏
			$(".nav-con-li6 span").css("display","none")
			$(".nav-con-div3").css("display","none");			
		},30)
	});

//调用js  给div5 和div6 赋值

})
//-----------------------------------------------------------------
$(function(){

	for(var i = 0; i < $(".qq").length;i++){}
	$(".qq").hover(function() {
		$(this).eq(0).find(".ee").css({display:"block"})
	}, function() {
		$(this).eq(0).find(".ee").css({display:"none"})
	});
})

//bottom 最下面加载的数据
$(function(){
	$.ajax({
		url:'js/shbottom.json',
		type: 'GET',
		success:function(data){
			for(var i = 0; i < data.length; i++){
				
				$(".bottom-con-d3-ul"+(i+1)+"").html('<p>'+data[i].p+'</p><a>'+data[i].a1+'</a><a>'+data[i].a2+'</a><a>'+data[i].a3+'</a><a>'+data[i].a4+'</a><a>'+data[i].a5+'</a><a>'+data[i].a6+'</a>');
				
			}
		}
	
	})
})


//bottom 的单击上下效果
//
$(function(){
	var s = true;
	$(".bottom-con-d2-c").click(function(){
		
		if(s == true){
			$("#bottom").css("height","550");
			var t = $(window).scrollTop();
			$('body,html').animate({'scrollTop':t+445},200)
			s = false;
			$(this).css({backgroundPosition: -40})
		}
		else{
			$("#bottom").css("height","109")
			s = true;
			$(this).css({backgroundPosition: 0})
		}

	})
})

//nav-con-li1 的移入移出事件  商品目录+
$(function(){
	var timer2 = null;
	$(".nav-con-li1").hover(function() {
	
		$(".nav-con-div1").css("display","block");
	}, function() {
		$(".nav-con-div1").hover(function() {
			clearInterval(timer2);
			$(this).css("display","block");
		}, function() {
			$(this).css("display","none");
		});
		var timer2 = setTimeout(function(){
			$(".nav-con-div1").css("display","none");
		},30)
		
	});
})
//-----------------------------------htc1效果
$(function(){
	$(".htc1-left-top").hover(function() {
		$(".x").stop(true, true).animate({left:450,opacity:1}, 400)
		$(".y").stop(true, true).animate({left:30,opacity:1}, 400)
	}, function() {
		$(".x").stop(true, true).animate({left:570,opacity:0}, 400)
		$(".y").stop(true, true).animate({left:-80,opacity:0}, 400)
	});

//-------------------------------------topz左右移动
	$(".x").click(function(){
		var s = parseInt($(".htc1-left-top-img").css("left"));
		var left = s-500;
		$(".htc1-left-top-img").animate({"left":left+"px"}, 400);
		
		if(s <= -3000){
			$(".htc1-left-top-img").animate({"left":-500+"px"},0);

		}
		$(".htc1-left-bot-img img").first().animate({width:10}, 100,function(){
			$(".htc1-left-bot-img img").first().insertAfter($(".htc1-left-bot-img img").last());
			$(".htc1-left-bot-img img").last().css({width:150});
		});
		
		
	})
	$(".y").click(function(){
		var s1 = parseInt($(".htc1-left-top-img").css("left"));
		var left = s1+500;
		$(".htc1-left-top-img").animate({"left":left+"px"}, 400);
		if(s1 >= -500){
			$(".htc1-left-top-img").animate({"left":-3000+"px"},0);
		}
		$(".htc1-left-bot-img img").last().animate({width:10}, 0)
		$(".htc1-left-bot-img img").last().insertBefore($(".htc1-left-bot-img img").first())
		$(".htc1-left-bot-img img").first().animate({width:150}, 100)
		
	})
//---------------------------------	bot 左右移动
	$(".htc1-left-bot").hover(function() {
		$(".m").stop(true, true).animate({left:500,opacity:1}, 400)
		$(".z").stop(true, true).animate({left:30,opacity:1}, 400)
	}, function() {
		$(".m").stop(true, true).animate({left:600,opacity:0}, 400)
		$(".z").stop(true, true).animate({left:-70,opacity:0}, 400)
	});

	/*$(".m").click(function(){
		var s = parseInt($(".htc1-left-bot-img").css("left"));
		var left = s-150;
		$(".htc1-left-bot-img").animate({"left":left+"px"}, 400);
		
		if(s <= -300){
			$(".htc1-left-bot-img").animate({"left":0+"px"},0);

		}
		$("title").html(left)
	})
	$(".z").click(function(){
		var s1 = parseInt($(".htc1-left-bot-img").css("left"));
		var left = s1+150;
		$(".htc1-left-bot-img").animate({"left":left+"px"}, 400);
		
		if(s1 >= 0){
			$(".htc1-left-bot-img").animate({"left":-300+"px"},0);

		}
		$("title").html(left)
	})*/
//---------------------------------------小图的另一种做法
	$(".m").click(function(){
		var s = parseInt($(".htc1-left-top-img").css("left"));
		var left = s-500;
		$(".htc1-left-top-img").animate({"left":left+"px"}, 400);
		
		if(s <= -3000){
			$(".htc1-left-top-img").animate({"left":-500+"px"},0);

		}
		$(".htc1-left-bot-img img").first().animate({width:10}, 100,function(){
			$(".htc1-left-bot-img img").first().insertAfter($(".htc1-left-bot-img img").last());
			$(".htc1-left-bot-img img").last().css({width:150});
		});
		
	})
	$(".z").click(function(){
		var s1 = parseInt($(".htc1-left-top-img").css("left"));
		var left = s1+500;
		$(".htc1-left-top-img").animate({"left":left+"px"}, 400);
		if(s1 >= -500){
			$(".htc1-left-top-img").animate({"left":-3000+"px"},0);
		}
		$(".htc1-left-bot-img img").last().animate({width:10}, 0)
		$(".htc1-left-bot-img img").last().insertBefore($(".htc1-left-bot-img img").first())
		$(".htc1-left-bot-img img").first().animate({width:150}, 100)
	})
	//-----------------------------单击小图大图动
	$(".htc1-left-bot-img").find('.img1').click(function(){
		$(this).css({border:"solid 1px #f3f3f3"})
		$(this).siblings().css({border:"solid 0px #f3f3f3"})
		$(".htc1-left-top-img").animate({left:-500}, 400);
	})
	$(".htc1-left-bot-img").find('.img2').click(function(){
		$(this).css({border:"solid 1px #f3f3f3"})
		$(this).siblings().css({border:"solid 0px #f3f3f3"})
		$(".htc1-left-top-img").animate({left:-1000}, 400);
	})
	$(".htc1-left-bot-img").find('.img3').click(function(){
		$(this).css({border:"solid 1px #f3f3f3"})
		$(this).siblings().css({border:"solid 0px #f3f3f3"})
		$(this).siblings().css({border:"solid 0px #f3f3f3"})
		$(".htc1-left-top-img").animate({left:-1500}, 400);
	})
	$(".htc1-left-bot-img").find('.img4').click(function(){
		$(this).css({border:"solid 1px #f3f3f3"})
		$(this).siblings().css({border:"solid 0px #f3f3f3"})
		$(".htc1-left-top-img").animate({left:-2000}, 400);
	})
	$(".htc1-left-bot-img").find('.img5').click(function(){
		$(this).css({border:"solid 1px #f3f3f3"})
		$(this).siblings().css({border:"solid 0px #f3f3f3"})
		$(".htc1-left-top-img").animate({left:-2500}, 400);
	})
	$(".htc1-left-bot-img").find('.img6').click(function(){
		$(this).css({border:"solid 1px #f3f3f3"})
		$(this).siblings().css({border:"solid 0px #f3f3f3"})
		$(".htc1-left-top-img").animate({left:-3000}, 400);
	})

})


//---------------------------加载一堆img大图
$(function(){
	$.ajax({
		url: 'js/detail.json',
		type: 'GET',
		success:function(data){
			for(var i = 0; i < data.length; i++){
				if(data[i].id == 0){
					var html = "";
					for(var j = 0; j < data[i].img.length; j++){
						html += '<img src="'+data[i].img[j]+'" alt="" />'
					}
					$("#img").html(html);
				}
			}
		}
		
	});
	
})

//金  银  灰   手机选择
$(function(){
	$(".htc-right-1 a").hover(function() {
		$(this).css("textDecoration","underLine");
	}, function() {
		$(this).css({"textDecoration":"none"});
	});

	$(".htc-right-3").find('.p2').find('.a1').click(function(){
		$(this).css({border:"solid 2px #90be78"});
		$(this).find('span').css({display:"block"})
		$(this).siblings().css({border:"0"});
		$(this).siblings().find('span').css({display:"none"})
	}) 

	$(".htc-right-3").find('.p2').find('.a2').click(function(){
		$(this).css({border:"solid 2px #90be78"});
		$(this).find('span').css({display:"block"})
		$(this).siblings().css({border:"0"});
		$(this).siblings().find('span').css({display:"none"})
		//$(".htc1-left-top-img").find('.img1').css({"src":"/detail/M10h-grey-A(527).jpg"})
	}) 

	$(".htc-right-3").find('.p2').find('.a3').click(function(){
		$(this).css({border:"solid 2px #90be78"});
		$(this).find('span').css({display:"block"})
		$(this).siblings().css({border:"0"});
		$(this).siblings().find('span').css({display:"none"})
	}) 

//-------------------------------点选框  价格累加
	var s = true;
	var s1 = true;
	var s2 = true;
	var m = 4999;
	var m1 = 4999;
	$(".raise-bot-d1").find('.s3').click(function(){
		if(s == true){
			$(this).css({background: "url(img/detail/dui1.png)"});
			m += 599;
			m1 += 399;
			$(".raise-bot-d4").find('.p1').html("￥"+m+".00");
			$(".raise-bot-d4").find('.p2').html("￥"+m1+".00");
			s = false;
		}else{
			$(this).css({background: "url(img/detail/dui.png)"});
			m -= 99;
			m1 -= 59;
			$(".raise-bot-d4").find('.p1').html("￥"+m+".00");
			$(".raise-bot-d4").find('.p2').html("￥"+m1+".00");
			s = true;
		}
		
	})

	$(".raise-bot-d2").find('.s3').click(function(){
		if(s1 == true){
			$(this).css({background: "url(img/detail/dui1.png)"});
			m += 69;
			m1 += 29;
			$(".raise-bot-d4").find('.p1').html("￥"+m+".00");
			$(".raise-bot-d4").find('.p2').html("￥"+m1+".00");
			s1 = false;
		}else{
			$(this).css({background: "url(img/detail/dui.png)"});
			m -= 99;
			m1 -= 59;
			$(".raise-bot-d4").find('.p1').html("￥"+m+".00");
			$(".raise-bot-d4").find('.p2').html("￥"+m1+".00");
			s1 = true;
		}
		
	})

	$(".raise-bot-d3").find('.s3').click(function(){
		if(s2 == true){
			$(this).css({background: "url(img/detail/dui1.png)"});
			m += 99;
			m1 += 59;
			$(".raise-bot-d4").find('.p1').html("￥"+m+".00");
			$(".raise-bot-d4").find('.p2').html("￥"+m1+".00");
			s2 = false;
		}else{
			$(this).css({background: "url(img/detail/dui.png)"});
			m -= 99;
			m1 -= 59;
			$(".raise-bot-d4").find('.p1').html("￥"+m+".00");
			$(".raise-bot-d4").find('.p2').html("￥"+m1+".00");
			s2 = true;
		}
		
	})


//-----------------------------加价购 点击选择
	$(".raise-bot-d1 div").find('a').click(function(){
		$(this).find('span').css({display:"block"})
		$(this).css({border:"solid 2px #90be78"})
		$(this).siblings().css({border:"0"});
		$(this).siblings().find('span').css({display:"none"})
	})

	$(".raise-bot-d1 div").find('p').click(function(){
		$(this).find('span').css({display:"block"})
		$(this).css({border:"solid 2px #90be78"})
		$(this).siblings().css({border:"0"});
		$(this).siblings().find('span').css({display:"none"})
	})
//---------------------产品介绍-------------------------------
	$(window).scroll(function(event){
		var st = $(document).scrollTop();
		if(st>=1575){
			$("#fd").css({width:"100%",position:"fixed",zIndex: 12,top:0,left: 0})

		}else{
			$("#fd").css({width:"100%",position:"relative",zIndex: 0,top: 0,left: 0})
		}
		
	})

	for(var j = 0; j < $(".fd-d1 p").length; j++){
		$(".fd-d1 p").eq(j).hover(function() {
			$(this).css({background:"#f3f3f3"})
		}, function() {
			$(this).css({background:"#fff"})
		});

		$(".fd-d1 p").eq(j).click(function(){
			
			$(this).unbind('mouseleave')
			$(this).unbind('mouseenter')
			$(this).css({color:"#fff"})
			$(this).css({background:"#373737"})
			$(this).siblings().css({background:"#fff",color:"#787878"})
			$(this).siblings().hover(function() {
			$(this).css({background:"#f3f3f3"})
			}, function() {
				$(this).css({background:"#fff"})
			});
		})
	}

	$(".fd-d1-p2").click(function(){
		$("#zz1").css({display:"block"})
		$('html').animate({scrollTop:1575},1000);
		$("#zz").css({display:"none"})
		$("#zz2").css({display:"none"})
		$("#zz3").css({display:"none"})	
		
		

	})
	$(".fd-d1-p3").click(function(){
		$("#zz2").css({display:"block"})
		$('html').animate({scrollTop:1575},1000);
		$("#zz").css({display:"none"})
		$("#zz1").css({display:"none"})
		$("#zz3").css({display:"none"})	
		
	})
	$(".fd-d1-p4").click(function(){
		$("#zz3").css({display:"block"})
		$('html').animate({scrollTop:1575},1000);
		$("#zz").css({display:"none"})
		$("#zz1").css({display:"none"})
		$("#zz2").css({display:"none"})	
		
	})
	$(".fd-d1-p1").click(function(){
		$("#zz").css({display:"block"})
		$('html').animate({scrollTop:1575},1000);
		$("#zz2").css({display:"none"})
		$("#zz1").css({display:"none"})
		$("#zz3").css({display:"none"})	

	})
	
})

//---------------------加入购物车
$(function(){
	var mx = 0;
	$(".htc-right-4").find('.p2 a').click(function(){
		var first = $.cookie("goods") == null ? true:false;//判断cookie里有没有存过东西
		//alert($.cookie("goods"))
		var same = false;
		//如果第一次添加
		if(first){
			$.cookie("goods","[{id:1,num:1}]",{expires:7});
		}else{
			var str = $.cookie("goods");
			var arr = eval(str);
			for(var i in arr){
				if(arr[i].id == 1){
					//alert(arr[i].id)
					arr[i].num++;
					var cookieStr = JSON.stringify(arr);
					$.cookie("goods",cookieStr,{expires:7});
					same = true;
				}
			}
			if(!same){
				var obj = {id:1, num:1};
				arr.push(obj);
				var cookieStr = JSON.stringify(arr);
				$.cookie("goods",cookieStr);
			}
		}
		//--------------加入价格个cookie
		

	})
})
//-------------------------------------选择颜色和购物车想通
$(function(){
	$(".htc-right-3").find('.p2').find('.a1').click(function(){
		$.cookie("p1","炫光银",{expires:7});
	});
	$(".htc-right-3").find('.p2').find('.a2').click(function(){
		$.cookie("p1","夜光灰",{expires:7});
	});
	$(".htc-right-3").find('.p2').find('.a3').click(function(){
		$.cookie("p1","銮光金",{expires:7});
	});
})

