/**
 * Post Controllers
 */

"use strict";
( function ( angular, app ) {
	// list view
	app.controller( "PostListCtrl", [ '$scope', 'Post',
		function ( scope, Post ) {
			scope.$on( 'posts.update', function ( event ) {
				scope.posts = Post.posts;
			} );
			scope.posts = Post.posts;
		}
	] );
} )( angular, SimplySocial );