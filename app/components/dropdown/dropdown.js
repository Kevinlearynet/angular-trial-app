'use strict';

angular.module( 'dropdown', [] )
	.directive( 'dropdown', [ '$document',
		function ( $document ) {
			return {
				restrict: 'A',
				replace: true,
				transclude: true,
				scope: {
					classmenu: '@',
					classlink: '@',
					linktext: '@'
				},
				templateUrl: '/app/components/dropdown/dropdown.html',
				link: function ( scope, elm, attrs ) {
					scope.menuStyle = {
						'position': 'absolute'
					};

					elm.bind( 'mousedown', function () {
						scope.menuStyle.left = elm.prop( 'offsetLeft' ) + 'px';
						scope.menuStyle.top = ( elm.prop( 'offsetTop' ) + elm.prop( 'offsetHeight' ) + 5 ) + 'px';
					} );

					elm.bind( 'click', function ( event ) {
						event.stopPropagation();
					} );

					$document.bind( 'click', function ( e ) {
						scope.isShowMenu = false;
						scope.$apply();
					} );
				}
			};
		}
	] );