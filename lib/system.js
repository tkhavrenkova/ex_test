var System = $.extend({

    bla: function(p1, p2) {
        $.ajax({
            type: 'GET',
            url: p1,
            data: p2,
            success: function (result) {
                console.log(result);
            },
            dataType: 'json'
        });
    },

    makeRequest: function (apiUrl, data) {
        console.log(apiUrl, data);
//        $.ajax({
//            type: 'GET',
//            url: apiUrl,
//            data: data,
//            success: function (result) {
//                console.log(result);
//            },
//            dataType: 'json'
//        });
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
        var errorContainer = $('#error');

        errorContainer
            .text(errorText)
            .show();
    },

    hideError: function () {
        var errorContainer = $('#error');
        errorContainer.hide();
    }

});