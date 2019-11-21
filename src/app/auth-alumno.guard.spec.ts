import { TestBed, async, inject } from '@angular/core/testing';

import { AuthAlumnoGuard } from './auth-alumno.guard';

describe('AuthAlumnoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthAlumnoGuard]
    });
  });

  it('should ...', inject([AuthAlumnoGuard], (guard: AuthAlumnoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
