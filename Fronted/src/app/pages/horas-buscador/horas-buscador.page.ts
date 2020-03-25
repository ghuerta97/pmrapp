import { Component, OnInit, ViewChild } from '@angular/core';
import { HoraEspecialista } from 'src/app/models/horaespecialista';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { HorasService } from 'src/app/services/horas.service';
import { DialogConfirmationComponent } from './DialogConfirmation/dialog-confirmation.component';
import { finalize} from 'rxjs/operators';
import $ from 'jquery';
@Component({
  selector: 'app-horas-buscador',
  templateUrl: './horas-buscador.page.html',
  styleUrls: ['./horas-buscador.page.scss'],
})
export class HorasBuscadorPage implements OnInit {
  displayedColumns: string[] = ['hora', 'fecha', 'medico', 'seleccionar'];
  arr: HoraEspecialista[] = [];
  dataSource: MatTableDataSource<HoraEspecialista> = new MatTableDataSource<HoraEspecialista>();
  public buscando: boolean = false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator ;

  page = 1;
  pageSize = 4;
  collectionSize = 0;

  get horas(): HoraEspecialista[] {
    return this.arr
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  set horas(horas:HoraEspecialista[]){
    this.arr = horas;
  }

  constructor(
    private horaService: HorasService,
    private dialog: MatDialog) {
     }

  ngOnInit() {

    
    this.buscando = true;
    this.horaService.getHorasEspecilistas('medico general')
    .pipe( finalize(()=> {this.buscando = false }))
    .subscribe(data=> {
      this.horas = data;
      this.collectionSize = this.horas.length;
      this.dataSource = new MatTableDataSource<HoraEspecialista>(this.arr);
    }, error=> {
      console.error(error);
    })
    
  }

  asignarHora(element) {
    const dialogElem = this.dialog.open(DialogConfirmationComponent, {
      data: {
        hora: element
      }
    })
    dialogElem.afterClosed().subscribe(result => {
      if(result.update) {
        this.ngOnInit();
      }else if(result.null){
        alert('Tiene una hora asignada en esa fecha');
      }
    })
  }
}
