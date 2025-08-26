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
    { id: '123', nome: 'Thiago',   ativo: true  },
    { id: '321', nome: 'Kristian', ativo: true  },
    { id: '777', nome: 'Gustavo',  ativo: false },
    { id: '888', nome: 'Natália',  ativo: true  },
    { id: '999', nome: 'Bruna',    ativo: false },
    { id: '456', nome: 'Lucas',    ativo: true  },
    { id: '654', nome: 'Mariana',  ativo: false },
    { id: '111', nome: 'Fernanda', ativo: true  },
    { id: '222', nome: 'João',     ativo: false },
    { id: '333', nome: 'Camila',   ativo: true  },
    { id: '444', nome: 'André',    ativo: false },
    { id: '555', nome: 'Paula',    ativo: true  },
    { id: '666', nome: 'Ricardo',  ativo: false },
    { id: '101', nome: 'Sofia',    ativo: true  },
    { id: '202', nome: 'Mateus',   ativo: true  },
    { id: '303', nome: 'Juliana',  ativo: false },
    { id: '404', nome: 'Felipe',   ativo: true  },
    { id: '505', nome: 'Carolina', ativo: false },
    { id: '606', nome: 'Pedro',    ativo: true  },
    { id: '707', nome: 'Larissa',  ativo: false },
    { id: '808', nome: 'Eduardo',  ativo: true  },
    { id: '909', nome: 'Isabela',  ativo: false },
    { id: '121', nome: 'Gabriel',  ativo: true  },
    { id: '131', nome: 'Beatriz',  ativo: false },
    { id: '141', nome: 'Marcelo',  ativo: true  },
    { id: '151', nome: 'Carla',    ativo: false }
  ];

  estaAtivoTexto(teste:boolean){
    if (teste == true){
      return 'Ativo'
    } else{
      return 'Inativo'
    }
  }

}
