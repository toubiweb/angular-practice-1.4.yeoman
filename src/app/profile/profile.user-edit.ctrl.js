(function () {
    'use strict';

    angular.module('tpAngular.profile').controller('TpaProfileUserEditController', TpaProfileUserEditController);

    function TpaProfileUserEditController($scope, $state, $stateParams, $log, toastr, moment) {

        // view model
        var vm = this;

        // public attributes
        vm.user = null;

        // public methods
        vm.getFullName = getFullName;
        vm.reset = reset;
        vm.getAgeInYears = getAgeInYears;
        vm.employedUpdated = employedUpdated;
        vm.submit = submit;

        // initialization
        init();

        function init() {
            $log.info('Initializing controller...');

            reset();

            $scope.$on('$destroy', onDestroy);
        }

        function onDestroy() {
            $log.info('Releasing resources...');
        }

        function getFullName() {
            return vm.user.firstName + ' ' + vm.user.lastName;
        }

        function reset() {

            vm.user = {
                firstName: $stateParams.firstName,
                lastName: null,
                email: 'john.smith@sqli.com',
                birthdate: moment("01/07/1980", "DD/MM/YYYY").toDate(),
                gender: 'male',
                employed: true,
                salary: 10000
            };
        }

        function getAgeInYears() {
            if (!vm.user || !vm.user.birthdate) {
                return null;
            }

            var today = moment(new Date());
            var birthday = moment(vm.user.birthdate);

            var years = today.diff(birthday, 'years', false);
            if (years >= 0) {
                return years;
            } else {
                return null;
            }
        }

        function employedUpdated() {
            if (!vm.user.employed) {
                // re-init salary to null
                vm.user.salary = null;
            }
        }

        function submit(userForm) {
            userForm.$setSubmitted();

            if (userForm.$valid) {
                toastr.success('User successfully saved.');
                $state.go('edit-password', {
                    firstName: vm.user.firstName
                });
            }
        }

    }
}());