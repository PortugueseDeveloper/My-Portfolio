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