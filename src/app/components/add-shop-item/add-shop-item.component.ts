import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ShopItem } from '../../models/ShopItem';
import { AllShopsService } from '../../services/all-shops.service';

import { Shop } from '../../models/Shop';



@Component({
  selector: 'app-add-shop-item',
  templateUrl: './add-shop-item.component.html',
  styleUrls: ['./add-shop-item.component.css']
})

export class AddShopItemComponent implements OnInit {


  shops: Shop[];

  @Output() addShopItem: EventEmitter<any> = new EventEmitter();

  name: string;
  category: string;
  price: number;
  quantity: number;
  shopId: number;

  constructor(private allShopsService: AllShopsService) {

  }

  ngOnInit(): void {
    this.allShopsService.getShops().subscribe(s => { this.shops = s });
    // console.log(this.allShopsService.getShops().subscribe());

  }

  onSubmit() {
    const shopItem = {
      name: this.name,
      category: this.category,
      price: this.price,
      quantity: this.quantity,
      shopId: this.shopId

    }

    this.addShopItem.emit(shopItem);


  }
}
