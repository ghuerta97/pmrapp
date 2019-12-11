import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

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
