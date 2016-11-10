//----------------------------------------------------------
//top鼠标的移入移除事件
$(function(){
	var timer = null;
	var timer1 = null;
	$(".top-con-d2-li2").hover(function() {
		$("#nav").css({zIndex:-2});
		$("#show").css({zIndex:-3})
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
			$("#nav").css({zIndex:1});
			$("#show").css({zIndex:0})
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
			clearTimeout(timer);
			$(".top-con-d5").css({display:"block",zIndex:1})
			$(".top-con-d2-li2").css({background:"#f6f6f6"})
			$(".top-con-d2-li2 span").css("background","url(img/sjx.jpg)")
			$(".top-con-d2-li2 a").css("color","#a5cf4c")
		})

	$(".top-con-d5").mouseleave(function(){
		timer1 = setTimeout(function(){
			$("#nav").css({zIndex:1});
			$("#show").css({zIndex:0})
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


//---------------json加载的所有数据
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
//
				if(data[i].id == 1){ 
					var html = "";
					var html1 = "";
					html = '<a href="#">'+data[i].a+'</a>';
					$(".nav-con-div2-d1").html(html);

//-------------------全部商品下拉里的引入和效果
//
					$(".nav-con-div2-d1 a").css({color:"#428bca",fontSize:12,marginLeft:22,lineHeight:5});
					for(var j = 0; j < data[i].bot.length; j++){
						html1 += '<dl class = "nav-con-div2-d2-dl'+(j+1)+'"><dt><img src="'+data[i].bot[j].img+'" alt="" /></dt><dd><span></span>'+data[i].bot[j].p+'</dd></dl>'
					}
					$(".nav-con-div2-d2").html(html1);

//---------------------botttom变颜色

					$(".nav-con-div2-d2 dl dt").hover(function() {
						$(this).css({borderBottom:"solid 1px #90be78"});
						$(this).css("background","#e8e9e9")
					}, function() {
						$(this).css({borderBottom:"solid 1px #666"});
						$(this).css("background","")
					});

//------------------下面的bottom变颜色

					$(".nav-con-div2-d2 dl dd").hover(function() {
						$(this).css({borderBottom:"solid 1px #90be78"});
						$(this).css("background","#e8e9e9")
					}, function() {
						$(this).css({borderBottom:"solid 1px #666"});
						$(this).css("background","")
					});
				}

//------------------ id == 2 配件下拉--

				if(data[i].id == 2){ 
					var html = "";
					var html1 = "";
					html = '<a href="#">'+data[i].a+'</a>';
					$(".nav-con-div3-d1").html(html);

//------------------全部商品下拉里的引入和效果

					$(".nav-con-div3-d1 a").css({color:"#428bca",fontSize:12,marginLeft:450,lineHeight:5});  //a的位置
					for(var j = 0; j < data[i].bot.length; j++){
						html1 += '<dl class = "nav-con-div3-d2-dl'+(j+1)+'"><dt><img src="'+data[i].bot[j].img+'" alt="" /></dt><dd><span></span>'+data[i].bot[j].p+'</dd></dl>'
					}
					$(".nav-con-div3-d2").html(html1);

//------------------botttom变颜色

					$(".nav-con-div3-d2 dl dt").hover(function() {
						$(this).css({borderBottom:"solid 1px #90be78"});
						$(this).css("background","#e8e9e9")
					}, function() {
						$(this).css({borderBottom:"solid 1px #666"});
						$(this).css("background","")
					});

//-----------------下面的bottom变颜色

					$(".nav-con-div3-d2 dl dd").hover(function() {
						$(this).css({borderBottom:"solid 1px #90be78"});
						$(this).css("background","#e8e9e9")
					}, function() {
						$(this).css({borderBottom:"solid 1px #666"});
						$(this).css("background","")
					});
				}
//----------------整个左侧右侧的json的加载-----
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
//------------------------tt 的三个标题
				if(data[i].id == 7){ 
					var html = "";
					for(var j = 0; j < data[i].img.length;j++){
						html = '<img src="'+data[i].img[j]+'" alt="" />';
						$(".tt").eq(j).html(html);
					}
				}
//------------------------------------------------------
				
//------------------------------------------------------
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
//--------------给所有图片加链接
				/* $(".how-ul img").click(function(){
				 	window.location.href = "http://10.9.160.91/project/detail.html";
				 })*/
				//
			}
		}
	
	});
});

//---------------------nav 移入事件和移除事件  所有li

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

//-----------------div5 和 div6  的移入显示  和移除隐藏

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


//--------------------div6 的移入显示  和移除隐藏

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
	});//调用js  给div5 和div6 赋值

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

//-------------bottom 最下面加载的数据

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


//-------------bottom 的单击上下效果

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

//----------nav-con-li1 的移入移出事件  商品目录+
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


//---------------total.json的加载，图片文字
$(function(){
	$.ajax({
		url: 'js/total.json',
		type: 'GET',
		success:function(data){
			for(var i = 0; i < data.length; i++){

//---------------------------show-ul 是个图片

				if(data[i].id == 0){
					var html = "";
					for(var j = 0; j < data[i].tal.length; j++){
						html += '<li class = "show-ul-li'+(j+1)+'"><div></div><img src="'+data[i].tal[j].img+'" alt="" /><p>'+data[i].tal[j].p+'</p></li>';						
					}
				 $(".show-ul").html(html);
				 $(".show-ul li").hover(function() {
				 	$(this).find('div').css({width: 275,height: 126,marginTop:5,marginLeft:5})
				 	$(this).css("border","solid 1px #90be78")
				 }, function() {
				 	$(this).find('div').css({width: 285,height:137,marginTop:0,marginLeft:0})
				 	$(this).css("border","solid 1px #dfdfdf")
				 	$(".show-ul-li1").find("div").css({width:275,height:126,marginTop:5,marginLeft:5})
					$(".show-ul-li1").css("border","solid 1px #90be78")
				 });
				}

//-------------------------------价格筛选

				if(data[i].id == 1){
					var html = "";
					var html1 = "";
					var html2 = "";
					var html3 = "";
					for(var j = 0; j < data[i].p.length; j++){
						$(".ii p").eq(j).html(data[i].p[j]);
					}
					for(var k = 0; k < data[i].ul1.length; k++){
						html += '<li><div></div><a>'+data[i].ul1[k]+'</a></li>';
					}
					for(var l = 0; l < data[i].ul2.length; l++){
						html1 += '<li><div></div><a>'+data[i].ul2[l]+'</a></li>';
					}
					for(var m = 0; m < data[i].ul3.length; m++){
						html2 += '<li><div></div><a>'+data[i].ul3[m]+'</a></li>';
					}
					for(var n = 0; n < data[i].ul4.length; n++){
						html3 += '<li><div></div><a>'+data[i].ul4[n]+'</a></li>';
					}
					$(".show-two-ul1 ul").html(html);
					$(".show-two-ul2 ul").html(html1);
					$(".show-two-ul3 ul").html(html2);
					$(".show-two-ul4 ul").html(html3);
				}
				$(".show-two ul li").hover(function() {
					$(this).find("div").css({width:200,height:26,marginTop:3,marginLeft:3})
							}, function() {
					$(this).find("div").css({width:208,height:32,marginTop:0,marginLeft:0})
			
				});
				if(data[i].id == 2){
					var html = "";
					var html1 = "";
					for(var j = 0; j < data[i].p.length; j++){
						$(".oo p").html(data[i].p[j])
					}
					for(var k = 0; k < data[i].center.length; k++){
						html += '<li class = "li'+(k+1)+'"><div></div><img src="'+data[i].center[k].img+'" alt="" /><h2>'+data[i].center[k].h2+'</h2><a>'+data[i].center[k].a+'</a><h3>'+data[i].center[k].h3+'</h3><input type = "checkbox" /></li>';
					}
					$(".show-three-center ul").html(html);
					for(var l = 0; l < data[i].bot.length; l++){
						html1 +='<li class = "li'+(l+1)+'"><div></div><img src="'+data[i].center[l].img+'" alt="" /><h2>'+data[i].center[l].h2+'</h2><a>'+data[i].center[l].a+'</a><h3>'+data[i].center[l].h3+'</h3><input type = "checkbox" /></li>';
					}
					$(".show-three-bot ul").html(html1);

//------------------------------------center 的移入移出

					$(".oo ul li").hover(function() {
						$(this).find("div").stop(true).animate({width:275,height:337,marginTop:5,marginLeft:5}, 100)
					}, function() {
						$(this).find("div").stop(true).animate({width:285,height:347,marginTop:0,marginLeft:0}, 100)
					});
//-------------------------------------	给所有图片加链接

					 $("#show img").click(function(){
				 			window.location.href = "http://10.9.160.91/project/detail.html";
					 })				
				}

			}
		}
	});
	
})

//-----------中间尺寸选择的展开与合并
$(function(){
	var s = true;
	$(".show-two-top").stop(true,true).click(function(){
		if(s == true){
			$("#show").css("height","2170");
			$(".show-two").animate({height:328},300)
			$(".ii").css("display","block")
			$(".show-two-bot").css({zIndex:0})
			s = false;
		}else{
			$("#show").css("height","1846");
			$(".show-two").animate({height:33}, 300,function(){
				$(".show-two-bot").css({zIndex:-1})
			})
			$(".ii").css("display","none")
			s = true;
		}

	})
	$(".show-two-bot").stop(true,true).click(function(){
		$("#show").css("height","1846");
		$(".show-two").animate({height:33}, 300,function(){
			$(".show-two-bot").css({zIndex:-1})
		})
		$(".ii").css("display","none")
		s = true;
	})
})

//----------------------------右侧比较手机

$(function(){
	for(var i = 0; i < 3; i++){
		$(".show-three-top").find('.li'+(i+1)+'').hover(function() {
			$(this).css({background:"#f3f3f3"})
		}, function() {
			$(this).css({background:"#fff"})
		});
	}
	$(".show-three-top").find(".li4").hover(function() {
		$(this).css({background:"#6ccb3b",border:"solid 1px #5ce812"})
	}, function() {
		$(this).css({background: "#90be78",border:"solid 1px #90be78"})
	});

})