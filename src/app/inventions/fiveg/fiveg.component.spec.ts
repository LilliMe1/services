import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivegComponent } from './fiveg.component';

describe('FivegComponent', () => {
  let component: FivegComponent;
  let fixture: ComponentFixture<FivegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
