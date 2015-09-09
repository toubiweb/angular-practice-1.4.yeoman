(function () {
    'use strict';

    angular.module('tpAngular.profile').factory('passwordService', passwordService);

    function passwordService() {

        var service = {};

        // public methods
        service.checkStrongness = checkStrongness

        function checkStrongness(password) {

            if (!password || password.length < 4) {
                return 1;
            } else if (password.length >= 4 && password.length < 10) {
                return 5;
            } else {
                return 10;
            }
        }

        return service;
    }
}());