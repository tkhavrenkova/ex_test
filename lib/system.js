var System = $.extend({

    makeRequest: function (apiUrl) {

    },

    showLoader: function () {
        var loaderContainer = $("#loader");
        loaderContainer.show();
    },

    hideLoader: function () {
        var loaderContainer = $("#loader");
        loaderContainer.hide();
    },

    showError: function (errorText) {
        var errorContainer = $('#errorBox');

        errorContainer
            .text(errorText)
            .show();
    },

    hideError: function () {
        var errorContainer = $('#errorBox');
        errorContainer.hide();
    }

});