(function () {
    'use strict';

    // application routes configuration only (for other configuration, @see index.config.js)

    angular.module('tpAngular').config(configureRoutes);

    /** @ngInject */
    function configureRoutes($locationProvider, $stateProvider, $urlRouterProvider) {

         // HTML5 mode
        // $locationProvider.html5Mode(true);

        // states configuration
        $stateProvider
            .state('edit-user', {
                url: "/:firstName",
                templateUrl: 'app/profile/profile.user-edit.html',
                controller: 'TpaProfileUserEditController',
                controllerAs: 'vm',
                params: {
                    firstName: {
                        // default value
                        value: 'Peter'
                    }
                }
            })
            .state('edit-password', {
                url: "/profile/password/edit/",
                templateUrl: 'app/profile/profile.password-edit.html',
                controller: 'TpaProfilePasswordEditController',
                controllerAs: 'vm',
                params: {
                    // additional paramter (not in url) & default value
                    firstName: 'Peter'
                }
            });
    }

})();