import { TestBed } from '@angular/core/testing';
import { AuthGuardService } from './auth-guard.service';
describe('AuthGuardService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(AuthGuardService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=auth-guard.service.spec.js.map