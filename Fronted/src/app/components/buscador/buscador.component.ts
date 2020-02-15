import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HoraEspecialista } from '../../models/horaespecialista';
import { HorasService } from 'src/app/services/horas.service';
import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { Especialidad } from 'src/app/models/especialidad';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
})
export class BuscadorComponent implements OnInit {

  @Output() result = new EventEmitter<HoraEspecialista[]>();

  @Output() search = new EventEmitter<string>();

  especialidades = [] as Especialidad[];

  horasFounds = [] as HoraEspecialista[];
  
  constructor(private horaService: HorasService, private loadingController: LoadingController) { }

  ngOnInit() { 
    this.horaService.getEspecialidades().subscribe( result  => {
      this.especialidades = result._embedded.especialidad;
    }, error => {
      console.error(error);
    });
  }

  async buscarHoras(search: any) {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      translucent: true,
      mode: 'md',
    });
    await loading.present();
    if(search.length > 0) {
      for(let i = 0; i < search.length ; i++){
        this.horaService.getHorasEspecilistas(search[i].value.nombre).pipe(finalize(() => loading.dismiss()))
      .subscribe(result => {
        if(result) {
          this.horasFounds.concat(result);
        }
      }, error => {

      })
      }
      this.result.emit(this.horasFounds);
    }
  }

}
