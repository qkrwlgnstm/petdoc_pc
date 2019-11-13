$(document).ready(function(){
	$('.list_item a').click(function(e){
		$(this).parents('.list_item').toggleClass("show");
	})
	$('.common-btn-close').click(function(e){
		$('.header_banner').removeClass("show");
    })
    $('.search_box .input_text').click(function(e){
        $('.keyword_layer').toggleClass("show");
    })
    $('.search_box .input_text').keydown(function(e){
        $('.autocomplet_list').toggleClass("show");
		$('.keyword_layer').removeClass("show");
    })
    $('.category_box_area').click(function(e){
        $('.category_box_area').toggleClass("show");
        $('.layer_category').toggleClass("show");
    })
    $('.btn_site').click(function(e){
        $('.family_site_layer').toggleClass("show");
    })
    $('.common-btn-share').click(function(e){
        $('.share_layer').toggleClass("show");
    })
    $('.like_area').click(function(e){
        $('.like_area').toggleClass("show");
    })
    $('.btn_bookmark_area').click(function(e){
		$('.btn_bookmark_area').toggleClass("show");
		$('.bookmark_txt_area').toggleClass("show");
    })
    $('.common-btn-close').click(function(e){
		$('.dimmed ').toggleClass("show");
    })
    $('.btn_login_txt').click(function(e){
		$('.btn_login_txt ').toggleClass("show");
		$('.logout_layer  ').toggleClass("show");
    })
    $('.btn_recommend').click(function(e){
		$('.btn_recommend').toggleClass("show");
    })
    $('.common-btn-down').click(function(e){
        $('.floating_card').toggleClass("down");
        $('.floating_card').removeClass("show");
    })
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 407) {
        //console.log('a');
        $(".floating_card").addClass("show");
    } else {
        //console.log('a');
        $(".floating_card").removeClass("show");
        $(".floating_card").removeClass("down");
    }
});
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});