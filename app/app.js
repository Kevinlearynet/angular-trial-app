'use strict';

// Declare app level module which depends on views, and components
angular.module('simplySocial', [
    'ngRoute',
    'simplySocial.home',
    'simplySocial.version'
]).
config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }
]);