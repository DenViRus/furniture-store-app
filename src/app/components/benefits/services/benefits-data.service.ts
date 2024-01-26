import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { IBenefits } from './../models/benefits.model';

@Injectable({
  providedIn: 'root',
})
export class BenefitsDataService {
  private benefitsData$ = new Observable<IBenefits>();

  constructor(private httpClient: HttpClient) {}

  public getBenefitsData(): Observable<IBenefits> {
    return (this.benefitsData$ = this.httpClient
      .get<IBenefits>('assets/json/benefitsData.json')
      .pipe(
        map((benefitsData) => {
          return benefitsData;
        })
      ));
  }
}
