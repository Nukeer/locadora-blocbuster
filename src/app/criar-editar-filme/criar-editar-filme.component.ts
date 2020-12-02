import { Component, Inject, OnInit } from '@angular/core';
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
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.film = this.initializeVariables();
  }

  ngOnInit(): void {}

  initializeVariables(): FilmData {
    const value: FilmData = {
      atores: this.data.value ? this.data.value.atores : '',
      titulo: this.data.value ? this.data.value.titulo : '',
      dataCad: this.data.value ? this.data.value.dataCad : '',
      diretores: this.data.value ? this.data.value.diretores : '',
      valorLocacao: this.data.value ? this.data.value.valorLocacao : '',
      tipoProd: this.data.value ? this.data.value.tipoProd : '',
      tipoIdioma: this.data.value ? this.data.value.tipoIdioma : '',
      tipoFilme: this.data.value ? this.data.value.tipoFilme : '',
      numFilme: this.data.value ? this.data.value.numFilme : '',
      gen: this.data.value ? this.data.value.gen : '',
      fornecedor: this.data.value ? this.data.value.fornecedor : '',
    };
    return value;
  }
}
