/**
 * Post Controllers
 */

"use strict";
( function ( angular, app ) {
	// add a post
	app.controller( "AddPostCtrl", [ '$scope', 'Post',
		function ( scope, Post ) {
			scope.$on( 'posts.update', function ( event ) {
				scope.posts = Post.posts;
			} );
			scope.posts = Post.posts;
		}
	] );
} )( angular, SimplySocial );