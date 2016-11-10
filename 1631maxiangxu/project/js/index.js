

//top
$(function(){

	$(".top-li2").hover(function() {

		$(this).css("background","#f6f6f6");
		$(".top-li2 a").css("color","#a5cf4c");
		$(".top-span1").css("background","url(img/sjx.jpg) no-repeat")
		
		$(".top-down").finish().animate({
			top: 100,},
			100, function() {
		})	
	}, function() {
		$(this).css("background","#fff");
		$(".top-span1").css("background","url(img/sjs.jpg) no-repeat")
		$(".top-li2 a").css("color","#666");
	
		$(".top-down").css("top","-240px")
	})


	$(window).scroll(function(event) {
		var st = $(document).scrollTop();
		 if(st >= 40){
		 	$("#top").css({width:60,position:"fixed"})
		 	$(".top-form").css({"display":"none"});
			$(".top-ul2").css({top:32});
			$(".top-con").css({height:76})
		 	$(".top-ad").css({"display":"none"});
		 /*	$(".top-down").css({top:-215});*/
		 	$(".top-ul1 a").css({top:27})
		 	$(".top-ul1").css({height:75});
		 	$(".top-ul1 li").css({height:76})
		 	$("top-down").css("height","215")
		 	$(".top-down-right").css({height:290})
		 	$(".top-down-left").css({height:290})


					 	
				$(".top-li2").hover(function() {

					$(this).css("background","#f6f6f6");
					$(".top-li2 a").css("color","#a5cf4c");
					$(".top-span1").css("background","url(img/sjx.jpg) no-repeat")
					
					$(".top-down").finish().animate({
						top: 70},
						100, function() {
					})	
				}, function() {
					$(this).css("background","#fff");
					$(".top-span1").css("background","url(img/sjs.jpg) no-repeat")
					$(".top-li2 a").css("color","#666");
				
					$(".top-down").css("top","-240px")
				})














		 }else
		 if(st < 40){
		 	$("#top").css({width:60,position:"relative"})
		 	$(".top-form").css({"display":"block"});
			$(".top-ul2").css({top:24});
			$(".top-con").css({height:100})
		 	$(".top-ad").css({"display":"block"});
		 	/*$(".top-down").css({top:-215});*/
		 	$(".top-ul1 a").css({top:50})
		 	$(".top-ul1").css({height:100});
		 	$(".top-ul1 li").css({height:100})
		 	
		 	$(".top-down-right").css({height:315})
		 	$(".top-down-left").css({height:315})
		 	
		 		$(".top-li2").hover(function() {

					$(this).css("background","#f6f6f6");
					$(".top-li2 a").css("color","#a5cf4c");
					$(".top-span1").css("background","url(img/sjx.jpg) no-repeat")
					
					$(".top-down").finish().animate({
						top: 100},
						100, function() {
					})	
				}, function() {
					$(this).css("background","#fff");
					$(".top-span1").css("background","url(img/sjs.jpg) no-repeat")
					$(".top-li2 a").css("color","#666");
				
					$(".top-down").css("top","-215px")
				})
		 	$(".top-ad a").css("left","1200")
		 }
	});	
});

//banner

$(function(){  // banner图
	var i = 0;//自动用
	var j = 0;//小方块用
	var timer = setInterval(function(){
		
		//判断到最后一张回到第一张
		if(i == 6){
			$(".banner-con").css("left","0px");
			i = 0;
		}
		j++;
		i++;
		var left = -1245*i
			$(".banner-con").animate({"left":left}, 600);
		if(j == 6){
			j=0;
		}
		$(".banner-ul li").eq(j).addClass('banner-ul-cur').siblings('li').removeClass('banner-ul-cur');
		
		
	},5000)

//单击小方块切换图片
	
	$(".banner-ul li").click(function(){
		clearInterval(timer);
		i = $(this).index();
		var left = -1245+(-1245*i)
			$(".banner-con").animate({"left":left}, 400);
			$(".banner-ul li").eq(i).addClass('banner-ul-cur').siblings('li').removeClass('banner-ul-cur');

	})
//点击左箭头切换
		
		var s = true;
		
		$("#banner .banner-pleft").stop().click(function(){
			clearInterval(timer);
			if(s == true){
				s = false;
					var left = parseInt($(".banner-con").css("left"));
					$(".banner-con").stop().animate({"left":left+1245}, 600,function(){
						s = true;
						//alert(s)
						if(parseInt($(".banner-con").css("left")) >= 0){
							
							$(".banner-con").css("left","-7470px");
						}
						//小方块跟着动
						i--;
						if(i == -1){
							i = 5;
						}
						$(".banner-ul li").eq(i).addClass('banner-ul-cur').siblings('li').removeClass('banner-ul-cur');
					});
				}
			})
	
//点击右箭头切换
		var s1 = true;
		$("#banner .banner-pright").finish().click(function(){
			clearInterval(timer);
			if(s1 == true){
				s1 = false;
				
				var left = parseInt($(".banner-con").css("left"));
				$(".banner-con").finish().animate({"left":left-1245}, 600,function(){
					s1 = true;
					if(parseInt($(".banner-con").css("left")) <= -7470){
						
						$(".banner-con").css("left","0px");
					}
					i++;
					if(i == 6){
						i = 0;
					}
					$(".banner-ul li").eq(i).addClass('banner-ul-cur').siblings('li').removeClass('banner-ul-cur');
				});
			}
			
		})

//第一张图片的内容
	$("#banner .banner-con .banner-con-yi-pro .banner-con-yi-pro-a1").hover(function() {
		$("#banner .banner-con .banner-con-yi-pro .banner-con-yi-pro-a1").css({"color":"#000","background":"#f1e7c5"})
		$("#banner .banner-con .banner-con-yi-pro p").css("cursor","pointer")
	}, function() {
		$("#banner .banner-con .banner-con-yi-pro .banner-con-yi-pro-a1").css({"color":"#f1e7c5","background":0})
	});
	$("#banner .banner-con .banner-con-yi-pro p").mouseover().css("cursor","default")

//第3张图的内容
	$(".banner-con-four a").mouseover(function(event) {
		$(this).css("color","#000")
	});
	$(".banner-con-four a").mouseout(function(event) {
		$(this).css("color","#fff")
	});
	
//第四章图片效果
	$(".banner-con-five a").mouseover(function(event) {
		$(this).css("color","#000")
	});
	$(".banner-con-five a").mouseout(function(event) {
		$(this).css("color","#fff")
	});


//左箭头
	$(".banner-pleft").mouseover(function(event) {
		$(".banner-pleft img").css("opacity","0.3");
	});
	$(".banner-pleft").mouseout(function(event) {
		$(".banner-pleft img").css("opacity","01");
	});


//右箭头
	$(".banner-pright").mouseover(function(event) {
		$(".banner-pright img").css("opacity","0.3");
	});
	$(".banner-pright").mouseout(function(event) {
		$(".banner-pright img").css("opacity","01");
	});
});
//reveal
$(function(){
	//添加图片
	$.ajax({
		url:"js/reveal.json",
		type:"GET",
		success:function(data){
			//alert(data)
		/*	var li = $("<li  class="reveal-con-ul-li1"></li>");
			var li = $("<li  class="reveal-con-ul-li2"></li>");
			var li = $("<li  class="reveal-con-ul-li3"></li>");*/
			var html = "";
			for(var i = 0; i < data.length; i++){
				html +='<li class="reveal-con-ul-li' + (i+1) + '"><img src="'+data[i].img+'" alt="" /><p>'+data[i].p+'</p><a>'+data[i].a+'</a></li>'}
			$(".reveal-con-ul").html(html);


				//给图片添加效果
			$(".reveal-con-ul-li1").hover(function() {
				$(".reveal-con-ul-li1").css("opacity","0.7");
			}, function() {
				$(".reveal-con-ul-li1").css("opacity","1");
			});
			$(".reveal-con-ul-li2").hover(function() {
				$(".reveal-con-ul-li2").css("opacity","0.7");
			}, function() {
				$(".reveal-con-ul-li2").css("opacity","1");
			});
			$(".reveal-con-ul-li3").hover(function() {
				$(".reveal-con-ul-li3").css("opacity","0.7");
			}, function() {
				$(".reveal-con-ul-li3").css("opacity","1");
			});


		}
		
		
	});
	
});

//buy
$(function(){
	$.ajax({
		url:"js/buy.json",
		type:"GET",
		success:function(data){
			
			for(var i = 0; i < data.length; i++){
					if(data[i].id == i){
					$(".buy-con-div-"+(i+1)+"").html('<img src="'+data[i].img+'" alt="" /><p>'+data[i].p+'</p><a>'+data[i].a+'</a><h3>'+data[i].ai+'</h3>');
					
				}
		}
			//第一个换个图片效果
			$(".buy-con-div-1").hover(function() {
				$(".buy-con-div-1").html('<img src="img/htc-10-global-glacier-silver-buy-back.png"/><p>HTC 10</p><a>立即购买</a>');
			}, function() {
				$(".buy-con-div-1").html('<img src="img/htc-10-global-whitesilver-front-buy.png"/><p>HTC 10</p><a>立即购买</a>');
			});




			//第二个效果 ==闪烁一下
			$(".buy-con-div-2").stop(true,true).hover(function() {
				$(".buy-con-div-2 img").css("width","112").fadeTo(50,0.5).fadeTo(50,1,function(){
					$(this).css("width","115");
				});
			}, function() {
				$(".buy-con-div-2 img").css("width","112").fadeTo(50,0.5).fadeTo(50,1,function(){
					$(this).css("width","115");
				});
			})
			//第二个效果 ==闪烁一下 结束
			////第三个效果 ==闪烁一下
			$(".buy-con-div-3").stop(true,true).hover(function() {
				$(".buy-con-div-3 img").css("width","112").fadeTo(50,0.5).fadeTo(50,1,function(){
					$(this).css("width","115");
				});
			}, function() {
				$(".buy-con-div-3 img").css("width","112").fadeTo(50,0.5).fadeTo(50,1,function(){
					$(this).css("width","115");
				});
			})
			//第三个效果 ==闪烁一下 结束
			////第四个效果 ==闪烁一下
			$(".buy-con-div-4").stop(true,true).hover(function() {
				$(".buy-con-div-4 img").fadeTo(50,0.5).fadeTo(50,1);
			}, function() {
				$(".buy-con-div-4 img").fadeTo(50,0.5).fadeTo(50,1);
			})
			//第四个效果 ==闪烁一下 结束
			////第五个效果 ==闪烁一下
			$(".buy-con-div-5").stop(true,true).hover(function() {
				$(".buy-con-div-5 img").fadeTo(50,0.5).fadeTo(50,1);
			}, function() {
				$(".buy-con-div-5 img").fadeTo(50,0.5).fadeTo(50,1);
			})
			//第五个效果 ==闪烁一下 结束
			//
			//
			//第二个a标签效果
			$(".buy-con-div-2 a").hover(function() {
				$(this).css({background:"#333",color:"#fff"})
			}, function() {
				$(this).css({background:"",color:"#333"})
			});
			//第二个a标签结束
			////第三个a标签效果
			$(".buy-con-div-3 a").hover(function() {
				$(this).css({background:"#333",color:"#fff"})
			}, function() {
				$(this).css({background:"",color:"#333"})
			});
			//第三个a标签结束
			////第四个a标签效果
			$(".buy-con-div-4 a").hover(function() {
				$(this).css({background:"#333",color:"#fff"})
			}, function() {
				$(this).css({background:"",color:"#333"})
			});
			//第四个a标签结束
			////第五个a标签效果
			$(".buy-con-div-5 a").hover(function() {
				$(this).css({background:"#333",color:"#fff"})
			}, function() {
				$(this).css({background:"",color:"#333"})
			});
			//第五个a标签结束
			
			//第一个a标签效果
			$(".buy-con-div-1 a").hover(function() {
				$(this).css({background:"#333",color:"#fff"})
			}, function() {
				$(this).css({background:"",color:"#333"})
			});
			//第一个a标签结束
			////第一个a标签效果
			$(".buy-con-a").hover(function() {
				$(this).css({background:"#333",color:"#fff"})
			}, function() {
				$(this).css({background:"",color:"#333"})
			});
			//第一个a标签结束
		}
	})
})


$(function(){
/*	$(".bottom-con-top-d2").toggle(
		function(){
			$(".bottom-con-top-d2").css("background-position","0px")
			$("#bottom").css("overflow","visible");	
			$(".bottom-con").animate({top:-387}, 1000);
		},
		function(){
			$(".bottom-con-top-d2").css("background-position","0px")
			$("#bottom").css("overflow","hidden");	
			$(".bottom-con").animate({top:0}, 1000);
		});
	*/
		var s = true;
		$(".bottom-con-top-d2").click(function(){
			//alert(s);
			if(s){
				//alert("a");
				$(".bottom-con-top-d2").css("background-position","-42px")
				$("#bottom").css("overflow","visible");
				$(".bottom-con").animate({height:412,top:-387},300,function(){
					s = false;
					//alert(s)
				})
				
			}else if(s == false){
				
				//alert("b");
				
				$(".bottom-con").animate({height:25,top:0},300,function(){
				s = true;
				$("#bottom").css("overflow","hidden");
				$(".bottom-con-top-d2").css("background-position","0px")	
				}
			)}
			
		}
	)
});