import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityrelationsComponent } from './universityrelations.component';

describe('UniversityrelationsComponent', () => {
  let component: UniversityrelationsComponent;
  let fixture: ComponentFixture<UniversityrelationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityrelationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityrelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
