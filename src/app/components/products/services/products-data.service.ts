import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { IProducts } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsDataService {
  private productsData$ = new Observable<IProducts>();

  constructor(private httpClient: HttpClient) {}

  public getProductsData(): Observable<IProducts> {
    return (this.productsData$ = this.httpClient
      .get<IProducts>('assets/json/productsData.json')
      .pipe(
        map((productsData) => {
          return productsData;
        })
      ));
  }
}
