import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HoraEspecialista } from 'src/app/models/horaespecialista';
import { MatPaginator, MatTableDataSource, MatPaginatorIntl } from '@angular/material';

@Component({
  selector: 'app-horas-buscador',
  templateUrl: './horas-buscador.page.html',
  styleUrls: ['./horas-buscador.page.scss'],
})
export class HorasBuscadorPage implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['position','hora', 'fecha', 'medico', 'seleccionar'];
  dataSource: MatTableDataSource<HoraEspecialista> = new MatTableDataSource<HoraEspecialista>();
  public buscando: boolean = false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator ;

  constructor() { }

  ngOnInit() {

      this.dataSource.paginator = this.paginator;
      console.log("paginator")
  }
  ngAfterViewInit(){
    
  }

  resultado(result: HoraEspecialista[]) {
    if(result && result.length !== 0){
      this.buscando = true;
      this.dataSource = new MatTableDataSource<HoraEspecialista>(result);
    }
    this.ngOnInit();
  }
}
