import { TestBed } from '@angular/core/testing';

import { WordPoolService } from './word-pool.service';

describe('WordPoolService', () => {
  let service: WordPoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordPoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
