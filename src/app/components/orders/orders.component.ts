import { Component, OnInit } from '@angular/core';
import { OrderItem } from '../../models/OrderItem';
import { BuyItemService } from '../../services/buy-item.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orderItems: OrderItem[];

  constructor(private buyItemService: BuyItemService) { }

  ngOnInit(): void {
    this.buyItemService.getOrderItems().subscribe(orderItems => { this.orderItems = orderItems });

  }

}
