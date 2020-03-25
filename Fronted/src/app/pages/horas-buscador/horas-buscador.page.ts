import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HoraEspecialista } from 'src/app/models/horaespecialista';
import { MatPaginator, MatTableDataSource, MatPaginatorIntl, MatDialog } from '@angular/material';
import { Storage } from '@ionic/storage';
import { PacienteService } from 'src/app/services/paciente.service';
import { Paciente } from 'src/app/models/paciente';
import { HorasService } from 'src/app/services/horas.service';
import { DialogConfirmationComponent } from './DialogConfirmation/dialog-confirmation.component';
import { finalize, filter } from 'rxjs/operators';
@Component({
  selector: 'app-horas-buscador',
  templateUrl: './horas-buscador.page.html',
  styleUrls: ['./horas-buscador.page.scss'],
})
export class HorasBuscadorPage implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['hora', 'fecha', 'medico', 'seleccionar'];
  arr: HoraEspecialista[] = [];
  dataSource: MatTableDataSource<HoraEspecialista> = new MatTableDataSource<HoraEspecialista>();
  public buscando: boolean = false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator ;

  constructor(
    private horaService: HorasService,
    private dialog: MatDialog) { }

  ngOnInit() {
    
    this.buscando = true;
    this.horaService.getHorasEspecilistas('medico general')
    .pipe( finalize(()=> {this.buscando = false }))
    .subscribe(data=> {
      this.arr = data;
      this.dataSource = new MatTableDataSource<HoraEspecialista>(this.arr);
      this.dataSource.paginator = this.paginator;
    }, error=> {

    })
  }
  ngAfterViewInit(){
    
  }

  resultado(result: HoraEspecialista[]) {
    this.dataSource = null;
      this.buscando = true;
      this.dataSource = new MatTableDataSource<HoraEspecialista>(result);

    this.ngOnInit();
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
      }
    })
  }
}
