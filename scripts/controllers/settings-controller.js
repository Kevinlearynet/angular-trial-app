/**
 * User Control
 */

"use strict";
( function ( angular, app ) {

	// get user profile data
	app.controller( "account.SettingsCtrl", [ '$scope', '$http', '$log', 'promiseTracker', '$timeout', 'UserService', 'fileUpload',
		function ( $scope, $http, $log, promiseTracker, $timeout, UserService, fileUpload ) {

			// account
			$scope.user = UserService.getCurrentUser();
			$scope.email = $scope.user.email;
			$scope.name = $scope.user.name;
			$scope.avatar = UserService.getCurrentUserAvatar( 85 );

			// notifications
			$scope.notifyFavorites = 1;
			$scope.notifyMentions = 0;
			$scope.notifyReply = 1;
			$scope.notifyFollow = 1;

			// privacy
			$scope.publicTagging = 1;
			$scope.followingTagging = 0;
			$scope.disallowTagging = 1;
			$scope.geoTagging = 0;
			$scope.emailVisibility = 1;
			$scope.personalizeAds = 1;

			/**
			 * Password Change
			 */
			$scope.changePassword = false;
			$scope.passwordPlaceholder = '•••••••';
			$scope.changePasswordToggle = function () {
				$scope.changePassword = !$scope.changePassword;
				$scope.passwordPlaceholder = null;
			};

			/**
			 * File Upload
			 */
			$scope.uploadFile = function () {
				var file = $scope.avatarUpload;
				var uploadUrl = "/fileUpload";
				fileUpload.uploadFileToUrl( file, uploadUrl );
			};

			/**
			 * On/off switch
			 */
			$scope.onOffSwitch = function ( obj, $event ) {
				// update $scope
			};

			/**
			 * Form Submission Handler
			 */
			$scope.submit = function ( form ) {

				// field flags
				$scope.submitted = true;

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