$(function () {
    $(".menu-btn").on("click", ".menu-btn__inner", function () {
        $(".nav__list").slideToggle();
        $(".menu-btn__inner").toggleClass('change');
        $(".nav").toggleClass('change');
        $(".nav__list>li").slideRight();
    });

});

function openPopup(divPopup) {
    $(divPopup).fadeIn(250);
}

function closePopup(divPopup) {
    $(divPopup).fadeOut(250);
}