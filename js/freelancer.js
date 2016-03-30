/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//toggle
$('#toggle1').click(function(){
    $('#p1').slideToggle()
});

$('#toggle2').click(function(){
    $('#p2').slideToggle()
});

$('#toggle3').click(function(){
    $('#p3').slideToggle()
});

$('#toggle4').click(function(){
    $('#p4').slideToggle()
});

$('#toggle5').click(function(){
    $('#p5').slideToggle()
});

$('#toggle6').click(function(){
    $('#p6').slideToggle()
});

$('#toggle7').click(function(){
    $('#p7').slideToggle()
});

$('#toggle8').click(function(){
    $('#p8').slideToggle()
});

$('#toggle9').click(function(){
    $('#p9').slideToggle()
});

$('#toggle10').click(function(){
    $('#p10').slideToggle()
});

$('#toggle11').click(function(){
    $('#p11').slideToggle()
});

$('#toggle12').click(function(){
    $('#p12').slideToggle()
});

$('#toggle13').click(function(){
    $('#p13').slideToggle()
});

$('#toggle14').click(function(){
    $('#p14').slideToggle()
});

$('#toggle15').click(function(){
    $('#p15').slideToggle()
});

$('#toggle16').click(function(){
    $('#p16').slideToggle()
});

$('#toggle17').click(function(){
    $('#p17').slideToggle()
});

$('#toggle18').click(function(){
    $('#p18').slideToggle()
});

$('#toggle19').click(function(){
    $('#p19').slideToggle()
});