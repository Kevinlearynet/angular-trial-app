/**
 * Post Controls
 */

"use strict";
( function ( angular, app ) {

	// list view
	app.controller( "post.ListCtrl", [ '$scope', 'PostService', 'UserService', 'ngDialog',
		function ( $scope, PostService, UserService ) {

			// defaults
			$scope.filters = {};
			$scope.layoutClass = 'posts-layout-list';

			/**
			 * Post Filtering
			 *
			 * Filtering by type: video or image
			 */
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

			/**
			 * Layout Control Actions
			 */
			$scope.postLayout = function ( style ) {
				if ( style == 'grid' ) {
					$scope.layoutStyle = 'grid';
				} else {
					$scope.layoutStyle = 'list';
				}
				$scope.layoutClass = 'posts-layout-' + $scope.layoutStyle;
			};

			/**
			 * Layout Actives Classes
			 */
			$scope.isActive = function ( style ) {
				return style === $scope.layoutStyle;
			};

			/**
			 * Format Avatar
			 */
			$scope.formatAvatar = function ( src, size ) {
				var avatar = UserService.getAvatar( src, size );
				return avatar;
			};

			// default layout style
			$scope.postLayout( 'list' );

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

			/**
			 * Create Post
			 */
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