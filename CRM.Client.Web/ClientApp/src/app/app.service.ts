import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Property, Location } from './app.models';
import { AppSettings } from './app.settings';
import { isPlatformBrowser } from '@angular/common';
import { KeyLocal } from './shared/common/keyLocal.enum';
import { NotificationType, NotificationsService } from 'angular2-notifications';

export class Data {
  constructor(public properties: Property[],
    public compareList: Property[],
    public favorites: Property[],
    public locations: Location[]) { }
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public Data = new Data(
    [], // properties
    [], // compareList
    [], // favorites
    []  // locations
  )

  public url = "assets/data/";
  public apiKey = 'AIzaSyA1rF9bttCxRmsNdZYjW7FzIoyrul5jb-s';

  public apiDomainLocal = 'http://103.1.239.26:65132/';


  public totalProductSelected: number = 0;

  constructor(public http: HttpClient,
    private bottomSheet: MatBottomSheet,
    private snackBar: MatSnackBar,
    public appSettings: AppSettings,
    @Inject(PLATFORM_ID) private platformId: Object, private _notifications: NotificationsService) {
    this.getProductSelected();
  }
  getProductSelected() {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem(KeyLocal.selectedProduct) && this.isJSON(localStorage.getItem(KeyLocal.selectedProduct))) {
        let listProductSelected = JSON.parse(localStorage.getItem(KeyLocal.selectedProduct));
        if (Array.isArray(listProductSelected) && listProductSelected.length > 0) {
          this.totalProductSelected = listProductSelected.length;
        }
      }
    }
  }

  public getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.url + 'properties.json');
  }

  public getPropertyById(id): Observable<Property> {
    return this.http.get<Property>(this.url + 'property-' + id + '.json');
  }

  public getFeaturedProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.url + 'featured-properties.json');
  }

  public getRelatedProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.url + 'related-properties.json');
  }

  public getPropertiesByAgentId(agentId): Observable<Property[]> {
    return this.http.get<Property[]>(this.url + 'properties-agentid-' + agentId + '.json');
  }

  public getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.url + 'locations.json');
  }

  public getAddress(lat = 40.714224, lng = -73.961452) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=' + this.apiKey);
  }

  public getLatLng(address) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?key=' + this.apiKey + '&address=' + address);
  }

  public getFullAddress(lat = 40.714224, lng = -73.961452) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=' + this.apiKey).subscribe(data => {
      return data['results'][0]['formatted_address'];
    });
  }

  public addToCompare(property: Property, component, direction) {
    if (!this.Data.compareList.filter(item => item.id == property.id)[0]) {
      this.Data.compareList.push(property);
      this.bottomSheet.open(component, {
        direction: direction
      }).afterDismissed().subscribe(isRedirect => {
        if (isRedirect) {
          if (isPlatformBrowser(this.platformId)) {
            window.scrollTo(0, 0);
          }
        }
      });
    }
  }

  public addToFavorites(property: Property, direction) {
    if (!this.Data.favorites.filter(item => item.id == property.id)[0]) {
      this.Data.favorites.push(property);
      this.snackBar.open('The property "' + property.title + '" has been added to favorites.', '×', {
        verticalPosition: 'top',
        duration: 3000,
        direction: direction
      });
    }
  }


  public getHomeCarouselSlides() {
    return this.http.get<any[]>('assets/data/slides.json');
  }


  // public paginator(items, page?, perPage?) {
  //   var page = page || 1,
  //     perPage = perPage || 4,
  //     offset = (page - 1) * perPage,
  //     paginatedItems = items.slice(offset).slice(0, perPage),
  //     totalPages = Math.ceil(items.length / perPage);
  //   return {
  //     data: paginatedItems,
  //     pagination: {
  //       page: page,
  //       perPage: perPage,
  //       prePage: page - 1 ? page - 1 : null,
  //       nextPage: (totalPages > page) ? page + 1 : null,
  //       total: items.length,
  //       totalPages: totalPages,
  //     }
  //   };
  // }


  public getAgents() {
    return [
      {
        id: 1,
        fullName: 'Lusia Manuel',
        desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
        organization: 'HouseKey',
        email: 'lusia.m@housekey.com',
        phone: '(224) 267-1346',
        social: {
          facebook: 'lusia',
          twitter: 'lusia',
          linkedin: 'lusia',
          instagram: 'lusia',
          website: 'https://lusia.manuel.com'
        },
        ratingsCount: 6,
        ratingsValue: 480,
        image: 'assets/images/agents/a-1.jpg'
      },
      {
        id: 2,
        fullName: 'Andy Warhol',
        desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
        organization: 'HouseKey',
        email: 'andy.w@housekey.com',
        phone: '(212) 457-2308',
        social: {
          facebook: '',
          twitter: '',
          linkedin: '',
          instagram: '',
          website: 'https://andy.warhol.com'
        },
        ratingsCount: 4,
        ratingsValue: 400,
        image: 'assets/images/agents/a-2.jpg'
      },
      {
        id: 3,
        fullName: 'Tereza Stiles',
        desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
        organization: 'HouseKey',
        email: 'tereza.s@housekey.com',
        phone: '(214) 617-2614',
        social: {
          facebook: '',
          twitter: '',
          linkedin: '',
          instagram: '',
          website: 'https://tereza.stiles.com'
        },
        ratingsCount: 4,
        ratingsValue: 380,
        image: 'assets/images/agents/a-3.jpg'
      },
      {
        id: 4,
        fullName: 'Michael Blair',
        desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
        organization: 'HouseKey',
        email: 'michael.b@housekey.com',
        phone: '(267) 388-1637',
        social: {
          facebook: '',
          twitter: '',
          linkedin: '',
          instagram: '',
          website: 'https://michael.blair.com'
        },
        ratingsCount: 6,
        ratingsValue: 480,
        image: 'assets/images/agents/a-4.jpg'
      },
      {
        id: 5,
        fullName: 'Michelle Ormond',
        desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
        organization: 'HouseKey',
        email: 'michelle.o@housekey.com',
        phone: '(267) 388-1637',
        social: {
          facebook: '',
          twitter: '',
          linkedin: '',
          instagram: '',
          website: 'https://michelle.ormond.com'
        },
        ratingsCount: 6,
        ratingsValue: 480,
        image: 'assets/images/agents/a-5.jpg'
      }
    ];
  }


  isJSON(data) {
    try {
      JSON.parse(data);
    } catch (e) {
      return false;
    }
    return true;
  }


  // save ListProduct vào LocalStorgate
  saveListProductLocal(listProductSelected) {
    this.totalProductSelected = 0;
    localStorage.setItem(KeyLocal.selectedProduct, JSON.stringify(listProductSelected));
    if (Array.isArray(listProductSelected) && listProductSelected.length > 0) {
      this.totalProductSelected = listProductSelected.length;
    }
  }

  // save ListProductVied vào LocalStorgate
  saveListProductViewed(listProductViewed) {
    this.totalProductSelected = 0;
    localStorage.setItem(KeyLocal.viewedProduct, JSON.stringify(listProductViewed));
  }

  public isDisplayViewed: boolean = false;
  getListProductViewed() {
    let listProductViewed: any[] = [];
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem(KeyLocal.viewedProduct) && this.isJSON(localStorage.getItem(KeyLocal.viewedProduct))) {
        if (Array.isArray(JSON.parse(localStorage.getItem(KeyLocal.viewedProduct))) && JSON.parse(localStorage.getItem(KeyLocal.viewedProduct)).length > 0) {
          listProductViewed = JSON.parse(localStorage.getItem(KeyLocal.viewedProduct));
          this.isDisplayViewed = true;
        }
      }
    }
    return listProductViewed;
  }

  notificautionStatus(title: string = '', content: string = '') {
    const temp = {
      timeOut: 2000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true,
      animate: 'fromRight'
    }
    this._notifications.create(title, content, NotificationType.Success, temp);
  }

  notificautionStatusError(title: string = '', content: string = '') {
    const temp = {
      timeOut: 2000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true,
      animate: 'fromRight'
    }
    this._notifications.create(title, content, NotificationType.Error, temp);
  }

  formatUrlImage(data) {
    if (data.Image && data.Image != null) {
      return `${this.apiDomainLocal}${data.Image}`;
    } else {
      return 'assets/images/no-images.png'
    }
  }

}
