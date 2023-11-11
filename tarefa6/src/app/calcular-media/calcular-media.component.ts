import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrls: ['./calcular-media.component.css']
})
export class CalcularMediaComponent {
  ac1: number = 0;
  ac2: number = 0;
  ag: number = 0;
  af: number = 0;
  media: number = 0;
  aprovacao: boolean = true;
  click: boolean = false;
  
  constructor() {}

  ngOnInit(): void {}

  calcular_media() {
    this.click = true;
    this.media = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);
    this.media = parseFloat(this.media.toFixed(2))

    if (this.media >= 5) this.aprovacao = true;
    else this.aprovacao = false;
  }
}