'use strict';

// CSS-Filters-Polyfill
var polyfilter_scriptpath = '/scripts/vendor/CSS-Filters-Polyfill/lib/';

// Angular
var SimplySocial = angular.module( 'SimplySocial', [ 'ui.router', 'ngDialog', 'ajoslin.promise-tracker', 'ng.shims.placeholder' ] );

( function ( angular, app ) {

	// root expressions
	app.run( [ '$rootScope', '$state', '$stateParams', 'UserService', '$window', '$document',
		function ( $rootScope, $state, $stateParams, UserService, $window, $document ) {

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

			// positioning for dialog states
			$rootScope.$on( '$stateChangeStart',
				function ( event, toState, toParams, fromState, fromParams ) {

					// scroll to top when dialog opened, not ideal but with more time
					// i would adapt this to scroll to the position of the triggering element
					if ( toState.name === 'posts.detail' ) {
						window.scrollTo( 0, 0 );
					}
				} );
		}
	] ).

	// routing
	config( [ '$stateProvider', '$urlRouterProvider', 'ngDialogProvider', '$provide',
		function ( $stateProvider, $urlRouterProvider, ngDialogProvider, $provide ) {

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

			// account settings
			$stateProvider.state( {
				name: 'settings',
				url: '/account/settings',
				templateUrl: '/views/account.settings.html'
			} );

		}
	] );

} )( angular, SimplySocial );