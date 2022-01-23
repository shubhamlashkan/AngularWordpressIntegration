import { TestBed } from '@angular/core/testing';

import { WordPressAPIService } from './word-press-api.service';

describe('WordPressAPIService', () => {
  let service: WordPressAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordPressAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
