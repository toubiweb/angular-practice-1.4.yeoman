(function () {
    'use strict';

    angular.module('tpAngular.form').directive('tpaSalaryValidator', tpaSalaryValidator);

    function tpaSalaryValidator() {
        return {
            scope: {
                age: '='
            },
            require: 'ngModel',
            link: TpaSalaryValidatorLink
        };
    }

    function TpaSalaryValidatorLink($scope, $element, $attrs, ngModelCtrl) {

        init();

        function init() {
          
            ngModelCtrl.$validators.salary = function () {
                if (ngModelCtrl.$viewValue < 100) {
                    return false;
                } else {
                    return true;
                }
            };
        }

    }

})();