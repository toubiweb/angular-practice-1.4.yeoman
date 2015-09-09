(function () {
    'use strict';

    angular.module('tpAngular.profile').controller('TpaProfilePasswordEditController', TpaProfilePasswordEditController);

    /** @ngInject */
    function TpaProfilePasswordEditController($stateParams, tpaPasswordService) {

        // view model
        var vm = this;
        vm.user = {};
        vm.firstName = $stateParams.firstName;

        vm.getStrongnessPercentage = getStrongnessPercentage;
        vm.getProgressClass = getProgressClass;

        // public attributes

        // public methods

        // initialization
        init();

        function init() {

        }

        function getStrongnessPercentage() {
            var strongness = tpaPasswordService.checkStrongness(vm.user.password);
            console.info('Strongness: %s', strongness);
            return 10 * strongness;
        }

        function getProgressClass() {
            var p = getStrongnessPercentage();
            if (p < 50) {
                return 'progress-bar-danger';
            } else if (p < 80) {
                return 'progress-bar-warning';
            } else {
                return 'progress-bar-success';
            }
        }

        return vm;

    }
}());