
    
    'use strict';


describe('Test directive tpa-robustness-bar', function () {
    var $compile,
        $rootScope, $scope;

    // load module containing the directive
    beforeEach(module('tpAngular.form'));
     
    // load templates
    beforeEach(module('tpAngular'));

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
        
        // FIXME
        return;
        
console.log(template);
        
        // get controller
        var vm = element.controller('vm');
        
        
        console.log(element);
        
        // update the scope
        vm.passwordModel = 'passWord123456';

        // run a $digest cycle to update your template with new data
        $rootScope.$digest();

        // Render the template as a string
        var templateAsHtml = template.html();

        // fake check
        expect(template.find('.robustness-bar').text()).toContain('toto');

    });
});