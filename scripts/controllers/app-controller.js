/**
 * App Control
 *
 * Central controller attached to the top level <html>
 * element
 */

"use strict";
( function ( angular, app ) {

	// get user profile data
	app.controller( "AppCtrl", [ '$rootScope', '$scope', '$state',

		function ( $rootScope, $scope, $state ) {

			//
			// bodyClass definitions
			//
			// in a larger project this would be abstracted to allow for multiple
			// classes to easily be added or removed
			//

			// current state
			$rootScope.$on( '$stateChangeStart',
				function ( event, toState, toParams, fromState, fromParams ) {
					console.log( 'toState', toState );
					var currentState = toState.name.replace( '.', '-' );
					$scope.bodyClass = 'state-' + currentState;
				}
			);
		}
	] );

} )( angular, SimplySocial );