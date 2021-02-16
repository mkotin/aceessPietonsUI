import { TestBed } from '@angular/core/testing';
import { DemandeServiceService } from './demande-service.service';
describe('DemandeServiceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(DemandeServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=demande-service.service.spec.js.map