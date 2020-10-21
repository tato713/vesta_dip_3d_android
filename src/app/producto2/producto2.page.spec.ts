import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Producto2Page } from './producto2.page';

describe('Producto2Page', () => {
  let component: Producto2Page;
  let fixture: ComponentFixture<Producto2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Producto2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Producto2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
