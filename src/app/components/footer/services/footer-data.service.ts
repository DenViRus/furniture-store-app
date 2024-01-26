import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { IFooter } from '../models/footer.model';

@Injectable({
  providedIn: 'root',
})
export class FooterDataService {
  private footerData$ = new Observable<IFooter>();

  constructor(private httpClient: HttpClient) {}

  public getFooterData(): Observable<IFooter> {
    return (this.footerData$ = this.httpClient
      .get<IFooter>('assets/json/footerData.json')
      .pipe(
        map((footerData) => {
          return footerData;
        })
      ));
  }
}
