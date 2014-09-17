/**
 * Post Controls
 */

"use strict";
( function ( angular, app ) {

	// list view
	app.controller( "post.ListCtrl", [ '$scope', 'PostService', 'ngDialog',
		function ( $scope, PostService ) {

			// defaults
			$scope.filters = {};
			$scope.layoutClass = 'posts-layout-list';

			// filtering by type: video or image
			$scope.postFilter = function ( type ) {
				if ( type == 'video' ) {
					$scope.filters = {
						video: '!!'
					};
				} else if ( type == 'photo' ) {
					$scope.filters = {
						photo: '!!'
					};
				} else {
					$scope.filters = {};
				}
			};

			// post layout control
			$scope.postLayout = function ( style ) {
				if ( style == 'grid' ) {
					$scope.layoutClass = 'posts-layout-grid';
				} else {
					$scope.layoutClass = 'posts-layout-list';
				}
			};

			// build posts list
			$scope.$on( 'posts.update', function ( event ) {
				$scope.posts = PostService.posts;
			} );
			$scope.posts = PostService.posts;
		}
	] );

	// add a post via modal dialog
	app.controller( "post.CreatePostCtrl", [ '$scope', 'PostService', 'UserService',
		function ( $scope, PostService, UserService ) {

			$scope.createPost = function () {

				// gather user details (assumes we have a relational data structure)
				var userID = 1;
				var user = $scope.user;
				var scaledAvatar = user.avatar.md;

				console.log( $scope );

				// validation
				if ( $scope.post === undefined || $scope.post.message === undefined ) {
					$scope.errorMessage = "Please enter a message.";
					return;
				}

				// setup post
				var post = {
					photo: null,
					video: null,
					user_id: userID,
					name: user.name,
					avatar: scaledAvatar,
					message: $scope.post.message
				};
				console.log( post );

				// create post
				PostService.createPost( post );

				// close modal if exists
				if ( typeof $scope.$parent.closeThisDialog === 'function' )
					$scope.$parent.closeThisDialog();

				// clear controller
				$scope.post.message = '';
				$scope.currentRecord = {};
			};

			// update posts list
			$scope.$on( 'posts.update', function ( event ) {
				$scope.posts = PostService.posts;
			} );
			$scope.posts = PostService.posts;
		}
	] );

} )( angular, SimplySocial );