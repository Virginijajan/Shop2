import { Component, OnInit } from '@angular/core';
import { Shop } from '../../../models/Shop';
import { AllShopsService } from '../../../services/all-shops.service';

@Component({
  selector: 'app-all-shops',
  templateUrl: './all-shops.component.html',
  styleUrls: ['./all-shops.component.css']
})
export class AllShopsComponent implements OnInit {

  shops: Shop[];

  constructor(private allShopsService: AllShopsService) { }

  ngOnInit(): void {
    this.allShopsService.getShops().subscribe(s => { this.shops = s });

  }

  deleteShop(shop: Shop) {

    this.shops = this.shops.filter(t => t.id != shop.id);
    this.allShopsService.deleteShop(shop).subscribe();
  }

  addShop(shop: Shop) {

    this.allShopsService.addShop(shop).subscribe();
    this.shops.push(shop);
    // shopItem => { this.shopItems.push(shopItem) }
  }
}
