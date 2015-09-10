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

                var salaryMin;
                if ($scope.age && $scope.age >= 20) {
                    salaryMin = 10000;
                } else {
                    salaryMin = 8000;
                }

                if (parseFloat(ngModelCtrl.$viewValue) < salaryMin) {
                    return false;
                } else {
                    return true;
                }
            };

            $scope.$watch(function(){
                return $scope.age;
            }, function (newAge, oldAge) {
                ngModelCtrl.$$parseAndValidate();
            });
        }

    }

}());