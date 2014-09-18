/**
 * Post Service
 *
 * In production this would probably handle our $.get and $.post
 * requests to a server-side API backend
 */
"use strict";
( function ( angular, app ) {
	app.service( 'PostService', [ '$rootScope', 'Utilities',
		function ( $rootScope, Utilities ) {

			//
			// posts data structure
			//
			// for presentation purposes only, in production this would
			// be structured differently, likely aligning users and posts
			// in a relational manner
			//
			this.posts = [ {
				user_id: 1,
				name: "Kevin Leary",
				avatar: "http://www.gravatar.com/avatar/0a9380f35d52fd24ae753a1186878b55.jpg",
				message: "How to Get Inspired: the Right Way - Designmodo bit.ly/1lE4uJc Good stuff from @designmodo!",
				time: new Date( "September 17, 2014 11:45:00" ).toString(),
				photo: null,
				video: null,
				replies: [ {
					user_id: 2,
					name: "Larry David",
					avatar: "http://i.telegraph.co.uk/multimedia/archive/02002/Larry_david_2002589b.jpg",
					message: "Following up on this...",
					time: new Date( "September 17, 2014 11:45:00" ).toString()
				}, {
					user_id: 3,
					name: "Walter White",
					avatar: "http://img4.wikia.nocookie.net/__cb20130928055404/breakingbad/images/e/e7/BB-S5B-Walt-590.jpg",
					message: "Following up on this...",
					time: new Date( "September 17, 2014 11:45:00" ).toString(),
				} ]
			}, {
				user_id: 1,
				name: "Kevin Leary",
				avatar: "http://www.gravatar.com/avatar/0a9380f35d52fd24ae753a1186878b55.jpg",
				message: "How to Get Inspired: the Right Way - Designmodo bit.ly/1lE4uJc Good stuff from @designmodo!",
				time: new Date( "September 17, 2014 11:45:00" ).toString(),
				photo: null,
				video: null,
				replies: [ {
					user_id: 2,
					name: "Larry David",
					avatar: "http://i.telegraph.co.uk/multimedia/archive/02002/Larry_david_2002589b.jpg",
					message: "Following up on this...",
					time: new Date( "September 17, 2014 11:45:00" ).toString()
				}, {
					user_id: 3,
					name: "Walter White",
					avatar: "http://img4.wikia.nocookie.net/__cb20130928055404/breakingbad/images/e/e7/BB-S5B-Walt-590.jpg",
					message: "Following up on this...",
					time: new Date( "September 17, 2014 11:45:00" ).toString(),
				} ]
			}, {
				user_id: 2,
				name: "Larry David",
				avatar: "http://i.telegraph.co.uk/multimedia/archive/02002/Larry_david_2002589b.jpg",
				message: "How to Get Inspired: the Right Way - Designmodo bit.ly/1lE4uJc Good stuff from @designmodo!",
				time: new Date( "September 17, 2014 11:45:00" ).toString(),
				photo: null,
				video: '/styles/img/video.jpg',
				replies: [ {
					user_id: 2,
					name: "Larry David",
					avatar: "http://i.telegraph.co.uk/multimedia/archive/02002/Larry_david_2002589b.jpg",
					message: "Following up on this...",
					time: new Date( "September 17, 2014 11:45:00" ).toString()
				}, {
					user_id: 3,
					name: "Walter White",
					avatar: "http://img4.wikia.nocookie.net/__cb20130928055404/breakingbad/images/e/e7/BB-S5B-Walt-590.jpg",
					message: "Following up on this...",
					time: new Date( "September 17, 2014 11:45:00" ).toString(),
				} ]
			}, {
				user_id: 3,
				name: "Walter White",
				avatar: "http://img4.wikia.nocookie.net/__cb20130928055404/breakingbad/images/e/e7/BB-S5B-Walt-590.jpg",
				message: "How to Get Inspired: the Right Way - Designmodo bit.ly/1lE4uJc Good stuff from @designmodo!",
				time: new Date( "September 17, 2014 11:45:00" ).toString(),
				photo: '/styles/img/photo.jpg',
				video: null,
				replies: [ {
					user_id: 2,
					name: "Larry David",
					avatar: "http://i.telegraph.co.uk/multimedia/archive/02002/Larry_david_2002589b.jpg",
					message: "Following up on this...",
					time: new Date( "September 17, 2014 11:45:00" ).toString()
				}, {
					user_id: 3,
					name: "Walter White",
					avatar: "http://img4.wikia.nocookie.net/__cb20130928055404/breakingbad/images/e/e7/BB-S5B-Walt-590.jpg",
					message: "Following up on this...",
					time: new Date( "September 17, 2014 11:45:00" ).toString(),
				} ]
			} ];

			// get post
			this.getPost = function ( id ) {
				return this.posts[ id ];
			};

			// create post
			this.createPost = function ( post ) {

				// add to top of data structure (just for demonstration purposes)
				var newPost = Utilities.mergeObjs( post, {
					time: new Date(),
					replies: null,
				} );
				this.posts.unshift( newPost );

				// send additions scope
				$rootScope.$broadcast( 'posts.update' );
			};

			// add reply to post
		this.createReply = function ( reply, parent ) {

				// add to top of data structure (just for demonstration purposes)
				var newReply = Utilities.mergeObjs( reply, {
					time: new Date(),
				} );

				// add reply to parent post
				parent.replies.unshift( newReply );
				$rootScope.$broadcast( 'posts.update' );
			};

			// get replies for a post
			this.getPostReplies = function ( post ) {
				return this.posts;
			};

		}
	] ); // end app.service()

} )( angular, SimplySocial );