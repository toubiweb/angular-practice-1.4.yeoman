(function () {
    'use strict';

    angular.module('tpAngular.profile').controller('TpaProfilePasswordEditController', TpaProfilePasswordEditController);

    /** @ngInject */
    function TpaProfilePasswordEditController($scope) {

        // view model
        var vm = this;
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