(function () {
    'use strict';

    angular.module('tpAngular.profile').factory('passwordService', passwordService);

    function passwordService() {

        var service = {};

        // public methods
        service.checkStrongness = checkStrongness

        function checkStrongness(password) {

            // TODO
        }

        return service;
    }
}());