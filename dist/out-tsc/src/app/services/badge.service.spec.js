import { TestBed } from '@angular/core/testing';
import { BadgeService } from './badge.service';
describe('BadgeService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(BadgeService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=badge.service.spec.js.map