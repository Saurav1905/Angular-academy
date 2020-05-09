import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdDropComponent } from './third-drop.component';

describe('ThirdDropComponent', () => {
  let component: ThirdDropComponent;
  let fixture: ComponentFixture<ThirdDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
