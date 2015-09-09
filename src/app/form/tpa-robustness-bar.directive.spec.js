
    
    'use strict';


describe('Test directive tpa-robustness-bar', function () {
    var $compile,
        $rootScope, $scope;

    // load module containing the directive
    beforeEach(module('tpAngular.form'));
     
    // load templates
    beforeEach(module('ngHtml2JsPreprocessor'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        // the injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $scope = _$rootScope_.$new();
    }));

    it('tpa-robustness-bar TEST', function () {

        // compile the template
        var element = angular.element("<div tpa-robustness-bar password=\"passwordModel\"></div>");
        var template = $compile(element)($scope);
 /*     
        $scope.tags = ['test', 'truc'];
        
        console.log(element.controller('TpaRobustnessBarController'));
console.log(template);
        
        // get controller
        var vm = element.controller('vm');*/
        
        
        // update the scope
        $scope.passwordModel = 'passWord123456';

        // run a $digest cycle to update your template with new data
        $rootScope.$digest();

        // Render the template as a string
        var templateAsHtml = template.html();

        console.log(templateAsHtml);
        
        // fake check
        expect(template.find('div').text()).toContain('toto');

    });
});