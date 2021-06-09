import { TestBed } from '@angular/core/testing';
import { CatApiService } from './cat-api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

describe('CatApiService', () => {
  let service: CatApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
