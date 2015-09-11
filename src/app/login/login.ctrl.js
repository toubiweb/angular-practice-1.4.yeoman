(function () {
    'use strict';

    angular.module('tpAngular.login').controller('TpaLoginController', TpaLoginController);

    function TpaLoginController($state, toastr, Auth) {

        // view model
        var vm = this;

        // public attributes
        vm.user = {};
        vm.errors = {};
        vm.submitted = false;

        // public methods
        vm.login = login;

        // initialization
        init();

        function init() {}

        function login(form) {
            vm.submitted = true;

            if (form.$valid) {
                Auth.login({
                        email: vm.user.email,
                        password: vm.user.password
                    })
                    .then(function () {
                        // Logged in, redirect to home
                        $state.go('view-members');
                    })
                    .catch(function (err) {
                        vm.errors.other = err.message;
                    });
            }
        }

    }
}());