
// Language Switcher toggle and hide if click out side
$(".upperbar__language").click(function (e) {
    e.stopPropagation(); // Prevent the click event from reaching the document
    $(".upperbar__language__list").slideToggle();
});

$(document).click(function () {
    $(".upperbar__language__list").slideUp();
});
