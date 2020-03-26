import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { HoraEspecialista } from 'src/app/models/horaespecialista';
import { MatPaginator, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HorasService } from 'src/app/services/horas.service';
import { finalize} from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import * as jwt_decode from 'jwt-decode';
import { TOKEN_NAME } from 'src/app/services/auth.service';
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
  noselect= false;
  public comment: string = '';

  get horas(): HoraEspecialista[] {
    return this.arr
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  set horas(horas:HoraEspecialista[]){
    this.arr = horas;
  }
  modal: HTMLIonModalElement;
  constructor(
    private horaService: HorasService,
    private dialog: MatDialog,
    private modalController: ModalController) {
     }

  async ngOnInit() {

    
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
  onNoClick() {
    this.noselect = false;
  }
  asignar(){
    this.noselect = true;
  }

}

@Component({
    selector: 'dialog-confirmation',
    templateUrl: 'dialog-confirmation.component.html'
})
export class DialogConfirmationComponent {
    public comment: string = '';
    constructor(
        public dialogRef: MatDialogRef<DialogConfirmationComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private horaService: HorasService
    ) {

    }

    onSubmit() {
      var decoded = jwt_decode(localStorage.getItem(TOKEN_NAME));
      this.horaService.asignarHoratoPaciente(this.data.hora, decoded.sub, this.comment)
          .subscribe(result => {
              if(result) {
                  this.dialogRef.close({update: true,null: false});
                  return;
              }
              this.dialogRef.close({ update: false, null: true });
          })
  }

    onNoClick(): void {
      this.dialogRef.close({ update: false });
  }

  }