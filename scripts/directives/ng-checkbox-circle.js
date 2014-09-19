/**
 * Form Field: Circular Checkbox
 */

"use strict";
( function ( angular, app ) {

	app.directive( 'ngCircularCheckbox', function () {
		return {
			restrict: 'A',
			scope: {
				value: '=ngModel'
			},
			templateUrl: '/scripts/directives/ng-circular-checkbox.html',
			link: function ( scope, element, attrs ) {

				// click handler
				scope.switch = function () {
					scope.value = ( scope.value === 0 ) ? 1 : 0;
				};
			}
		};
	} );

} )( angular, SimplySocial );