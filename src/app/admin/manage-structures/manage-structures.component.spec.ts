import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStructuresComponent } from './manage-structures.component';

describe('ManageStructuresComponent', () => {
  let component: ManageStructuresComponent;
  let fixture: ComponentFixture<ManageStructuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageStructuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageStructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
