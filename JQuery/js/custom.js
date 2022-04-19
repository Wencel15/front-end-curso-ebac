// instancia jquery e evita conflitos

// jQuery( function($){
$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // seletor de tag
    
    let items = $('.featured-item') // seletor de class
    
    let destaques = $('#featured') // seletor de id

    console.log(titulo.first());

})