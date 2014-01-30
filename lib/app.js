(function($) {
    var privateMethods = {

        bla: function() {
            Flickr.getPhotosList();
        }

    };

    var methods = {
        init: function() {
            privateMethods.bla();
        }
    };

    $.App = function () {
        methods.init();
    };
})(jQuery);

$(function () {
    $.App();
});