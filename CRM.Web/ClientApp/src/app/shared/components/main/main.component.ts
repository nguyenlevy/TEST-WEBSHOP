import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  isPos = false;
  constructor(private router: Router) {}

  ngOnInit() {
    const url = this.router.url;
    if (url && url.includes('/app/pos')) {
      this.isPos = true;
    }
  }
}
