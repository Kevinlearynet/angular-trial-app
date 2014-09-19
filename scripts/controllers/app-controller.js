/**
 * App Control
 *
 * Central controller attached to the top level <html>
 * element
 */

"use strict";
( function ( angular, app ) {

	// get user profile data
	app.controller( "AppCtrl", [ '$rootScope', '$scope', '$state', 'UserService',

		function ( $rootScope, $scope, $state, UserService ) {

			//
			// bodyClass definitions
			//
			// in a larger project this would be abstracted to allow for multiple
			// classes to easily be added or removed
			//

			// current state
			$rootScope.$on( '$stateChangeStart',
				function ( event, toState, toParams, fromState, fromParams ) {
					var currentState = toState.name.replace( '.', '-' );
					$scope.bodyClass = 'state-' + currentState;
				}
			);

			/**
			 * Format Avatar
			 */
			$scope.currentUserAvatar = function ( src, size ) {
				return UserService.getCurrentUserAvatar( size );
			};
		}
	] );

} )( angular, SimplySocial );