import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavroutesComponent } from './navroutes.component';

describe('NavroutesComponent', () => {
  let component: NavroutesComponent;
  let fixture: ComponentFixture<NavroutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavroutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
