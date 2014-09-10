'use strict';

angular.module('simplySocial.version.interpolate-filter', [])

.filter('interpolate', ['version',
    function(version) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
    }
]);