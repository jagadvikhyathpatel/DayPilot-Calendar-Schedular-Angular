import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSchedularComponent } from './calendar-schedular.component';

describe('CalendarSchedularComponent', () => {
  let component: CalendarSchedularComponent;
  let fixture: ComponentFixture<CalendarSchedularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarSchedularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarSchedularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
