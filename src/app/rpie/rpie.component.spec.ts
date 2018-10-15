import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpieComponent } from './rpie.component';

describe('RpieComponent', () => {
  let component: RpieComponent;
  let fixture: ComponentFixture<RpieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
