(function () {

    'use strict';

    angular.module('tpAngular.form').directive('tpaRobustnessBar', tpaRobustnessBar);

    function tpaRobustnessBar() {
        return {
            templateUrl: 'app/form/tpa-robustness-bar.directive.html',
            controllerAs: 'vm',
            scope: {
                password: '='
            },
            bindToController: true,
            controller: TpaRobustnessBarController
        };
    }

    function TpaRobustnessBarController(tpaPasswordService) {

        var vm = this;

        // scope attributes

        // scope methods
        vm.getStrongnessPercentage = getStrongnessPercentage;
        vm.getProgressClass = getProgressClass;

        // init method
        init();

        function init() {

        }

        function getStrongnessPercentage() {
            var strongness = tpaPasswordService.checkStrongness(vm.password);
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


})();