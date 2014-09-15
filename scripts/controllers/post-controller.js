/**
 * Post Controls
 */

"use strict";
( function ( angular, app ) {

	// list view
	app.controller( "post.ListCtrl", [ '$scope', 'PostService',
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

	// add a post
	app.controller( "post.AddCtrl", [ '$scope', 'PostService', 'UserService',
		function ( $scope, PostService, UserService ) {

			$scope.createPost = function () {

				// gather user details (assumes we have a relational data structure)
				var userID = 1;
				var user = UserService.getUser( userID );
				var scaledAvatar = UserService.getAvatar( user.avatar, 40 );

				// setup post
				var post = {
					photo: null,
					video: null,
					user_id: userID,
					name: user.name,
					avatar: scaledAvatar,
					message: $scope.post.message
				};

				// validation
				if ( !post.message.length ) {
					$scope.errorMessage = "Please enter a message.";
					return;
				}

				// create post
				PostService.createPost( post );
			};

			// update posts list
			$scope.$on( 'posts.update', function ( event ) {
				$scope.posts = PostService.posts;
			} );
			$scope.posts = PostService.posts;
		}
	] );

} )( angular, SimplySocial );