import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { BuyItemService } from '../../services/buy-item.service';
import { ShopItem } from '../../models/ShopItem';
import { BuyItem } from '../../models/BuyItem';
import { OrderItem } from 'src/app/models/OrderItem';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shopItems: ShopItem[];
  shopItem: ShopItem;

  buyItem: BuyItem = {
    category: '',
    name: '',
    quantity: 0,
    price: 0,
    discount: 0,
    amount: 0,
    itemName: ''
  };
  // buyItem:BuyItem[];


  orderItems: OrderItem[];


  constructor(private shopService: ShopService, private buyItemService: BuyItemService) { }

  ngOnInit(): void {
    this.shopService.getShopItems().subscribe(shopItems => { this.shopItems = shopItems });


  }

  deleteShopItem(shopItem: ShopItem) {

    this.shopItems = this.shopItems.filter(t => t.id != shopItem.id);
    this.shopService.deleteShopItem(shopItem).subscribe();
  }

  addShopItem(shopItem: ShopItem) {

    this.shopService.addShopItem(shopItem).subscribe();
    this.shopItems.push(shopItem);

  }

  buyShopItem(buyItem: BuyItem) {

    this.buyItemService.buyShopItem(buyItem).subscribe(s => {
      this.buyItem.amount = s.amount;
      this.buyItem.price = s.price;
      this.buyItem.quantity = s.quantity;
      this.buyItem.itemName = s.itemName;
      this.buyItem.discount = s.discount;
      this.buyItem.category = s.category;

      console.log(s)
    });


    for (let i = 0; i < this.shopItems.length; i++) {
      if (buyItem.name === this.shopItems[i].name) {
        this.shopItem = this.shopItems[i];
        break;
      }
    }
    this.shopItem.quantity = this.shopItem.quantity - buyItem.quantity;


  }
}
