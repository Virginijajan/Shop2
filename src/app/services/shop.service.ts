import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShopItem } from '../models/ShopItem';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  shopItemUrl: string = 'http://localhost:35415/shopitem';

  constructor(private http: HttpClient) { }

  getShopItems(): Observable<ShopItem[]> {
    return this.http.get<ShopItem[]>(this.shopItemUrl);

  }

  updateShopItem(shopItem: ShopItem): Observable<any> {
    const url = `${this.shopItemUrl}/${shopItem.id}`;
    return this.http.put(url, shopItem, httpOptions)
  }

  deleteShopItem(shopItem: ShopItem): Observable<ShopItem> {
    const url = `${this.shopItemUrl}/${shopItem.id}`;
    return this.http.delete<ShopItem>(url, httpOptions);
  }
  addShopItem(shopItem: ShopItem): Observable<ShopItem> {
    return this.http.post<ShopItem>(this.shopItemUrl, shopItem, httpOptions);

  }
}

// return [
    //   {
    //     id: 1,
    //     name: 'Item5',
    //     category: 'cat1',
    //     price: 10.50,
    //     quantity: 10,
    //     shopId: 1

    //   },
    //   {
    //     id: 2,
    //     name: 'Item2',
    //     category: 'cat1',
    //     price: 10.50,
    //     quantity: 10,
    //     shopId: 1

    //   },
    //   {
    //     id: 3,
    //     name: 'Item3',
    //     category: 'cat1',
    //     price: 10.50,
    //     quantity: 10,
    //     shopId: 1

    //   }
    // ]