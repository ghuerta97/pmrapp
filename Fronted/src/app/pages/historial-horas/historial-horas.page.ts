import { Component, OnInit, OnDestroy } from '@angular/core';
import { HorasService } from 'src/app/services/horas.service';
import { error } from 'protractor';

@Component({
  selector: 'app-historial-horas',
  templateUrl: './historial-horas.page.html',
  styleUrls: ['./historial-horas.page.scss'],
})
export class HistorialHorasPage implements OnInit, OnDestroy {
  minDate = new Date(2020, 0, 1);
  maxDate = new Date();

  first: string = '2020-02-05T23:09:38.000+0000';

  fechas = ['2020-02-05', '2020-03-05', '2020-04-05', '2020-05-05']

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [];

  constructor(private horaService: HorasService) { }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

  onLabel(fecha) {
    let argument = this.transformAtEndStartDate(fecha); 
    this.horaService.getHoraBetweenDateStartAndEnd('2',argument[0],argument[1]).subscribe(result => {
      console.log(result);
    }, error => {
      console.error(error);
    });

  }

  transformAtEndStartDate(fecha) {
    let arr = fecha.split('-')
    var start = arr[0] + '-' + arr[1] + '-' + 1;
    var d = Date.parse(start);
    var end = arr[0] + '-' + arr[1] + '-'
    if (parseInt(arr[0]) % 4 === 0) {
      if (parseInt(arr[1]) === 2) {
        end = end + '29';
      } else {
        end = this.ident(end, arr[1])
      }
    } else {
      end = this.ident(end, arr[1])
    }
    return [start, end];
  }

  ident(end, mes) {
    if (parseInt(mes) === 11 || parseInt(mes) === 9 || parseInt(mes) === 6 || parseInt(mes) === 4) {
      end = end + '30';
    } else {
      end = end + '31';
    }
    return end;
  }
}
