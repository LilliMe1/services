import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomitiveComponent } from './automitive.component';

describe('AutomitiveComponent', () => {
  let component: AutomitiveComponent;
  let fixture: ComponentFixture<AutomitiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomitiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomitiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
