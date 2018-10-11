import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedRealityComponent } from './extended-reality.component';

describe('ExtendedRealityComponent', () => {
  let component: ExtendedRealityComponent;
  let fixture: ComponentFixture<ExtendedRealityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedRealityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedRealityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
