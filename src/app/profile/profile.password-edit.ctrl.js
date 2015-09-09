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

        return vm;

    }
}());