(function () {
    'use strict';

    angular.module('tpAngular.profile').controller('TpaProfileMembersListController', TpaProfileMembersListController);

    function TpaProfileMembersListController($state, toastr, tpaResourceMemberService) {

        // view model
        var vm = this;

        // public attributes
        vm.members = [];
        vm.itemsByPage = 5;
        vm.currentPage = 1;

        // public methods
        vm.goToDetails = goToDetails;
        vm.getFirstIndex = getFirstIndex;
        vm.getFirstHumanIndex = getFirstHumanIndex;
        vm.getLastHumanIndex = getLastHumanIndex;
        vm.getTotalPages = getTotalPages;
        vm.goToNextPage = goToNextPage;
        vm.goToPreviousPage = goToPreviousPage;

        // initialization
        init();

        function init() {
            loadUsers();
        }

        function loadUsers() {

            tpaResourceMemberService.query({
                country: 'ma',
                max: 100
            }, function (members) {
                vm.members = members;
            });
        }

        function goToDetails(member) {
            $state.go('edit-user', {
                memberId: member._id
            });
        }

        function getTotalPages() {
            if (vm.members && vm.members.length) {
                return Math.ceil(vm.members.length / vm.itemsByPage);
            } else {
                return null;
            }
        }

        function getFirstIndex() {
            if (vm.currentPage > 0 && vm.itemsByPage > 0) {
                return vm.itemsByPage * (vm.currentPage - 1);
            }
            return 0;
        }

        function getFirstHumanIndex() {
            return getFirstIndex() + 1;
        }

        function getLastHumanIndex() {
            return getFirstHumanIndex() + vm.itemsByPage - 1;
        }

        function goToNextPage() {
            if (vm.currentPage >= getTotalPages()) {
                vm.currentPage = getTotalPages();
            } else {
                vm.currentPage++;
            }
        }

        function goToPreviousPage() {
            if (vm.currentPage <= 1) {
                vm.currentPage = 1;
            } else {
                vm.currentPage--;
            }
        }

    }
}());