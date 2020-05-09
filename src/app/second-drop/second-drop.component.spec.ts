import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDropComponent } from './second-drop.component';

describe('SecondDropComponent', () => {
  let component: SecondDropComponent;
  let fixture: ComponentFixture<SecondDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
