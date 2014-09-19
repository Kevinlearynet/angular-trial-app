/**
 * Post Service
 *
 * In production this would probably handle our $.get and $.post
 * requests to a server-side API backend
 */
"use strict";
( function ( angular, app ) {
	app.service( 'fileUpload', [ '$http',
		function ( $http ) {
			this.uploadFileToUrl = function ( file, uploadUrl ) {
				var fd = new FormData();
				fd.append( 'file', file );
				$http.post( uploadUrl, fd, {
					transformRequest: angular.identity,
					headers: {
						'Content-Type': undefined
					}
				} )
					.success( function () {} )
					.error( function () {} );
			};
		}
	] ); // end app.service()

} )( angular, SimplySocial );