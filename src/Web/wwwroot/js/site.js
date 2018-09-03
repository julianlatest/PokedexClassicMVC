class LayoutView {
    ready() {
        this._bindEvents();
    }

    _bindEvents() {
        this._makeSearchIconGlowWhenSearchBarIsFocused();
        this._removeSearchIconGlowWhenSearchBarIsNoLongerFocused();
    }

    _makeSearchIconGlowWhenSearchBarIsFocused() {
        $("#main-search-input").focus(() => this._makeSearchIconGlow());
    }

    _makeSearchIconGlow() {
        $("#main-search-icon").css("border-color", "#80bdff");

        let boxShadow = "0 0 0.2rem 0.2rem rgba(0, 123, 255, 0.5)";
        $("#main-search-icon").css("-mozbox-shadow", boxShadow);
        $("#main-search-icon").css("-webkit-box-shadow", boxShadow);
        $("#main-search-icon").css("box-shadow", boxShadow);

        $("#main-search-icon").css("clip-path", "inset(-5px -5px -5px 0px)");
    }

    _removeSearchIconGlowWhenSearchBarIsNoLongerFocused() {
        $("#main-search-input").focusout(() => this._removeGlowFromSearchIcon());
    }

    _removeGlowFromSearchIcon() {
        $("#main-search-icon").css("border-color", "#ced4da");

        let none = "none";
        $("#main-search-icon").css("-mozbox-shadow", none);
        $("#main-search-icon").css("-webkit-box-shadow", none);
        $("#main-search-icon").css("box-shadow", none);

        $("#main-search-icon").css("clip-path", none);
    }
}
class CookieConsentPartialView {
    ready() {
        this._bindEvents();
    }

    _bindEvents() {
        this._createConsentCookieWhenAcceptingPolicy();
    }

    _createConsentCookieWhenAcceptingPolicy() {
        $("#cookie-consent button[data-cookie-string]").click((el) => {
            document.cookie = el.target.dataset.cookieString;
            $("#cookie-consent").addClass("d-none");
        });
    }
}