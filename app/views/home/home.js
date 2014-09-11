'use strict';

angular.module( 'simplySocial.home', [ 'ngRoute' ] )

.config( [ '$routeProvider',
	function ( $routeProvider ) {
		$routeProvider.when( '/home', {
			templateUrl: 'views/home/home.html',
			controller: 'homeCtrl'
		} );
	}
] )

.controller( 'homeCtrl', [

	function ( $scope ) {
		console.log( 'Controller for home loaded' );
	}
] );