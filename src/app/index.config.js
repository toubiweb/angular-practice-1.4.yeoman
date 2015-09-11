(function () {
    'use strict';

    angular.module('tpAngular').config(configureApplication);

    /** @ngInject */
    function configureApplication($logProvider, $locationProvider, $urlRouterProvider, toastrConfig, $httpProvider) {
        // Enable log
        $logProvider.debugEnabled(true);

        // Set options third-party lib
        angular.extend(toastrConfig, {
            extendedTimeOut: 1000,
            closeButton: true
        });

        // HTML5 mode
        $locationProvider.html5Mode(true);

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise('/');

        /*   $httpProvider.defaults.transformResponse.push(function (responseData) {
               convertDateStringsToDates(responseData);
               return responseData;
           });*/

    }

    angular.module('tpAngular').factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
        return {
            // Add authorization token to headers
            request: function (config) {
                config.headers = config.headers || {};
                if ($cookieStore.get('token')) {
                    config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
                }
                return config;
            },

            // Intercept 401s and redirect you to login
            responseError: function (response) {
                if (response.status === 401) {
                    $location.path('/login');
                    // remove any stale tokens
                    $cookieStore.remove('token');
                    return $q.reject(response);
                } else {
                    return $q.reject(response);
                }
            }
        };
    })

    .run(function ($rootScope, $location, Auth) {
        // Redirect to login if route requires auth and you're not logged in
        $rootScope.$on('$stateChangeStart', function (event, next) {
            Auth.isLoggedInAsync(function (loggedIn) {
                if (next.authenticate && !loggedIn) {
                    event.preventDefault();
                    $location.path('/login');
                }
            });
        });
    });


    /*var regexIso8601 = /^(\d{4}|\+\d{6})(?:-(\d{2})(?:-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2})\.(\d{1,})(Z|([\-+])(\d{2}):(\d{2}))?)?)?)?$/;

    function convertDateStringsToDates(input) {
        // Ignore things that aren't objects.
        if (typeof input !== "object") return input;

        for (var key in input) {
            if (!input.hasOwnProperty(key)) continue;

            var value = input[key];
            var match;
            // Check for string properties which look like dates.
            if (typeof value === "string" && (match = value.match(regexIso8601))) {
                
                var milliseconds = Date.parse(match[0])
                if (!isNaN(milliseconds)) {
                    input[key] = new Date(milliseconds);
                    console.log('Convert date to .', input[key]);
                }
                
                
            } else if (typeof value === "object") {
                // Recurse into object
                convertDateStringsToDates(value);
            }
        }
    }
*/

})();