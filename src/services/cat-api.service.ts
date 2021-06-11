import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ICatData } from 'src/model/catdata';
import { ICatDataSaved } from 'src/model/catdataapi';

@Injectable({
  providedIn: 'root',
})
export class CatApiService {
  constructor(private http: HttpClient) {}

  getNewCatData(): Observable<ICatData[]> {
    return this.http
      .get<ICatData[]>('https://api.thecatapi.com/v1/images/search')
      .pipe(
        retry(3) //, // retry a failed request up to 3 times
        //catchError(this.handleError) // then handle the error
      );
  }

  getSavedCatData(): Observable<ICatDataSaved[]> {
    return this.http
      .get<ICatDataSaved[]>('https://localhost:44304/api/catphoto')
      .pipe(
        retry(3) //, // retry a failed request up to 3 times
        //catchError(this.handleError) // then handle the error
      );
  }

  getBreeds(): Observable<any[]> {
    return this.http
      .get<any[]>('https://api.thecatapi.com/v1/breeds')
      .pipe(
        retry(3) //, // retry a failed request up to 3 times
        //catchError(this.handleError) // then handle the error
      );
  }

  getBreedImage(breedId: string): Observable<any> {
    return this.http
      .get<any>(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
      .pipe(
        retry(3) //, // retry a failed request up to 3 times
        //catchError(this.handleError) // then handle the error
      );
  }

  postSaveCatData(icatData: ICatData): Observable<ICatData> {
    return this.http.post<ICatData>('https://localhost:44304/api/catphoto',icatData);
  }
}
