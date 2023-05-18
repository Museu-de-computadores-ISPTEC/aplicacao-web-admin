import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExposicaoDetalheComponent } from './exposicao-detalhe.component';

describe('ExposicaoDetalheComponent', () => {
  let component: ExposicaoDetalheComponent;
  let fixture: ComponentFixture<ExposicaoDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExposicaoDetalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExposicaoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
