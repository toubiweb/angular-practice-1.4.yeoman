(function () {
    'use strict';

    angular.module('tpAngular.profile').factory('tpaPasswordService', tpaPasswordService);

    function tpaPasswordService() {

        var service = {};

        // public methods
        service.checkStrongness = checkStrongness;
        service.checkStrongnessLength = checkStrongnessLength;
        service.checkStrongnessType = checkStrongnessType;

        function checkStrongness(password){
            return checkStrongnessLength(password) + checkStrongnessType(password);
        }
        
        function checkStrongnessLength(password) {

            if (!password) {
                return 0;
            }

            var strongness = Math.min(5, Math.floor(password.length / 2));

            return strongness;

        }

        function checkStrongnessType(password) {

            if (!password) {
                return 0;
            }

            var strongness = 0;

            if (password.match(/\d+/g) != null) {
                // has numbers
                strongness++;
            }
            if ((/[a-z]/.test(password))) {
                // has lowercase
                strongness++;
            }
            if ((/[A-Z]/.test(password))) {
                // has uppercase
                strongness++;
            }
            if (password.match(/[_\W0-9]/)) {
                // has special characters
                strongness += 2;
            }

            return strongness;

        }
        return service;
    }
}());