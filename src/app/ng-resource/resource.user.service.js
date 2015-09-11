(function () {
    'use strict';

    angular.module('tpAngular').factory('User', tpaResourceMemberService);

    function tpaResourceMemberService($resource) {

        var service = {};

        service = $resource('/api/users/:id/:controller', {
            id: '@_id'
        }, {
            changePassword: {
                method: 'PUT',
                params: {
                    controller: 'password'
                }
            },
            get: {
                method: 'GET',
                params: {
                    id: 'me'
                }
            }
        });
        return service;
    }

}());