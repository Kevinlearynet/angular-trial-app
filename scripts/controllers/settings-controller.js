/**
 * User Control
 */

"use strict";
( function ( angular, app ) {

	// get user profile data
	app.controller( "account.SettingsCtrl", [ '$scope', '$http', '$log', 'promiseTracker', '$timeout', 'UserService', 'fileUpload',
		function ( $scope, $http, $log, promiseTracker, $timeout, UserService, fileUpload ) {

			// gather current userdata
			$scope.user = UserService.getCurrentUser();
			$scope.avatar = UserService.getCurrentUserAvatar( 85 );

			/**
			 * File Upload
			 */
			$scope.uploadFile = function () {
				var file = $scope.avatarUpload;
				console.log( 'file is ' + JSON.stringify( file ) );
				var uploadUrl = "/fileUpload";
				fileUpload.uploadFileToUrl( file, uploadUrl );
			};

			/**
			 * Form Submission Handler
			 */
			$scope.submit = function ( form ) {

				// field flags
				$scope.submitted = true;
				$scope.changePassword = false;

				// If form is invalid, return and let AngularJS show validation errors.
				if ( form.$invalid ) {
					return;
				}

				// Default values for the request.
				$scope.progress = promiseTracker( 'progress' );
				var config = {
					params: {
						'callback': 'JSON_CALLBACK',
						'name': $scope.name,
						'email': $scope.email,
						'subjectList': $scope.subjectList,
						'url': $scope.url,
						'comments': $scope.comments
					},
					tracker: 'progress'
				};

				// Perform JSONP request.
				$http.jsonp( 'response.json', config )
					.success( function ( data, status, headers, config ) {
						if ( data.status == 'OK' ) {
							$scope.name = null;
							$scope.email = null;
							$scope.subjectList = null;
							$scope.url = null;
							$scope.comments = null;
							$scope.messages = 'Your form has been sent!';
							$scope.submitted = false;
						} else {
							$scope.messages = 'Oops, we received your request, but there was an error.';
							$log.error( data );
						}
					} )
					.error( function ( data, status, headers, config ) {
						$scope.progress = data;
						$scope.messages = 'There was a network error. Try again later.';
						$log.error( data );
					} );

				// Hide the status message which was set above after 3 seconds.
				$timeout( function () {
					$scope.messages = null;
				}, 3000 );
			};
		}
	] );

} )( angular, SimplySocial );