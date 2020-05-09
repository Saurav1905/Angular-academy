import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurprogramComponent } from './ourprogram.component';

describe('OurprogramComponent', () => {
  let component: OurprogramComponent;
  let fixture: ComponentFixture<OurprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
