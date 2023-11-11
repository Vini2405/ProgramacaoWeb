import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice-seguro',
  templateUrl: './apolice-seguro.component.html',
  styleUrls: ['./apolice-seguro.component.css']
})
export class ApoliceSeguroComponent {
  nome: string = '';
  sexo: string = '';
  idade: number = 0;
  valor: number = 0;
  apolice: number = 0;
  click: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  calcular_apolice(){
    this.click = true;

    if (this.sexo == 'Masculino' && this.idade <= 25){
      this.apolice = (this.valor * 15) / 100;
      this.valor += this.apolice;
    }
    else if (this.sexo == 'Masculino' && this.idade > 25){
      this.apolice = (this.valor * 10) / 100;
      this.valor += this.apolice;
    }
    else if (this.sexo == 'Feminino'){
      this.apolice = (this.valor * 8) / 100;
      this.valor += this.apolice;
    }
  }
}
