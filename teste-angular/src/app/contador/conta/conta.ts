import { Component } from '@angular/core';

@Component({
  selector: 'app-conta',
  standalone: false,
  templateUrl: './conta.html',
  styleUrl: './conta.css'
})
export class Conta {
  valor = 0;
  subtrair() {
    this.valor -= 1;
  }
  adicionar(){
    this.valor += 1;
  }
}


