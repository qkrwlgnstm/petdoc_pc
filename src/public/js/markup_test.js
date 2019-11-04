$(document).ready(function(){
	$('.list_item a').click(function(e){
		$(this).parents('.list_item').toggleClass("show");
	})
	$('.menu_button').click(function(e){
        $('.layer_menu').addClass("show");
        $('body').css({overflow: "hidden"});
    })
	$('.btn_close').click(function(e){
        $('.layer_menu').removeClass("show");
        $('body').css({overflow: "inherit"});
    })
	$('.btn_banner_close').click(function(e){
		$('.header_banner').removeClass("show");
    })
    $('.category_box_area').click(function(e){
		$('.filter_area .dimmed').toggleClass("show");
    })
    $('.btn_recommend').click(function(e){
		$('.btn_recommend').toggleClass("show");
    })
    $('.btn_bookmark').click(function(e){
		$('.btn_bookmark').toggleClass("show");
    })
    $('.filter_box_area').click(function(e){
		$('.filter_box').toggleClass("show");
    })
    $('.btn_login').click(function(e){
		$('.layer_menu  .dimmed').toggleClass("show");
    })
    $('.btn_counseling').click(function(e){
		$('.dimmed').toggleClass("show");
    })
    $('.btn_write').click(function(e){
		$('.dimmed').toggleClass("show");
    })
    $('.btn_move_top').click(function(e){
        $('html, body').animate({scrollTop:0}, 'slow');
    })
    $('.search_header .search_box .input_text').keydown(function(e){
        $('.delete_button').addClass("show");
    })
    $('.like_area').click(function(e){
        $('.like_area').toggleClass("show");
    })
    $('.reply_input_area').click(function(e){
        $('.dimmed').toggleClass("show");
    })
    $('.btn_ly_cancle').click(function(e){
        $('.dimmed').removeClass("show");
    })
    $('.btn_close_login').click(function(e){
        $('.dimmed').removeClass("show");
    })
    $('.btn_change_information').click(function(e){
        $('.dimmed').toggleClass("show");
		$('.layer_menu  .dimmed').removeClass("show");
    })
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 105) {
        //console.log('a');
        $(".header").addClass("fixed_header");
    } else {
        //console.log('a');
        $(".header").removeClass("fixed_header");
    }
});
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});