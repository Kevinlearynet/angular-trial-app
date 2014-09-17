'use strict';

var SimplySocial = angular.module( 'SimplySocial', [ 'ui.router', 'ngDialog' ] );

( function ( angular, app ) {

	// root expressions
	app.run( function ( $rootScope, $state, $stateParams, UserService, ngDialog ) {

		// global variables used on every page in app
		$rootScope.site = {
			name: 'Simply Social',
			currentYear: new Date().getFullYear()
		};

		// global user data
		$rootScope.user = UserService.getUser( 1 );
		$rootScope.user.avatar = {
			sm: UserService.getAvatar( $rootScope.user.avatar, 30 ),
			md: UserService.getAvatar( $rootScope.user.avatar, 40 ),
			lg: UserService.getAvatar( $rootScope.user.avatar, 50 )
		};

		// global state references
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
	} ).

	// routing
	config( [ '$stateProvider', '$urlRouterProvider', 'ngDialogProvider',
		function ( $stateProvider, $urlRouterProvider, ngDialogProvider ) {

			// default
			$urlRouterProvider.otherwise( '/posts' );

			// posts
			$stateProvider.state( {
				name: 'posts',
				url: '/posts',
				templateUrl: '/views/posts.html'
			} );

			// create post
			$stateProvider.state( {
				name: 'posts.create',
				url: "/create",
				onEnter: function ( $stateParams, $state, ngDialog ) {
					var dialog = ngDialog.open( {
						template: '/views/_modal-create-post.html',
						className: 'ngdialog-create-post',
						controller: 'post.CreatePostCtrl'
					} );
					dialog.closePromise.then( function ( data ) {
						$state.go( 'posts' );
					} );
				}
			} );

		}
	] );

} )( angular, SimplySocial );