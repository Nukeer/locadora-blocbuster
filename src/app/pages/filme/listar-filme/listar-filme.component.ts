import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CriarEditarFilmeComponent } from '../criar-editar-filme/criar-editar-filme.component';

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
  selector: 'app-item-um',
  templateUrl: './listar-filme.component.html',
  styleUrls: ['./listar-filme.component.scss'],
})
export class ListarFilmeComponent implements AfterViewInit {
  displayedColumns: string[] = ['number', 'title', 'value', 'date', 'action'];
  dataSource: MatTableDataSource<FilmData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  films: FilmData[];

  constructor(public dialog: MatDialog) {
    // Create 100 users
    this.films = [
      {
        numFilme: '01',
        tipoProd: 'DVD',
        tipoFilme: '',
        gen: '',
        titulo: 'Veloses e Furiosos',
        atores: '',
        diretores: '',
        fornecedor: '',
        tipoIdioma: '',
        valorLocacao: '2.50',
        dataCad: new Date(),
      },
      {
        numFilme: '02',
        tipoProd: 'DVD',
        tipoFilme: '',
        gen: '',
        titulo: 'Veloses e Furiosos 2',
        atores: '',
        diretores: '',
        fornecedor: '',
        tipoIdioma: '',
        valorLocacao: '2.50',
        dataCad: new Date(),
      },
      {
        numFilme: '03',
        tipoProd: 'DVD',
        tipoFilme: '',
        gen: '',
        titulo: 'Veloses e Furiosos 3',
        atores: '',
        diretores: '',
        fornecedor: '',
        tipoIdioma: '',
        valorLocacao: '2.50',
        dataCad: new Date(),
      },
      {
        numFilme: '04',
        tipoProd: 'DVD',
        tipoFilme: '',
        gen: '',
        titulo: 'Veloses e Furiosos 4',
        atores: '',
        diretores: '',
        fornecedor: '',
        tipoIdioma: '',
        valorLocacao: '2.50',
        dataCad: new Date(),
      },
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.films);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  toDate(date: Date): String {
    return new Date(date).toLocaleString();
  }

  // mode 1 = Adicionar
  // mode 2 = Editar
  openDialog(mode: 1 | 2, index?: number) {
    const nameMode = {
      '1': 'Adicionar',
      '2': 'Editar',
    };

    const dialogRef = this.dialog.open(CriarEditarFilmeComponent, {
      data: { mode: nameMode[mode], value: this.films[index] },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (this.films[index]) {
          this.films[index] = result;
        } else {
          this.films.push(result);
        }
        this.dataSource = new MatTableDataSource(this.films);
      }
    });
  }

  remover(index: number) {
    this.films.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.films);
  }
}
