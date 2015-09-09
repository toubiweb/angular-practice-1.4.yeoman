(function () {
    'use strict';

    describe('form password service', function () {

        var tpaPasswordService;

        beforeEach(module('tpAngular.profile'));

        beforeEach(inject(function (_tpaPasswordService_) {
            tpaPasswordService = _tpaPasswordService_;
        }));

        it('short password (<= 2 characters) should result to strongness 0', function () {
            var strongness = tpaPasswordService.checkStrongnessLength('1');
            expect(strongness).toEqual(0);
        });

        it('medium password (8 characters) should result to strongness 4', function () {
            var strongness = tpaPasswordService.checkStrongnessLength('12345678');
            expect(strongness).toEqual(4);
        });

        it('long password (> 12 characters) should result to strongness 5', function () {
            var strongness = tpaPasswordService.checkStrongnessLength('123456789012');
            expect(strongness).toEqual(5);
        });

    });
})();