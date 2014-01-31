(function($) {
    var privateMethods = {

        bla: function() {
            /**
             * Key for Flickr api
             */
            var KEY = '256310e2fbd3ba028c0975f09a2cafb4',

            /**
             * Secret for Flickr api
             */
                SECRET = '174eb1c95663837f';
            var data = {
                'method': 'flickr.photos.getRecent',
                'api_key': KEY,
                'per_page': 10,
                'page': 1,
                'format': 'json'
            };
            System.bla('http://api.flickr.com/services/rest/',data);
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