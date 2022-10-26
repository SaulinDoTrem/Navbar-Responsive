let showLinks = false;

$('.nav-toggle').click(
    () => {
        if(!showLinks)
            $('.page-links').addClass('show-links');
        else
            $('.page-links').removeClass('show-links');

        showLinks = !showLinks;
    }
);

$('.page-link').hover(
    function(){
        if($(document).width() <= 768){
            const randomColor = getRandomColor();
            $(this).css('background-color', randomColor);
        }
    },
    function(){
        $(this).css('background-color', '#FFF');
    }
);

function getRandomColor(){
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let color = '#';

    for (let index = 0; index < 6; index++) {
        const randomNumber = getRandomNumber(hex);
        const caracter = hex[randomNumber];
        color += caracter;
    }

    return color;
}

function getRandomNumber(array){
    return Math.floor(Math.random() * array.length);
}