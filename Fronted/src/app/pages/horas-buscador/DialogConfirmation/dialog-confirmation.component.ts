import { Component, Inject, ViewChild, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSpinner, MatDialog } from '@angular/material';
import { HoraEspecialista } from 'src/app/models/horaespecialista';
import { HorasService } from 'src/app/services/horas.service';

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
    
      this.data.hora.observacion = this.comment;
      console.log(this.comment)
      console.log(this.data)
      this.horaService.asignarHoratoPaciente(this.data.hora,localStorage.getItem('user_rut'))
      .subscribe(result=> {
          this.dialogRef.close({update: true});
      })
    }

    onNoClick(): void {
        this.dialogRef.close({update: false});
      }
}