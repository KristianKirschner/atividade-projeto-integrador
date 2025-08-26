import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {
  mostrarMensagem = true

  toggleMensagem(){
    this.mostrarMensagem = !this.mostrarMensagem
  }

  tamanhoFonte = 16;

  aumentarFonte(){
    this.tamanhoFonte += 5;
  }

  diminuirFonte(){
    this.tamanhoFonte -= 5;
  }

  pessoas = [
    { id: '123', nome: 'Thiago',  ativo: true },
    { id: '321', nome: 'Kristian', ativo: true },
    { id: '777', nome: 'Gustavo', ativo: false }
  ];

  estaAtivoTexto(teste:boolean){
    if (teste == true){
      return 'Ativo'
    } else{
      return 'Inativo'
    }
  }

}
