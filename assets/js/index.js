$(function(){

    /**메인 슬라이드 */
    const mainSlide = new Swiper('.main-slide',{
        speed:500,
        spaceBetween:10,
        slidesPerView: "auto",
        observer: true,
        observeParents: true,       
    })

    /**footer tab 기능 */
    $('.footer .tab').click(function(e){
        e.preventDefault();

        $(this).addClass('active');
        $(this).parent().siblings().children().removeClass('active');
    })
















})