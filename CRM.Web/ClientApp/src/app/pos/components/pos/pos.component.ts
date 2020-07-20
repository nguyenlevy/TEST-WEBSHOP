import { Component, OnInit } from '@angular/core';
import { OrderType } from '../../../order/models/order.model';
@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss'],
})
export class PosComponent implements OnInit {
  orderType = OrderType.Sale;
  constructor() {}

  ngOnInit() {}
}
