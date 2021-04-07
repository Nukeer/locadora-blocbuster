import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

const TIPOPRODUTO: string[] = ['VHS', 'DVD'];

export interface FilmData {
  numFilme: string;
  tipoProd: string;
  tipoFilme: string;
  gen: string;
  titulo: string;
  atores: string;
  diretores: string;
  fornecedor: string;
  tipoIdioma: string;
  valorLocacao: string;
  dataCad: Date;
}

@Component({
  selector: 'app-criar-editar-filme',
  templateUrl: './criar-editar-filme.component.html',
  styleUrls: ['./criar-editar-filme.component.scss'],
})
export class CriarEditarFilmeComponent implements OnInit {
  film: FilmData;

  filme: FormGroup;

  generos: string[] = [
    'Ação',
    'Aventura',
    'Cinema de arte',
    'Chanchada',
    'Comédia',
    'Dança',
    'Documentário',
    'Docuficção',
    'Drama',
    'Espionagem',
    'Faroeste',
    'Fantasia',
    'Ficção científica',
    'Filmes de guerra',
    'Musical',
    'Filme policial',
    'Romance',
    'Seriado',
    'Suspense',
    'Terror',
  ];
  constructor(
    public dialogRef: MatDialogRef<CriarEditarFilmeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.initializeVariables();
  }

  initializeVariables(): void {
    this.filme = this.fb.group({
      atores: this.fb.control(this.data.value?.atores),
      titulo: this.fb.control(this.data.value?.titulo, [Validators.required]),
      dataCad: this.fb.control(this.data.value?.dataCad, [Validators.required]),
      diretores: this.fb.control(this.data.value?.diretores),
      valorLocacao: this.fb.control(this.data.value?.valorLocacao, [Validators.required]),
      tipoProd: this.fb.control(this.data.value?.tipoProd, [Validators.required]),
      tipoFilme: this.fb.control(this.data.value?.tipoProd, [Validators.required]),
      tipoIdioma: this.fb.control(this.data.value?.tipoIdioma),
      numFilme: this.fb.control(this.data.value?.numFilme, [Validators.required]),
      gen: this.fb.control(this.data.value?.gen, [Validators.required]),
      fornecedor: this.fb.control(this.data.value?.fornecedor),
    });
  }
}
