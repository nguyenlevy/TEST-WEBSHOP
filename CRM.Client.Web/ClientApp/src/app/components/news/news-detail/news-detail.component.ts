import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from 'src/app/theme/components/menu/menu.service';
import { Menu } from 'src/app/theme/components/menu/menu.model';
import { NewService } from '../new.service';
import { ActivatedRoute, Params } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  @Input('menuParentId') menuParentId = 0;
  public menuItems: Array<Menu>;
  blogId: number;
  public detailBlog: any = {};
  constructor(public menuService: MenuService, public newService: NewService, private activatedRoute: ActivatedRoute,) {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.blogId = params.Id;
    });
  }
  ngOnInit() {
    this.newService.getDetailBlog(this.blogId).subscribe((res: any) => {
      this.detailBlog = res.Data[0];
      this.detailBlog.Image = `${environment.apiDomainLocal}${this.detailBlog.Image}`;

    });
  }

  onClick(menuId: any = null) {
    this.menuService.toggleMenuItem(menuId);
  }

}