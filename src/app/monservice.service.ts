import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { tap, Observable } from 'rxjs';
import { Article } from './model/article';
@Injectable()
export class MonserviceService {
  constructor(private httpClient: HttpClient) {}

  count: number = 0;
  public getCatalogue(): Observable<Article[]> {
    return this.httpClient
      .get<Article[]>(environment.baseUrl)
      .pipe(tap((v) => console.log(v)));
  }
}
