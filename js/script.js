$(document).ready(function () {
    $('.faq-item__title').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(300);
    })
})