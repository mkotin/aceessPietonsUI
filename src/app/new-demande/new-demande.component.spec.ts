import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDemandeComponent } from './new-demande.component';

describe('NewDemandeComponent', () => {
  let component: NewDemandeComponent;
  let fixture: ComponentFixture<NewDemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
