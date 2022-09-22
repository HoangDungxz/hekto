/**
 * Header
*/
// language, money toggle
$('.language-item').on('click', function() {
    const matches = document.querySelectorAll("ul:not(.list-language)"); //get all class element ul except list-language
    $(matches).removeClass('active');
    $('.language-item, .list-language').toggleClass('active');
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

$('.item-home').on('click', function() {
    const matches = document.querySelectorAll("ul:not(.sub-menu)");
    $(matches).removeClass('active');
    $('.sub-menu').toggleClass('active');
});
// menu toggle

/**
 * End Header
*/


/**
 * Main
*/

// promotion
$('.promotion-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
});
// promotion

//Featured Product
$('.featured-products-list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: false,
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 640,
        settings: {
            slidesToShow: 2,
            infinite: true
        }

    }, {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            dots: true
        }

    }]
});
//Featured Product

// Leatest Products
$(function () {
    $("#leatest_products_tabs").tabs();
});
// Leatest Products

// Discount item
$(function () {
    $("#discount_item_tabs").tabs();
});
// Discount item

// top-categories
$('.top-categories-list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 769,
        settings: {
            slidesToShow: 2,
            infinite: true
        }

    }, {
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            dots: true
        }

    }]
});
// top-categories

// leatest-blog
$('.leatest-blog-list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    responsive: [{
        breakpoint: 640,
        settings: {
            slidesToShow: 1,
        }

    }, {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
        }

    }]
});
// leatest-blog

/**
 * End Main
*/


/**
 * Footer
*/

// Accordion
$( function() {
    $("#accordion").accordion();
    $('#ui-id-2, #ui-id-4, #ui-id-6').css('height', 'auto')
});
// Accordion

/**
 * End Footer
*/