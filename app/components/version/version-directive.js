'use strict';

angular.module('simplySocial.version.version-directive', [])

.directive('appVersion', ['version',
    function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }
]);