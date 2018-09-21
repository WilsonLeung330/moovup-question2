import { async, TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

describe('DataService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        HttpClientModule]
    })
    .compileComponents();
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
