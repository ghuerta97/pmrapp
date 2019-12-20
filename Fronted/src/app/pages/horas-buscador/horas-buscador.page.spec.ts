import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HorasBuscadorPage } from './horas-buscador.page';

describe('HorasBuscadorPage', () => {
  let component: HorasBuscadorPage;
  let fixture: ComponentFixture<HorasBuscadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorasBuscadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HorasBuscadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
