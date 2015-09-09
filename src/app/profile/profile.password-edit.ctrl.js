(function () {
    'use strict';

    angular.module('tpAngular.profile').controller('TpaProfilePasswordEditController', TpaProfilePasswordEditController);

    /** @ngInject */
    function TpaProfilePasswordEditController($stateParams) {

        // view model
        var vm = this;
        vm.user = {};
        vm.firstName = $stateParams.firstName;

        // public attributes

        // public methods

        // initialization
        init();

        function init() {

        }

        return vm;

    }
}());