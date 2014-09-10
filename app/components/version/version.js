'use strict';

angular.module('simplySocial.version', [
    'simplySocial.version.interpolate-filter',
    'simplySocial.version.version-directive'
])

.value('version', '0.1');