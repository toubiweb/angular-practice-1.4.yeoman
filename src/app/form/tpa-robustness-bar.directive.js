(function () {

    'use strict';

    angular.module('tpAngular.form').directive('tpaRobustnessBar', tpaRobustnessBar);

    function tpaRobustnessBar() {
        return {
            templateUrl: 'app/form/tpa-robustness-bar.directive.html',
            controllerAs: 'vm',
            bindToController: {
                password: '='
            },
            controller: TpaRobustnessBarController
        };
    }

    function TpaRobustnessBarController($log) {

        var vm = this;

        $log.info('Hello from TpaRobustnessBarController. Password: "%s"', vm.password);

        // scope attributes

        // scope methods

        // init method
        init();

        function init() {


        }

        return vm;
    }
    
})();