import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  @Input() public sidenav : any = {action: function(){ console.log('asd')}}; 

  @Input() public isMobile: boolean ;

  @Input() public side: any;

  constructor() { }

  ngOnInit() {
  }

  

}
