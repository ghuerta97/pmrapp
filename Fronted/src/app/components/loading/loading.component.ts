import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {

  public col: string = 'col-md-offset-4';
  constructor() { }

  ngOnInit() {
    this.isMobileMenu();
  }
  isMobileMenu() {
    if ($(window).width() > 799) {
      this.col = 'col-md-offset-4';
      return;
    }
    this.col = 'col-md-offset-3';
  }

}
