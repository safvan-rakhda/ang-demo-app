import { TestBed } from '@angular/core/testing';

import { HttpReqInterceptorInterceptor } from './http-req-interceptor.interceptor';

describe('HttpReqInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpReqInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpReqInterceptorInterceptor = TestBed.inject(HttpReqInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
