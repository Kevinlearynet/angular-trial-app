'use strict';

// app level module depends views & components
angular.module( 'simplySocial', [
	'ngRoute',
	'simplySocial.account',
	'simplySocial.home'
] ).
config( [ '$routeProvider',
	function ( $routeProvider ) {
		$routeProvider.otherwise( {
			redirectTo: '/home'
		} );
	}
] );