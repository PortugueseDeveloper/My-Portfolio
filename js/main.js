$(document).ready(function() {

    // Responsive 'hamburger' menu animation
    $('.hamburger').click(function() {
        $('.hamburger').toggleClass('active');
    });

    // Open main menu using responsive 'hamburger' button 
    $('.hamburger').click(function() {
        $('.main-menu').slideToggle(800, 'linear');
    });

    // 'About me' phrases animation
    let currentSentence = 1;
    let height = $('.about-phrases').height(); 
    let numberPrases = $('.about-phrases').children().length;
    let firstSentence = $('.about-phrases div:nth-child(1)');

    setInterval(function () {
        let number = currentSentence * -height;
        firstSentence.css('margin-top', number + 'px');
        if (currentSentence === numberPrases) {
            firstSentence.css('margin-top', '0px');
            currentSentence = 1;
        } else currentSentence++;
    }, 2000);

    // 'My projects' img's change animation 
    $('#project-1-img').mouseenter(function() {
        $('#project-1-img').attr('src', 'img/project-color-ph.jpeg');
    });
    $('#project-1-img').mouseleave(function () {
        $('#project-1-img').attr('src', 'img/project-ph.jpeg');
    });

    $('#project-2-img').mouseenter(function () {
        $('#project-2-img').attr('src', 'img/project-color-ph.jpeg');
    });
    $('#project-2-img').mouseleave(function () {
        $('#project-2-img').attr('src', 'img/project-ph.jpeg');
    });

    $('#project-3-img').mouseenter(function () {
        $('#project-3-img').attr('src', 'img/project-color-ph.jpeg');
    });
    $('#project-3-img').mouseleave(function () {
        $('#project-3-img').attr('src', 'img/project-ph.jpeg');
    });

    $('#project-4-img').mouseenter(function () {
        $('#project-4-img').attr('src', 'img/project-color-ph.jpeg');
    });
    $('#project-4-img').mouseleave(function () {
        $('#project-4-img').attr('src', 'img/project-ph.jpeg');
    });

});