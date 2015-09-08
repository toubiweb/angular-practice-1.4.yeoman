'use strict';

describe('form password service', function () {

    var passwordService;
    
    beforeEach(module('tpAngular.profile'));
    
    beforeEach(inject(function (_passwordService_) {
        passwordService = _passwordService_;
    }));

    it('short password (< 4 characters) should result to strongness 1', function () {
       var strongness = passwordService.checkStrongness('123');
        expect(strongness).toEqual(1);
    });

    it('medium password (8 characters) should result to strongness 5', function () {
       var strongness = passwordService.checkStrongness('12345678');
        expect(strongness).toEqual(5);
    });

    it('long password (> 12 characters) should result to strongness 10', function () {
       var strongness = passwordService.checkStrongness('123456789012');
        expect(strongness).toEqual(10);
    });

});
