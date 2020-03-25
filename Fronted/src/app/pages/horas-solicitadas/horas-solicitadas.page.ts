import { Component, OnInit } from '@angular/core';
import { HorasService } from '../../services/horas.service';
import { HoraEspecialista } from 'src/app/models/horaespecialista';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AuthService, TOKEN_NAME } from 'src/app/services/auth.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-horas-solicitadas',
  templateUrl: './horas-solicitadas.page.html',
  styleUrls: ['./horas-solicitadas.page.scss'],
})
export class HorasSolicitadasPage implements OnInit {

  horaSolicitadas = [] as HoraEspecialista[];
  constructor(private horaService: HorasService,
              private dialog: MatDialog,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    var decoded = jwt_decode(localStorage.getItem(TOKEN_NAME));
    if(decoded.sub){
      this.horaService.getHorasByPacienteRut(decoded.sub).subscribe(result => {
        this.horaSolicitadas = result;
        console.log(this.horaSolicitadas)
      })
    }else {
      this.router.navigateByUrl('principal');
    }
  }

  openDialogCancelar(hora: HoraEspecialista) {
    let dia = this.dialog.open(DialogCancelar, {

    });
    dia.beforeClosed().subscribe(
      data=> {
        if( data.cancelar ){
          hora.asignada = false;
          hora.paciente = null;
          this.horaService.cancelarHoraMedica(hora)
          .subscribe(data=> {
            this.ngOnInit();
          }, error=> {
            console.error(error);
          })
        }
      }
    )
  }
}

@Component({
  selector: 'dialog-cancelar',
  template: '<div mat-dialog-content> ¿Desea cancelar?</div> <div mat-dialog-actions > <button mat-button (click)="cancelar()" >Si </button> <button mat-button >Cancelar </button>   </div>'
})
export class DialogCancelar {
 constructor(public dialogRef: MatDialogRef<DialogCancelar>) {}

 close() {this.dialogRef.close({cancelar: false});}

 cancelar() { this.dialogRef.close({cancelar: true}) }
}
