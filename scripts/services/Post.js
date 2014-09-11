"use strict";
( function ( angular, app ) {
	app.service( 'Post', [ '$rootScope',
		function ( $rootScope ) {
			var service = {
				posts: [ {
					id: 1,
					name: "Sam Soffes",
					avatar: "http://www.gravatar.com/avatar/0a9380f35d52fd24ae753a1186878b55.jpg?s=30",
					message: "How to Get Inspired: the Right Way - Designmodo bit.ly/1lE4uJc Good stuff from @designmodo!",
					time: new Date( 1410432001 * 1000 ),
					photo: "",
					video: "",
					replies: [ {
						id: 2,
						name: "Kevin Leary",
						avatar: "http://www.gravatar.com/avatar/0a9380f35d52fd24ae753a1186878b55.jpg?s=30",
						message: "Following up on this...",
						time: new Date( 1410468002 * 1000 ),
					}, {
						id: 3,
						name: "Kevin Leary",
						avatar: "http://www.gravatar.com/avatar/0a9380f35d52fd24ae753a1186878b55.jpg?s=30",
						message: "Following up on this...",
						time: new Date( 1410468002 * 1000 ),
					} ]
				}, {
					id: 1,
					name: "Sam Soffes",
					avatar: "http://www.gravatar.com/avatar/0a9380f35d52fd24ae753a1186878b55.jpg?s=30",
					message: "How to Get Inspired: the Right Way - Designmodo bit.ly/1lE4uJc Good stuff from @designmodo!",
					time: new Date( 1410432001 * 1000 ),
					photo: "",
					video: "",
					replies: [ {
						id: 2,
						name: "Kevin Leary",
						avatar: "http://www.gravatar.com/avatar/0a9380f35d52fd24ae753a1186878b55.jpg?s=30",
						message: "Following up on this...",
						time: new Date( 1410468002 * 1000 ),
					}, {
						id: 3,
						name: "Kevin Leary",
						avatar: "http://www.gravatar.com/avatar/0a9380f35d52fd24ae753a1186878b55.jpg?s=30",
						message: "Following up on this...",
						time: new Date( 1410468002 * 1000 ),
					} ]
				}, {
					id: 1,
					name: "Sam Soffes",
					avatar: "http://www.gravatar.com/avatar/0a9380f35d52fd24ae753a1186878b55.jpg?s=30",
					message: "How to Get Inspired: the Right Way - Designmodo bit.ly/1lE4uJc Good stuff from @designmodo!",
					time: new Date( 1410432001 * 1000 ),
					photo: "",
					video: "",
					replies: [ {
						id: 2,
						name: "Kevin Leary",
						avatar: "http://www.gravatar.com/avatar/0a9380f35d52fd24ae753a1186878b55.jpg?s=30",
						message: "Following up on this...",
						time: new Date( 1410468002 * 1000 ),
					}, {
						id: 3,
						name: "Kevin Leary",
						avatar: "http://www.gravatar.com/avatar/0a9380f35d52fd24ae753a1186878b55.jpg?s=30",
						message: "Following up on this...",
						time: new Date( 1410468002 * 1000 ),
					} ]
				} ],

			addPost: function ( post ) {
					service.posts.push( post );
					$rootScope.$broadcast( 'posts.update' );
				}
			};
			return service;
		}
	] );
} )( angular, SimplySocial );