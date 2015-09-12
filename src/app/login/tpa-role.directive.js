(function () {
    'use strict';

    angular.module('tpAngular').directive('tpaRole', tpaRole);
    /** @ngInject */
    function tpaRole(Auth) {
        return {
            scope: {},
            link: function preLink($scope, element, attrs) {

                if (Auth.hasRole(attrs.tpaRole)) {
                    // show
                    element.removeClass('hidden');
                } else {
                    // hide
                    element.addClass('hidden');
                }

            }
        };
    }

}());