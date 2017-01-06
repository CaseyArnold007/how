'use strict';

/**
 * @ngdoc service
 * @name mainAppApp.pageAuthInterceptor
 * @description
 * # pageAuthInterceptor
 * Factory in the mainAppApp.
 */
angular.module('ohanaApp')
    .factory('pageAuthInterceptor', ['$q', '$rootScope', function($q, $rootScope) {

        // Performs an action based on the page request.
        var requestInterceptor = {
            request: function(config) {
                if ($rootScope.userId !== undefined) {
                    switch (config.url) {
                        case 'views/manage/directory.html':
                            if ($rootScope.userRole === 'National Staff' || $rootScope.userRole === 'Chapter Lead' || $rootScope.userRole === 'admin') {
                                console.log('Authorized')
                            } else {
                                window.location.replace('#/home');
                                console.log('Not Authorized!');
                            }
                            break;

                        default:
                            break;
                    }
                } else {
                    // If user refreshes a page, they will be redirected to the main page.
                    window.location.replace('#/home');
                }
                return config; //deferred.promise;
            }
        };
        return requestInterceptor;
    }]);
