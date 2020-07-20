import {Component, OnInit} from '@angular/core';
import {TranslateService} from '../../../../shared/services/translate.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {OrderType} from '../../../models/order.model';

@Component({
  selector: 'app-sale-item',
  templateUrl: './sale-item.component.html',
  styleUrls: ['./sale-item.component.scss']
})
export class SaleItemComponent implements OnInit {
  orderType = OrderType.Sale;
  orderId: number;

  constructor(private translateService: TranslateService,
              private router: Router,
              private titleService: Title,
              private route: ActivatedRoute) {
    this.translateService.get(['TAB_TITLE', 'ORDER', 'BUTTONS', 'NOTIFICATION']).then((res: any) => {
      if (res) {
        titleService.setTitle(res.TAB_TITLE.SALE_ITEM);
      }
    });
  }

  ngOnInit() {
    this.orderId = Number(this.route.snapshot.queryParams.orderId) || null;
  }
}
