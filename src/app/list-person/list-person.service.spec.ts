import { TestBed } from '@angular/core/testing';

import { ListPersonService } from './list-person.service';

describe('ListPersonService', () => {
  let service: ListPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
