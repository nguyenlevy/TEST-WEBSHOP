import {Component, OnInit} from '@angular/core';
import {OrderType} from '../../../models/order.model';
import {TranslateService} from '../../../../shared/services/translate.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-return-supplier',
  templateUrl: './return-supplier.component.html',
  styleUrls: ['./return-supplier.component.scss']
})
export class ReturnSupplierComponent implements OnInit {
  orderType = OrderType.ReturnSupplier;
  orderId: number;

  constructor(private translateService: TranslateService,
              private router: Router,
              private titleService: Title,
              private route: ActivatedRoute) {
    this.translateService.get(['TAB_TITLE', 'ORDER', 'BUTTONS', 'NOTIFICATION']).then((res: any) => {
      if (res) {
        titleService.setTitle(res.TAB_TITLE.RETURN_SUPPLIER);
      }
    });
  }

  ngOnInit() {
    this.orderId = Number(this.route.snapshot.queryParams.orderId) || null;
  }
}
