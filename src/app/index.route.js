(function () {
    'use strict';

    // application routes configuration only (for other configuration, @see index.config.js)

    angular.module('tpAngular').config(configureRoutes);

    /** @ngInject */
    function configureRoutes($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        // routes configuration
        $stateProvider
            .state('profile-user-edit', {
                url: '/',
                templateUrl: 'app/profile/profile.user-edit.html',
                controller: 'TpaProfileUserEditController',
                controllerAs: 'vm'
            })
            .state('profile-password-edit', {
                url: '/profile/password/edit',
                templateUrl: 'app/profile/profile.password-edit.html',
                controller: 'TpaProfilePasswordEditController',
                controllerAs: 'vm'
            });

        // default route
        $urlRouterProvider.otherwise('/profile/user/edit');

    }

})();