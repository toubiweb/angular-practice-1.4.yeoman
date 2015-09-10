(function () {
    'use strict';

    angular.module('tpAngular.form').factory('tpaResourceMemberService', tpaResourceMemberService);

    function tpaResourceMemberService($resource) {

        var service = {};

        service = $resource('api/members/:memberId', {
            memberId: '@_id'
        });
        
        return service;
    }
}());