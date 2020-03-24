import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OlvidePasswordPage } from './olvide-password.page';

describe('OlvidePasswordPage', () => {
  let component: OlvidePasswordPage;
  let fixture: ComponentFixture<OlvidePasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlvidePasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OlvidePasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
