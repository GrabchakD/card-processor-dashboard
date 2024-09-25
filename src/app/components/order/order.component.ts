import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../service/order.service";
import {Order} from "../../model/order";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orders: Array<Order> = [];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.getAllOrders()
      .subscribe(
        resp => {
          this.orders = resp.objects;
        });
  }

  generateCardNumbers() {
    console.log('i`m here')
    this.orderService.generateCardNumbers()
      .subscribe(res => {
        window.location.reload();
      });
  }
}
