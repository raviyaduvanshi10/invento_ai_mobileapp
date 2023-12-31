import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfirmPutawaytaskPage } from './confirm-putawaytask.page';

describe('ConfirmPutawaytaskPage', () => {
  let component: ConfirmPutawaytaskPage;
  let fixture: ComponentFixture<ConfirmPutawaytaskPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmPutawaytaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmPutawaytaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
