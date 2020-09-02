import { TestBed } from '@angular/core/testing';

import { ToplantiOdasiService } from './toplanti-odasi.service';

describe('ToplantiOdasiService', () => {
  let service: ToplantiOdasiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToplantiOdasiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
