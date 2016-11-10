
//----------------------top鼠标的移入移除事件
$(function(){

	var timer = null;
	var timer1 = null;
	$(".top-con-d2-li2").hover(function() {
		$("#nav").css({zIndex:-2});
		$(this).css({background:"#f6f6f6"})
		$(".top-con-d2-li2 span").css("background","url(img/sjx.jpg)")
		$(".top-con-d2-li2 a").css("color","#a5cf4c")
		$(".top-con-d5").css({display:"block"})
		setTimeout(function(){
			$(".top-con-d5").animate({top:100}, 400,function(){
				$(".top-con-d5").css({zIndex:1})
			})	
		},400)

	}, function() {
		timer = setTimeout(function(){
			$("#nav").css({zIndex:0});
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
			clearTimeout(timer);
			$("#nav").css({zIndex:-2});
			$(".top-con-d5").css({display:"block",zIndex:1})
			$(".top-con-d2-li2").css({background:"#f6f6f6"})
			$(".top-con-d2-li2 span").css("background","url(img/sjx.jpg)")
			$(".top-con-d2-li2 a").css("color","#a5cf4c")
		})

	$(".top-con-d5").mouseleave(function(){
		timer1 = setTimeout(function(){
			$("#nav").css({zIndex:0});
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


//-------------json加载的所有数据
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

//---------------------------id == 1 全部手机下拉

				if(data[i].id == 1){  
					var html = "";
					var html1 = "";
					html = '<a href="#">'+data[i].a+'</a>';
					$(".nav-con-div2-d1").html(html);

//-----------------------全部商品下拉里的引入和效果

					$(".nav-con-div2-d1 a").css({color:"#428bca",fontSize:12,marginLeft:22,lineHeight:5});
					for(var j = 0; j < data[i].bot.length; j++){
						html1 += '<dl class = "nav-con-div2-d2-dl'+(j+1)+'"><dt><img src="'+data[i].bot[j].img+'" alt="" /></dt><dd><span></span>'+data[i].bot[j].p+'</dd></dl>'
					}
					$(".nav-con-div2-d2").html(html1);

//-----------------------------botttom变颜色

					$(".nav-con-div2-d2 dl dt").hover(function() {
						$(this).css({borderBottom:"solid 1px #90be78"});
						$(this).css("background","#e8e9e9")
					}, function() {
						$(this).css({borderBottom:"solid 1px #666"});
						$(this).css("background","")
					});

//-----------------------下面的bottom变颜色

					$(".nav-con-div2-d2 dl dd").hover(function() {
						$(this).css({borderBottom:"solid 1px #90be78"});
						$(this).css("background","#e8e9e9")
					}, function() {
						$(this).css({borderBottom:"solid 1px #666"});
						$(this).css("background","")
					});
				}
//---------------------------id == 2 配件下拉
				if(data[i].id == 2){ 
					var html = "";
					var html1 = "";
					html = '<a href="#">'+data[i].a+'</a>';
					$(".nav-con-div3-d1").html(html);

//---------------------全部商品下拉里的引入和效果

					$(".nav-con-div3-d1 a").css({color:"#428bca",fontSize:12,marginLeft:450,lineHeight:5});  //a的位置
					for(var j = 0; j < data[i].bot.length; j++){
						html1 += '<dl class = "nav-con-div3-d2-dl'+(j+1)+'"><dt><img src="'+data[i].bot[j].img+'" alt="" /></dt><dd><span></span>'+data[i].bot[j].p+'</dd></dl>'
					}
					$(".nav-con-div3-d2").html(html1);

//-----------------------------botttom变颜色

					$(".nav-con-div3-d2 dl dt").hover(function() {
						$(this).css({borderBottom:"solid 1px #90be78"});
						$(this).css("background","#e8e9e9")
					}, function() {
						$(this).css({borderBottom:"solid 1px #666"});
						$(this).css("background","")
					});

//---------------------下面的bottom变颜色

					$(".nav-con-div3-d2 dl dd").hover(function() {
						$(this).css({borderBottom:"solid 1px #90be78"});
						$(this).css("background","#e8e9e9")
					}, function() {
						$(this).css({borderBottom:"solid 1px #666"});
						$(this).css("background","")
					});
				}
//---------------整个左侧右侧的json的加载
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
				if(data[i].id == 8){  //展示1  ul1 的加载
					var html = "";
					for(var j = 0; j < data[i].ul1.length; j++){
						html += '<li><div></div><img src="'+data[i].ul1[j].img+'" alt="" /><p>'+data[i].ul1[j].p+'</p><h3>'+data[i].ul1[j].h3+'</h3><a>'+data[i].ul1[j].a+'</a></li>'
					}
					$(".link-con-showone-Carousel-div1 ul").html(html);


					
						//自动滚动
						var timer = null;
						timer = setInterval(function(){
						var t = parseInt($(".link-con-showone-Carousel-div1").css("left"));
							if(t <= -2300){
								$(".link-con-showone-Carousel-div1").css("left","0px")
								t = 0;
							}						
							$(".link-con-showone-Carousel-div1").animate({left:(t-1151)}, 2000)
													
						},6000)
						//左点击移动
						var s1 = true;
						$(".link-con-showone-button p").stop(true,true).click(function(){
							if(s1 == true){
								s1=false;
								clearInterval(timer);
								var t = parseInt($(".link-con-showone-Carousel-div1").css("left"));
								if(t <= -2300){
									$(".link-con-showone-Carousel-div1").css("left","0px")
									t = 0;
								}						
								$(".link-con-showone-Carousel-div1").animate({left:(t-1152)}, 1000,function(){
									s1 = true;
									timer = setInterval(function(){
									var t = parseInt($(".link-con-showone-Carousel-div1").css("left"));
										if(t <= -2300){
											$(".link-con-showone-Carousel-div1").css("left","0px")
											t = 0;
										}						
										$(".link-con-showone-Carousel-div1").animate({left:(t-1151)}, 2000)
															
									},6000)
								})
							}
						})
//-------------展示一  右点击移动
						
						var s = true;
						$(".link-con-showone-button span").stop(true,true).click(function(){

							if(s == true){
								s =false;
								clearInterval(timer);
								var t = parseInt($(".link-con-showone-Carousel-div1").css("left"));
								
								if(t >= 0){
									$(".link-con-showone-Carousel-div1").css("left","-2304px")
									t = -2304;
								}						
								$(".link-con-showone-Carousel-div1").animate({left:(t+1152)}, 1000,function(){
									timer = setInterval(function(){
									var t = parseInt($(".link-con-showone-Carousel-div1").css("left"));
										if(t <= -2300){
											$(".link-con-showone-Carousel-div1").css("left","0px")
											t = 0;
										}						
										$(".link-con-showone-Carousel-div1").animate({left:(t-1151)}, 2000)
														
									},6000)
									s = true;
								})
							}
						})

//--------------------------移入变色p  span
						$(".link-con-showone-button span").hover(function() {
							$(this).css("background","#f3f3f3")
						}, function() {
							$(this).css("background","#fff")
						});
						$(".link-con-showone-button p").hover(function() {
							$(this).css("background","#f3f3f3")
						}, function() {
							$(this).css("background","#fff")
						});
						
//-------------移动停止，，变色 ，，变大变小

						$(".link-con-showone-Carousel-div1 ul img").hover(function() {
							$(this).stop(true).animate({width:270,height:280,top:110,marginLeft:35},300);
							
						}, function() {
							$(this).stop(true).animate({width:260,height:270,top:116,marginLeft:40},300)
						});
						$(".link-con-showone-Carousel-div1 ul li").hover(function() {
							$(this).find('div').stop(true).animate({width:"374",height:"404",top:"4",marginLeft:"4"}, 300);
							clearInterval(timer);
						}, function() {
							$(this).find('div').stop(true).animate({width:"382",height:"412",top:"0",marginLeft:"0"}, 0);
								timer = setInterval(function(){
								var t = parseInt($(".link-con-showone-Carousel-div1").css("left"));
									if(t <= -2300){
										$(".link-con-showone-Carousel-div1").css("left","0px")
										t = 0;
									}						
									$(".link-con-showone-Carousel-div1").animate({left:(t-1151)}, 2000)
														
								},6000)
						}); 
				}
//--------------------------------------------------------
				if(data[i].id == 9){
					var html = "";
					$(".link-con-showtwo-Carousel p").html(data[i].p);
					for(var j = 0; j < data[i].img.length; j++){
						html += '<img src="'+data[i].img[j]+'" alt="" />'
					}
					$(".link-con-showtwo-Carousel div").html(html);
					$(".link-con-showtwo-Carousel div img").hover(function() {
						$(this).stop(true,true).animate({opacity:0.6}, 400)
					}, function() {
						$(this).stop(true,true).animate({opacity:1},400)
					});
				}
//---------------------------------------------------------
				if(data[i].id == 10){
					var html = "";
					var html1 = "";
					var html2 = "";
					for(var j = 0; j < data[i].h3.length;j++){
						$(".link-con-showthree-Carousel-d"+(j+1)+" h3").html(data[i].h3[j]);
					}
					for(var k = 0; k < data[i].meatl.length; k++){
						html += '<li class = "li'+(k+1)+'"><img src="'+data[i].meatl[k].img+'" alt="" /><p>'+data[i].meatl[k].p+'</p><a>'+data[i].meatl[k].a+'</a><span>'+data[i].meatl[k].span+'</span><div class = "div"></div></li>';
					}
					for(var l = 0; l < data[i].brier.length; l++){
						html1 += '<li class = "li'+(l+1)+'"><img src="'+data[i].brier[l].img+'" alt="" /><p>'+data[i].brier[l].p+'</p><a>'+data[i].brier[l].a+'</a><span>'+data[i].brier[l].span+'</span><div class = "div"></div></li>';
					}
					for(var m = 0; m < data[i].fad.length; m++){
						html2 += '<li class = "li'+(m+1)+'"><img src="'+data[i].fad[m].img+'" alt="" /><p>'+data[i].fad[m].p+'</p><a>'+data[i].fad[m].a+'</a><span>'+data[i].fad[m].span+'</span><div class = "div"></div></li>';
					}
					$(".link-con-showthree-Carousel-d1 ul").html(html);
					$(".link-con-showthree-Carousel-d2 ul").html(html1);
					$(".link-con-showthree-Carousel-d3 ul").html(html2);	
					
					$(".link-con-showthree-Carousel img").hover(function() {
						$(this).stop(true).animate({width:245,height:199,marginTop:33,marginLeft:23},300);
						
					}, function() {
						$(this).stop(true).animate({width:230,height:189,marginTop:38,marginLeft:30},300)
					});
					$(".link-con-showthree-Carousel ul li").hover(function() {
						$(this).find('.div').stop(true).animate({width:"277",height:"343",top:"5",marginLeft:"4"}, 300)
					}, function() {
						$(this).find('.div').stop(true).animate({width:"285",height:"352",top:"1",marginLeft:"0"}, 0)
					});
					
				}
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



					$("img").click(function(){   
//----------点击图片后发送跳转到指定页面的事件。
					    window.location.href="http://10.9.160.91/project/total.html";  
					})

				}
				
			}
		}
	
	});
});

//------------------nav 移入事件和移除事件  所有li
$(function(){
	var sum = $(".nav-con ul li");
	var ss = $(".nav-con ul li a")
	for(var i = 1; i < sum.length; i++){
		
		$(".nav-con ul li").eq(i).hover(function() {
			$(this).css({background:"#cdba97",borderBottom:"1px solid #cdba97"})
			$(this).find("a").css("color","#000")
		}, function() {
			$(this).css({background:"#000",borderBottom:"1px solid #000"})
			$(this).find("a").css("color","#d4c7af")
			$(".nav-con-li3 a").css("color","#c45900")
			$(".nav-con-li4 a").css("color","#c45900")
		});
	}

//---------div5 和 div6  的移入显示  和移除隐藏
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
			$(".nav-con-li5").css({background:"#000",borderBottom:"1px solid #000"})
			$(".nav-con-li5").find("a").css("color","#d4c7af")
		});
		timer = setTimeout(function(){  //延时隐藏
			$(".nav-con-li5 span").css("display","none")
			$(".nav-con-div2").css("display","none");			
		},30)
	});


//-------div6 的移入显示  和移除隐藏

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
			$(".nav-con-li6").css({background:"#000",borderBottom:"1px solid #000"})
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
$(function(){
	var timer = null;
	var s = 0;
	/*$.ajax({
		url: 'js/store.json',
		type: 'GET',
		success:function(data){
		    for(var i = 0; i < data.length; i++){
		    	if(data[i].id == 12){
		    		var html = "";
		    		for(var j = 0; j < data[i].img.length; j++){
		    			html += '<img src="'+data[i].img[j]+'" alt=""/><p class="p'+(j+1)+'"></p>'
		    		}
		    		$("#banner").html(html)
		    	}
		    }
		}
	});
	*/
	setInterval(function(){
		$(".banner-con p").eq(s).css("background","#555055")
		$(".banner-con p").eq(s).siblings().css("background","#465b2c")
		$(".banner-con img").first().animate({width:0,height:500}, 1000,function(){
			s++;
			if(s>1){
				s=0;
			}			
			$(".banner-con img").first().insertAfter($(".banner-con img").last());
			$(".banner-con img").last().css("width","1920")
		});
	}, 4000)
		
})
