import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// Classe que irá consumir a api desenvolvida através do metódo XMLHttpRequest
export class WebserviceService {

  playersUrl = 'http://localhost:8081/game';
  constructor(public http: HttpClient) {}


  // Metódo que retorna uma lista de todos os dados dos jogadores obtidos da api
  listar() {
    return this.http.get<any[]>(`${this.playersUrl}`);
  }

  // Metódo que salva os dados do jogador na api
  salvar(player) {
    const xhr = new XMLHttpRequest();

  xhr.open('POST', this.playersUrl);

  xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

  xhr.send(JSON.stringify(player));
  xhr.onreadystatechange = verificaAjax;

    function verificaAjax() {
      console.log(xhr.readyState);
      console.log(xhr.status);

      if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status === 201 || xhr.status === 304) {
        console.log(xhr.responseText);
        let resposta = xhr.responseText;
        resposta = JSON.parse(resposta);
        console.log(resposta);
        location.reload();
        } else {
            console.log('deu ruim na resposta');
            console.log(xhr);
        }
      }
    }

  }


  // Metódo que exclui os dados do jogador na api
  deletar(id) {
    const xhr2 = new XMLHttpRequest();
    const url2 = this.playersUrl + '/' + id;
    xhr2.open('DELETE', url2);
    xhr2.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    xhr2.send(null);
    xhr2.onreadystatechange = verificaAjax;
    function verificaAjax() {
      console.log(xhr2.readyState);
      console.log(xhr2.status);
      if (xhr2.readyState === 4) {
        if (xhr2.status === 204 || xhr2.status === 201 || xhr2.status === 304) {
          location.reload();
        console.log(xhr2.responseText);
        let resposta = xhr2.responseText;
        resposta = JSON.parse(resposta);

        console.log(resposta);
        } else {
            console.log('deu ruim na resposta');
            console.log(xhr2);
        }
      }
    }
  }


  // Metódo que realiza a atualização dos dados de partidas e vitórias na api
  AddPartidaVitoria(nome , vic , partida, id) {
    const xhr2 = new XMLHttpRequest();
    const url2 = this.playersUrl + '/' + + id;
    xhr2.open('PUT', url2);
    xhr2.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    xhr2.send(JSON.stringify({'nome': nome, 'qtdVitorias': vic, 'qtdPartidas': partida}));
    xhr2.onreadystatechange = verificaAjax;
    function verificaAjax() {
      console.log(xhr2.readyState);
      console.log(xhr2.status);
      if (xhr2.readyState === 4) {
        if (xhr2.status === 204 || xhr2.status === 201 || xhr2.status === 304) {
        console.log(xhr2.responseText);
        location.reload();
        let resposta = xhr2.responseText;
        resposta = JSON.parse(resposta);
        console.log(resposta);
        } else {
            console.log('deu ruim na resposta');
            console.log(xhr2);

        }
      }
    }
  }

}
