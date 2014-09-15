/**
 * Utilities & Helper Functions
 *
 * Keeping it DRY
 */
"use strict";
( function ( angular, app ) {
	app.service( 'Utilities', [

		function () {

			var service = {

				// merge objects
				mergeObjs: function ( obj1, obj2 ) {
					for ( var attrname in obj2 ) {
						obj1[ attrname ] = obj2[ attrname ];
					}
					return obj1;
				}
			};

			return service;
		}
	] ); // end app.service()

} )( angular, SimplySocial );