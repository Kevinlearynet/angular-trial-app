/**
 * Form Field: On/Off Switch
 */

"use strict";
( function ( angular, app ) {

	app.directive( 'ngOnOffSwitch', function () {
		return {
			restrict: 'A',
			scope: {
				value: '=ngModel'
			},
			templateUrl: '/scripts/directives/ng-on-off-switch.html',
			link: function ( scope, element, attrs ) {

				// click handler
				scope.switch = function () {
					scope.value = ( scope.value === 0 ) ? 1 : 0;
				};
			}
		};
	} );

} )( angular, SimplySocial );