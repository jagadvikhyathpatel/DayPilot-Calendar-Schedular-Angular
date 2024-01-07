import { TestBed } from '@angular/core/testing';

import { CalendarSchedularService } from './calendar-schedular.service';

describe('CalendarSchedularService', () => {
  let service: CalendarSchedularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarSchedularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
