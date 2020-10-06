
// JavaScript Document

$(function() { 
	
if(m1 == 0) { 
	$(window).scroll(function() { 
		var winSctop = $(window).scrollTop();
		var sub01offsetTop = $(".sub_01").offset().top;
		console.log(winSctop);
		console.log(sub01offsetTop - 400);
		
		if(winSctop > 950) { 
			$('.main header .header_inner').addClass("on");
			
		}else{
			$('.main header .header_inner').removeClass("on");
			
		}
	});
	
		

	
	
	$(window).scroll(function() { 
		var winSctop = $(window).scrollTop();
		var sub06offsetTop = $(".sub_02").offset().top;
		console.log(winSctop);
		console.log(sub06offsetTop - 400);
		
		if(winSctop > sub06offsetTop- 500) { 
			$('.sub_02 .txt_set').addClass("act");
		} else if(winSctop < 5000) { 
			$('.sub_02 .txt_set').removeClass("act");
		}
		
	});
	
		
	$(window).scroll(function() { 
		var winSctop = $(window).scrollTop();
		var sub02offsetTop = $(".sub_02").offset().top;
		console.log(winSctop);
		console.log(sub02offsetTop - 400);
		
		if(winSctop > sub02offsetTop- 500) { 
			$('.sub_02 .img_set').addClass("act");
		} else if(winSctop < 5000) { 
			$('.sub_02 .img_set').removeClass("act");
		}
		
	});
	
	$('.sub_01 .txtset p > .ty1').hover(
		function(){
			$('.sub_01 .imgset img.cumunicate').addClass("on");
			$('.sub_01 .imgset img.under').addClass("on");
		},
		function(){
			$('.sub_01 .imgset img.cumunicate').removeClass("on");
			$('.sub_01 .imgset img.under').removeClass("on");
			
		}
		
	);
	
	$('.sub_01 .txtset p > .ty3').hover(
		function(){
			$('.sub_01 .imgset img.marketing').addClass("on");
			$('.sub_01 .imgset img.under').addClass("on");
		},
		function(){
			$('.sub_01 .imgset img.marketing').removeClass("on");
			$('.sub_01 .imgset img.under').removeClass("on");
			
		}
	
	);
	
		$('.sub_01 .txtset p > .ty2').hover(
		function(){
			$('.sub_01 .imgset img.creative').addClass("on");
			$('.sub_01 .imgset img.under').addClass("on");
		},
		function(){
			$('.sub_01 .imgset img.creative').removeClass("on");
			$('.sub_01 .imgset img.under').removeClass("on");
			
		}
	
	);
}		
	var portItemLeng = 18;
	var portString = "";
	for(var i = 0; i<portItemLeng; i++) { 
		portString += 
			'<li>' +
			'<a href="">' +
				'<span class="item_title"></span>' +
				'<span class="item_info"></span>' +
				'<span class="item_number"></span>' +
			'</a>' +
			'</li>';
	}
	
	$('.all').append(portString);
	/* 데이터 배열  */
	var itemDataInfo = { 
		linkArr : 
		["./work_in.html","bbb.html","aaa.html","bbb.html","aaa.html","bbb.html","aaa.html","bbb.html","aaa.html","bbb.html","aaa.html","bbb.html","aaa.html","bbb.html"],
		itemDataArr : ["EDITORIAL","EDITORIAL","EDITORIAL","EDITORIAL","EDITORIAL","EDITORIAL","EDITORIAL","EDITORIAL","EDITORIAL","EDITORIAL","EDITORIAL","EDITORIAL","EDITORIAL","EDITORIAL","EDITORIAL","EDITORIAL","EDITORIAL","EDITORIAL", ],
		itemInfoArr : [
				"대구국제재즈페스티벌",
				"대구국제재즈페스티벌",
				"대구국제재즈페스티벌",
				"대구국제재즈페스티벌",
				"대구국제재즈페스티벌",
				"대구국제재즈페스티벌",
				"대구국제재즈페스티벌",
				"대구국제재즈페스티벌",
				"대구국제재즈페스티벌",
				"대구국제재즈페스티벌",
				"대구국제재즈페스티벌",
				"대구국제재즈페스티벌",
				"대구국제재즈페스티벌",
				"대구국제재즈페스티벌",
				"대구국제재즈페스티벌",
				"대구국제재즈페스티벌",
				"대구국제재즈페스티벌",
				"대구국제재즈페스티벌",
		],
		itemNumberArr : [
				"2019. 05",
				"2019. 05",
				"2019. 05",
				"2019. 05",
				"2019. 05",
				"2019. 05",
				"2019. 05",
				"2019. 05",
				"2019. 05",
				"2019. 05",
				"2019. 05",
				"2019. 05",
				"2019. 05",
				"2019. 05",
				"2019. 05",
				"2019. 05",
				"2019. 05",
				"2019. 05",
				],

	
		
	};
	/* //데이터 배열  */

	for(var z in itemDataInfo.itemDataArr) { 
		$('.all > li').eq(z).find("> a").attr("href", itemDataInfo.linkArr[z]);
		$('.all > li').eq(z).find(".item_title").text(itemDataInfo.itemDataArr[z]);
		$('.all > li').eq(z).find(".item_info").text(itemDataInfo.itemInfoArr[z]);
		$('.all > li').eq(z).find(".item_number").text(itemDataInfo.itemNumberArr[z]);
		
	}
	
});


