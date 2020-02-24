import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css']
})
export class LancamentoPesquisaComponent implements OnInit {


  cars = [
    {
      marca: 'Honda',
      modelo: 'Civic',
      ano: '2008',
      motor: '2.0',
      tipo: '1',
      valor: 12000
    },
    {
      marca: 'Wolksvagen',
      modelo: 'Gol',
      ano: '2006',
      motor: '1.0',
      tipo: '2',
      valor: 8000
    },
    {
      marca: 'Wolksvagen',
      modelo: 'Fox',
      ano: '2010',
      motor: '1.6',
      tipo: '2',
      valor: 1000
    },
    {
      marca: 'Ford',
      modelo: 'Uno',
      ano: '2015',
      motor: '1.4',
      tipo: '1',
      valor: 8000
    }
  ];

  constructor() { }

  ngOnInit() {
  }



}
