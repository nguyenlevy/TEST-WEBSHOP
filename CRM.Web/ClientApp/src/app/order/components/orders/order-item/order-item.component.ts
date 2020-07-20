import {Component, OnInit} from '@angular/core';
import {TranslateService} from '../../../../shared/services/translate.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {OrderType} from '../../../models/order.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  orderType = OrderType.Order;
  orderId: number;

  constructor(private translateService: TranslateService,
              private router: Router,
              private titleService: Title,
              private route: ActivatedRoute) {
    this.translateService.get(['TAB_TITLE']).then((res: any) => {
      if (res) {
        titleService.setTitle(res.TAB_TITLE.ORDER_ITEM);
      }
    });
  }

  ngOnInit() {
    this.orderId = Number(this.route.snapshot.queryParams.orderId) || null;
  }
}
