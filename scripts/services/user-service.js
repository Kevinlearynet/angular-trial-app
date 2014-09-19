/**
 * User Service
 *
 * In production this would probably handle our $.get and $.post
 * requests to a server-side API backend
 */
"use strict";
( function ( angular, app ) {
	app.service( 'UserService', [ '$rootScope',
		function ( $rootScope ) {
			var service = {
				users: {
					1: {
						name: "Kevin Leary",
						email: "info@kevinleary.net",
						desc: "Designer and Developer living in Boston, MA",
						website: "http://www.kevinleary.net",
						avatar: "http://www.gravatar.com/avatar/0a9380f35d52fd24ae753a1186878b55.jpg"
					},
					2: {
						name: "Larry David",
						email: "info@kevinleary.net",
						desc: "Designer and Developer living in Boston, MA",
						website: "http://www.kevinleary.net",
						avatar: "http://i.telegraph.co.uk/multimedia/archive/02002/Larry_david_2002589b.jpg"
					},
					3: {
						name: "Walter White",
						email: "info@kevinleary.net",
						desc: "Mad scientist in Albuquerque, NM",
						website: "http://www.kevinleary.net",
						avatar: "http://img4.wikia.nocookie.net/__cb20130928055404/breakingbad/images/e/e7/BB-S5B-Walt-590.jpg"
					}
				},
				getCurrentUserAvatar: function ( size ) {
					var baseUrl = this.users[ 1 ].avatar.replace( /^(https?|ftp):\/\//, '' );
					return 'http://i0.wp.com/' + baseUrl + '?resize=' + size + ',' + size;
				},
				getCurrentUser: function () {
					return this.users[ 1 ];
				},
				getAvatar: function ( url, size ) {
					var baseUrl = url.replace( /^(https?|ftp):\/\//, '' );

					// note: would never use a third party service for this in production,
					// this just made sizing and cropping photos for this demo easy
					return 'http://i0.wp.com/' + baseUrl + '?resize=' + size + ',' + size;
				},
				getUser: function ( id ) {

					// fudged for prototype
					return this.users[ id ];
				}
			};
			return service;
		}
	] );
} )( angular, SimplySocial );