import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa-pessoa',
  templateUrl: './pesquisa-pessoa.component.html',
  styleUrls: ['./pesquisa-pessoa.component.css']
})
export class PesquisaPessoaComponent implements OnInit {


  pessoas = [
    {
      nome: 'Luiz Eduardo',
      cidade: 'Vitoria de Santo Antão',
      estado: 'PE',
      status: 'Ativo'

    },
    {
      nome: 'Josefa Maria',
      cidade: 'Vitoria de Santo Antão',
      estado: 'PE',
      status: 'Ativo'
    },
    {
      nome: 'Marcos',
      cidade: 'Recife',
      estado: 'PE',
      status: 'Ativo'
    },

    {

      nome: 'João',
      cidade: 'São Paulo',
      estado: 'SP',
      status: 'Inativo'

    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
