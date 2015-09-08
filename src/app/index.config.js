(function () {
    'use strict';

    angular.module('tpAngular').config(configureApplication);

    /** @ngInject */
    function configureApplication($logProvider, $locationProvider, $urlRouterProvider, toastrConfig) {
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
        
    }


})();