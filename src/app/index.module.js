(function () {
    'use strict';

    // define application module and dependencies
    angular.module('tpAngular', [
        'ngAnimate' // CSS-based animations: https://code.angularjs.org/1.4.5/docs/api/ngAnimate
        ,'ngCookies' // cookies management: https://code.angularjs.org/1.4.5/docs/api/ngCookies
        ,'ngTouch' // touch events for tablets & mobiles: https://code.angularjs.org/1.4.5/docs/api/ngTouch
        ,'ngMessages' // form error messages: https://code.angularjs.org/1.4.5/docs/api/ngMessages
        ,'ngSanitize' // safe HTML: https://code.angularjs.org/1.4.5/docs/api/ngSanitize
        ,'ui.router' // Angular-UI router: https://github.com/angular-ui/ui-router
        ,'mgcrea.ngStrap' // AngularJS directives for Bootstrap:  https://github.com/mgcrea/angular-strap
        ,'toastr' // angular notifications: https://github.com/Foxandxss/angular-toastr
        ,'tpAngular.profile' // profile
        ,'tpAngular.form' // form
    ]);

})();