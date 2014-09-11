'use strict';

var SimplySocial = angular.module( 'SimplySocial', [ 'ngRoute' ] );

( function ( angular, app ) {

	// routing
	app.config( [ '$routeProvider',
		function ( $routeProvider ) {

			// home
			$routeProvider.when( '/home', {
				templateUrl: '/views/posts.html'
			} );

			// account > followers
			$routeProvider.when( '/account/followers', {
				templateUrl: '/views/account_followers.html',
				controller: 'accountFollowers'
			} );

			// account > following
			$routeProvider.when( '/account/following', {
				templateUrl: '/views/account_following.html',
				controller: 'accountFollowing'
			} );

			// account > settings
			$routeProvider.when( '/account/settings', {
				templateUrl: '/views/account_settings.html',
				controller: 'accountSettings'
			} );

			// default
			$routeProvider.otherwise( {
				redirectTo: '/home'
			} );

		}
	] );

	// root expressions
	app.run( function ( $rootScope ) {
		$rootScope.siteName = 'Simply Social';
		$rootScope.currentYear = new Date().getFullYear();
	} );

} )( angular, SimplySocial );