import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { IHeader } from '../models/header.model';

@Injectable({
  providedIn: 'root',
})
export class HeaderDataService {
  private headerData$ = new Observable<IHeader>();

  constructor(private httpClient: HttpClient) {}

  public getHeaderData(): Observable<IHeader> {
    return (this.headerData$ = this.httpClient
      .get<IHeader>('assets/json/headerData.json')
      .pipe(
        map((headerData) => {
          return headerData;
        })
      ));
  }
}
