import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { HorasService } from 'src/app/services/horas.service';
import { TOKEN_NAME } from 'src/app/services/auth.service';
import * as jwt_decode from 'jwt-decode';
import { finalize } from 'rxjs/operators';
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