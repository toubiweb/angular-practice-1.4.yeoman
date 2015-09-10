(function () {
    'use strict';

    angular.module('tpAngular.profile').controller('TpaProfileUserEditController', TpaProfileUserEditController);

    function TpaProfileUserEditController($scope, $state, $stateParams, $log, $timeout, toastr, moment, tpaResourceMemberService) {

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
        vm.getMinSalary = getMinSalary;

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

            if ($stateParams.memberId) {

                tpaResourceMemberService.get({
                    memberId: $stateParams.memberId
                }, function (member) {
                    vm.user = member;
                }, function (err) {
                    $log.error(err);
                    // display an error message
                    toastr.error('An error occured retrieving user.');
                    $timeout(function () {
                        // redirect to list after 2s timeout
                        $state.go('view-members');
                    }, 2000);
                });

            } else {
                // display an error message
                toastr.error('Invalid URL.');
                $timeout(function () {
                    // redirect to list after 2s timeout
                    $state.go('view-members');
                }, 2000);
            }

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

        function getMinSalary() {
            var age = getAgeInYears();

            var minSalary;
            if (age && age > 20) {
                minSalary = 10000;
            } else {
                minSalary = 8000;
            }

            return minSalary;
        }

    }
}());