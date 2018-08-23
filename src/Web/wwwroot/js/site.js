$(function () {
    makeSearchIconGlowWhenSearchBarIsFocused();
    removeSearchIconGlowWhenSearchBarIsNoLongerFocused();
});

let makeSearchIconGlowWhenSearchBarIsFocused = () => {
    $("#main-search-input").focus(makeSearchIconGlow);
};

let removeSearchIconGlowWhenSearchBarIsNoLongerFocused = () => {
    $("#main-search-input").focusout(removeGlowFromSearchIcon);
};

let makeSearchIconGlow = () => {
    $("#main-search-icon").css("border-color", "#80bdff");

    let boxShadow = "0 0 0.2rem 0.2rem rgba(0, 123, 255, 0.5)";
    $("#main-search-icon").css("-mozbox-shadow", boxShadow);
    $("#main-search-icon").css("-webkit-box-shadow", boxShadow);
    $("#main-search-icon").css("box-shadow", boxShadow);

    $("#main-search-icon").css("clip-path", "inset(-5px -5px -5px 0px)");
};

let removeGlowFromSearchIcon = () => {
    $("#main-search-icon").css("border-color", "#ced4da");

    let none = "none";
    $("#main-search-icon").css("-mozbox-shadow", none);
    $("#main-search-icon").css("-webkit-box-shadow", none);
    $("#main-search-icon").css("box-shadow", none);

    $("#main-search-icon").css("clip-path", none);
};