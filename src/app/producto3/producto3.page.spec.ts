import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Producto3Page } from './producto3.page';

describe('Producto3Page', () => {
  let component: Producto3Page;
  let fixture: ComponentFixture<Producto3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Producto3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Producto3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
