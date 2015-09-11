(function () {
    'use strict';

    // application routes configuration only (for other configuration, @see index.config.js)

    angular.module('tpAngular').config(configureRoutes);

    /** @ngInject */
    function configureRoutes($stateProvider) {

        // states configuration
        $stateProvider
            .state('edit-user', {
                url: "/edit-user/:memberId",
                templateUrl: 'app/profile/profile.user-edit.html',
                controller: 'TpaProfileUserEditController',
                controllerAs: 'vm'
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
            }).state('view-members', {
                url: "/",
                templateUrl: 'app/profile/profile.members-list.html',
                controller: 'TpaProfileMembersListController',
                controllerAs: 'vm'
            }).state('login', {
                url: "/login",
                templateUrl: 'app/login/login.html',
                controller: 'TpaLoginController',
                controllerAs: 'vm'
            }).state('logout', {
                url: "/logout",
                controller: 'TpaLogoutController',
                controllerAs: 'vm'
            });
    }

})();