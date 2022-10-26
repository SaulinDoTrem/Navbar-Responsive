let showLinks = false;

$('.nav-toggle').on("click",
    () => {
        console.log("Apertei o botão");
        if(!showLinks)
            $('.page-links').addClass('show-links');
        else
            $('.page-links').removeClass('show-links');

        showLinks = !showLinks;
    }
);