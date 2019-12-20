import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit, AfterViewInit, OnChanges {
  

  @ViewChild(ToolbarComponent, {static: true}) toolbarComponent : ToolbarComponent;

  public mode: string = 'over';

  public menu: Menu[] = [
    {path: 'buscador', title: 'Buscador de horas'},
    {path: '', title: 'Horas solicitadas'},
    {path: '', title: 'Historial de horas'},
    {path: '', title: 'Información Cesfam'}
  ]; 

  constructor() {}

  ngOnInit() {
    this.toolbarComponent.sidenav = {
      action: function(sidenav) {
        sidenav.opened = !sidenav.opened;
      }
    };
  }
  ngAfterViewInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

}

export interface Menu {
  path: string;
  title: string;
  icon ?: string;
}
