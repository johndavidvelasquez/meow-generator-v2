import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ICatData } from 'src/model/catdata';
import { ICatDataSaved } from 'src/model/catdataapi';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {

  constructor(private http: HttpClient) {}

  getNewCatData(): Observable<ICatData[]> {
    return this.http.get<ICatData[]>(
      'https://api.thecatapi.com/v1/images/search'
    );
  }

  getSavedCatData(): Observable<ICatDataSaved[]> {
    return this.http.get<ICatDataSaved[]>(
      'https://localhost:44304/api/catphoto'
    );
  }

  postSaveCatData(): void {
    
  }
}
