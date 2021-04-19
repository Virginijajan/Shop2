import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ShopItem } from '../../models/ShopItem';
import { BuyItem } from '../../models/BuyItem';
import { ShopService } from '../../services/shop.service';



@Component({
  selector: 'app-buy-item',
  templateUrl: './buy-item.component.html',
  styleUrls: ['./buy-item.component.css']
})
export class BuyItemComponent implements OnInit {


  shopItems: ShopItem[];
  shopItem: ShopItem;

  @Output() buyShopItem: EventEmitter<any> = new EventEmitter();

  name: string;
  quantity: number;

  constructor(private ShopService: ShopService) { }

  ngOnInit(): void {
    this.ShopService.getShopItems().subscribe(s => { this.shopItems = s });
  }

  onSubmit() {
    const buyItem = {
      name: this.name,
      quantity: this.quantity,

    }



    this.buyShopItem.emit(buyItem);


  }
}
