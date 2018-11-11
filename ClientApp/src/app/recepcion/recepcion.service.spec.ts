import { TestBed, inject } from '@angular/core/testing';

import { RecepcionService } from './recepcion.service';

describe('RecepcionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecepcionService]
    });
  });

  it('should be created', inject([RecepcionService], (service: RecepcionService) => {
    expect(service).toBeTruthy();
  }));
});
