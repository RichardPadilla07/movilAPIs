import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OlvidarContraseniaPage } from './olvidar-contrasenia.page';

describe('OlvidarContraseniaPage', () => {
  let component: OlvidarContraseniaPage;
  let fixture: ComponentFixture<OlvidarContraseniaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OlvidarContraseniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
