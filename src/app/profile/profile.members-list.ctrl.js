(function () {
    'use strict';

    angular.module('tpAngular.profile').controller('TpaProfileMembersListController', TpaProfileMembersListController);

    function TpaProfileMembersListController($scope, $state, $stateParams, $log, toastr, tpaResourceMemberService) {

        // view model
        var vm = this;

        // public attributes
        vm.members = [];

        // public methods

        // initialization
        init();

        function init() {

            loadUsers();

        }

        function loadUsers() {

            var member = tpaResourceMemberService.query(function (members) {
                $log.info(members);
                vm.members = members;
            });
        }

    }
}());