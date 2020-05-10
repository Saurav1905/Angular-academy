import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubprogramComponent } from './subprogram.component';

describe('SubprogramComponent', () => {
  let component: SubprogramComponent;
  let fixture: ComponentFixture<SubprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
