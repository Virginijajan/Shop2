import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.css']
})
export class AddShopComponent implements OnInit {

  @Output() addShop: EventEmitter<any> = new EventEmitter();

  name: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const shop = {
      name: this.name

    }
    this.addShop.emit(shop);


  }
}
