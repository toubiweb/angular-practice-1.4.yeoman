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
        // 'edition' or 'creation'
        vm.mode;
        vm.activeMenu;
        vm.remove = remove;

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
            if (vm.user) {
                return vm.user.firstName + ' ' + vm.user.lastName;
            }
        }

        function reset() {

            if ($stateParams.memberId) {

                vm.mode = 'edition';
                vm.activeMenu = 'edit-user';

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

                vm.mode = 'creation';
                vm.activeMenu = 'create-user';
                vm.user = {};
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

                if (vm.mode === 'edition') {

                    tpaResourceMemberService.update({
                        memberId: vm.user._id
                    }, vm.user, function (member) {
                        vm.user = member;
                        // display an success message
                        toastr.success('User successfully saved.');

                        $timeout(function () {
                            // redirect to list after 2s timeout
                            $state.go('view-members');
                        }, 2000);

                    }, function (err) {
                        $log.error(err);
                        // display an error message
                        toastr.error('An error occured while saving user.');
                    });
                } else {

                    tpaResourceMemberService.save(vm.user, function (member) {
                        vm.user = member;
                        // display an success message
                        toastr.success('User successfully saved.');

                        $timeout(function () {
                            // redirect to list after 2s timeout
                            $state.go('view-members');
                        }, 2000);

                    }, function (err) {
                        $log.error(err);
                        // display an error message
                        toastr.error('An error occured while saving user.');
                    });
                }
            }
        }

        function remove() {
            tpaResourceMemberService.remove({
                    memberId: vm.user._id
                },
                function (member) {
                    // display an success message
                    toastr.success('User successfully removed.');

                    $timeout(function () {
                        // redirect to list after 2s timeout
                        $state.go('view-members');
                    }, 2000);

                },
                function (err) {
                    $log.error(err);
                    // display an error message
                    toastr.error('An error occured while removing user.');
                });
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