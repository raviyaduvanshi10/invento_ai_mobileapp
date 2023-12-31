import { TestBed } from '@angular/core/testing';

import { InventoVisionService } from './invento-vision.service';

describe('InventoVisionService', () => {
  let service: InventoVisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoVisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
