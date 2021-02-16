import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeSingleComponent } from './demande-single.component';

describe('DemandeSingleComponent', () => {
  let component: DemandeSingleComponent;
  let fixture: ComponentFixture<DemandeSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
