import { WebserviceService } from './../webservice.service';

import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-formpontuacao',
  templateUrl: './formpontuacao.component.html',
  styleUrls: ['./formpontuacao.component.css']
})

// Classe Relacionada ao componente criado formpontuacao
export class FormpontuacaoComponent implements OnInit {


  player = {
    nome: '',
    qtdVitorias: '',
    qtdPartidas: ''
  };

  players: Array<any>;

  constructor(private dataService: WebserviceService) {}

  ngOnInit() {
    this.listar();
  }

// Metódo que capta o retorno do metódo listar e armazena os dados no array players que será usado na listagem dos dados de jogadores
listar() {
  this.dataService.listar().subscribe(res => this.players = res);
}

// Metódo que recebe o id e o envia para o metódo que realiza a exclusão dos dados
deletar(id) {
  this.dataService.deletar(id);
}

// Metódo que recebe os dados do formulário e os envia para o metódo que salva os dados
salvar(nome , vic, partida) {
  if (nome === '' || vic === '' || partida === '' ) {
    Swal({title: 'Campos Vazios,Por favor preencha os campos vazios !!', type: 'error'});

  } else {
    this.player.nome = nome;
    this.player.qtdPartidas = partida;
    this.player.qtdVitorias = vic;
    this.dataService.salvar(this.player);
  }
}

  // Metódo que recebe os dados da listagem e os envia para o metódo que realiza a atualização dos campos de partida e vitória
  addPartida(nome, vic , partida, id) {
    this.dataService.AddPartidaVitoria(nome, vic, partida, id);
  }

  // Metódo que recebe os dados da listagem e os envia para o metódo que realiza a atualização dos campos de partida e vitória
  addVitoria(nome, vic , partida, id) {
    this.dataService.AddPartidaVitoria(nome, vic, partida, id);
  }


}

