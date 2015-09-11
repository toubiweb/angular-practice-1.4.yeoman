(function () {
    'use strict';

    angular.module('tpAngular').factory('tpaResourceMemberService', tpaResourceMemberService);

    function tpaResourceMemberService($resource) {

        var service = {};

        service = $resource('api/members/:memberId', {
            memberId: '@_id'
        }, {
            'update': {
                method: 'PUT'
            }
        });

        return service;
    }

}());