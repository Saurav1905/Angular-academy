import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrampageComponent } from './programpage.component';

describe('ProgrampageComponent', () => {
  let component: ProgrampageComponent;
  let fixture: ComponentFixture<ProgrampageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrampageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrampageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
