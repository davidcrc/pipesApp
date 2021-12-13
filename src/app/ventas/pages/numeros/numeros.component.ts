import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [],
})
export class NumerosComponent implements OnInit {
  ventasNetas: number = 554481544.176915;
  procentaje: number = 0.69;

  constructor() {}

  ngOnInit(): void {}
}
