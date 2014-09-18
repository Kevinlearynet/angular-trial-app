/**
 * Post Controls
 */

"use strict";
( function ( angular, app ) {

	// moment.js formatting
	moment.locale( 'en', {
		relativeTime: {
			future: "in %s",
			past: "%s",
			s: "s",
			m: "1m",
			mm: "%dm",
			h: "1h",
			hh: "%dh",
			d: "1d",
			dd: "%dd",
			M: "1mo",
			MM: "%dmo",
			y: "1y",
			yy: "%dy"
		}
	} );

	// <span>{{someDate | timeago}}</span>
	app.filter( 'timeago', function () {
		return function ( date ) {
			return moment( new Date( date ) ).fromNow();
		};
	} );

	// <span timeago="{{someDate}}" />
	app.directive( 'timeago', function () {
		return {
			restrict: 'A',
			link: function ( scope, element, attrs ) {
				attrs.$observe( "timeago", function () {
					element.text( moment( new Date( attrs.timeago ) ).fromNow() );
				} );
			}
		};
	} );

} )( angular, SimplySocial );