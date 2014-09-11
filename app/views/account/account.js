'use strict';

angular.module( 'simplySocial.account', [ 'ngRoute' ] )

/**
 * /account/ routing
 *
 * Controls routing and scope for the profile section of the app
 */
.config( [ '$routeProvider',
	function ( $routeProvider ) {

		$routeProvider.when( '/account', {
			redirectTo: '/account/profile'
		} );

		// profile
		$routeProvider.when( '/account/profile', {
			templateUrl: '/app/views/account/profile.html',
			controller: 'accountProfileCtrl'
		} );

		// followers
		$routeProvider.when( '/account/followers', {
			templateUrl: '/app/views/account/followers.html',
			controller: 'accountFollowersCtrl'
		} );

		// following
		$routeProvider.when( '/account/following', {
			templateUrl: '/app/views/account/following.html',
			controller: 'followingCtrl'
		} );
	}
] )

/**
 * Account > Profile Controller
 */
.controller( 'accountProfileCtrl', [

	function ( $scope ) {
		console.log( 'Controller for account loaded' );
	}
] );