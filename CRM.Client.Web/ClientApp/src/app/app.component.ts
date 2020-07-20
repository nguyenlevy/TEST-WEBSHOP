import { Component, PLATFORM_ID, Inject, HostListener } from '@angular/core';
import { Settings, AppSettings } from './app.settings';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public settings: Settings;
  public showBackToTop: boolean = false;
  public scrolledCount = 0;
  constructor(public appSettings: AppSettings, public router: Router,
    @Inject(PLATFORM_ID) private platformId: Object) {
    this.settings = this.appSettings.settings;
  }

  @HostListener('window:scroll') onWindowScroll() {
    const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    (scrollTop > 300) ? this.showBackToTop = true : this.showBackToTop = false;

    if (this.settings.stickyMenuToolbar) {
      let top_toolbar = document.getElementById('top-toolbar');
      if (top_toolbar) {
        if (scrollTop >= top_toolbar.clientHeight) {
          this.settings.mainToolbarFixed = true;
        }
        else {
          this.settings.mainToolbarFixed = false;
        }
      }
    }


    let load_more = document.getElementById('load-more');
    if (load_more) {
      if (window.innerHeight > load_more.getBoundingClientRect().top + 120) {
        if (!this.settings.loadMore.complete) {
          if (this.settings.loadMore.start) {
            if (this.scrolledCount < this.settings.loadMore.step) {
              this.scrolledCount++;
              if (!this.settings.loadMore.load) {
                this.settings.loadMore.load = true;
              }
            }
            else {
              this.settings.loadMore.start = false;
              this.scrolledCount = 0;
            }
          }
        }
      }
    }
  }

  public scrollToTop() {
    var scrollDuration = 200;
    var scrollStep = -window.pageYOffset / (scrollDuration / 20);
    var scrollInterval = setInterval(() => {
      if (window.pageYOffset != 0) {
        window.scrollBy(0, scrollStep);
      }
      else {
        clearInterval(scrollInterval);
      }
    }, 10);
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo(0, 0);
        }
      });
    }
  }


  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          if (isPlatformBrowser(this.platformId)) {
            window.scrollTo(0, 0);
          }
        });
      }
    });
  }

}
