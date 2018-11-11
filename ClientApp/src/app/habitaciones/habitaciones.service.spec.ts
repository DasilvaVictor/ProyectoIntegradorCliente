import { TestBed, inject } from '@angular/core/testing';

import { HabitacionesService } from './habitaciones.service';

describe('HabitacionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HabitacionesService]
    });
  });

  it('should be created', inject([HabitacionesService], (service: HabitacionesService) => {
    expect(service).toBeTruthy();
  }));
});
