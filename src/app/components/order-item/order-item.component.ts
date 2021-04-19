import { Component, OnInit, Input } from '@angular/core';
import { OrderItem } from '../../models/OrderItem';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  @Input() orderItem: OrderItem;

  constructor() { }

  ngOnInit(): void {
  }


}
