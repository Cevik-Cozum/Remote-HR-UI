import { TestBed } from '@angular/core/testing';

import { EkipDuyuruService } from './ekipduyuru.service';

describe('EkipDuyuruService', () => {
  let service: EkipDuyuruService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EkipDuyuruService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
