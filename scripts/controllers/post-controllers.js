/**
 * Post Controls
 */

"use strict";
( function ( angular, app ) {

	// detail view
	app.controller( "post.DetailCtrl", [ '$scope', '$state', '$stateParams', 'PostService', 'UserService', 'ngDialog',
		function ( $scope, $state, $stateParams, PostService, UserService ) {

			$scope.post = PostService.getPost( $stateParams.id );
			$scope.replies = PostService.getPostReplies( $stateParams.id );

			/**
			 * Create Reply
			 */
			$scope.createReply = function () {

				// gather user details (assumes we have a relational data structure)
				var user = $scope.user;

				// validation
				if ( $scope.reply === undefined || $scope.reply.message === undefined || !$scope.reply.message ) {
					$scope.messageError = true;
					return;
				}

				// setup post
				var reply = {
					user_id: user.id,
					name: user.name,
					avatar: user.avatar,
					message: $scope.reply.message
				};

				// create post
				PostService.createReply( reply, $scope.post );

				// close modal if exists
				if ( typeof $scope.$parent.closeThisDialog === 'function' )
					$scope.$parent.closeThisDialog();

				// clear controller
				$scope.messageError = false;
				$scope.reply.message = '';
				$scope.currentRecord = {};
			};

			/**
			 * Validation
			 */
			$scope.validate = function () {
				$scope.messageError = true;
			};

			/**
			 * Format Avatar
			 *
			 * It's not good that we have a diplicate method accross
			 * controllers here, given more time I would explore
			 * creating a reliable directive for handling this
			 * directly through the service
			 */
			$scope.formatAvatar = function ( src, size ) {
				var avatar = UserService.getAvatar( src, size );
				return avatar;
			};

			// update posts list
			$scope.$on( 'posts.update', function ( event ) {
				$scope.posts = PostService.posts;
			} );
			$scope.posts = PostService.posts;

		}
	] );

	// list view
	app.controller( "post.ListCtrl", [ '$scope', 'PostService', 'UserService', 'ngDialog',
		function ( $scope, PostService, UserService ) {

			// defaults
			$scope.layoutClass = 'posts-layout-list';
			$scope.postFilterType = 'all';

			/**
			 * Post Filtering
			 *
			 * Filtering by type: video or image
			 */
			$scope.postFilter = function ( type ) {
				$scope.postFilterType = type;
			};

			/**
			 * Filtering for objects
			 *
			 * Angular filters can only handle arrays out of the box
			 * extend it to provide key/value object filtering
			 */
			$scope.filterProp = function ( items ) {

				// no filter if not provided
				if ( $scope.postFilterType === 'all' || $scope.postFilterType === undefined )
					return items;

				var result = {};
				angular.forEach( items, function ( value, key ) {
					if ( value[ $scope.postFilterType ] !== null ) {
						result[ key ] = value;
					}
				} );
				return result;
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
			$scope.isActiveLayout = function ( style ) {
				return style === $scope.layoutStyle;
			};

			/**
			 * Filter Actives Classes
			 */
			$scope.isActiveFilter = function ( type ) {
				return type === $scope.postFilterType;
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
				var user = $scope.user;

				// validation
				if ( $scope.post === undefined || $scope.post.message === undefined || !$scope.post.message ) {
					$scope.messageError = true;
					return;
				}

				// setup post
				var post = {
					photo: null,
					video: null,
					user_id: user.id,
					name: user.name,
					avatar: user.avatar,
					message: $scope.post.message
				};

				// create post
				PostService.createPost( post );

				// close modal if exists
				if ( typeof $scope.$parent.closeThisDialog === 'function' )
					$scope.$parent.closeThisDialog();

				// clear controller
				$scope.messageError = false;
				$scope.post.message = '';
				$scope.currentRecord = {};
			};

			/**
			 * Validation
			 */
			$scope.validate = function () {
				$scope.messageError = true;
			};

			// update posts list
			$scope.$on( 'posts.update', function ( event ) {
				$scope.posts = PostService.posts;
			} );
			$scope.posts = PostService.posts;
		}
	] );

} )( angular, SimplySocial );