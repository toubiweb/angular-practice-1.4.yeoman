(function () {
    'use strict';

    angular.module('tpAngular.login').controller('TpaLogoutController', TpaLogoutController);

    function TpaLogoutController($state, toastr, Auth) {

        // view model
        var vm = this;

        // public attributes

        // public methods

        // initialization
        init();

        function init() {}

        Auth.logout();


        // Logged out, redirect to home
        $state.go('view-members');
    }

}());