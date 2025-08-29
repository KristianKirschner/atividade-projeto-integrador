import { Component } from '@angular/core';
import { bufferToggle, reduce } from 'rxjs';

@Component({
  selector: 'app-estoque',
  standalone: false,
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque {
produtos = [
  {nome: 'Notebook', preco: 3500, estoque: 5},
  {nome: 'Teclado', preco: 150, estoque: 0},
  {nome: 'Monitor', preco: 1200, estoque: 3},
  {nome: 'Mouse', preco: 80, estoque: 10},
  {nome: 'Cadeira Gamer', preco: 900, estoque: 2},
  {nome: 'Fone de Ouvido', preco: 300, estoque: 15},
  {nome: 'Impressora', preco: 700, estoque: 0},
  {nome: 'Tablet', preco: 1500, estoque: 3},
  {nome: 'Roteador', preco: 180, estoque: 7},
  {nome: 'Placa de Vídeo', preco: 2500, estoque: 0},
];

  disponivel(valor:number){
    if (valor > 0){
      return true
    } else {
      return false
    }
  }

  aumentar10(){
    for (let produto of this.produtos){
      produto.preco *= 1.1;
    }
  }

  maior2000(valor:number){
    if (valor > 2000){
      return 'blue'
    } else {
      return 'black'
    }
  }

  diminuir10(){
    for (let produto of this.produtos){
      produto.preco *= 0.9;
    }
  }

}
