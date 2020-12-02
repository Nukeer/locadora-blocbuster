import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEditarFilmeComponent } from './criar-editar-filme.component';

describe('CriarEditarFilmeComponent', () => {
  let component: CriarEditarFilmeComponent;
  let fixture: ComponentFixture<CriarEditarFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarEditarFilmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarEditarFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
