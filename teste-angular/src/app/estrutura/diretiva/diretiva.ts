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

  pessoas = ['123 - Thiago - Ativo', '321 - Kristian - Ativo', '777 - Gustavo - Inativo']


}
