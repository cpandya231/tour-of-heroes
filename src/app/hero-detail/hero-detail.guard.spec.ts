import { TestBed, async, inject } from '@angular/core/testing';

import { HeroDetailGuard } from './hero-detail.guard';

describe('HeroDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroDetailGuard]
    });
  });

  it('should ...', inject([HeroDetailGuard], (guard: HeroDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
