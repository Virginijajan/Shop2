import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shop } from 'src/app/models/Shop';
import { AllShopsService } from "../../../services/all-shops.service";

@Component({
  selector: 'app-all-shops-shop',
  templateUrl: './all-shops-shop.component.html',
  styleUrls: ['./all-shops-shop.component.css']
})
export class AllShopsShopComponent implements OnInit {

  @Input() shop: Shop;
  @Output() deleteShop: EventEmitter<Shop> = new EventEmitter();


  constructor(private allShopsService: AllShopsService) { }

  ngOnInit(): void {
  }

  onUpdate(shop) {
    console.log('update');
  }

  onDelete(shop) {
    this.deleteShop.emit(shop);
  }
}
