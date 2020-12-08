$("#newstotop").click(function(){
	$(window).scrollTop(0);
});

$("#prototop").click(function(){
	$("html").stop().animate({"scrollTop":"0"},1000);
});

$(window).scroll(function(){
	if($("html").scrollTop()>300)
	{
		$("#prototop").fadeIn();
	}
	else
	{
		$("#prototop").fadeOut();
	}
});

$(window).scroll(function(){
	if ($("html").scrollTop()>100)
	{
		$(".totopimg").stop().animate({"right":"64px"},800);
	}
	else
	{
		$(".totopimg").stop().animate({"right":"-64px"},800);
	}
});

$(".totopimg").click(function(){
	$("html").stop().animate({"scrollTop":"0"},800);
});

$(window).scroll(function(){
	if($("html").scrollTop()>200)
	{
		$(".aboutnav").stop().animate({
			"opacity":"1",
			"top":"0"
		},800);
	} 
	else
	{
		$(".aboutnav").stop().animate({
			"opacity":"0",
			"top":"-200"
		},800);
	}
});

$(window).scroll(function(){
	if ($("html").scrollTop()>200)
	{
		$(".navcolor").stop().animate({"opacity":"1"});
	}
	else
	{
		$(".navcolor").stop().animate({"opacity":"0"});
	}
});

/*產品介紹/媒體報導導覽列*/
var navtop=$(".pronav,.newsnav").offset().top;
$(window).scroll(function(){
	if ($("html").scrollTop()>navtop)
	{
		$(".pronav,.newsnav").css("position","fixed");
	}
	else
	{
		$(".pronav,.newsnav").css("position","relative");
	}
});

/*媒體報導-點圖放大*/
$("#n01").click(function(e){
	$("#news01").fadeIn(500);
	e.preventDefault()
});

$(".nimg").click(function(){
	var newstarget=$(this).data("newstarget");
	$(newstarget).fadeIn(500);
});

$(".closescr").click(function(e){
	$(this).parent().fadeOut(500);
	e.preventDefault()
});

$(".bgsrc").click(function(){
	$(this).fadeOut(500);
});

/*$(document).keydown(function(){
	$(".bgsrc").fadeOut(500);
});*/

$(document).keydown(function(e){
	if(e.keyCode===27)
	{
		$(".bgsrc").fadeOut(500);
	}
});