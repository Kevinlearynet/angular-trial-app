/**
 * Post Controls
 */

"use strict";
( function ( angular, app ) {

	// enter keyup event
	app.directive( 'onKeyup', function () {
		return function ( scope, elm, attrs ) {
			function applyKeyup() {
				scope.$apply( attrs.onKeyup );
			}

			var allowedKeys = scope.$eval( attrs.keys );
			elm.bind( 'keyup', function ( evt ) {
				if ( !allowedKeys || allowedKeys.length === 0 ) {
					applyKeyup();
				} else {
					angular.forEach( allowedKeys, function ( key ) {
						if ( key == evt.which ) {
							applyKeyup();
						}
					} );
				}
			} );
		};
	} );

} )( angular, SimplySocial );