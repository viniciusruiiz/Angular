import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPcComponent } from './dashboard-pc.component';

describe('DashboardPcComponent', () => {
  let component: DashboardPcComponent;
  let fixture: ComponentFixture<DashboardPcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
