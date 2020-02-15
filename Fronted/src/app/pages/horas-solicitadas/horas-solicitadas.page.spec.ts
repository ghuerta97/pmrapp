import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HorasSolicitadasPage } from './horas-solicitadas.page';

describe('HorasSolicitadasPage', () => {
  let component: HorasSolicitadasPage;
  let fixture: ComponentFixture<HorasSolicitadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorasSolicitadasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HorasSolicitadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
