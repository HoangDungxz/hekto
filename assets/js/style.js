// Accordion footer
$( function() {
    $("#accordion").accordion();
    $('#ui-id-2, #ui-id-4, #ui-id-6').css('height', 'auto')
});
// Accordion footer

// language, money toggle
$('.laguage-item').on('click', function() {
    const matches = document.querySelectorAll("ul:not(.list-language)"); //get all class element ul except list-language
    $(matches).removeClass('active');
    $('.laguage-item, .list-language').toggleClass('active');
});

$('.money-item').on('click', function() {
    const matches = document.querySelectorAll("ul:not(.list-money)");
    $(matches).removeClass('active');
    $('.money-item, .list-money').toggleClass('active');
});
// language, money toggle

// menu toggle
$('.item-tablet').on('click', function() {
    const matches = document.querySelectorAll("ul:not(.sub-tablet)");
    $(matches).removeClass('active');
    $('.sub-tablet').toggleClass('active');
});

// $('.money-item').on('click', function() {
//     $('.laguage-item, .list-language').removeClass('active');
//     $('.money-item, .list-money').toggleClass('active');
// });
// menu toggle