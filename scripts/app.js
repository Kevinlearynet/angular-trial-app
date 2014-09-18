'use strict';

// CSS-Filters-Polyfill
var polyfilter_scriptpath = '/scripts/vendor/CSS-Filters-Polyfill/lib/';

// Angular
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
		$rootScope.user.avatar = $rootScope.user.avatar;

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
						template: '/views/_modal-posts.create.html',
						className: 'ngdialog-create-post',
						controller: 'post.CreatePostCtrl'
					} );
					dialog.closePromise.then( function ( data ) {
						$state.go( 'posts' );
					} );
				}
			} );

			// post detail post
			$stateProvider.state( {
				name: 'posts.detail',
				url: "/:id",
				onEnter: function ( $stateParams, $state, ngDialog ) {
					var dialog = ngDialog.open( {
						template: '/views/_modal-posts.detail.html',
						className: 'ngdialog-post-detail',
						controller: 'post.DetailCtrl'
					} );
					dialog.closePromise.then( function ( data ) {
						$state.go( 'posts' );
					} );
				}
			} );

		}
	] );

} )( angular, SimplySocial );