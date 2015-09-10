(function () {
    'use strict';

    angular.module('tpAngular.profile').controller('TpaProfileMembersListController', TpaProfileMembersListController);

    function TpaProfileMembersListController($state, toastr, tpaResourceMemberService) {

        // view model
        var vm = this;

        // public attributes
        vm.members = [];
        vm.goToDetails = goToDetails;

        // public methods

        // initialization
        init();

        function init() {
            loadUsers();
        }

        function loadUsers() {

            tpaResourceMemberService.query(function (members) {
                vm.members = members;
            });
        }
        
        function goToDetails(member){
            $state.go('edit-user', {memberId: member._id});
        }

    }
}());