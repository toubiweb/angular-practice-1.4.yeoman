(function () {
    'use strict';


    describe('Test directive tpa-robustness-bar', function () {
        var $compile,
            $rootScope, $scope, $log;

        // load module containing the directive
        beforeEach(module('tpAngular.form'));

        // load templates
        beforeEach(module('ngHtml2JsPreprocessor'));

        beforeEach(inject(function (_$compile_, _$rootScope_, _$log_) {
            // the injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new();
            $log = _$log_;
        }));

        it('tpa-robustness-bar TEST', function () {

            // compile the template
            var element = angular.element("<div tpa-robustness-bar password=\"passModel\"></div>");
            var template = $compile(element)($scope);

            // update root scope with strong password
            $scope.passModel = 'Robu5tP@ssw0rd';
            // run a $digest cycle to update your template with new data
            $rootScope.$digest();

            // check the progressbar to contain progress-bar-success class
            expect(template.find('div').html().trim()).toContain('progress-bar-success');

            // update root scope with poor password
            $scope.passModel = 'poorpassword';

            // run a $digest cycle to update your template with new data
            $rootScope.$digest();

            // check the progressbar to contain progress-bar-danger class
            expect(template.find('div').html().trim()).toContain('progress-bar-danger');

        });
    });

}());