import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BuyItem } from '../models/BuyItem';
import { OrderItem } from '../models/OrderItem';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BuyItemService {
  orderItemUrl: string = 'http://localhost:35415/buy';
  ordersUrl: string = 'http://localhost:35415/orderitem';
  orderUrlId: string;
  constructor(private http: HttpClient) { }

  getOrderItems(): Observable<OrderItem[]> {
    return this.http.get<OrderItem[]>(this.ordersUrl);

  }
  getOrderById(orderItem: OrderItem): Observable<OrderItem> {

    this.orderUrlId = this.ordersUrl + `/{orderItem.id}`;

    return this.http.get<OrderItem>(this.orderUrlId);
  }




  buyShopItem(buyItem: BuyItem): Observable<BuyItem> {
    return this.http.post<BuyItem>(this.orderItemUrl, buyItem, httpOptions);

  }
}