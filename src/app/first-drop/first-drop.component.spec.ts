import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDropComponent } from './first-drop.component';

describe('FirstDropComponent', () => {
  let component: FirstDropComponent;
  let fixture: ComponentFixture<FirstDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
