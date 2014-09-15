/**
 * User Control
 */

"use strict";
( function ( angular, app ) {

	// get user profile data
	app.controller( "UserProfileDataCtrl", [ '$scope', 'UserService',
		function ( $scope, UserService ) {

			$scope.user = UserService.user;
		}
	] );

} )( angular, SimplySocial );