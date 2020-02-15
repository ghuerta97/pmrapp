import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoCesfamPage } from './info-cesfam.page';

describe('InfoCesfamPage', () => {
  let component: InfoCesfamPage;
  let fixture: ComponentFixture<InfoCesfamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCesfamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoCesfamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
