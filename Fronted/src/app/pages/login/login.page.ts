import { Component, OnInit } from '@angular/core';
import { log} from 'js-logger';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private data: any;

  constructor() {  }

  ngOnInit() {
    console.error('nose nmose')
        if(history.state){
        this.data = history.state;
        console.log('data ',this.data);  
      }else {
        console.log('fue falso');
      }
  }

}
