import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ShopItem } from 'src/app/models/ShopItem';
import { ShopService } from "../../services/shop.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() shopItem: ShopItem;
  @Output() deleteShopItem: EventEmitter<ShopItem> = new EventEmitter();

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
  }

  onUpdate(shopItem) {
    console.log('update');
  }

  onDelete(shopItem) {
    this.deleteShopItem.emit(shopItem);
  }
}
