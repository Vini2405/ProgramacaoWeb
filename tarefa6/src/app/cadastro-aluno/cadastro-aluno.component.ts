import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent {
  ra: string = '';
  nome: string = '';
  email: string = '';
  celular: string = '';
  cadastro: boolean = true;
  click: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  cadastrar(){
    this.click = true;

    if(this.ra == '' || this.nome == '' || this.email == '' || this.celular == '') this.cadastro = false;
    else this.cadastro = true;
  }
}
