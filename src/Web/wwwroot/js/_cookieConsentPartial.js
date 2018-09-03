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