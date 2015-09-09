(function () {

    'use strict';

    angular.module('tpAngular.form').directive('tpaRobustnessBar', tpaRobustnessBar);

    function tpaRobustnessBar($parse) {
        return {
            templateUrl: 'app/form/tpa-robustness-bar.directive.html',
            controllerAs: 'vm',
            scope: true,
            bindToController: {
                password: '='
            },
            controller: TpaRobustnessBarController
        };
    }

    function TpaRobustnessBarController() {

        var vm = this;

        console.info('Hello from TpaRobustnessBarController. Password: "%s"', vm.password);

        // scope attributes

        // scope methods

        // init method
        init();

        function init() {


        }

        return vm;
    }
    
})();