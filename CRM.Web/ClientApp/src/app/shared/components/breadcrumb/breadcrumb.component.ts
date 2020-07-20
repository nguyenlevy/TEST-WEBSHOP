import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {isNullOrUndefined} from 'util';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {TranslateService} from '../../services/translate.service';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  static readonly ROUTE_DATA_BREADCRUMB = 'breadcrumb';
  menuItems: MenuItem[];
  langDisplay: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.translateService.get(['BREADCRUMB']).then((res: any) => {
      if (res) {
        this.langDisplay = res.BREADCRUMB;
      }
    });
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => this.menuItems = this.createBreadcrumbs(this.activatedRoute.root));
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: MenuItem[] = []): MenuItem[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      let label = child.snapshot.data[BreadcrumbComponent.ROUTE_DATA_BREADCRUMB];
      if (!isNullOrUndefined(label)) {
        label = this.langDisplay && this.langDisplay[label] ? this.langDisplay[label] : '';
        breadcrumbs.push({label, routerLink: [url]});
      }

      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
  }
}
