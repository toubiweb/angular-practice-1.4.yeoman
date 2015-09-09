(function () {
    'use strict';

    angular.module('tpAngular.form').directive('tpaErrorMessages', tpaErrorMessages);

    function tpaErrorMessages() {
        return {
            templateUrl: 'app/form/tpa-error-messages.directive.html',
            controllerAs: 'vm',
            bindToController: {
                formName: '@',
                attributeName: '@'
            },
            controller: TpaErrorMessagesController
        };
    }
    
    function TpaErrorMessagesController() {

        var vm = this;

        // scope attributes
        
        // scope methods

        // init method
        init();

        function init() {


        }

        return vm;
    }
    
})();