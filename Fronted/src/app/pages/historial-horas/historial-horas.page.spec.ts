import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistorialHorasPage } from './historial-horas.page';

describe('HistorialHorasPage', () => {
  let component: HistorialHorasPage;
  let fixture: ComponentFixture<HistorialHorasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialHorasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistorialHorasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
