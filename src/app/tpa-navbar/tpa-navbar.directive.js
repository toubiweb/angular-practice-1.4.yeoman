(function () {
        'use strict';

        angular.module('tpAngular').directive('tpaNavbar', tpaNavbar);
        /** @ngInject */
        function tpaNavbar() {
            return {
                templateUrl: 'app/tpa-navbar/tpa-navbar.html',
                controllerAs: 'vm',
                scope: {
                    activeMenu: '='
                },
                bindToController: true,
                controller: TpaNavbarController
            };
        }

        /** @ngInject */
        function TpaNavbarController() {

           // view model
            var vm = this;

            // initialization
            init();

            // public attributes

            // public methods

            // private methods

            function init() {


            }

            return vm;
        }

}());