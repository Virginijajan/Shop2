import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Shop } from '../models/Shop';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})


export class AllShopsService {

  shopUrl: string = 'https://localhost:44352/shop';

  constructor(private http: HttpClient) { }

  getShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(this.shopUrl);

  }
  updateShops(shop: Shop): Observable<any> {
    const url = `${this.shopUrl}/${shop.id}`;
    return this.http.put(url, shop, httpOptions)
  }

  deleteShop(shop: Shop): Observable<Shop> {
    const url = `${this.shopUrl}/${shop.id}`;
    return this.http.delete<Shop>(url, httpOptions);
  }
  addShop(shop: Shop): Observable<Shop> {
    return this.http.post<Shop>(this.shopUrl, shop, httpOptions);

  }
}
