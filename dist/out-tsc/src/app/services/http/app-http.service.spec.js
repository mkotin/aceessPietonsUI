import { TestBed } from '@angular/core/testing';
import { AppHttpService } from './app-http.service';
describe('AppHttpService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(AppHttpService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=app-http.service.spec.js.map