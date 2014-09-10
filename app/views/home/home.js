'use strict';

angular.module('simplySocial.home', ['ngRoute'])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/app/views/home/home.html',
            controller: 'homeCtrl'
        });
    }
])

.controller('homeCtrl', [

    function() {
        console.log('homeCtrl loaded');
    }
]);