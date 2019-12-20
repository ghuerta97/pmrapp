import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HoraEspecialista } from '../../models/horaespecialista';
import { HorasService } from 'src/app/services/horas.service';
import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
})
export class BuscadorComponent implements OnInit {

  @Output() result = new EventEmitter<HoraEspecialista[]>();

  @Output() search = new EventEmitter<string>();

  constructor(private horaService: HorasService, private loadingController: LoadingController) { }

  ngOnInit() { }

  async buscarHoras(search: string) {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      translucent: true,
      mode: 'md',
    });
    await loading.present();
    this.horaService.getHorasEspecilistas(search).pipe(finalize(() => loading.dismiss()))
      .subscribe(result => {
        console.log(result);
        this.result.emit(result);
      }, error => {

      })
  }

}
